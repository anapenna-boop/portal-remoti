const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const feedPath = path.join(repoRoot, "activity-feed.json");
const MAX_EVENTS = 30;

function git(command) {
    try {
        return execSync(command, {
            cwd: repoRoot,
            encoding: "utf8",
            stdio: ["ignore", "pipe", "ignore"]
        }).trim();
    } catch {
        return "";
    }
}

function currentCommit() {
    return git("git rev-parse HEAD") || `local-${Date.now()}`;
}

function previousCommit() {
    return git("git rev-parse HEAD^");
}

function currentFile(relativePath) {
    const fullPath = path.join(repoRoot, relativePath);
    return fs.existsSync(fullPath)
        ? fs.readFileSync(fullPath, "utf8")
        : "";
}

function fileAtCommit(commit, relativePath) {
    if (!commit) return "";

    try {
        return execSync(`git show ${commit}:${relativePath}`, {
            cwd: repoRoot,
            encoding: "utf8",
            stdio: ["ignore", "pipe", "ignore"]
        });
    } catch {
        return "";
    }
}

function extractArrayLiteral(source, variableName) {
    const declarationIndex = source.indexOf(`const ${variableName}`);
    if (declarationIndex === -1) return null;

    const start = source.indexOf("[", declarationIndex);
    if (start === -1) return null;

    let depth = 0;
    let quote = null;
    let escaped = false;
    let lineComment = false;
    let blockComment = false;

    for (let i = start; i < source.length; i += 1) {
        const char = source[i];
        const next = source[i + 1];

        if (lineComment) {
            if (char === "\n") lineComment = false;
            continue;
        }

        if (blockComment) {
            if (char === "*" && next === "/") {
                blockComment = false;
                i += 1;
            }
            continue;
        }

        if (quote) {
            if (escaped) {
                escaped = false;
                continue;
            }

            if (char === "\\") {
                escaped = true;
                continue;
            }

            if (char === quote) {
                quote = null;
            }

            continue;
        }

        if (char === "/" && next === "/") {
            lineComment = true;
            i += 1;
            continue;
        }

        if (char === "/" && next === "*") {
            blockComment = true;
            i += 1;
            continue;
        }

        if (char === '"' || char === "'" || char === "`") {
            quote = char;
            continue;
        }

        if (char === "[") depth += 1;

        if (char === "]") {
            depth -= 1;

            if (depth === 0) {
                return source.slice(start, i + 1);
            }
        }
    }

    return null;
}

function parseArray(source, variableName) {
    if (!source) return [];

    const literal = extractArrayLiteral(source, variableName);
    if (!literal) return [];

    try {
        return vm.runInNewContext(`(${literal})`, Object.create(null), {
            timeout: 1000
        });
    } catch (error) {
        console.warn(`Could not parse ${variableName}: ${error.message}`);
        return [];
    }
}

function changedFiles(previous) {
    if (!previous) return [];

    const output = git(`git diff --name-only ${previous} HEAD`);

    return output
        ? output.split("\n").filter(Boolean)
        : [];
}

