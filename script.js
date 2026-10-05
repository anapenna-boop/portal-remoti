// BASE DE DATOS DE MANAGERS
const managersData = [
    {
        id: 1,
        name: "Roman Smolgovsky",
        title: "Principal Architect - DARXchange",
        location: "San Francisco Bay Area",
        roles: "Java Developer, .NET Engineer, BI & Data Integration Developer",
        linkedin: "https://www.linkedin.com/in/romansmolgovsky/",
        tags: ["Direct", "Practical", "Technical", "Adaptable", "Engineering"],
        style: "Direct, practical, and focused on genuine technical understanding.",
        values: ["Strong English (C1)", "Adaptability and practical technical knowledge", "Clear and concise communication", "Ability to explain complex concepts simply"],
        interview: "Direct technical questions and practical scenarios. Prioritizes actual technical capability over years of experience.",
        dos: ["Answer questions directly.", "Explain technical decisions using concrete examples.", "Demonstrate adaptability and practical knowledge."],
        watchOuts: ["Overcomplicating simple answers.", "Talking around questions.", "Relying on years of experience instead of demonstrating knowledge."],
        internalNote: ""
    },
    {
        id: 2,
        name: "Quynh Vo",
        title: "Senior Software Engineering Manager / Tech Lead",
        location: "Los Angeles Metropolitan Area",
        roles: ".NET Developer, UI Developer, React Developer",
        linkedin: "https://www.linkedin.com/in/quynh-vo-mba-a5033225/",
        tags: ["Direct", "Practical", "Technical", "Concise", "Engineering"],
        style: "Very direct, practical, and technically focused.",
        values: ["Strong English proficiency", "Concrete technical experience", "Practical problem-solving", "Confidence backed by experience", "Receptiveness to direct feedback"],
        interview: "Direct technical questions focused on real projects and personal contributions. Live coding may be included, depending on the process.",
        dos: ["Prepare specific examples from previous projects.", "Explain individual contributions and technical decisions.", "Be concise and receptive to feedback."],
        watchOuts: ["Generic or excessively long answers.", "Describing projects without explaining personal contributions.", "Taking direct feedback personally."],
        internalNote: ""
    },
    {
        id: 3,
        name: "Anne Dawson",
        title: "Senior Engineering Leader",
        location: "San Francisco Bay Area",
        roles: "SDET Front, SDET Back, SDET Mobile, SDET AI, QA Manager, Junior/Mid Manual QA",
        linkedin: "https://www.linkedin.com/in/annemdawson/",
        tags: ["Structured", "Formal", "Methodical", "Results-Oriented", "QA"],
        style: "Formal, structured, methodical, and results-oriented.",
        values: ["Professionalism and punctuality", "Structured communication", "Concrete examples", "Methodical problem-solving", "Results orientation"],
        interview: "Structured conversations focused on professional experience, previous projects, and practical quality engineering challenges.",
        dos: ["Be punctual and maintain a professional tone.", "Give structured answers with concrete examples.", "Explain your approach and highlight measurable results."],
        watchOuts: ["Rambling or unfocused answers.", "Excessively informal communication.", "Examples without clear outcomes."],
        internalNote: ""
    },
    {
        id: 4,
        name: "David Bigelow",
        title: "Senior Director of Software Engineering",
        location: "Los Angeles",
        roles: "Data Engineer",
        linkedin: "https://www.linkedin.com/in/davidbigelow25/",
        tags: ["Serious", "Concise", "Execution-Focused", "Direct", "Engineering"],
        style: "Serious, strict, concise, and execution-focused.",
        values: ["Speed and accuracy", "Clear communication", "Strong technical execution", "Efficiency"],
        interview: "Concise technical conversations focused on the candidate’s ability to perform the work effectively.",
        dos: ["Answer questions directly.", "Demonstrate competence through practical examples.", "Explain how you deliver accurate results efficiently."],
        watchOuts: ["Unnecessarily long answers.", "Excessive context.", "Lack of precision."],
        internalNote: ""
    },
    {
        id: 5,
        name: "Roja Kamireddy",
        title: "Senior Software Engineering Manager",
        location: "Irvine / Burbank",
        roles: "Full Stack Node/React, .NET Engineers",
        linkedin: "https://www.linkedin.com/in/roja-kamireddy-34649a10/",
        tags: ["Open", "Flexible", "Independent", "Clear Communicator", "Engineering"],
        style: "Open, flexible, and focused on clear communication and independent problem-solving.",
        values: ["C1 English", "Clear communication", "Independence and ownership", "Problem-solving ability", "Flexibility"],
        interview: "Conversational interviews focused on technical experience, practical decision-making, and the ability to work independently.",
        dos: ["Communicate ideas clearly and naturally.", "Demonstrate independent problem-solving.", "Prepare examples of ownership and technical decisions."],
        watchOuts: ["Vague or unnecessarily complicated explanations.", "Difficulty demonstrating independent problem-solving.", "Requiring constant guidance."],
        internalNote: ""
    },
    {
        id: 6,
        name: "Elena Sardarian",
        title: "VP of Finance & Accounting",
        location: "Redondo Beach",
        roles: "Senior Accountant",
        linkedin: "https://www.linkedin.com/in/elena-sardarian/",
        tags: ["Methodical", "Structured", "Approachable", "Context-Oriented", "Finance"],
        style: "Methodical, structured, approachable, and context-oriented.",
        values: ["Professional presentation", "Punctuality", "Structured thinking", "Clear context", "Interpersonal connection"],
        interview: "Conversational and structured. Prefers candidates who explain the big picture before moving into specific details.",
        dos: ["Provide context before discussing technical details.", "Structure answers from general to specific.", "Be punctual and professional.", "Build rapport naturally."],
        watchOuts: ["Jumping into details without providing context.", "Disorganized answers.", "Unprofessional presentation."],
        internalNote: ""
    },
    {
        id: 7,
        name: "Christopher Snyder",
        title: "Senior Vice President of Engineering",
        location: "La Mesa, California (Pacific Time)",
        roles: "",
        linkedin: "https://www.linkedin.com/in/christopherpaulsnyder/",
        tags: ["Conversational", "Approachable", "Results-Oriented", "Relationship-Oriented", "Engineering"],
        style: "Approachable, conversational, and results-oriented.",
        values: ["Professionalism and respect", "Results", "Adaptability", "Interpersonal awareness"],
        interview: "Friendly and conversational, with room for humor and small talk, while maintaining professional expectations.",
        dos: ["Build rapport and engage naturally.", "Demonstrate results through practical examples.", "Communicate professionally and respectfully."],
        watchOuts: ["Disrespectful behavior.", "Careless mistakes.", "Excessively rigid or robotic communication."],
        internalNote: ""
    },
    {
        id: 8,
        name: "Arielle Cerini",
        title: "Director of System Design Engineering",
        location: "East Setauket, New York (Eastern Time)",
        roles: "",
        linkedin: "https://www.linkedin.com/in/arielle-cerini-mfa-phd-66943583/",
        tags: ["Thoughtful", "Visual", "Process-Oriented", "Feedback-Oriented", "Engineering"],
        style: "Thoughtful, visual, team-oriented, and interested in understanding the reasoning behind decisions.",
        values: ["Design mindset", "Ownership", "Openness to feedback", "Process-oriented thinking", "Clear reasoning"],
        interview: "Detailed, process-oriented conversations. Interested in understanding both what candidates have done and why they made particular decisions.",
        dos: ["Explain your thought process and technical decisions.", "Demonstrate ownership.", "Be receptive to feedback.", "Use visual or process-based explanations when useful."],
        watchOuts: ["Providing answers without explaining the reasoning.", "Avoiding ownership.", "Being defensive about feedback."],
        internalNote: ""
    },
    {
        id: 9,
        name: "Sunil Kadari",
        title: "Head of DevOps",
        location: "",
        roles: "",
        linkedin: "",
        tags: ["Fast", "Direct", "Practical", "Concise", "DevOps"],
        style: "Fast, direct, and practical.",
        values: ["Strong English proficiency", "Concise communication", "Efficiency"],
        interview: "Practical and direct, with a preference for getting straight to the point.",
        dos: ["Keep answers short and relevant.", "Communicate technical knowledge clearly.", "Focus on practical experience."],
        watchOuts: ["Excessively detailed explanations.", "Unnecessarily long answers."],
        internalNote: "Responses may sometimes be delayed."
    },
    {
        id: 10,
        name: "Maggie Reddy",
        title: "Hiring Manager",
        location: "",
        roles: "Full-Stack Engineer - Start+",
        linkedin: "",
        tags: ["Open", "Approachable", "Relationship-Oriented", "Team Fit", "Engineering"],
        style: "Open, approachable, and relationship-oriented.",
        values: ["C1 English", "Team fit", "Confidence in professional experience", "Positive interpersonal relationships"],
        interview: "Open and conversational, with an emphasis on professional experience and team fit.",
        dos: ["Be personable and confident.", "Explain previous experience clearly.", "Demonstrate your ability to connect and collaborate with a team."],
        watchOuts: ["Difficulty explaining or demonstrating previous experience.", "Limited engagement during the conversation."],
        internalNote: ""
    },
    {
        id: 11,
        name: "Sonali Karandikar",
        title: "Application Security Manager",
        location: "",
        roles: "",
        linkedin: "",
        tags: ["Technical", "Business-Oriented", "Open", "Senior-Level", "Engineering", "Security"],
        style: "Open, technically rigorous, and business-oriented.",
        values: ["Senior-level technical expertise", "Broad technical understanding", "Business awareness", "Clear goals", "Technical depth", "Responsiveness"],
        interview: "Technical conversations focused on depth of knowledge, business understanding, and the ability to consider different perspectives.",
        dos: ["Demonstrate both technical depth and broad understanding.", "Connect technical decisions to business objectives.", "Communicate clearly and respond promptly.", "Be open to different perspectives."],
        watchOuts: ["Superficial technical explanations.", "Difficulty connecting technical decisions to business needs.", "Inflexibility when discussing alternative approaches."],
        internalNote: ""
    },
    {
        id: 12,
        name: "Josh Staley",
        title: "AI Ops Manager",
        location: "",
        roles: "",
        linkedin: "",
        tags: ["Technical", "Concise", "Direct", "Precise", "AI"],
        style: "Highly technical, concise, and direct.",
        values: ["Technical knowledge", "Precision", "Concise communication"],
        interview: "Direct technical conversations with an emphasis on relevant technical expertise.",
        dos: ["Demonstrate technical knowledge clearly.", "Give precise, direct answers.", "Focus on relevant technical details."],
        watchOuts: ["Unnecessarily long explanations.", "Vague technical answers."],
        internalNote: ""
    },
    {
        id: 13,
        name: "Reza Radmanesh",
        title: "AI Team Lead / Manager",
        location: "",
        roles: "AI Engineers",
        linkedin: "",
        tags: ["Highly Technical", "Direct", "Demanding", "Precise", "AI"],
        style: "Extremely direct and technically demanding.",
        values: ["C1 English", "Strong technical understanding", "Confidence", "Concrete examples", "Intellectual honesty"],
        interview: "Direct technical conversations focused on genuine technical depth, practical experience, and the ability to explain concepts clearly.",
        dos: ["Use concrete examples.", "Be technically precise.", "Demonstrate confidence backed by experience.", "Be transparent when you don’t know something."],
        watchOuts: ["Abstract answers without practical examples.", "Bluffing or exaggerating technical knowledge.", "Unnecessary explanations."],
        internalNote: ""
    },
    {
        id: 14,
        name: "Jan Sevilla",
        title: "Manager, Platform Team",
        location: "",
        roles: "Platform Team",
        linkedin: "",
        tags: ["Fast", "Practical", "Technical", "Experience-Based", "Engineering"],
        style: "Fast, practical, and technically focused.",
        values: ["Practical technical experience", "Efficiency", "Clear communication"],
        interview: "Conversational and experience-based, with an emphasis on real projects and practical technical knowledge rather than formal technical testing.",
        dos: ["Prepare examples of relevant projects.", "Explain your individual contributions.", "Communicate clearly and practically."],
        watchOuts: ["Relying exclusively on theoretical knowledge.", "Failing to demonstrate hands-on experience."],
        internalNote: ""
    },
    {
        id: 15,
        name: "Ron Nagamati",
        title: "VP of Engineering – Final Draft",
        location: "",
        roles: "",
        linkedin: "",
        tags: ["High-Level", "Conversational", "Relationship-Oriented", "Strategic", "Engineering"],
        style: "Relationship-oriented, conversational, and focused on the bigger picture.",
        values: ["Interpersonal connection", "High-level thinking", "Concise communication"],
        interview: "High-level conversations focused on professional experience and broader technical or strategic topics rather than excessive implementation details.",
        dos: ["Build rapport naturally.", "Communicate ideas at a high level.", "Explain the broader context of your experience.", "Keep answers concise."],
        watchOuts: ["Diving into unnecessary technical details.", "Overcomplicating straightforward explanations."],
        internalNote: ""
    },
    {
        id: 16,
        name: "Shrikrushna Garad",
        title: "Engineering Manager",
        location: "",
        roles: "PSL Webification, PSL+",
        linkedin: "",
        tags: ["Practical", "Independent", "Fast", "Ownership-Oriented", "Engineering"],
        style: "Fast, practical, and independence-oriented.",
        values: ["Autonomy", "Practical technical knowledge", "Efficiency", "Independent problem-solving", "Concise communication"],
        interview: "Direct, practical conversations focused on technical experience, problem-solving, and the ability to work independently.",
        dos: ["Give concise, practical answers.", "Explain your individual contributions.", "Demonstrate autonomy and technical ownership.", "Focus on how you solve problems."],
        watchOuts: ["Excessive technical detail when it is not necessary.", "Requiring constant guidance.", "Difficulty demonstrating independent problem-solving."],
        internalNote: "Responses may sometimes be delayed."
    },
    {
        id: 17,
        name: "Nick Rediehs",
        title: "Hiring Manager",
        location: "",
        roles: "",
        linkedin: "",
        tags: ["Open", "Conversational", "Detail-Oriented", "Skills-Focused", "Engineering"],
        style: "Open, approachable, and conversational.",
        values: ["Relevant technical skills", "Attention to detail", "Diverse professional backgrounds"],
        interview: "Open and conversational. Receptive to candidates with different professional backgrounds, provided they demonstrate the required skills.",
        dos: ["Demonstrate relevant technical capabilities.", "Highlight transferable skills and practical experience.", "Provide detailed examples of previous work.", "Communicate naturally."],
        watchOuts: ["Lack of attention to detail.", "Difficulty demonstrating the skills required for the role."],
        internalNote: ""
    }
];

