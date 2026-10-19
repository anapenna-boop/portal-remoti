// BASE DE DATOS COMPLETA DE TRABAJOS Y ENTREVISTAS (CONFIDENCIAL: SIN SALARIOS)
const jobsData = [
    {
        id: "java-developer",
        title: "Java Developer",
        seniority: "Senior",
        manager: "Roman Smolgovsky",
        department: "Engineering",
        about: "Backend engineering role focused on building and maintaining scalable Java applications for business-critical systems. The engineer works with distributed applications, APIs, databases, production infrastructure, reliability, scalability, and performance.",
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
        recruiterNote: "Do not screen strictly by years of experience. Although the original JD mentions 5+ years, Roman prioritizes actual technical knowledge and the candidate’s ability to clearly explain what they know and have done.",
        stages: [
            {
                name: "Skill Panel",
                subtitle: "Technical Assessment",
                hasPrep: true,
                duration: "", platform: "", format: "", setup: "",
                expect: "This assessment focuses on reading, understanding, and reasoning about real-world Java backend code. Expect code snippets, SQL questions, and practical scenarios where you may need to identify issues, explain existing functionality, or suggest improvements.",
                prepare: [
                    "Java Fundamentals: Generics, collections, iterators, serialization, and core Java concepts.",
                    "Spring & Spring Boot: Application contexts, bean management, dependency injection, and application structure.",
                    "Backend Development: REST APIs, controllers, services, business logic, and SQL.",
                    "Codebase Analysis: Understanding existing code, identifying established patterns, and implementing new requirements.",
                    "Testing & Code Quality: Running existing tests, handling edge cases, and writing maintainable code."
                ],
                recommendations: "Focus on understanding code rather than memorizing definitions. Practice analyzing unfamiliar applications, explaining how components interact, and identifying potential improvements while preserving existing functionality.",
                internalNote: ""
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Pair programming / live coding",
                setup: "Before the interview: Please have Java installed and configured, along with an IDE of your preference. Make sure your environment is ready to create, run, and test a Java application without setup issues.",
                expect: "You will work alongside the interviewer to solve a practical Java coding exercise. The focus will be on your problem-solving approach, code structure, handling of edge cases, and ability to explain your technical decisions.",
                prepare: [
                    "Review collections, Streams, lambdas, CompletableFuture, and concurrent operations.",
                    "Review HTTP requests, JSON, status codes, asynchronous calls, and error handling.",
                    "Practice filtering, mapping, grouping, sorting, and aggregation.",
                    "Review data parsing and handling invalid or missing values safely.",
                    "Practice handling empty inputs, null values, failed requests, partial failures, and duplicate data.",
                    "Practice writing clean, readable code using appropriate data structures and clear naming."
                ],
                recommendations: "Clarify requirements before coding and explain your reasoning throughout the exercise. Start with a simple working solution and improve it if time allows. Treat the interview as a collaboration, ask questions when needed, and remain open to feedback. Prioritize a working solution first, then testing and refinement.",
                internalNote: ""
            },
            {
                name: "Roman Smolgovsky",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical and experience-based interview", setup: "",
                expect: "A technical conversation focused on your Java backend experience, practical knowledge, and ability to explain architectural decisions. Expect questions about real projects, production challenges, and technical problem-solving.",
                prepare: [
                    "Java & Backend: Review Java fundamentals, REST APIs, Spring Boot, and backend service design.",
                    "Concurrency & Distributed Systems: Review multithreading, thread safety, scalability, and idempotency.",
                    "Databases & Messaging: Review SQL optimization, Kafka, AWS messaging, and distributed infrastructure.",
                    "Production Experience: Prepare examples of debugging, performance improvements, architecture decisions, and adapting to technical challenges."
                ],
                recommendations: "Roman values direct communication and genuine technical understanding. Be concise, use concrete examples from your experience, and explain the reasoning behind your decisions. Focus on demonstrating what you know and how you have applied it rather than simply listing technologies or years of experience.",
                internalNote: ""
            }
        ]
    },
    {
        id: "dotnet-developer",
        title: ".NET Developer",
        seniority: "Senior / Lead",
        manager: "Roman Smolgovsky / Quynh Vo",
        department: "Engineering",
        about: "Senior backend engineering role focused on building and improving Cast & Crew payroll processing systems using C# and .NET. The engineer works on distributed and event-driven applications and owns features from design through deployment and maintenance.",
        mustHaves: ["C# / .NET", "SQL", "Concurrency", "Idempotency", "Kafka", "AWS Messaging", "Infrastructure knowledge"],
        responsibilities: [
            "Build and enhance payroll processing applications using C# and .NET.",
            "Own features end-to-end.",
            "Design event-driven and distributed systems using Kafka and .NET.",
            "Build scalable backend services and REST APIs.",
            "Collaborate with QA, Product, Business Analysts, and Engineering.",
            "Contribute to technical architecture and evaluate new technologies."
        ],
        toolsRelevant: ["REST APIs", "Relational Databases", "Distributed Systems", "Event-Driven Architecture", "OOP", "System Design", "Design Patterns", "Data Structures & Algorithms"],
        toolsNice: ["PostgreSQL", "Kubernetes", "Microservices", "Agile / SCRUM", "SaaS", "Payroll / Financial Systems"],
        recruiterNote: "Do not treat every qualification in the original JD as a hard requirement. The verified screening priorities are strong C#/.NET experience, SQL, concurrency, idempotency, Kafka, AWS messaging, and infrastructure knowledge. For Roman, technical knowledge is more important than screening solely by years of experience.",
        stages: [
            {
                name: "Skill Panel",
                hasPrep: true,
                duration: "", platform: "", format: "", setup: "",
                expect: "This assessment focuses on reading and reasoning about real-world .NET backend code. Expect short code snippets, SQL questions, and production scenarios where you may need to explain existing functionality, identify potential issues, and suggest improvements.",
                prepare: [
                    "C# & .NET Fundamentals: Core language concepts, collections, expressions, and application execution.",
                    "Backend & API Development: RESTful APIs, HTTP responses, controllers, dependency management, and database operations.",
                    "Microservices & Distributed Systems: Service communication, scalability, service boundaries, and data ownership.",
                    "Messaging & Event-Driven Architecture: Asynchronous communication, publishing events, subscriptions, and messaging patterns.",
                    "Backend Engineering: Dependency injection, service lifetimes, database access, reliability, and distributed consistency."
                ],
                recommendations: "Practice reading unfamiliar code and explaining how its components interact. Focus on identifying problems, reasoning through practical scenarios, and proposing maintainable solutions.",
                internalNote: ""
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Pair programming / live coding",
                setup: "Before the interview: Please have the .NET SDK installed and configured, along with an IDE of your preference. Make sure your environment is ready to create, run, and test a .NET application without setup issues.",
                expect: "You will code alongside the interviewer while explaining your reasoning and approach. The assessment focuses on problem-solving, code structure, handling edge cases, and your ability to collaborate.",
                prepare: [
                    "C# & .NET Fundamentals: Collections, LINQ, async/await, Tasks, and concurrent operations.",
                    "API Integration: HTTP requests, JSON, status codes, asynchronous calls, and error handling.",
                    "Data Manipulation: Filtering, mapping, grouping, sorting, and aggregation using LINQ.",
                    "Edge Cases: Null values, empty inputs, failed requests, partial failures, and duplicate data.",
                    "Code Quality: Clean, readable, and testable code."
                ],
                recommendations: "Clarify requirements before coding and explain your reasoning throughout the exercise. Start with a simple working solution and use remaining time for testing and improvement. Ask questions when needed and remain open to feedback.",
                internalNote: ""
            },
            {
                name: "Roman / Quynh",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical and experience-based interview", setup: "",
                expect: "A technical conversation focused on your .NET experience, practical knowledge, and problem-solving approach. Expect technical questions and scenarios based on previous projects rather than a formal coding assessment.",
                prepare: [
                    "C# & .NET: Collections, LINQ, async/await, Tasks, concurrency, and error handling.",
                    "Backend Development: REST APIs, JSON, HTTP requests, and asynchronous operations.",
                    "Distributed Systems: Idempotency, Kafka, AWS messaging, and system reliability.",
                    "SQL & Problem-Solving: Database operations, technical decisions, and production challenges.",
                    "Practical Experience: Projects, technical challenges, and adapting to new technologies or requirements."
                ],
                recommendations: "Values clear, direct answers and genuine technical understanding. Use specific examples, avoid unnecessarily complicated explanations, and be transparent when you do not know something.",
                internalNote: ""
            }
        ]
    },
    {
        id: "psl-webification",
        title: "Senior Software Engineer — PSL Webification",
        seniority: "Mid / Senior",
        manager: "Shrikrushna Garad",
        department: "Engineering",
        about: "Full-stack engineering role with a strong frontend focus, working on the modernization of PSL, Cast & Crew’s production accounting platform. The team is transforming legacy desktop workflows into a modern web application using React and .NET, with emphasis on performance, reliability, usability, and preserving existing business behavior.",
        mustHaves: ["React", ".NET / C#", "Performance", "Reliability"],
        responsibilities: [
            "Build and maintain modern web applications using React.",
            "Develop reusable frontend components and complex workflows.",
            "Integrate frontend applications with APIs and .NET backend services.",
            "Debug issues across frontend, API, application, and database layers.",
            "Ensure new functionality is performant and preserves existing PSL behavior.",
            "Collaborate with Product, QA, and Engineering."
        ],
        toolsRelevant: ["TypeScript", "JavaScript", "HTML / CSS", "REST APIs", "ASP.NET MVC / Web API", "MySQL", "Git", "Automated Testing", "Authentication & Authorization"],
        toolsNice: ["ASP.NET Core", "Jest", "React Testing Library", "Cypress", "Playwright", "Redux / Zustand", "CI/CD", "Feature Flags", "Telemetry / Logging", "Legacy Modernization", "Financial / Accounting Systems"],
        recruiterNote: "The verified priorities are React, .NET, performance, and reliability. Although the official title is Senior Software Engineer, the team can consider Mid-to-Senior profiles if they demonstrate the required capability.",
        stages: [
            {
                name: "Shrikrushna Garad",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical Conversation", setup: "",
                expect: "A technical conversation focused on previous experience, software architecture, and problem-solving. Expect questions about React fundamentals, design patterns, application performance, troubleshooting, and familiarity with AI-assisted development tools.",
                prepare: [
                    "React & TypeScript: Components, hooks, state management, and frontend application structure.",
                    "Software Architecture: Design patterns, modular architecture, REST APIs, and C#/.NET.",
                    "Debugging & Performance: Identifying application errors, investigating performance issues, and troubleshooting across the full stack.",
                    "Practical Experience: Previous projects, technical decisions, challenges, and personal contributions.",
                    "AI-Assisted Development: AI coding tools, daily use, benefits, limitations, and workflow integration."
                ],
                recommendations: "Keep answers concise, direct, and practical. Focus on what you personally built and how you approach technical challenges. If you do not know something, explain how you would investigate it.",
                internalNote: ""
            },
            {
                name: "Principal Engineers",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical Assessment / Live Coding", setup: "",
                expect: "An in-depth technical assessment focused on engineering experience, problem-solving, and technical decision-making. Expect practical scenarios, deeper technical questions, and follow-up questions about your reasoning.",
                prepare: [
                    "Software Engineering: SOLID principles, design patterns, dependency injection, and clean architecture.",
                    "Backend Development: C#/.NET, REST APIs, SQL, indexing, database transactions, and API design.",
                    "Performance & Troubleshooting: Investigating slow applications or APIs and identifying root causes.",
                    "Production Experience: Scalability, performance challenges, architectural decisions, and personal contributions.",
                    "AI-Assisted Development: AI coding tools, Prompt Engineering, Context Engineering, and validating AI-generated code."
                ],
                recommendations: "Demonstrate practical engineering knowledge through concrete examples. Explain your thought process and trade-offs before proposing solutions. Be technically precise and transparent about unfamiliar topics.",
                internalNote: ""
            },
            {
                name: "Product Managers",
                hasPrep: true,
                duration: "30 minutes", platform: "Microsoft Teams", format: "Product & Business Conversation", setup: "",
                expect: "A conversation focused on professional experience, previous projects, collaboration, and ability to understand business requirements and translate them into technical solutions.",
                prepare: [
                    "Technical Background: React, TypeScript, C#/.NET, REST APIs, and SQL at a high level.",
                    "Project Experience: Specific contributions, challenges, and results.",
                    "Product & Collaboration: Translating business requirements into technical solutions.",
                    "Problem-Solving: Technical blockers, prioritization, and trade-offs.",
                    "Legacy Modernization: Modernizing applications while preserving functionality."
                ],
                recommendations: "Use clear, concise answers and concrete examples. Demonstrate business understanding, collaboration with non-technical stakeholders, and practical technical decision-making.",
                internalNote: ""
            }
        ]
    },
    {
        id: "platform-fullstack",
        title: "Full Stack Developer — Platform Team",
        seniority: "Mid / Senior",
        manager: "Jan Sevilla",
        department: "Engineering",
        about: "Full-stack role within Cast & Crew’s Platform Team, focused on building a unified technology experience across the company and contributing to shared platform capabilities, scalable services, and architecture.",
        mustHaves: ["Node.js", "React", "Micro-frontends", "REST APIs or GraphQL"],
        responsibilities: [
            "Build scalable frontend and backend applications.",
            "Develop frontend experiences and backend services.",
            "Work with APIs, distributed systems, and cloud infrastructure.",
            "Contribute to architectural decisions.",
            "Collaborate with Engineering, QA, and Product.",
            "Participate in code reviews, troubleshooting, and continuous improvement."
        ],
        toolsRelevant: ["Module Federation", "Event-Driven Architecture", "PostgreSQL / Amazon RDS", "DynamoDB", "AWS", "Distributed Systems"],
        toolsNice: ["Design Systems", "Shared Component Libraries"],
        recruiterNote: "The verified screening priorities are Node.js, React, micro-frontends, and API experience with REST or GraphQL. Screen for a true full-stack profile rather than an exclusively frontend or backend engineer.",
        stages: [
            {
                name: "Jan Sevilla",
                hasPrep: true,
                duration: "30 minutes", platform: "Microsoft Teams", format: "Conversational interview with the Hiring Manager", setup: "",
                expect: "A conversation focused on professional experience, technical background, and cultural fit. Jan will also introduce the Platform Team and explain its responsibilities.",
                prepare: [
                    "Professional Experience: Full-stack experience, particularly React and Node.js.",
                    "Project Experience: 1–2 relevant projects, responsibilities, technologies, and achievements.",
                    "Technical Decisions: Examples of problem-solving and adapting to changing requirements.",
                    "Team Collaboration: Working with Engineering, QA, and Product."
                ],
                recommendations: "Keep answers clear, concise, and practical. Focus on individual contributions and real project experience. Prepare questions about the Platform Team and role expectations.",
                internalNote: ""
            },
            {
                name: "Ven or Joshua",
                hasPrep: true,
                duration: "30 minutes", platform: "Microsoft Teams", format: "Technical interview with a Lead Software Developer", setup: "",
                expect: "An in-depth technical conversation focused on engineering experience, architecture, and real-world problems involving scalable platform applications.",
                prepare: [
                    "Frontend: React, Module Federation, micro-frontends, and frontend architecture.",
                    "Backend & APIs: Node.js, REST APIs, GraphQL, and event-driven architecture.",
                    "System Design: Distributed systems, scalability, reliability, and service communication.",
                    "Databases & Cloud: PostgreSQL, Amazon RDS, DynamoDB, and AWS.",
                    "Practical Experience: Technical challenges, architecture decisions, trade-offs, and collaboration."
                ],
                recommendations: "Be specific and technically precise. Explain what you personally built, why you made certain decisions, and the outcomes. Be prepared to go deeper into your strongest technical area while demonstrating full-stack knowledge.",
                internalNote: ""
            }
        ]
    },
    {
        id: "oat-onboarding",
        title: "Full-Stack Software Engineer — OAT Onboarding",
        seniority: "Mid / Senior",
        manager: "Roja Kamireddy",
        department: "Engineering",
        about: "Full-stack role within the OAT Onboarding team, focused on crew-facing onboarding flows, document packages, and company-level configuration tools.",
        mustHaves: ["React", "Node.js", "PostgreSQL"],
        responsibilities: [
            "Build and maintain onboarding workflows end-to-end.",
            "Develop dynamic document packages.",
            "Implement company-level configuration features.",
            "Work across frontend and backend.",
            "Debug production issues.",
            "Collaborate with Product, Design, and Engineering."
        ],
        toolsRelevant: ["TypeScript", "REST APIs", "SQL", "React Hooks", "State Management", "AdonisJS"],
        toolsNice: [".NET — intermediate knowledge", "MobX", "CI/CD", "Automated Testing", "HR Tech / Payroll", "Document Workflows", "Multi-Tenant SaaS", "E-signature / Document Generation"],
        recruiterNote: "The verified priorities are React, Node.js, and PostgreSQL. .NET is preferred but not mandatory. Screen for a genuine full-stack profile rather than frontend-only.",
        stages: [
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams + CodeSandbox", format: "Live coding with two Software Engineers", setup: "",
                expect: "A practical React and JavaScript coding exercise using an existing application in CodeSandbox. You will be asked to understand existing code, implement changes, and explain your approach.",
                prepare: [
                    "React Fundamentals: Functional components, useState, props, event handling, and component communication.",
                    "State Management: Updating and sharing state between components.",
                    "JavaScript: Functions, objects, arrays, conditional logic, and event handling.",
                    "Debugging: Reading existing React code and implementing targeted changes.",
                    "Code Quality: Clean component design, maintainable code, and edge cases."
                ],
                recommendations: "Understand the existing code before making changes. Clarify requirements and explain your reasoning as you code. Prioritize a simple working solution before optimization.",
                internalNote: "The internal CodeSandbox exercise currently uses a simple React application with Red and Blue components, individual counters, and shared state. Do not expose the exact exercise or solution to candidates."
            },
            {
                name: "Roja Kamireddy",
                hasPrep: true,
                duration: "30 minutes", platform: "Microsoft Teams", format: "Conversational interview with the Hiring Manager", setup: "",
                expect: "A conversation focused on technical experience, projects, engineering decisions, problem-solving, collaboration, and ownership.",
                prepare: [
                    "Full-Stack Development: React, TypeScript, Node.js, REST APIs, and PostgreSQL.",
                    "Architecture & Problem-Solving: Frontend architecture, state management, backend integration, and trade-offs.",
                    "Project Experience: Features developed end-to-end and production issues solved.",
                    "Product Knowledge: Configurable SaaS applications and complex user workflows.",
                    "Team Collaboration: Independent problem-solving, ownership, and cross-functional collaboration."
                ],
                recommendations: "Roja values clear communication, flexibility, and independent problem-solving. Use concrete examples and explain your personal contributions and technical decisions.",
                internalNote: ""
            }
        ]
    },
    {
        id: "start-plus",
        title: "Full-Stack Engineer — Start+",
        seniority: "Mid / Senior (3–5 years)",
        manager: "Maggie Reddy",
        department: "Engineering",
        about: "Full-stack role within Start+, focused on building and maintaining the platform across React frontend and .NET backend while reducing single-point-of-failure risk and increasing shared ownership of the codebase.",
        mustHaves: [".NET", "React", "PostgreSQL", "Modular Architecture", "Distributed Systems / Microservices"],
        responsibilities: [
            "Build and maintain Start+ features.",
            "Work across React and .NET.",
            "Develop broad ownership of the existing codebase.",
            "Address technical debt and reliability issues.",
            "Resolve production issues.",
            "Collaborate closely with Engineering."
        ],
        toolsRelevant: ["Backend APIs", "Relational Database Design", "Code Reviews", "Automated Testing", "Platform Reliability"],
        toolsNice: ["CI/CD", "HR Tech / Onboarding", "Entertainment Industry", "Small-Team Experience"],
        recruiterNote: "The verified priorities are .NET, React, PostgreSQL, and modular/distributed architecture or microservices. Candidates must be able to ramp up on an existing codebase with limited hand-holding.",
        stages: [
            {
                name: "Maggie Reddy & Shankar Rajugiri",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical Interview & Code Review", setup: "",
                expect: "A technical interview focused on full-stack experience, software architecture, and problem-solving. Expect technical questions across React and .NET and potentially a C# code-review exercise.",
                prepare: [
                    "React & Frontend: Components, hooks, state management, API integration, rendering, and performance.",
                    "C# & .NET: async/await, dependency injection, Entity Framework, error handling, and backend APIs.",
                    "Software Architecture: Modular architectures, distributed systems, microservices, and frontend/backend communication.",
                    "PostgreSQL & Debugging: Queries, indexing, transactions, and troubleshooting across the stack.",
                    "Code Review: Analyze existing C# code and identify issues involving async database operations, performance, reliability, and error handling.",
                    "Practical Experience: Hands-on contributions in both frontend and backend."
                ],
                recommendations: "Demonstrate technical depth in both React and .NET using concrete examples. Explain reasoning and trade-offs. Show independence and the ability to work through unfamiliar codebases.",
                internalNote: "Previous interview feedback indicated that a candidate was rejected because their experience was primarily with monolithic applications and they could not demonstrate sufficient depth in either frontend or backend development. Candidates may receive a C# code snippet similar to an OfferService example and be asked to identify potential issues and suggest improvements. The exact second interview is still TBD."
            },
            {
                name: "Second Stage",
                hasPrep: false,
                expect: "Prep TBD"
            }
        ]
    },
    {
        id: "final-draft-fullstack",
        title: "Full Stack Developer — Final Draft",
        seniority: "Mid-Level",
        manager: "Final Draft Engineering Team / TBD",
        department: "Engineering",
        about: "Full-stack role within Final Draft focused on evolving its screenwriting software into modern web-based SaaS experiences. The role spans frontend and backend development with a slight frontend emphasis and exposure to cloud infrastructure.",
        mustHaves: ["Next.js", "NestJS", "AWS Lambda"],
        responsibilities: [
            "Develop web applications using Next.js and TypeScript.",
            "Build backend services using NestJS and AWS Lambda.",
            "Work across frontend, backend, cloud infrastructure, and deployment.",
            "Help modernize desktop software into web-based SaaS.",
            "Translate requirements into scalable technical solutions.",
            "Support the full software lifecycle."
        ],
        toolsRelevant: ["TypeScript", "Tailwind CSS", "AWS", "Docker", "Kubernetes / EKS", "Terraform", "AWS CDK", "CI/CD", "Bitbucket", "SaaS Architecture"],
        toolsNice: ["Desktop-to-Web Modernization", "Entertainment / Media Experience", "Claude / Claude Code"],
        recruiterNote: "The confirmed screening priorities are Next.js, NestJS, and AWS Lambda. The role is full-stack with a slight frontend focus.",
        stages: [
            {
                name: "Software Engineers",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical conversation with two Software Engineers", setup: "",
                expect: "A technical conversation focused on full-stack development experience, previous projects, and technical decision-making. Expect practical engineering scenarios.",
                prepare: [
                    "TypeScript & Next.js: TypeScript fundamentals, React components, state management, API integration, and frontend performance.",
                    "Backend: Node.js, NestJS, REST APIs, dependency injection, authentication, and error handling.",
                    "AWS & Cloud: AWS Lambda, Docker, Kubernetes/EKS, Terraform, AWS CDK, and cloud deployments.",
                    "Architecture: SaaS, scalability, reliability, CI/CD, and frontend/backend communication.",
                    "Practical Experience & AI: Projects, debugging, technical decisions, and AI-assisted development tools."
                ],
                recommendations: "Use concrete examples and explain how technologies were used in real projects. Be especially prepared to discuss Next.js, NestJS, and AWS Lambda. Explain technical decisions clearly and demonstrate adaptability.",
                internalNote: "Previous candidate feedback indicated that the Software Engineers asked for career context followed by practical case-based questions about real engineering problems the team was facing."
            },
            {
                name: "Ron Nagamati",
                hasPrep: true,
                duration: "30 minutes", platform: "TBD", format: "Conversational interview with the VP of Engineering", setup: "",
                expect: "A high-level conversation focused on professional background, previous projects, technical decision-making, and ability to solve real-world engineering challenges.",
                prepare: [
                    "Professional Background: Concise career overview and relevant projects.",
                    "Practical Scenarios: Explain how you approach engineering challenges and propose solutions.",
                    "Technical Decisions: Architectural decisions and trade-offs.",
                    "Problem-Solving: Analyze unfamiliar situations and describe implementation approaches.",
                    "Business & Product Understanding: Connect technical decisions to product goals, scalability, and reliability."
                ],
                recommendations: "Keep answers concise, practical, and focused on the bigger picture. Build rapport naturally and explain your reasoning without unnecessary implementation detail.",
                internalNote: "Ron tends to prefer relationship-oriented, high-level conversations and concise answers. The exact content of his interview is still tentative and should not be presented as fully confirmed."
            }
        ]
    },
    {
        id: "psl-plus-c",
        title: "Senior Software Engineer — PSL+",
        seniority: "Senior",
        manager: "Shrikrushna Garad",
        department: "Engineering",
        about: "Backend engineering role focused on maintaining and modernizing PSL, Cast & Crew’s production accounting platform. The role involves working with a mature legacy C codebase while contributing to ongoing modernization and migration.",
        mustHaves: ["C → C++ migration experience", "MySQL"],
        responsibilities: [
            "Maintain, debug, and modernize PSL applications.",
            "Diagnose issues across a large legacy codebase.",
            "Support financial and accounting workflows.",
            "Write and maintain MySQL queries and migration scripts.",
            "Contribute to modernization of existing applications.",
            "Work independently on unfamiliar code and production issues."
        ],
        toolsRelevant: ["C", "SQL", "Legacy Systems", "Database Migrations", "Git", "Shell Scripting", "GNU Toolchain", "Debugging"],
        toolsNice: ["Linux", "AWS / S3", "Python", "Perl", "Financial Systems", "React / Angular", "C#", "Automated Testing"],
        recruiterNote: "The confirmed priorities are C-to-C++ migration experience and MySQL. Linux is preferred, not mandatory.",
        stages: [
            {
                name: "Shrikrushna Garad",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical and experience-based interview", setup: "",
                expect: "A technical conversation focused on C programming, legacy-system modernization, and problem-solving. Expect practical troubleshooting scenarios and questions about large unfamiliar codebases.",
                prepare: [
                    "C & C++: C fundamentals, pointers, memory management, macros, and C-to-C++ migration.",
                    "Legacy Systems & Debugging: Investigating unfamiliar code and implementing safe changes.",
                    "MySQL: Complex queries, indexing, query optimization, and migrations.",
                    "Linux & Development Tools: Linux, GDB, GCC, GNU Make, and shell scripting if applicable.",
                    "Production Experience: Production incidents, safe data changes, and sensitive financial information."
                ],
                recommendations: "Be practical, independent, and concise. Use concrete examples and explain how you investigate unfamiliar problems and make safe technical decisions.",
                internalNote: ""
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour", platform: "Microsoft Teams", format: "Technical assessment focused on C programming, debugging, SQL, and problem-solving", setup: "",
                expect: "A practical assessment focused on analyzing existing code, identifying issues, and proposing safe solutions.",
                prepare: [
                    "C Fundamentals: Pointers, memory management, structs, arrays, strings, and functions.",
                    "Code Analysis & Debugging: Existing C code, macro expansion, bugs, and systematic debugging.",
                    "MySQL: Joins, complex queries, optimization, and idempotent migrations.",
                    "Development Tools: GDB, GCC, GNU Make, and Linux tools if applicable.",
                    "Defensive Programming: Error handling and safe changes to production systems."
                ],
                recommendations: "Clarify requirements before making changes and explain your reasoning. Focus on root causes, correctness, reliability, and safety rather than speed.",
                internalNote: ""
            },
            {
                name: "Product Managers",
                hasPrep: true,
                duration: "30 minutes", platform: "Microsoft Teams", format: "Conversational interview with two Product Managers", setup: "",
                expect: "A conversation focused on professional experience, collaboration, business requirements, production issues, and technical decision-making.",
                prepare: [
                    "Professional Experience: Software products, legacy systems, modernization, and changing requirements.",
                    "Product & Collaboration: Working with Product, QA, and Engineering.",
                    "Problem-Solving: Customer issues and production challenges.",
                    "Technical Decisions: Trade-offs, requirements clarification, and communicating risk.",
                    "Ownership: Working independently and adapting to priorities."
                ],
                recommendations: "Keep answers concise and practical. Demonstrate how you understand business needs, collaborate with different teams, and communicate technical implications clearly.",
                internalNote: ""
            }
        ]
    },
    {
        id: "sdet-front",
        title: "SDET Front",
        seniority: "Mid / Senior",
        manager: "Anne Dawson",
        department: "QA",
        about: "SDET role focused on frontend quality engineering and UI automation across Cast & Crew web platforms.",
        mustHaves: ["Playwright", "TypeScript / JavaScript", "UI Testing"],
        responsibilities: [
            "Build and maintain UI automation frameworks.",
            "Develop E2E test coverage.",
            "Support exploratory and manual testing when necessary.",
            "Integrate testing into CI/CD.",
            "Troubleshoot UI, API, and data-layer issues.",
            "Collaborate with Engineering and Product."
        ],
        toolsRelevant: ["E2E Testing", "API Testing", "SQL", "CI/CD", "React Applications", "Database Validation", "Debugging"],
        toolsNice: ["Selenium → Playwright Migration", "Kafka / Microservices", "Zephyr", "Quality Metrics", "Regulated Environments", "Claude Code / AI-assisted Testing"],
        recruiterNote: "The verified priorities are Playwright, TypeScript/JavaScript, and UI testing. This is a frontend
