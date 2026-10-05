const jobsData = [
    {
        id: "java-developer",
        title: "Java Developer",
        seniority: "Senior",
        manager: "Roman Smolgovsky",
        salary: "USD 5,800/month (Up to USD 6,000 for exceptional profiles)",
        department: "Engineering",
        about: "Backend engineering role focused on building and maintaining scalable Java applications for business-critical systems.",
        mustHaves: ["Java", "SQL", "Concurrency", "Idempotency", "Kafka", "AWS Messaging", "Infrastructure knowledge"],
        responsibilities: [
            "Design, develop, and maintain scalable Java backend services.",
            "Build REST APIs and microservices.",
            "Work with distributed and high-traffic systems.",
            "Optimize SQL queries and database performance.",
            "Troubleshoot production issues and implement long-term solutions.",
            "Participate in architecture and technical design discussions."
        ],
        toolsRelevant: ["REST APIs", "Microservices", "Relational Databases", "Distributed Systems", "OOP", "Git", "Debugging"],
        toolsNice: ["Spring Boot", "Redis", "Docker", "Kubernetes", "CI/CD", "Monitoring / Observability"],
        recruiterNote: "Do not screen strictly by years of experience. Roman prioritizes actual technical knowledge.",
        stages: [
            {
                name: "Skill Panel",
                subtitle: "Technical Assessment",
                hasPrep: true,
                duration: "", platform: "", format: "", setup: "",
                expect: "This assessment focuses on reading, understanding, and reasoning about real-world Java backend code.",
                prepare: [
                    "Java Fundamentals: Generics, collections, iterators, serialization, and core Java concepts.",
                    "Spring & Spring Boot: Application contexts, bean management, dependency injection, and application structure."
                ],
                recommendations: "Focus on understanding code rather than memorizing definitions.",
                internalNote: ""
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Pair programming / live coding",
                setup: "Before the interview: Please have Java installed and configured, along with an IDE of your preference.",
                expect: "You will work alongside the interviewer to solve a practical Java coding exercise.",
                prepare: [
                    "Review collections, Streams, lambdas, CompletableFuture, and concurrent operations.",
                    "Practice writing clean, readable code using appropriate data structures and clear naming."
                ],
                recommendations: "Clarify requirements before coding and explain your reasoning throughout the exercise.",
                internalNote: ""
            },
            {
                name: "Roman Smolgovsky",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical and experience-based interview", setup: "",
                expect: "A technical conversation focused on your Java backend experience, practical knowledge, and ability to explain architectural decisions.",
                prepare: [
                    "Java & Backend: Review Java fundamentals, REST APIs, Spring Boot, and backend service design."
                ],
                recommendations: "Roman values direct communication and genuine technical understanding.",
                internalNote: ""
            }
        ]
    }
];

const jobsGrid = document.getElementById('jobsGrid');
const searchInput = document.getElementById('jobSearchInput');
const filterBtns = document.querySelectorAll('#jobFiltersContainer .filter-btn');
const dirSection = document.getElementById('jobsDirectorySection');
const detailSection = document.getElementById('jobDetailSection');
const detailContent = document.getElementById('jobDetailContent');
const modal = document.getElementById('prepModal');

