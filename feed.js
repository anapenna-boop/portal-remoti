const ACTIVITY_FEED_URL = "activity-feed.json";

const activityFeedContainer = document.getElementById("activityFeed");
const activityFeedLastUpdated = document.getElementById("activityFeedLastUpdated");

const categoryClassMap = {
    "Jobs": "feed-category-jobs",
    "Interview Prep": "feed-category-prep",
    "Recruiting Resources": "feed-category-resources",
    "Process": "feed-category-process",
    "Manager Insights": "feed-category-managers",
    "Client Info": "feed-category-client",
    "Candidates": "feed-category-candidates"
};

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatFeedDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / 86400000);

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined
    }).format(date);
}

function formatFeedTime(timestamp) {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit"
    }).format(new Date(timestamp));
}

function renderActivityFeed(events) {
    if (!activityFeedContainer) return;

    const sortedEvents = Array.isArray(events)
        ? [...events]
            .filter(event => event && event.timestamp && event.title)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, 8)
        : [];

    if (!sortedEvents.length) {
        activityFeedContainer.innerHTML = '<div class="feed-empty">No recruiting updates have been recorded yet.</div>';
        return;
    }

    const groups = [];
    const groupMap = new Map();

    sortedEvents.forEach(event => {
        const label = formatFeedDate(event.timestamp);

        if (!groupMap.has(label)) {
            const group = { label, events: [] };
            groupMap.set(label, group);
            groups.push(group);
        }

        groupMap.get(label).events.push(event);
    });

    activityFeedContainer.innerHTML = groups.map(group => `
        <div class="feed-group">
            <div class="feed-date">${escapeHtml(group.label)}</div>
            <div class="feed-group-items">
                ${group.events.map(event => {
                    const category = event.category || "Update";
                    const categoryClass = categoryClassMap[category] || "feed-category-default";

                    return `
                        <article class="feed-item">
                            <div class="feed-item-topline">
                                <span class="feed-category ${categoryClass}">
                                    ${escapeHtml(category)}
                                </span>
                                <span class="feed-time">
                                    ${escapeHtml(formatFeedTime(event.timestamp))}
                                </span>
                            </div>
                            <h4>${escapeHtml(event.title)}</h4>
                            ${event.description ? `<p>${escapeHtml(event.description)}</p>` : ""}
                        </article>
                    `;
                }).join("")}
            </div>
        </div>
    `).join("");

    if (activityFeedLastUpdated) {
        activityFeedLastUpdated.textContent = new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        }).format(new Date(sortedEvents[0].timestamp));
    }
}

async function loadActivityFeed() {
    if (!activityFeedContainer) return;

    try {
        const response = await fetch(
            `${ACTIVITY_FEED_URL}?v=${Date.now()}`,
            { cache: "no-store" }
        );

        if (!response.ok) {
            throw new Error(`Feed request failed with status ${response.status}`);
        }

        renderActivityFeed(await response.json());
    } catch (error) {
        activityFeedContainer.innerHTML = '<div class="feed-empty">The recruiting feed could not be loaded right now.</div>';
        console.error("Unable to load activity feed:", error);
    }
}

loadActivityFeed();