// LÓGICA DE LA APLICACIÓN
const managersGrid = document.getElementById('managersGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Elementos del Modal
const modal = document.getElementById('managerModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Función principal para dibujar las tarjetas
function renderManagers(data) {
    managersGrid.innerHTML = '';
    
    if (data.length === 0) {
        managersGrid.innerHTML = '<p id="no-results">No managers found matching your search.</p>';
        return;
    }

    data.forEach(manager => {
        // Crear las etiquetas de la tarjeta (solo las primeras 4)
        const tagsHtml = manager.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('');
        
        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'manager-card';
        card.innerHTML = `
            <div class="manager-header">
                <h3 class="manager-name">${manager.name}</h3>
                <p class="manager-title">${manager.title || 'Hiring Manager'}</p>
                ${manager.roles ? `<p class="manager-roles">Teams: ${manager.roles}</p>` : ''}
            </div>
            <div class="tags-container">${tagsHtml}</div>
            <button class="view-insights-btn" onclick="openModal(${manager.id})">View Insights &rarr;</button>
        `;
        managersGrid.appendChild(card);
    });
}

// Lógica del Buscador
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    // Quitar la selección de los botones de filtro si el usuario busca manualmente
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="All"]').classList.add('active');

    const filtered = managersData.filter(m => {
        return m.name.toLowerCase().includes(term) || 
               (m.title && m.title.toLowerCase().includes(term)) ||
               (m.roles && m.roles.toLowerCase().includes(term)) ||
               m.tags.some(tag => tag.toLowerCase().includes(term));
    });
    
    renderManagers(filtered);
});