function formatList(items) {
    if (!items.length) return "";
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;

    return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function compareJobs(previousJobs, currentJobs) {
    const events = [];
    const previousById = new Map(previousJobs.map(job => [job.id, job]));
    const currentById = new Map(currentJobs.map(job => [job.id, job]));

    const added = currentJobs.filter(job => !previousById.has(job.id));
    const removed = previousJobs.filter(job => !currentById.has(job.id));

    if (added.length) {
        events.push({
            category: "Jobs",
            title: added.length === 1
                ? "1 new job was added"
                : `${added.length} new jobs were added`,
            description: `${formatList(added.map(job => job.title))} ${added.length === 1 ? "is" : "are"} now available in the Jobs Directory.`
        });
    }

    if (removed.length) {
        events.push({
            category: "Jobs",
            title: removed.length === 1
                ? "1 job was removed from the active directory"
                : `${removed.length} jobs were removed from the active directory`,
            description: formatList(removed.map(job => job.title))
        });
    }

    const prepAdded = [];
    const questionRoles = [];
    const processRoles = [];

    currentJobs.forEach(currentJob => {
        const previousJob = previousById.get(currentJob.id);
        if (!previousJob) return;

        const oldStages = new Map(
            (previousJob.stages || []).map(stage => [stage.name, stage])
        );

        (currentJob.stages || []).forEach(stage => {
            const oldStage = oldStages.get(stage.name);

            if (
                stage.hasPrep === true &&
                (!oldStage || oldStage.hasPrep !== true)
            ) {
                prepAdded.push({
                    role: currentJob.title,
                    stage: stage.name
                });
            }
        });

        const oldQuestionCount = Array.isArray(previousJob.suggestedQuestions)
            ? previousJob.suggestedQuestions.length
            : 0;

        const newQuestionCount = Array.isArray(currentJob.suggestedQuestions)
            ? currentJob.suggestedQuestions.length
            : 0;

        if (oldQuestionCount === 0 && newQuestionCount > 0) {
            questionRoles.push(currentJob.title);
        }

        const oldProcess = JSON.stringify(
            (previousJob.stages || []).map(stage => stage.name)
        );

        const newProcess = JSON.stringify(
            (currentJob.stages || []).map(stage => stage.name)
        );

        if (oldProcess !== newProcess) {
            processRoles.push(currentJob.title);
        }
    });

    if (prepAdded.length === 1) {
        events.push({
            category: "Interview Prep",
            title: `${prepAdded[0].role} ${prepAdded[0].stage} prep is now available`,
            description: "A new candidate-ready interview preparation guide was added."
        });
    } else if (prepAdded.length > 1) {
        events.push({
            category: "Interview Prep",
            title: `${prepAdded.length} new interview preps are now available`,
            description: formatList(
                prepAdded.map(item => `${item.role} — ${item.stage}`)
            )
        });
    }

    if (questionRoles.length === 1) {
        events.push({
            category: "Recruiting Resources",
            title: `Suggested screening questions added for ${questionRoles[0]}`,
            description: "Recruiters can now review key concepts to listen for in candidate answers."
        });
    } else if (questionRoles.length > 1) {
        events.push({
            category: "Recruiting Resources",
            title: `Suggested screening questions added for ${questionRoles.length} technical roles`,
            description: formatList(questionRoles)
        });
    }

    if (processRoles.length === 1) {
        events.push({
            category: "Process",
            title: `Interview process updated for ${processRoles[0]}`,
            description: "The confirmed interview stages shown in the Jobs Directory were updated."
        });
    } else if (processRoles.length > 1) {
        events.push({
            category: "Process",
            title: `Interview processes updated for ${processRoles.length} roles`,
            description: formatList(processRoles)
        });
    }

    return events;
}

function compareManagers(previousManagers, currentManagers) {
    if (!previousManagers.length || !currentManagers.length) return [];

    const previousByName = new Map(
        previousManagers.map(manager => [manager.name, manager])
    );

    const added = currentManagers.filter(
        manager => !previousByName.has(manager.name)
    );

    const changed = currentManagers.filter(manager => {
        const previous = previousByName.get(manager.name);

        return previous &&
            JSON.stringify(previous) !== JSON.stringify(manager);
    });

    const events = [];

    if (added.length === 1) {
        events.push({
            category: "Manager Insights",
            title: `New manager insight added: ${added[0].name}`,
            description: "A new hiring manager profile is now available."
        });
    } else if (added.length > 1) {
        events.push({
            category: "Manager Insights",
            title: `${added.length} new manager insights were added`,
            description: formatList(added.map(manager => manager.name))
        });
    }

    if (changed.length === 1) {
        events.push({
            category: "Manager Insights",
            title: `Manager insight updated: ${changed[0].name}`,
            description: "Interview guidance for this manager was refreshed."
        });
    } else if (changed.length > 1) {
        events.push({
            category: "Manager Insights",
            title: `${changed.length} manager insights were updated`,
            description: formatList(changed.map(manager => manager.name))
        });
    }

    return events;
}

function existingFeed() {
    try {
        return JSON.parse(fs.readFileSync(feedPath, "utf8"));
    } catch {
        return [];
    }
}

function main() {
    const current = currentCommit();
    const previous = previousCommit();
    const feed = existingFeed();

    if (feed.some(event => event.commit === current)) {
        console.log("Feed already contains events for this commit.");
        return;
    }

    const files = changedFiles(previous);
    const rawEvents = [];

    if (files.includes("jobs.js")) {
        const oldJobsSource = fileAtCommit(previous, "jobs.js");
        const newJobsSource = currentFile("jobs.js");

        rawEvents.push(
            ...compareJobs(
                parseArray(oldJobsSource, "jobsData"),
                parseArray(newJobsSource, "jobsData")
            )
        );

        if (
            !oldJobsSource.includes("copyJobDescription") &&
            newJobsSource.includes("copyJobDescription")
        ) {
            rawEvents.push({
                category: "Recruiting Resources",
                title: "Job descriptions can now be copied directly from the portal",
                description: "Each job detail page includes a candidate-facing Copy Job Description action."
            });
        }
    }

    if (
        files.includes("script.js") ||
        files.includes("managers.html")
    ) {
        rawEvents.push(
            ...compareManagers(
                parseArray(fileAtCommit(previous, "script.js"), "managersData"),
                parseArray(currentFile("script.js"), "managersData")
            )
        );
    }

    if (files.includes("info.html")) {
        rawEvents.push({
            category: "Client Info",
            title: "Cast & Crew client information was updated",
            description: "The client overview or ecosystem guidance in the Knowledge Hub was refreshed."
        });
    }

    if (!rawEvents.length) {
        console.log("No recruiter-relevant activity was detected.");
        return;
    }

    const timestamp = new Date().toISOString();

    const newEvents = rawEvents.map((event, index) => ({
        id: `${current.slice(0, 10)}-${index + 1}`,
        timestamp,
        category: event.category,
        title: event.title,
        description: event.description,
        commit: current
    }));

    const updated = [
        ...newEvents,
        ...feed
    ]
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, MAX_EVENTS);

    fs.writeFileSync(
        feedPath,
        `${JSON.stringify(updated, null, 2)}\n`,
        "utf8"
    );

    console.log(`Added ${newEvents.length} recruiting feed event(s).`);
}

main();