function renderJobsGrid(data) {
    if(!jobsGrid) return;
    jobsGrid.innerHTML = '';
    if (data.length === 0) {
        jobsGrid.innerHTML = '<p style="text-align: center; width: 100%; color: #888; padding: 20px;">No jobs found matching your criteria.</p>';
        return;
    }
    data.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p class="job-meta"><strong>Seniority:</strong> ${job.seniority} <br><strong>Manager:</strong> ${job.manager}</p>
            <p>${job.about}</p>
            <button class="primary-btn" onclick="showJobDetail('${job.id}')">View Details & Process &rarr;</button>
        `;
        jobsGrid.appendChild(card);
    });
}

if(searchInput) {
    searchInput.addEventListener('input', applyFilters);
}

if(filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            searchInput.value = '';
            applyFilters();
        });
    });
}

function applyFilters() {
    const term = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('#jobFiltersContainer .filter-btn.active').getAttribute('data-filter');

    const filtered = jobsData.filter(job => {
        const matchesTerm = job.title.toLowerCase().includes(term) || job.manager.toLowerCase().includes(term) || job.mustHaves.some(m => m.toLowerCase().includes(term));
        let matchesFilter = true;
        if (activeFilter !== 'All') {
            if (activeFilter === 'Engineering' || activeFilter === 'QA') { matchesFilter = job.department === activeFilter; } 
            else { matchesFilter = job.seniority.includes(activeFilter) || job.title.includes(activeFilter); }
        }
        return matchesTerm && matchesFilter;
    });
    renderJobsGrid(filtered);
}

window.showJobDetail = function(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;

    const mustHavesTags = job.mustHaves.map(m => `<span class="tag">${m}</span>`).join('');
    
    let timelineHtml = '<div class="timeline-container">';
    job.stages.forEach((stage, index) => {
        const stepNum = String(index + 1).padStart(2, '0');
        let btnHtml = stage.hasPrep ? `<button class="prep-btn" onclick="openPrepModal('${job.id}', ${index})">View Prep &rarr;</button>` : `<span class="prep-btn disabled">${stage.expect || 'Prep TBD'}</span>`;

        timelineHtml += `
            <div class="timeline-step">
                <span class="step-number">${stepNum}</span>
                <p class="step-name">${stage.name}</p>
                ${stage.duration || stage.platform ? `<p class="step-meta">${stage.duration ? stage.duration : ''}${stage.duration && stage.platform ? ' &middot; ' : ''}${stage.platform ? stage.platform : ''}</p>` : ''}
                ${stage.format ? `<p class="step-meta"><strong>${stage.format}</strong></p>` : ''}
                ${btnHtml}
            </div>
        `;
        if (index < job.stages.length - 1) { timelineHtml += `<div class="timeline-arrow">&rarr;</div>`; }
    });
    timelineHtml += '</div>';

    detailContent.innerHTML = `
        <div class="job-header">
            <h2>${job.title}</h2>
            <div class="job-header-meta">
                <span><strong>Seniority:</strong> ${job.seniority}</span>
                <span><strong>Hiring Manager:</strong> ${job.manager}</span>
                <span><strong>Salary:</strong> ${job.salary}</span>
            </div>
        </div>

        <div class="detail-section">
            <h3>About the Role</h3>
            <p>${job.about}</p>
        </div>

        <div class="detail-section">
            <h3>Must-Haves (Verified)</h3>
            <div class="tags-container" style="justify-content: flex-start;">${mustHavesTags}</div>
        </div>

        <div class="detail-section">
            <h3>Responsibilities</h3>
            <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>

        <div class="detail-section">
            <h3>Additional Tools & Knowledge</h3>
            <p><strong>Relevant:</strong> ${job.toolsRelevant.join(', ')}</p>
            ${job.toolsNice && job.toolsNice.length > 0 ? `<p><strong>Nice to Have:</strong> ${job.toolsNice.join(', ')}</p>` : ''}
        </div>

        ${job.recruiterNote ? `<div class="internal-note"><h4>Recruiter Note</h4><p>${job.recruiterNote}</p></div>` : ''}

        <div class="detail-section" style="background-color: transparent; box-shadow: none; padding: 0; border-top: none;">
            <h3 style="margin-top: 30px;">Interview Process</h3>
            ${timelineHtml}
        </div>
    `;

    dirSection.classList.add('hidden');
    detailSection.classList.remove('hidden');
    window.scrollTo(0, 0);
};

window.hideJobDetail = function() {
    detailSection.classList.add('hidden');
    dirSection.classList.remove('hidden');
    window.scrollTo(0, 0);
};

let currentJobForCopy = null;
let currentStageForCopy = null;

window.openPrepModal = function(jobId, stageIndex) {
    const job = jobsData.find(j => j.id === jobId);
    const stage = job.stages[stageIndex];
    currentJobForCopy = job; currentStageForCopy = stage;

    document.getElementById('modalPrepTitle').textContent = `${job.title} — ${stage.name}`;
    
    const dDur = document.getElementById('modalPrepDuration');
    if (stage.duration) { dDur.classList.remove('hidden'); dDur.querySelector('span').textContent = stage.duration; } else { dDur.classList.add('hidden'); }
    
    const dPlat = document.getElementById('modalPrepPlatform');
    if (stage.platform) { dPlat.classList.remove('hidden'); dPlat.querySelector('span').textContent = stage.platform; } else { dPlat.classList.add('hidden'); }
    
    const dForm = document.getElementById('modalPrepFormat');
    if (stage.format) { dForm.classList.remove('hidden'); dForm.querySelector('span').textContent = stage.format; } else { dForm.classList.add('hidden'); }

    let bodyHtml = '';
    if (stage.setup) bodyHtml += `<div class="danger-box"><h4>⚠️ Required Setup</h4><p>${stage.setup}</p></div>`;
    if (stage.expect) bodyHtml += `<h4>What to Expect</h4><p>${stage.expect}</p>`;
    if (stage.prepare && stage.prepare.length > 0) bodyHtml += `<h4>How to Prepare</h4><ul>${stage.prepare.map(p => `<li>${p}</li>`).join('')}</ul>`;
    if (stage.recommendations) bodyHtml += `<h4>Key Recommendations</h4><p>${stage.recommendations}</p>`;
    if (stage.internalNote) bodyHtml += `<div class="internal-note" style="margin-top: 30px;"><h4>Internal Recruiter Note — Do Not Send</h4><p>${stage.internalNote}</p></div>`;

    document.getElementById('modalPrepBody').innerHTML = bodyHtml;
    modal.classList.add('active');
};

window.closePrepModal = function() { modal.classList.remove('active'); };

if(document.getElementById('copyPrepBtn')){
    document.getElementById('copyPrepBtn').addEventListener('click', () => {
        if (!currentJobForCopy || !currentStageForCopy) return;

        let html = `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">`;
        html += `<h2 style="color: #052446; border-bottom: 2px solid #E6F1FF; padding-bottom: 8px;">Interview Preparation: ${currentJobForCopy.title} — ${currentStageForCopy.name}</h2>`;
        
        if (currentStageForCopy.duration || currentStageForCopy.platform || currentStageForCopy.format) {
            html += `<ul>`;
            if (currentStageForCopy.duration) html += `<li><strong>Duration:</strong> ${currentStageForCopy.duration}</li>`;
            if (currentStageForCopy.platform) html += `<li><strong>Platform:</strong> ${currentStageForCopy.platform}</li>`;
            if (currentStageForCopy.format) html += `<li><strong>Format:</strong> ${currentStageForCopy.format}</li>`;
            html += `</ul>`;
        }
        
        if (currentStageForCopy.setup) { html += `<h3 style="color: #D73535;">⚠️ Required Setup</h3><p>${currentStageForCopy.setup}</p>`; }
        if (currentStageForCopy.expect) { html += `<h3 style="color: #3543D7;">What to Expect</h3><p>${currentStageForCopy.expect}</p>`; }
        if (currentStageForCopy.prepare && currentStageForCopy.prepare.length > 0) {
            html += `<h3 style="color: #3543D7;">How to Prepare</h3><ul>`;
            currentStageForCopy.prepare.forEach(item => { html += `<li>${item}</li>`; });
            html += `</ul>`;
        }
        if (currentStageForCopy.recommendations) { html += `<h3 style="color: #3543D7;">Key Recommendations</h3><p>${currentStageForCopy.recommendations}</p>`; }
        html += `</div>`;

        const blobHtml = new Blob([html], { type: "text/html" });
        const blobText = new Blob([html.replace(/<[^>]*>?/gm, '')], { type: "text/plain" });

        try {
            const data = [new ClipboardItem({ "text/html": blobHtml, "text/plain": blobText })];
            navigator.clipboard.write(data).then(showToast);
        } catch (err) {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            tempDiv.style.position = "absolute"; tempDiv.style.left = "-9999px";
            document.body.appendChild(tempDiv);
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(tempDiv);
            selection.removeAllRanges(); selection.addRange(range);
            document.execCommand("copy");
            document.body.removeChild(tempDiv);
            showToast();
        }
    });
}

function showToast() {
    const toast = document.getElementById("toast");
    if(toast) {
        toast.classList.add("show");
        setTimeout(() => { toast.classList.remove("show"); }, 3000);
    }
}

// Inicializar si estamos en la página correcta
if(jobsGrid) { renderJobsGrid(jobsData); }