// Lógica de los Botones de Filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Actualizar diseño del botón activo
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        searchInput.value = ''; // Limpiar buscador

        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'All') {
            renderManagers(managersData);
        } else {
            const filtered = managersData.filter(m => m.tags.includes(filterValue));
            renderManagers(filtered);
        }
    });
});

// Función para abrir la ventana modal
window.openModal = function(id) {
    const manager = managersData.find(m => m.id === id);
    if (!manager) return;

    // Llenar Cabecera
    document.getElementById('modalName').textContent = manager.name;
    document.getElementById('modalTitle').textContent = manager.title || 'Hiring Manager';
    
    let metaText = '';
    if (manager.location) metaText += manager.location;
    if (manager.location && manager.roles) metaText += ' • ';
    if (manager.roles) metaText += `Teams: ${manager.roles}`;
    document.getElementById('modalMeta').textContent = metaText;

    // Llenar Tags
    document.getElementById('modalTags').innerHTML = manager.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Llenar LinkedIn
    const linkedinContainer = document.getElementById('modalLinkedinContainer');
    if (manager.linkedin) {
        linkedinContainer.innerHTML = `<a href="${manager.linkedin}" target="_blank" class="linkedin-btn">View LinkedIn Profile</a>`;
    } else {
        linkedinContainer.innerHTML = '';
    }

    // Llenar Columnas
    document.getElementById('modalStyle').textContent = manager.style;
    document.getElementById('modalValues').innerHTML = manager.values.map(v => `<li>${v}</li>`).join('');
    document.getElementById('modalInterview').textContent = manager.interview;
    document.getElementById('modalDos').innerHTML = manager.dos.map(d => `<li>${d}</li>`).join('');
    document.getElementById('modalWatchOuts').innerHTML = manager.watchOuts.map(w => `<li>${w}</li>`).join('');
    
    // Nota Interna
    const noteContainer = document.getElementById('modalInternalNoteContainer');
    if (manager.internalNote) {
        noteContainer.innerHTML = `<div class="internal-note"><strong>Internal Note:</strong> ${manager.internalNote}</div>`;
    } else {
        noteContainer.innerHTML = '';
    }

    // Mostrar el modal
    modal.classList.add('active');
}

// Función para cerrar la ventana modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Cerrar modal al hacer clic fuera del cuadro blanco
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Dibujar todas las tarjetas la primera vez que carga la página
renderManagers(managersData);
