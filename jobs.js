// BASE DE DATOS COMPLETA DE TRABAJOS Y ENTREVISTAS
const jobsData = [
    {
        id: "java-developer",
        title: "Java Developer",
        seniority: "Senior",
        manager: "Roman Smolgovsky",
        department: "Engineering",
        about: "Backend engineering role focused on building and maintaining scalable Java applications for business-critical systems. The engineer works with distributed applications, APIs, databases, production infrastructure, reliability, scalability, and performance.",
        mustHaves: [
            "Java",
            "SQL",
            "Concurrency",
            "Idempotency",
            "Kafka",
            "AWS Messaging",
            "Infrastructure knowledge"
        ],
        responsibilities: [
            "Design, develop, and maintain scalable Java backend services.",
            "Build REST APIs and microservices.",
            "Work with distributed and high-traffic systems.",
            "Optimize SQL queries and database performance.",
            "Troubleshoot production issues and implement long-term solutions.",
            "Participate in architecture and technical design discussions."
        ],
        toolsRelevant: [
            "REST APIs",
            "Microservices",
            "Relational Databases",
            "Distributed Systems",
            "OOP",
            "Git",
            "Debugging"
        ],
        toolsNice: [
            "Spring Boot",
            "Redis",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Monitoring / Observability"
        ],
        recruiterNote: "",

        suggestedQuestions: [
            {
                question: "Concurrency: In Java, how would you prevent race conditions when multiple threads are modifying the same resource?",
                lookFor: [
                    "Shared state",
                    "synchronized",
                    "Locks",
                    "Atomic classes",
                    "Thread-safe collections",
                    "Immutability"
                ]
            },
            {
                question: "Scalability: How would you design a Java REST service to handle high traffic while remaining fault-tolerant?",
                lookFor: [
                    "Stateless services",
                    "Horizontal scaling",
                    "Load balancing",
                    "Caching",
                    "Kafka / async processing",
                    "Retries / timeouts",
                    "Circuit breaker",
                    "Monitoring"
                ]
            },
            {
                question: "SQL: If a SQL query is performing poorly in production, what steps would you take to identify and fix the bottleneck?",
                lookFor: [
                    "Execution plan",
                    "Indexes",
                    "Full table scans",
                    "Joins",
                    "Filtering",
                    "Query optimization",
                    "Measure before / after"
                ]
            }
        ],

        stages: [
            {
                name: "Skill Panel",
                subtitle: "Technical Assessment",
                hasPrep: true,
                duration: "",
                platform: "",
                format: "",
                setup: "",
                expect: "This assessment focuses on reading, understanding, and reasoning about real-world Java backend code. Expect code snippets, SQL questions, and practical scenarios where you may need to identify issues, explain existing functionality, or suggest improvements.",
                prepare: [
                    "Java Fundamentals: Generics, collections, iterators, serialization, and core Java concepts.",
                    "Spring & Spring Boot: Application contexts, bean management, dependency injection, and application structure.",
                    "Backend Development: REST APIs, controllers, services, business logic, and SQL.",
                    "Codebase Analysis: Understanding existing code, identifying established patterns, and implementing new requirements.",
                    "Testing & Code Quality: Running existing tests, handling edge cases, and writing maintainable code."
                ],
                recommendations: "Focus on understanding code rather than memorizing definitions. Practice analyzing unfamiliar applications, explaining how components interact, and identifying potential improvements while preserving existing functionality."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Pair programming / live coding",
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
                recommendations: "Clarify requirements before coding and explain your reasoning throughout the exercise. Start with a simple working solution and improve it if time allows. Treat the interview as a collaboration, ask questions when needed, and remain open to feedback. Prioritize a working solution first, then testing and refinement."
            },
            {
                name: "Roman Smolgovsky",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical and experience-based interview",
                setup: "",
                expect: "A technical conversation focused on your Java backend experience, practical knowledge, and ability to explain architectural decisions. Expect questions about real projects, production challenges, and technical problem-solving.",
                prepare: [
                    "Java & Backend: Review Java fundamentals, REST APIs, Spring Boot, and backend service design.",
                    "Concurrency & Distributed Systems: Review multithreading, thread safety, scalability, and idempotency.",
                    "Databases & Messaging: Review SQL optimization, Kafka, AWS messaging, and distributed infrastructure.",
                    "Production Experience: Prepare examples of debugging, performance improvements, architecture decisions, and adapting to technical challenges."
                ],
                recommendations: "Roman values direct communication and genuine technical understanding. Be concise, use concrete examples from your experience, and explain the reasoning behind your decisions. Focus on demonstrating what you know and how you have applied it rather than simply listing technologies or years of experience."
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
        mustHaves: [
            "C# / .NET",
            "SQL",
            "Concurrency",
            "Idempotency",
            "Kafka",
            "AWS Messaging",
            "Infrastructure knowledge"
        ],
        responsibilities: [
            "Build and enhance payroll processing applications using C# and .NET.",
            "Own features end-to-end.",
            "Design event-driven and distributed systems using Kafka and .NET.",
            "Build scalable backend services and REST APIs.",
            "Collaborate with QA, Product, Business Analysts, and Engineering.",
            "Contribute to technical architecture and evaluate new technologies."
        ],
        toolsRelevant: [
            "REST APIs",
            "Relational Databases",
            "Distributed Systems",
            "Event-Driven Architecture",
            "OOP",
            "System Design",
            "Design Patterns",
            "Data Structures & Algorithms"
        ],
        toolsNice: [
            "PostgreSQL",
            "Kubernetes",
            "Microservices",
            "Agile / SCRUM",
            "SaaS",
            "Payroll / Financial Systems"
        ],
        recruiterNote: "",

        suggestedQuestions: [
            {
                question: "Concurrency: In .NET, how would you prevent race conditions when multiple threads are modifying the same resource?",
                lookFor: [
                    "Shared state",
                    "lock",
                    "Interlocked",
                    "Concurrent collections",
                    "Thread safety",
                    "Immutability"
                ]
            },
            {
                question: "Scalability: How would you design a .NET REST service to handle high traffic while remaining fault-tolerant?",
                lookFor: [
                    "Stateless services",
                    "Horizontal scaling",
                    "async / await",
                    "Caching",
                    "Retries / timeouts",
                    "Circuit breaker",
                    "Messaging",
                    "Monitoring"
                ]
            },
            {
                question: "SQL: If a SQL query is performing poorly in production, what steps would you take to identify and fix the bottleneck?",
                lookFor: [
                    "Execution plan",
                    "Indexes",
                    "Full scans",
                    "Joins",
                    "Query optimization",
                    "Database bottlenecks",
                    "Measure results"
                ]
            }
        ],

        stages: [
            {
                name: "Skill Panel",
                hasPrep: true,
                duration: "",
                platform: "",
                format: "",
                setup: "",
                expect: "This assessment focuses on reading and reasoning about real-world .NET backend code. Expect short code snippets, SQL questions, and production scenarios where you may need to explain existing functionality, identify potential issues, and suggest improvements.",
                prepare: [
                    "C# & .NET Fundamentals: Core language concepts, collections, expressions, and application execution.",
                    "Backend & API Development: RESTful APIs, HTTP responses, controllers, dependency management, and database operations.",
                    "Microservices & Distributed Systems: Service communication, scalability, service boundaries, and data ownership.",
                    "Messaging & Event-Driven Architecture: Asynchronous communication, publishing events, subscriptions, and messaging patterns.",
                    "Backend Engineering: Dependency injection, service lifetimes, database access, reliability, and distributed consistency."
                ],
                recommendations: "Practice reading unfamiliar code and explaining how its components interact. Focus on identifying problems, reasoning through practical scenarios, and proposing maintainable solutions."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Pair programming / live coding",
                setup: "Before the interview: Please have the .NET SDK installed and configured, along with an IDE of your preference. Make sure your environment is ready to create, run, and test a .NET application without setup issues.",
                expect: "You will code alongside the interviewer while explaining your reasoning and approach. The assessment focuses on problem-solving, code structure, handling edge cases, and your ability to collaborate.",
                prepare: [
                    "C# & .NET Fundamentals: Collections, LINQ, async/await, Tasks, and concurrent operations.",
                    "API Integration: HTTP requests, JSON, status codes, asynchronous calls, and error handling.",
                    "Data Manipulation: Filtering, mapping, grouping, sorting, and aggregation using LINQ.",
                    "Edge Cases: Null values, empty inputs, failed requests, partial failures, and duplicate data.",
                    "Code Quality: Clean, readable, and testable code."
                ],
                recommendations: "Clarify requirements before coding and explain your reasoning throughout the exercise. Start with a simple working solution and use remaining time for testing and improvement. Ask questions when needed and remain open to feedback."
            },
            {
                name: "Roman / Quynh",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical and experience-based interview",
                setup: "",
                expect: "A technical conversation focused on your .NET experience, practical knowledge, and problem-solving approach. Expect technical questions and scenarios based on previous projects rather than a formal coding assessment.",
                prepare: [
                    "C# & .NET: Collections, LINQ, async/await, Tasks, concurrency, and error handling.",
                    "Backend Development: REST APIs, JSON, HTTP requests, and asynchronous operations.",
                    "Distributed Systems: Idempotency, Kafka, AWS messaging, and system reliability.",
                    "SQL & Problem-Solving: Database operations, technical decisions, and production challenges.",
                    "Practical Experience: Projects, technical challenges, and adapting to new technologies or requirements."
                ],
                recommendations: "Use clear, direct answers and demonstrate genuine technical understanding. Use specific examples, avoid unnecessarily complicated explanations, and be transparent when you do not know something."
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
        mustHaves: [
            "React",
            ".NET / C#",
            "Performance",
            "Reliability"
        ],
        responsibilities: [
            "Build and maintain modern web applications using React.",
            "Develop reusable frontend components and complex workflows.",
            "Integrate frontend applications with APIs and .NET backend services.",
            "Debug issues across frontend, API, application, and database layers.",
            "Ensure new functionality is performant and preserves existing PSL behavior.",
            "Collaborate with Product, QA, and Engineering."
        ],
        toolsRelevant: [
            "TypeScript",
            "JavaScript",
            "HTML / CSS",
            "REST APIs",
            "ASP.NET MVC / Web API",
            "MySQL",
            "Git",
            "Automated Testing",
            "Authentication & Authorization"
        ],
        toolsNice: [
            "ASP.NET Core",
            "Jest",
            "React Testing Library",
            "Cypress",
            "Playwright",
            "Redux / Zustand",
            "CI/CD",
            "Feature Flags",
            "Telemetry / Logging",
            "Legacy Modernization",
            "Financial / Accounting Systems"
        ],
        recruiterNote: "The verified priorities are React, .NET, performance, and reliability. Although the official title is Senior Software Engineer, the team can consider Mid-to-Senior profiles if they demonstrate the required capability.",
        stages: [
            {
                name: "Shrikrushna Garad",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical Conversation",
                setup: "",
                expect: "A technical conversation focused on previous experience, software architecture, and problem-solving. Expect questions about React fundamentals, design patterns, application performance, troubleshooting, and familiarity with AI-assisted development tools.",
                prepare: [
                    "React & TypeScript: Components, hooks, state management, and frontend application structure.",
                    "Software Architecture: Design patterns, modular architecture, REST APIs, and C#/.NET.",
                    "Debugging & Performance: Identifying application errors, investigating performance issues, and troubleshooting across the full stack.",
                    "Practical Experience: Previous projects, technical decisions, challenges, and personal contributions.",
                    "AI-Assisted Development: AI coding tools, daily use, benefits, limitations, and workflow integration."
                ],
                recommendations: "Keep answers concise, direct, and practical. Focus on what you personally built and how you approach technical challenges. If you do not know something, explain how you would investigate it."
            },
            {
                name: "Principal Engineers",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical Assessment / Live Coding",
                setup: "",
                expect: "An in-depth technical assessment focused on engineering experience, problem-solving, and technical decision-making. Expect practical scenarios, deeper technical questions, and follow-up questions about your reasoning.",
                prepare: [
                    "Software Engineering: SOLID principles, design patterns, dependency injection, and clean architecture.",
                    "Backend Development: C#/.NET, REST APIs, SQL, indexing, database transactions, and API design.",
                    "Performance & Troubleshooting: Investigating slow applications or APIs and identifying root causes.",
                    "Production Experience: Scalability, performance challenges, architectural decisions, and personal contributions.",
                    "AI-Assisted Development: AI coding tools, Prompt Engineering, Context Engineering, and validating AI-generated code."
                ],
                recommendations: "Demonstrate practical engineering knowledge through concrete examples. Explain your thought process and trade-offs before proposing solutions. Be technically precise and transparent about unfamiliar topics."
            },
            {
                name: "Product Managers",
                hasPrep: true,
                duration: "30 minutes",
                platform: "Microsoft Teams",
                format: "Product & Business Conversation",
                setup: "",
                expect: "A conversation focused on professional experience, previous projects, collaboration, and ability to understand business requirements and translate them into technical solutions.",
                prepare: [
                    "Technical Background: React, TypeScript, C#/.NET, REST APIs, and SQL at a high level.",
                    "Project Experience: Specific contributions, challenges, and results.",
                    "Product & Collaboration: Translating business requirements into technical solutions.",
                    "Problem-Solving: Technical blockers, prioritization, and trade-offs.",
                    "Legacy Modernization: Modernizing applications while preserving functionality."
                ],
                recommendations: "Use clear, concise answers and concrete examples. Demonstrate business understanding, collaboration with non-technical stakeholders, and practical technical decision-making."
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
        mustHaves: [
            "Node.js",
            "React",
            "Micro-frontends",
            "REST APIs or GraphQL"
        ],
        responsibilities: [
            "Build scalable frontend and backend applications.",
            "Develop frontend experiences and backend services.",
            "Work with APIs, distributed systems, and cloud infrastructure.",
            "Contribute to architectural decisions.",
            "Collaborate with Engineering, QA, and Product.",
            "Participate in code reviews, troubleshooting, and continuous improvement."
        ],
        toolsRelevant: [
            "Module Federation",
            "Event-Driven Architecture",
            "PostgreSQL / Amazon RDS",
            "DynamoDB",
            "AWS",
            "Distributed Systems"
        ],
        toolsNice: [
            "Design Systems",
            "Shared Component Libraries"
        ],
        recruiterNote: "The verified screening priorities are Node.js, React, micro-frontends, and API experience with REST or GraphQL. Screen for a true full-stack profile rather than an exclusively frontend or backend engineer.",
        stages: [
            {
                name: "Jan Sevilla",
                hasPrep: true,
                duration: "30 minutes",
                platform: "Microsoft Teams",
                format: "Conversational interview with the Hiring Manager",
                setup: "",
                expect: "A conversation focused on professional experience, technical background, and cultural fit. Jan will also introduce the Platform Team and explain its responsibilities.",
                prepare: [
                    "Professional Experience: Full-stack experience, particularly React and Node.js.",
                    "Project Experience: 1–2 relevant projects, responsibilities, technologies, and achievements.",
                    "Technical Decisions: Examples of problem-solving and adapting to changing requirements.",
                    "Team Collaboration: Working with Engineering, QA, and Product."
                ],
                recommendations: "Keep answers clear, concise, and practical. Focus on individual contributions and real project experience. Prepare questions about the Platform Team and role expectations."
            },
            {
                name: "Ven or Joshua",
                hasPrep: true,
                duration: "30 minutes",
                platform: "Microsoft Teams",
                format: "Technical interview with a Lead Software Developer",
                setup: "",
                expect: "An in-depth technical conversation focused on engineering experience, architecture, and real-world problems involving scalable platform applications.",
                prepare: [
                    "Frontend: React, Module Federation, micro-frontends, and frontend architecture.",
                    "Backend & APIs: Node.js, REST APIs, GraphQL, and event-driven architecture.",
                    "System Design: Distributed systems, scalability, reliability, and service communication.",
                    "Databases & Cloud: PostgreSQL, Amazon RDS, DynamoDB, and AWS.",
                    "Practical Experience: Technical challenges, architecture decisions, trade-offs, and collaboration."
                ],
                recommendations: "Be specific and technically precise. Explain what you personally built, why you made certain decisions, and the outcomes. Be prepared to go deeper into your strongest technical area while demonstrating full-stack knowledge."
            }
        ]
    },

    {
        id: "fullstack-data",
        title: "Full Stack Developer — Data",
        seniority: "Mid-Level",
        manager: "TBD",
        department: "Engineering",
        about: "Full-stack engineering role working across backend, frontend, data, and cloud layers. The engineer owns features end-to-end, from database and API development through frontend implementation, testing, deployment, and ongoing maintenance, with an important focus on data workflows and data-intensive applications.",
        mustHaves: [
            "Node.js",
            "React",
            "Data: ETL OR Snowflake OR SQL"
        ],
        responsibilities: [
            "Build and enhance full-stack applications across backend, frontend, and data layers.",
            "Own features end-to-end, from database design and backend APIs through frontend implementation, testing, deployment, and maintenance.",
            "Design and implement scalable backend services and APIs using Node.js / Express.",
            "Develop responsive and maintainable frontend applications using React and TypeScript.",
            "Work with SQL, Snowflake, data pipelines, and ETL processes to support application and analytical use cases.",
            "Contribute to technical decisions around architecture, performance, reliability, scalability, and engineering standards."
        ],
        toolsRelevant: [
            "TypeScript",
            "Node.js / Express",
            "React 18",
            "PostgreSQL",
            "Snowflake",
            "SQL",
            "ETL / Data Pipelines",
            "Redis",
            "AWS",
            "ECS / Fargate",
            "S3",
            "Docker",
            "Distributed Systems",
            "JWT / OAuth2",
            "Okta",
            "Unit & Integration Testing"
        ],
        toolsNice: [
            "Tableau / BI Tools",
            "Jest",
            "Vitest",
            "BigQuery / Redshift"
        ],
        recruiterNote: "",

        suggestedQuestions: [
            {
                question: "Walk me through building a feature from database to API to React.",
                lookFor: [
                    "Database → API → React",
                    "End-to-end ownership",
                    "Data flow",
                    "Validation",
                    "Error handling",
                    "Testing",
                    "Trade-offs"
                ]
            },
            {
                question: "How do you handle bad or inconsistent data in a pipeline?",
                lookFor: [
                    "Data validation",
                    "Duplicates / nulls / formats",
                    "Reject or quarantine",
                    "Logging",
                    "Reprocessing",
                    "Data integrity"
                ]
            },
            {
                question: "How would you design a reliable ETL pipeline?",
                lookFor: [
                    "Extract → Transform → Load",
                    "Validation",
                    "Retries",
                    "Idempotency",
                    "Monitoring",
                    "Reconciliation",
                    "Scalability"
                ]
            }
        ],

        stages: [
            {
                name: "Live Coding",
                subtitle: "Technical Discussion + System Design Exercise",
                hasPrep: true,
                duration: "1 hour",
                platform: "TBD",
                format: "Technical Discussion + System Design Exercise",
                setup: "Please create an Excalidraw account before the interview and make sure you can access the platform. You will use Excalidraw to diagram your solution during the System Design Exercise.",
                expect: "The interview will include a deeper discussion of your experience, technical architecture and decisions, teamwork and leadership examples, and an end-to-end System Design Exercise using Excalidraw. The interview will conclude with time for your questions about the interviewer, team, or project.",
                prepare: [
                    "Introduction: Be ready to introduce yourself and walk through your experience in more depth, explaining how your systems and projects worked technically.",
                    "Technical Discussion: Expect questions about your architecture, technical decisions, and how you approach system design.",
                    "Teamwork and Leadership: Prepare examples of collaboration, ownership, and leadership.",
                    "System Design Exercise: Be prepared to design and explain an end-to-end system, walking through its architecture, components, data flow, and how the different parts interact. Think about scalability, performance, data processing, database design, error handling, and how the system handles high volumes of transactions.",
                    "Your Questions: Prepare questions about the interviewer, team, or project for the end of the interview."
                ],
                recommendations: "Be ready to explain your technical decisions, discuss trade-offs, and justify your approach throughout the System Design Exercise."
            },
            {
                name: "Conversational Interview",
                hasPrep: false,
                duration: "",
                platform: "",
                format: "TBD",
                setup: "",
                expect: "Prep TBD",
                prepare: [],
                recommendations: ""
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
        mustHaves: [
            "React",
            "Node.js",
            "PostgreSQL",
            ".Net - intermediate knowledge"
        ],
        responsibilities: [
            "Build and maintain onboarding workflows end-to-end.",
            "Develop dynamic document packages.",
            "Implement company-level configuration features.",
            "Work across frontend and backend.",
            "Debug production issues.",
            "Collaborate with Product, Design, and Engineering."
        ],
        toolsRelevant: [
            "TypeScript",
            "REST APIs",
            "SQL",
            "React Hooks",
            "State Management",
            "AdonisJS"
        ],
        toolsNice: [
            "MobX",
            "CI/CD",
            "Automated Testing",
            "HR Tech / Payroll",
            "Document Workflows",
            "Multi-Tenant SaaS",
            "E-signature / Document Generation"
        ],
        recruiterNote: "The verified priorities are React, Node.js, and PostgreSQL and .NET. Screen for a genuine full-stack profile rather than frontend-only.",
        stages: [
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams + CodeSandbox",
                format: "Live coding with two Software Engineers",
                setup: "",
                expect: "A practical React and JavaScript coding exercise using an existing application in CodeSandbox. You will be asked to understand existing code, implement changes, and explain your approach.",
                prepare: [
                    "React Fundamentals: Functional components, useState, props, event handling, and component communication.",
                    "State Management: Updating and sharing state between components.",
                    "JavaScript: Functions, objects, arrays, conditional logic, and event handling.",
                    "Debugging: Reading existing React code and implementing targeted changes.",
                    "Code Quality: Clean component design, maintainable code, and edge cases."
                ],
                recommendations: "Understand the existing code before making changes. Clarify requirements and explain your reasoning as you code. Prioritize a simple working solution before optimization."
            },
            {
                name: "Roja Kamireddy",
                hasPrep: true,
                duration: "30 minutes",
                platform: "Microsoft Teams",
                format: "Conversational interview with the Hiring Manager",
                setup: "",
                expect: "A conversation focused on technical experience, projects, engineering decisions, problem-solving, collaboration, and ownership.",
                prepare: [
                    "Full-Stack Development: React, TypeScript, Node.js, REST APIs, and PostgreSQL.",
                    "Architecture & Problem-Solving: Frontend architecture, state management, backend integration, and trade-offs.",
                    "Project Experience: Features developed end-to-end and production issues solved.",
                    "Product Knowledge: Configurable SaaS applications and complex user workflows.",
                    "Team Collaboration: Independent problem-solving, ownership, and cross-functional collaboration."
                ],
                recommendations: "Roja values clear communication, flexibility, and independent problem-solving. Use concrete examples and explain your personal contributions and technical decisions."
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
        mustHaves: [
            ".NET",
            "React",
            "PostgreSQL",
            "Modular Architecture",
            "Distributed Systems / Microservices"
        ],
        responsibilities: [
            "Build and maintain Start+ features.",
            "Work across React and .NET.",
            "Develop broad ownership of the existing codebase.",
            "Address technical debt and reliability issues.",
            "Resolve production issues.",
            "Collaborate closely with Engineering."
        ],
        toolsRelevant: [
            "Backend APIs",
            "Relational Database Design",
            "Code Reviews",
            "Automated Testing",
            "Platform Reliability"
        ],
        toolsNice: [
            "CI/CD",
            "HR Tech / Onboarding",
            "Entertainment Industry",
            "Small-Team Experience"
        ],
        recruiterNote: "The verified priorities are .NET, React, PostgreSQL, and modular/distributed architecture or microservices. Candidates must be able to ramp up on an existing codebase with limited hand-holding.",
        stages: [
            {
                name: "Maggie Reddy & Shankar Rajugiri",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical Interview & Code Review",
                setup: "",
                expect: "A technical interview focused on full-stack experience, software architecture, and problem-solving. Expect technical questions across React and .NET and potentially a C# code-review exercise.",
                prepare: [
                    "React & Frontend: Components, hooks, state management, API integration, rendering, and performance.",
                    "C# & .NET: async/await, dependency injection, Entity Framework, error handling, and backend APIs.",
                    "Software Architecture: Modular architectures, distributed systems, microservices, and frontend/backend communication.",
                    "PostgreSQL & Debugging: Queries, indexing, transactions, and troubleshooting across the stack.",
                    "Code Review: Analyze existing C# code and identify issues involving async database operations, performance, reliability, and error handling.",
                    "Practical Experience: Hands-on contributions in both frontend and backend."
                ],
                recommendations: "Demonstrate technical depth in both React and .NET using concrete examples. Explain reasoning and trade-offs. Show independence and the ability to work through unfamiliar codebases."
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
        mustHaves: [
            "Next.js",
            "NestJS",
            "AWS Lambda"
        ],
        responsibilities: [
            "Develop web applications using Next.js and TypeScript.",
            "Build backend services using NestJS and AWS Lambda.",
            "Work across frontend, backend, cloud infrastructure, and deployment.",
            "Help modernize desktop software into web-based SaaS.",
            "Translate requirements into scalable technical solutions.",
            "Support the full software lifecycle."
        ],
        toolsRelevant: [
            "TypeScript",
            "Tailwind CSS",
            "AWS",
            "Docker",
            "Kubernetes / EKS",
            "Terraform",
            "AWS CDK",
            "CI/CD",
            "Bitbucket",
            "SaaS Architecture"
        ],
        toolsNice: [
            "Desktop-to-Web Modernization",
            "Entertainment / Media Experience",
            "Claude / Claude Code"
        ],
        recruiterNote: "The confirmed screening priorities are Next.js, NestJS, and AWS Lambda. The role is full-stack with a slight frontend focus.",
        stages: [
            {
                name: "Software Engineers",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical conversation with two Software Engineers",
                setup: "",
                expect: "A technical conversation focused on full-stack development experience, previous projects, and technical decision-making. Expect practical engineering scenarios.",
                prepare: [
                    "TypeScript & Next.js: TypeScript fundamentals, React components, state management, API integration, and frontend performance.",
                    "Backend: Node.js, NestJS, REST APIs, dependency injection, authentication, and error handling.",
                    "AWS & Cloud: AWS Lambda, Docker, Kubernetes/EKS, Terraform, AWS CDK, and cloud deployments.",
                    "Architecture: SaaS, scalability, reliability, CI/CD, and frontend/backend communication.",
                    "Practical Experience & AI: Projects, debugging, technical decisions, and AI-assisted development tools."
                ],
                recommendations: "Use concrete examples and explain how technologies were used in real projects. Be especially prepared to discuss Next.js, NestJS, and AWS Lambda. Explain technical decisions clearly and demonstrate adaptability."
            },
            {
                name: "Ron Nagamati",
                hasPrep: true,
                duration: "30 minutes",
                platform: "TBD",
                format: "Conversational interview with the VP of Engineering",
                setup: "",
                expect: "A high-level conversation focused on professional background, previous projects, technical decision-making, and ability to solve real-world engineering challenges.",
                prepare: [
                    "Professional Background: Concise career overview and relevant projects.",
                    "Practical Scenarios: Explain how you approach engineering challenges and propose solutions.",
                    "Technical Decisions: Architectural decisions and trade-offs.",
                    "Problem-Solving: Analyze unfamiliar situations and describe implementation approaches.",
                    "Business & Product Understanding: Connect technical decisions to product goals, scalability, and reliability."
                ],
                recommendations: "Keep answers concise, practical, and focused on the bigger picture. Build rapport naturally and explain your reasoning without unnecessary implementation detail."
            }
        ]
    },

    {
        id: "psl-plus-c",
        title: "Senior Software Engineer — PSL+ (C)",
        seniority: "Senior",
        manager: "Shrikrushna Garad",
        department: "Engineering",
        about: "Backend engineering role focused on maintaining and modernizing PSL, Cast & Crew’s production accounting platform. The role involves working with a mature legacy C codebase while contributing to ongoing modernization and migration.",
        mustHaves: [
            "C → C++ migration experience",
            "MySQL"
        ],
        responsibilities: [
            "Maintain, debug, and modernize PSL applications.",
            "Diagnose issues across a large legacy codebase.",
            "Support financial and accounting workflows.",
            "Write and maintain MySQL queries and migration scripts.",
            "Contribute to modernization of existing applications.",
            "Work independently on unfamiliar code and production issues."
        ],
        toolsRelevant: [
            "C",
            "SQL",
            "Legacy Systems",
            "Database Migrations",
            "Git",
            "Shell Scripting",
            "GNU Toolchain",
            "Debugging"
        ],
        toolsNice: [
            "Linux",
            "AWS / S3",
            "Python",
            "Perl",
            "Financial Systems",
            "React / Angular",
            "C#",
            "Automated Testing"
        ],
        recruiterNote: "",
        stages: [
            {
                name: "Shrikrushna Garad",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical and experience-based interview",
                setup: "",
                expect: "A technical conversation focused on C programming, legacy-system modernization, and problem-solving. Expect practical troubleshooting scenarios and questions about large unfamiliar codebases.",
                prepare: [
                    "C & C++: C fundamentals, pointers, memory management, macros, and C-to-C++ migration.",
                    "Legacy Systems & Debugging: Investigating unfamiliar code and implementing safe changes.",
                    "MySQL: Complex queries, indexing, query optimization, and migrations.",
                    "Linux & Development Tools: Linux, GDB, GCC, GNU Make, and shell scripting if applicable.",
                    "Production Experience: Production incidents, safe data changes, and sensitive financial information."
                ],
                recommendations: "Be practical, independent, and concise. Use concrete examples and explain how you investigate unfamiliar problems and make safe technical decisions."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Technical assessment focused on C programming, debugging, SQL, and problem-solving",
                setup: "",
                expect: "A practical assessment focused on analyzing existing code, identifying issues, and proposing safe solutions.",
                prepare: [
                    "C Fundamentals: Pointers, memory management, structs, arrays, strings, and functions.",
                    "Code Analysis & Debugging: Existing C code, macro expansion, bugs, and systematic debugging.",
                    "MySQL: Joins, complex queries, optimization, and idempotent migrations.",
                    "Development Tools: GDB, GCC, GNU Make, and Linux tools if applicable.",
                    "Defensive Programming: Error handling and safe changes to production systems."
                ],
                recommendations: "Clarify requirements before making changes and explain your reasoning. Focus on root causes, correctness, reliability, and safety rather than speed."
            },
            {
                name: "Product Managers",
                hasPrep: true,
                duration: "30 minutes",
                platform: "Microsoft Teams",
                format: "Conversational interview with two Product Managers",
                setup: "",
                expect: "A conversation focused on professional experience, collaboration, business requirements, production issues, and technical decision-making.",
                prepare: [
                    "Professional Experience: Software products, legacy systems, modernization, and changing requirements.",
                    "Product & Collaboration: Working with Product, QA, and Engineering.",
                    "Problem-Solving: Customer issues and production challenges.",
                    "Technical Decisions: Trade-offs, requirements clarification, and communicating risk.",
                    "Ownership: Working independently and adapting to priorities."
                ],
                recommendations: "Keep answers concise and practical. Demonstrate how you understand business needs, collaborate with different teams, and communicate technical implications clearly."
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
        mustHaves: [
            "Playwright",
            "TypeScript / JavaScript",
            "UI Testing"
        ],
        responsibilities: [
            "Build and maintain UI automation frameworks.",
            "Develop E2E test coverage.",
            "Support exploratory and manual testing when necessary.",
            "Integrate testing into CI/CD.",
            "Troubleshoot UI, API, and data-layer issues.",
            "Collaborate with Engineering and Product."
        ],
        toolsRelevant: [
            "E2E Testing",
            "API Testing",
            "SQL",
            "CI/CD",
            "React Applications",
            "Database Validation",
            "Debugging"
        ],
        toolsNice: [
            "Selenium → Playwright Migration",
            "Kafka / Microservices",
            "Zephyr",
            "Quality Metrics",
            "Regulated Environments",
            "Claude Code / AI-assisted Testing"
        ],
        recruiterNote: "",
        stages: [
            {
                name: "Skill Panel",
                subtitle: "Technical QA Fundamentals Assessment",
                hasPrep: true,
                duration: "",
                platform: "",
                format: "Technical QA Fundamentals Assessment",
                setup: "",
                expect: "This assessment focuses on core Software Quality Engineering concepts and practical testing knowledge. Expect conceptual questions covering unit testing, test design, manual and automated testing, API behavior, SQL fundamentals, test documentation, defect management, and test reliability. You may be asked to identify correct testing practices, differentiate between testing concepts, and reason about common problems in automated test suites.",
                prepare: [
                    "Unit Testing Fundamentals: Review test isolation, external dependencies, I/O operations, mocks vs. stubs, asynchronous testing, and practices that can make unit tests slow or unreliable.",
                    "Test Design & QA Fundamentals: Review positive and negative paths, edge cases, test cases vs. test scenarios, test suites, test plans, and Requirement Traceability Matrices.",
                    "Manual & Automated Testing: Understand the strengths and limitations of each approach, scripted testing, regression testing, and when manual testing can identify issues automation may miss.",
                    "Testing Levels & Approaches: Review Black Box vs. White Box testing, unit testing, integration testing, API testing, UI testing, smoke testing, and sanity testing.",
                    "API Fundamentals: Review HTTP operations, especially the differences between PUT and PATCH.",
                    "SQL & Databases: Review SQL views, HAVING, basic query structure, and the general differences between SQL and NoSQL databases.",
                    "Defect Management: Understand the difference between bug priority and severity and how to identify product defects.",
                    "Test Reliability: Review common causes of flaky tests, including external-system dependencies, random data, concurrency, timing, and asynchronous operations.",
                    "Testing Strategy: Be prepared to reason about test prioritization, retesting under time constraints, and when test cases should be created."
                ],
                recommendations: "Focus on understanding the purpose behind each testing practice rather than memorizing definitions. Be especially comfortable distinguishing similar concepts such as Mock vs. Stub, Priority vs. Severity, Test Case vs. Test Scenario, Smoke vs. Sanity Testing, Black Box vs. White Box Testing, PUT vs. PATCH, and Manual vs. Automated Testing. For scenario-based questions, think about test isolation, reliability, maintainability, coverage, and risk before selecting an answer."
            },
            {
                name: "Anne Dawson",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Conversational interview with the Head of QA",
                setup: "",
                expect: "A conversation focused on professional experience, automation projects, and quality engineering scenarios at Cast & Crew.",
                prepare: [
                    "Playwright & TypeScript: Automation frameworks, reusable fixtures, Page Object Models, selectors, and maintainable design.",
                    "Testing Strategy: E2E, regression, prioritization, and flaky tests.",
                    "API & Data Validation: UI, API, and database validation.",
                    "Practical Experience: Frameworks built or improved, complex workflows, and defects.",
                    "AI-Assisted Testing: AI tools for test generation, debugging, or reviews."
                ],
                recommendations: "Anne values punctuality, professionalism, and structured communication. Use concrete examples and highlight results."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "CodeInterview.io",
                format: "Practical Playwright live coding with a QA Lead or QA Manager",
                setup: "",
                expect: "A practical Playwright coding session combining UI automation and API assertion scenarios.",
                prepare: [
                    "Playwright & TypeScript: Locators, assertions, fixtures, async operations, and test structure.",
                    "UI Automation: Interactions, forms, navigation, dynamic elements, and critical journeys.",
                    "API Testing: Requests, response validation, JSON, status codes, and assertions.",
                    "Test Reliability: Dynamic waits, flaky tests, error scenarios, and edge cases.",
                    "Code Quality: Clean and reusable automation code."
                ],
                recommendations: "Clarify requirements, explain your reasoning, prioritize a working solution, use reliable selectors and meaningful assertions, and manage your time carefully."
            },
            {
                name: "Engineering Manager",
                hasPrep: true,
                duration: "30–60 minutes",
                platform: "Microsoft Teams",
                format: "Product & Technical Conversation",
                setup: "",
                expect: "The manager will explain the product and may discuss real projects, quality challenges, and how you would contribute to the team.",
                prepare: [
                    "Professional Experience: Frontend automation and quality engineering.",
                    "Project Experience: Relevant projects, contributions, challenges, and results.",
                    "Problem-Solving: Defects, test coverage, and automation challenges.",
                    "Team Collaboration: Working with developers, QA, and Product."
                ],
                recommendations: "Use clear communication and practical examples. Prepare questions about the product and team expectations."
            }
        ]
    },

    {
        id: "sdet-back",
        title: "SDET Back",
        seniority: "Mid / Senior",
        manager: "Anne Dawson",
        department: "QA",
        about: "SDET role focused on backend quality engineering and API testing across Cast & Crew systems.",
        mustHaves: [
            "Playwright",
            "TypeScript / JavaScript",
            "Backend Testing",
            "API Testing"
        ],
        responsibilities: [
            "Build automated tests for backend services and APIs.",
            "Validate REST and GraphQL integrations.",
            "Test workflows across interconnected systems.",
            "Perform SQL data validation.",
            "Troubleshoot API and integration issues.",
            "Integrate automated tests into CI/CD."
        ],
        toolsRelevant: [
            "REST APIs",
            "GraphQL",
            "SQL",
            "API Automation",
            "Contract Testing",
            "Microservices",
            "CI/CD",
            "Integration Testing",
            "Root Cause Analysis"
        ],
        toolsNice: [
            "Kafka / Event-Driven Systems",
            "Asynchronous Testing",
            "Quality Metrics",
            "Financial / Payroll Systems",
            "Compliance Environments"
        ],
        recruiterNote: "",
        processNote: "Skill Panel has not been confirmed for this process at this time.",
        stages: [
            {
                name: "Anne Dawson",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Conversational interview with the Head of QA",
                setup: "",
                expect: "A conversation focused on professional experience, previous automation projects, backend reliability, API testing, and system integrations.",
                prepare: [
                    "Playwright & API Automation: REST/GraphQL testing, automation frameworks, negative testing, and edge cases.",
                    "Integration & Contract Testing: Service-to-service communication and microservices.",
                    "SQL & Data Validation: Queries, integrity checks, and backend validation.",
                    "CI/CD & Troubleshooting: Quality gates and root-cause analysis.",
                    "Practical Experience: API frameworks, complex defects, and testing strategies."
                ],
                recommendations: "Anne values punctuality, professionalism, and structured communication. Use concrete project examples and clearly explain outcomes."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "CodeInterview.io",
                format: "Practical Playwright live coding with a QA Lead or QA Manager",
                setup: "If you use an additional API testing tool, please have it installed, configured, and ready to use before the interview.",
                expect: "A practical Playwright coding session combining backend test automation and API assertion scenarios.",
                prepare: [
                    "Playwright & TypeScript/JavaScript",
                    "API Testing: REST requests, status codes, JSON, and assertions.",
                    "Backend Testing: Integration testing and service communication.",
                    "Negative Testing & Edge Cases",
                    "Code Quality"
                ],
                recommendations: "Clarify requirements before coding, explain your reasoning, prioritize meaningful assertions and a working solution, and remain open to feedback."
            },
            {
                name: "Engineering Manager",
                hasPrep: true,
                duration: "30–60 minutes",
                platform: "Microsoft Teams",
                format: "Product & Technical Conversation",
                setup: "",
                expect: "The manager will introduce the product and discuss professional experience, backend quality challenges, and how you would contribute.",
                prepare: [
                    "Backend automation and API testing experience.",
                    "Relevant projects and results.",
                    "API defects and integration coverage.",
                    "Backend reliability and testing strategy.",
                    "Collaboration with Engineering, QA, and Product."
                ],
                recommendations: "Use specific examples, communicate clearly, and prepare questions about the product and technical challenges."
            }
        ]
    },

    {
        id: "sdet-data",
        title: "Senior SDET — Data Platform",
        seniority: "Senior",
        manager: "Anne Dawson",
        department: "QA",
        about: "Senior SDET role embedded within Cast & Crew’s Data Platform, focused on quality engineering for the microservices and ETL pipelines that move and transform data across the product ecosystem. The role combines hands-on quality engineering with technical automation leadership across API and data-pipeline testing.",
        mustHaves: [
            "Playwright",
            "TypeScript",
            "ETL / ELT Testing",
            "API Testing"
        ],
        responsibilities: [
            "Design and maintain automation frameworks for API and ETL/data-pipeline testing.",
            "Build automated test coverage for microservices and ETL pipelines.",
            "Validate source-to-target integrity, transformation logic, reconciliation, schema drift, and data-quality rules.",
            "Build and maintain contract, functional, and regression API test suites.",
            "Integrate data-pipeline and API tests into CI/CD workflows.",
            "Investigate test failures and data discrepancies while collaborating with Data Engineering."
        ],
        toolsRelevant: [
            "REST APIs",
            "SQL",
            "Microservices",
            "Contract Testing",
            "Data Validation",
            "Data Reconciliation",
            "Schema Validation",
            "Data Quality",
            "CI/CD",
            "Zephyr",
            "Automation Frameworks"
        ],
        toolsNice: [
            "Pact / PactFlow",
            "Airflow",
            "dbt",
            "Databricks",
            "Snowflake",
            "Cloud Data Platforms",
            "High-Compliance Data Environments",
            "SDET Mentoring / Technical Leadership"
        ],
        recruiterNote: "",

        suggestedQuestions: [
            {
                question: "Can you describe how you would design an automated test framework to validate an ETL pipeline end-to-end?",
                lookFor: [
                    "Source → Transformation → Target",
                    "Reusable framework",
                    "Data validation",
                    "Schema checks",
                    "Test data",
                    "CI/CD",
                    "Reporting"
                ]
            },
            {
                question: "How would you use SQL to validate data across an ETL pipeline when the source and target datasets contain millions of records?",
                lookFor: [
                    "Row counts",
                    "Aggregations",
                    "Checksums / hashes",
                    "Joins",
                    "Partitions / batches",
                    "Reconciliation",
                    "Performance"
                ]
            },
            {
                question: "Tell me about an automation framework you have built or maintained for API or data-pipeline testing.",
                lookFor: [
                    "Personal ownership",
                    "Framework architecture",
                    "Reusable components",
                    "API / data validation",
                    "CI/CD",
                    "Debugging / reporting",
                    "Impact"
                ]
            }
        ],

        stages: [
            {
                name: "Anne Dawson",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Experience & Technical Conversation",
                setup: "",
                expect: "A conversation focused on your professional experience, automation projects, and practical quality-engineering challenges involving APIs, data pipelines, and backend systems. Be prepared to discuss how you have tested data-intensive systems and how you approach quality across ETL/ELT pipelines, APIs, and interconnected services.",
                prepare: [
                    "Playwright & TypeScript: Be ready to discuss automation frameworks, reusable architecture, maintainability, and test design.",
                    "ETL / ELT Testing: Review source-to-target validation, transformation testing, reconciliation, schema changes, and data-quality checks.",
                    "API Testing: Prepare examples involving REST APIs, functional testing, regression testing, negative scenarios, and integration testing.",
                    "Data Validation: Be ready to explain how you validate data correctness across systems and investigate discrepancies.",
                    "Automation Strategy: Prepare examples of frameworks or testing approaches you have built, improved, or helped scale.",
                    "Practical Experience: Bring concrete examples of complex defects, automation challenges, and measurable improvements."
                ],
                recommendations: "Anne values punctuality, professionalism, structured communication, and concrete examples. Organize your answers clearly, explain your approach step by step, and focus on the results of your work."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "TBD",
                format: "JavaScript Coding + Automated Test Design",
                setup: "",
                expect: "The assessment may include practical JavaScript exercises and automated testing tasks. You may be asked to manipulate data using JavaScript and to write automated test cases based on functional requirements. The focus is on your ability to understand existing code, translate requirements into tests, write clear JavaScript, and validate expected behavior.",
                prepare: [
                    "JavaScript Fundamentals: Review arrays, objects, functions, conditions, and common data-processing patterns.",
                    "Array Methods: Be comfortable using map(), filter(), and reduce().",
                    "Automated Testing: Review how to structure and write automated tests using Mocha.",
                    "Test Design: Practice translating business requirements into clear positive, negative, and boundary test cases.",
                    "Assertions & Expected Results: Be ready to validate outputs, error messages, and application behavior.",
                    "Existing Code: Practice reading an existing implementation before deciding what should be tested.",
                    "Node / npm: Be comfortable installing dependencies and running test suites using commands such as npm test."
                ],
                recommendations: "Read the requirements carefully before coding. For testing exercises, identify each expected behavior first and make sure every requirement has corresponding test coverage. For JavaScript exercises, favor simple and readable solutions using the requested functions rather than unnecessarily complex implementations. Run the test suite frequently and use failing tests to identify issues before moving on."
            },
            {
                name: "Engineering Manager",
                hasPrep: true,
                duration: "30–60 minutes",
                platform: "Microsoft Teams",
                format: "Product & Technical Conversation",
                setup: "",
                expect: "The Engineering Manager will introduce the product or team and discuss your professional experience, data-quality background, automation approach, and how you would contribute within an engineering team. Expect a conversational interview focused on practical experience rather than a formal coding exercise.",
                prepare: [
                    "Data Quality Experience: Prepare examples involving ETL/ELT pipelines, data validation, reconciliation, and data-quality issues.",
                    "API & Backend Testing: Be ready to discuss API automation, integrations, and service-level testing.",
                    "Project Experience: Select relevant projects and explain your role, technical contributions, challenges, and results.",
                    "Problem-Solving: Prepare examples of difficult defects, data discrepancies, or reliability issues you investigated.",
                    "Engineering Collaboration: Be ready to explain how you have worked with Data Engineers, Developers, Product, and QA.",
                    "Ownership: Prepare examples where you independently identified a problem and drove it through resolution."
                ],
                recommendations: "Use concrete examples and explain both the technical problem and the impact of your work. Demonstrate that you can operate as an embedded engineering partner rather than treating QA as a final testing step."
            }
        ]
    },

    {
        id: "sdet-mobile",
        title: "SDET Mobile",
        seniority: "Mid / Senior",
        manager: "Anne Dawson",
        department: "QA",
        about: "Mobile QA/SDET role focused on quality engineering across iOS and Android applications supporting payroll, onboarding, accounting integrations, and workforce workflows.",
        mustHaves: [
            "Playwright",
            "Experience with a mobile automation tool that supports iOS and Android"
        ],
        responsibilities: [
            "Test applications across iOS and Android.",
            "Build mobile automation coverage.",
            "Perform functional, regression, exploratory, accessibility, and E2E testing.",
            "Validate behavior across devices and OS versions.",
            "Troubleshoot mobile defects.",
            "Support continuous testing and release readiness."
        ],
        toolsRelevant: [
            "Maestro",
            "Detox",
            "Appium",
            "Jest",
            "React Native Testing Library",
            "BrowserStack",
            "REST APIs",
            "GraphQL",
            "Postman / Newman",
            "CI/CD"
        ],
        toolsNice: [
            "Payroll / Financial Systems",
            "Distributed Systems",
            "Performance Testing",
            "Mobile Reliability",
            "AI-assisted Testing",
            "Observability"
        ],
        recruiterNote: "",
        processNote: "Skill Panel has not been confirmed for this process at this time.",
        stages: [
            {
                name: "Anne Dawson",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Conversational interview with the Head of QA",
                setup: "",
                expect: "A conversation focused on mobile testing projects, automation, application reliability, and iOS/Android quality challenges.",
                prepare: [
                    "Mobile Testing & Automation: Playwright and mobile frameworks used across iOS/Android.",
                    "Testing Strategy: Functional, regression, exploratory, and E2E.",
                    "Mobile Challenges: Device compatibility, OS behaviors, network conditions, and difficult defects.",
                    "Automation & CI/CD",
                    "Practical Experience: Mobile projects, defects, and process improvements."
                ],
                recommendations: "Use concrete project examples, explain your problem-solving approach, and communicate professionally and structurally."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "TBD",
                format: "Practical mobile automation assessment using the candidate’s preferred testing tool",
                setup: "",
                expect: "A practical assessment focused on mobile automation across iOS and Android using the framework the candidate is most comfortable with.",
                prepare: [
                    "Mobile Automation: Candidate’s preferred framework.",
                    "iOS & Android Testing",
                    "Test Design: Locators, assertions, waits, reusable structure, and E2E workflows.",
                    "Troubleshooting: Synchronization, failures, and device compatibility.",
                    "Code Quality"
                ],
                recommendations: "Use the framework you know best. Clarify requirements, explain reasoning, prioritize a working solution, and demonstrate how you handle iOS and Android differences."
            },
            {
                name: "Omar Sheikh",
                hasPrep: true,
                duration: "30–60 minutes",
                platform: "Microsoft Teams",
                format: "Product & Technical Conversation",
                setup: "",
                expect: "A conversation focused on professional experience and how you would contribute to the product team. Omar may discuss projects, mobile quality challenges, and product needs.",
                prepare: [
                    "Mobile testing and automation experience.",
                    "Relevant iOS and Android projects.",
                    "Mobile defects and compatibility challenges.",
                    "Testing strategy and reliability.",
                    "Collaboration with Engineering, QA, and Product."
                ],
                recommendations: "Use specific examples and prepare questions about the product, mobile testing challenges, and team expectations."
            }
        ]
    },

    {
        id: "qa-manager",
        title: "QA Manager — Quality Engineering",
        seniority: "Manager",
        manager: "Anne Dawson",
        department: "QA",
        about: "Hands-on QA leadership role focused on building and scaling Cast & Crew’s Quality Engineering strategy, automation frameworks, and shift-left practices while continuing to contribute technically.",
        mustHaves: [
            "Playwright",
            "TypeScript / JavaScript",
            "Experience building or helping build QA teams from the ground up",
            "Continued hands-on technical involvement"
        ],
        responsibilities: [
            "Lead and mentor QA engineers while remaining hands-on.",
            "Design and evolve automation frameworks.",
            "Establish scalable testing standards.",
            "Integrate quality engineering into CI/CD and shift-left workflows.",
            "Guide testing strategy and automation architecture.",
            "Collaborate with Engineering, Product, DevOps, Platform, and Security."
        ],
        toolsRelevant: [
            "API Testing",
            "REST / GraphQL",
            "CI/CD",
            "Distributed Systems",
            "Shift-Left Testing",
            "Automation Frameworks",
            "Quality Metrics"
        ],
        toolsNice: [
            "Cypress",
            "Appium",
            "Postman / Newman",
            "BrowserStack",
            "Maestro / Detox",
            "Contract Testing",
            "Datadog",
            "Visual Regression Testing",
            "FinTech / Payroll / Regulated Environments"
        ],
        recruiterNote: "This is not a purely people-management role. The candidate must be able to build and lead teams while remaining technically involved in automation and quality engineering.",
        stages: [
            {
                name: "Anne Dawson",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Leadership & Technical Conversation",
                setup: "",
                expect: "A conversation focused on leadership, technical background, team building, automation strategy, and organizing QA operations.",
                prepare: [
                    "Team Building & Leadership",
                    "Automation Strategy",
                    "Hands-on Technical Experience",
                    "QA Strategy, CI/CD, Metrics, and Shift-Left",
                    "Examples of balancing management with hands-on engineering"
                ],
                recommendations: "Use concrete examples demonstrating both leadership and technical contributions. Be prepared to explain how you would build a QA team from scratch and establish scalable automation practices."
            },
            {
                name: "Live Coding",
                hasPrep: true,
                duration: "1 hour",
                platform: "CodeInterview.io",
                format: "Practical Playwright live coding with a QA Lead or QA Manager",
                setup: "",
                expect: "A practical Playwright assessment combining UI automation and API assertion scenarios.",
                prepare: [
                    "Playwright & TypeScript/JavaScript",
                    "UI Automation",
                    "API Testing",
                    "Test Architecture",
                    "Troubleshooting"
                ],
                recommendations: "Explain your reasoning, prioritize a working solution, write maintainable code, and be prepared to justify technical decisions."
            },
            {
                name: "Roman Smolgovsky",
                hasPrep: true,
                duration: "1 hour",
                platform: "Microsoft Teams",
                format: "Product Vision & Engineering Strategy Conversation",
                setup: "",
                expect: "A strategic and technical conversation focused on product vision, complex software ecosystems, and how Quality Engineering can support developers and improve delivery.",
                prepare: [
                    "Product & Business Understanding",
                    "Software Ecosystems",
                    "Developer Enablement",
                    "Automation & Quality Strategy",
                    "Cross-Functional Leadership"
                ],
                recommendations: "Roman values practical knowledge, independence, and direct communication. Demonstrate how QA leadership supports the broader engineering ecosystem rather than operating as an isolated testing function."
            }
        ]
    }
];


// ============================================================
// LÓGICA DE INTERFAZ Y RENDERIZADO
// ============================================================

const jobsGrid =
    document.getElementById("jobsGrid");

const searchInput =
    document.getElementById("jobSearchInput");

const filterBtns =
    document.querySelectorAll(
        "#jobFiltersContainer .filter-btn"
    );

const dirSection =
    document.getElementById(
        "jobsDirectorySection"
    );

const detailSection =
    document.getElementById(
        "jobDetailSection"
    );

const detailContent =
    document.getElementById(
        "jobDetailContent"
    );

const modal =
    document.getElementById(
        "prepModal"
    );


// ============================================================
// JOB CARDS
// ============================================================

function renderJobsGrid(data) {

    if (!jobsGrid) return;

    jobsGrid.innerHTML = "";


    if (data.length === 0) {

        jobsGrid.innerHTML = `
            <p style="
                text-align: center;
                width: 100%;
                color: #888;
                padding: 20px;
            ">
                No jobs found matching your criteria.
            </p>
        `;

        return;
    }


    data.forEach(job => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "job-card";


        card.innerHTML = `
            <h3>
                ${job.title}
            </h3>

            <p class="job-meta">

                <strong>
                    Seniority:
                </strong>

                ${job.seniority}

                <br>

                <strong>
                    Manager:
                </strong>

                ${job.manager}

            </p>

            <p>
                ${job.about}
            </p>

            <button
                class="primary-btn"
                onclick="
                    showJobDetail(
                        '${job.id}'
                    )
                "
            >
                View Details & Process &rarr;
            </button>
        `;


        jobsGrid.appendChild(
            card
        );
    });
}


// ============================================================
// SEARCH AND FILTERS
// ============================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyFilters
    );
}


if (filterBtns) {

    filterBtns.forEach(btn => {

        btn.addEventListener(
            "click",
            () => {

                filterBtns.forEach(
                    b =>
                        b.classList.remove(
                            "active"
                        )
                );


                btn.classList.add(
                    "active"
                );


                if (searchInput) {
                    searchInput.value =
                        "";
                }


                applyFilters();
            }
        );
    });
}


function applyFilters() {

    const term =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    const activeButton =
        document.querySelector(
            "#jobFiltersContainer .filter-btn.active"
        );


    const activeFilter =
        activeButton
            ? activeButton.getAttribute(
                "data-filter"
            )
            : "All";


    const filtered =
        jobsData.filter(job => {

            const suggestedQuestionText =
                job.suggestedQuestions
                    ? job.suggestedQuestions
                        .flatMap(
                            item => [
                                item.question,
                                ...item.lookFor
                            ]
                        )
                    : [];


            const searchableText = [
                job.title,
                job.manager,
                job.department,
                job.about,
                ...job.mustHaves,
                ...job.toolsRelevant,
                ...job.toolsNice,
                ...suggestedQuestionText
            ]
                .join(" ")
                .toLowerCase();


            const matchesTerm =
                searchableText.includes(
                    term
                );


            let matchesFilter =
                true;


            if (
                activeFilter !==
                "All"
            ) {

                if (
                    activeFilter ===
                    "QA"
                ) {

                    matchesFilter =
                        job.department ===
                        "QA";
                }

                else if (
                    activeFilter ===
                    "Developers"
                ) {

                    matchesFilter =
                        job.department ===
                        "Engineering";
                }

                else if (
                    activeFilter ===
                    "Fullstack"
                ) {

                    const fullstackText =
                        `${job.title} ${job.about}`
                            .toLowerCase();


                    matchesFilter =
                        fullstackText.includes(
                            "full stack"
                        ) ||
                        fullstackText.includes(
                            "full-stack"
                        );
                }
            }


            return (
                matchesTerm &&
                matchesFilter
            );
        });


    renderJobsGrid(
        filtered
    );
}


// ============================================================
// SUGGESTED QUESTIONS RENDERER
// ============================================================

function renderSuggestedQuestions(job) {

    if (
        !job.suggestedQuestions ||
        job.suggestedQuestions.length === 0
    ) {
        return "";
    }


    const questionsHtml =
        job.suggestedQuestions
            .map(
                (item, index) => {

                    const tags =
                        item.lookFor
                            .map(
                                keyword => `
                                    <span
                                        class="tag"
                                        style="
                                            font-size: 0.82rem;
                                            margin-bottom: 6px;
                                        "
                                    >
                                        ${keyword}
                                    </span>
                                `
                            )
                            .join("");


                    return `
                        <div
                            style="
                                padding: 16px 0;
                                ${
                                    index <
                                    job.suggestedQuestions.length - 1
                                        ? "border-bottom: 1px solid #E6E6E6;"
                                        : ""
                                }
                            "
                        >

                            <p
                                style="
                                    margin: 0 0 10px;
                                    font-weight: 600;
                                    color: #052446;
                                    line-height: 1.5;
                                "
                            >
                                ${index + 1}.
                                ${item.question}
                            </p>

                            <p
                                style="
                                    margin: 0 0 8px;
                                    font-size: 0.9rem;
                                    font-weight: 600;
                                    color: #666;
                                "
                            >
                                What to Look For
                            </p>

                            <div
                                class="tags-container"
                                style="
                                    justify-content: flex-start;
                                    gap: 6px;
                                "
                            >
                                ${tags}
                            </div>

                        </div>
                    `;
                }
            )
            .join("");


    return `
        <div class="detail-section">

            <h3>
                Suggested Questions
            </h3>

            <p
                style="
                    margin-bottom: 4px;
                    color: #666;
                "
            >
                Internal screening guide — listen for these key concepts in the candidate's answer.
            </p>

            ${questionsHtml}

        </div>
    `;
}


// ============================================================
// SHOW JOB DETAIL
// ============================================================

window.showJobDetail =
    function(jobId) {

        const job =
            jobsData.find(
                j =>
                    j.id === jobId
            );


        if (!job) return;


        const mustHavesTags =
            job.mustHaves
                .map(
                    item =>
                        `<span class="tag">${item}</span>`
                )
                .join("");


        let timelineHtml =
            `<div class="timeline-container">`;


        job.stages.forEach(
            (stage, index) => {

                const stepNum =
                    String(
                        index + 1
                    )
                        .padStart(
                            2,
                            "0"
                        );


                const btnHtml =
                    stage.hasPrep

                        ? `
                            <button
                                class="prep-btn"
                                onclick="
                                    openPrepModal(
                                        '${job.id}',
                                        ${index}
                                    )
                                "
                            >
                                View Prep &rarr;
                            </button>
                        `

                        : `
                            <span
                                class="prep-btn disabled"
                            >
                                ${
                                    stage.expect ||
                                    "Prep TBD"
                                }
                            </span>
                        `;


                timelineHtml += `
                    <div class="timeline-step">

                        <span
                            class="step-number"
                        >
                            ${stepNum}
                        </span>

                        <p
                            class="step-name"
                        >
                            ${stage.name}
                        </p>

                        ${
                            stage.subtitle
                                ? `
                                    <p
                                        class="step-meta"
                                    >
                                        ${stage.subtitle}
                                    </p>
                                `
                                : ""
                        }

                        ${
                            stage.duration ||
                            stage.platform

                                ? `
                                    <p
                                        class="step-meta"
                                    >

                                        ${
                                            stage.duration
                                                ? stage.duration
                                                : ""
                                        }

                                        ${
                                            stage.duration &&
                                            stage.platform
                                                ? " &middot; "
                                                : ""
                                        }

                                        ${
                                            stage.platform
                                                ? stage.platform
                                                : ""
                                        }

                                    </p>
                                `

                                : ""
                        }

                        ${
                            stage.format
                                ? `
                                    <p
                                        class="step-meta"
                                    >
                                        <strong>
                                            ${stage.format}
                                        </strong>
                                    </p>
                                `
                                : ""
                        }

                        ${btnHtml}

                    </div>
                `;


                if (
                    index <
                    job.stages.length - 1
                ) {

                    timelineHtml += `
                        <div
                            class="timeline-arrow"
                        >
                            &rarr;
                        </div>
                    `;
                }
            }
        );


        timelineHtml +=
            `</div>`;


        detailContent.innerHTML = `
            <div class="job-header">

                <h2>
                    ${job.title}
                </h2>

                <div
                    class="job-header-meta"
                >

                    <span>

                        <strong>
                            Seniority:
                        </strong>

                        ${job.seniority}

                    </span>

                    <span>

                        <strong>
                            Hiring Manager:
                        </strong>

                        ${job.manager}

                    </span>

                </div>


                <div
                    style="
                        margin-top: 20px;
                    "
                >

                    <button
                        class="copy-btn"
                        onclick="
                            copyJobDescription(
                                '${job.id}'
                            )
                        "
                    >
                        Copy Job Description
                    </button>

                </div>

            </div>


            <div class="detail-section">

                <h3>
                    About the Role
                </h3>

                <p>
                    ${job.about}
                </p>

            </div>


            <div class="detail-section">

                <h3>
                    Must-Haves (Verified)
                </h3>

                <div
                    class="tags-container"
                    style="
                        justify-content:
                            flex-start;
                    "
                >
                    ${mustHavesTags}
                </div>

            </div>


            <div class="detail-section">

                <h3>
                    Responsibilities
                </h3>

                <ul>

                    ${
                        job.responsibilities
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")
                    }

                </ul>

            </div>


            <div class="detail-section">

                <h3>
                    Additional Tools & Knowledge
                </h3>

                <p>

                    <strong>
                        Relevant:
                    </strong>

                    ${
                        job.toolsRelevant
                            .join(", ")
                    }

                </p>

                ${
                    job.toolsNice &&
                    job.toolsNice.length > 0

                        ? `
                            <p>

                                <strong>
                                    Nice to Have:
                                </strong>

                                ${
                                    job.toolsNice
                                        .join(", ")
                                }

                            </p>
                        `

                        : ""
                }

            </div>


            ${
                job.recruiterNote

                    ? `
                        <div
                            class="internal-note"
                        >

                            <h4>
                                Recruiter Note
                            </h4>

                            <p>
                                ${job.recruiterNote}
                            </p>

                        </div>
                    `

                    : ""
            }


            ${renderSuggestedQuestions(job)}


            <div
                class="detail-section"
                style="
                    background-color:
                        transparent;
                    box-shadow:
                        none;
                    padding:
                        0;
                    border-top:
                        none;
                "
            >

                <h3
                    style="
                        margin-top:
                            30px;
                    "
                >
                    Interview Process
                </h3>

                ${timelineHtml}


                ${
                    job.processNote

                        ? `
                            <p
                                class="process-note"
                                style="
                                    margin-top:
                                        14px;
                                    color:
                                        #666;
                                    font-size:
                                        0.95rem;
                                "
                            >

                                <strong>
                                    Process note:
                                </strong>

                                ${job.processNote}

                            </p>
                        `

                        : ""
                }

            </div>
        `;


        dirSection
            .classList
            .add(
                "hidden"
            );


        detailSection
            .classList
            .remove(
                "hidden"
            );


        window.scrollTo(
            0,
            0
        );
    };


// ============================================================
// BACK TO JOB DIRECTORY
// ============================================================

window.hideJobDetail =
    function() {

        detailSection
            .classList
            .add(
                "hidden"
            );


        dirSection
            .classList
            .remove(
                "hidden"
            );


        window.scrollTo(
            0,
            0
        );
    };


// ============================================================
// COPY JOB DESCRIPTION
// ============================================================

window.copyJobDescription =
    function(jobId) {

        const job =
            jobsData.find(
                j =>
                    j.id === jobId
            );


        if (!job) return;


        let html = `
            <div
                style="
                    font-family:
                        Arial,
                        sans-serif;
                    color:
                        #333;
                    line-height:
                        1.6;
                "
            >
        `;


        html += `
            <h2
                style="
                    color:
                        #052446;
                    border-bottom:
                        2px solid #E6F1FF;
                    padding-bottom:
                        8px;
                "
            >
                ${job.title}
            </h2>
        `;


        html += `
            <h3
                style="
                    color:
                        #3543D7;
                "
            >
                About the Role
            </h3>

            <p>
                ${job.about}
            </p>
        `;


        html += `
            <h3
                style="
                    color:
                        #3543D7;
                "
            >
                Requirements
            </h3>

            <ul>

                ${
                    job.mustHaves
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("")
                }

            </ul>
        `;


        html += `
            <h3
                style="
                    color:
                        #3543D7;
                "
            >
                Responsibilities
            </h3>

            <ul>

                ${
                    job.responsibilities
                        .map(
                            item =>
                                `<li>${item}</li>`
                        )
                        .join("")
                }

            </ul>
        `;


        if (
            job.toolsRelevant &&
            job.toolsRelevant.length > 0
        ) {

            html += `
                <h3
                    style="
                        color:
                            #3543D7;
                    "
                >
                    Additional Tools & Knowledge
                </h3>

                <p>
                    ${
                        job.toolsRelevant
                            .join(", ")
                    }
                </p>
            `;
        }


        if (
            job.toolsNice &&
            job.toolsNice.length > 0
        ) {

            html += `
                <h3
                    style="
                        color:
                            #3543D7;
                    "
                >
                    Nice to Have
                </h3>

                <ul>

                    ${
                        job.toolsNice
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")
                    }

                </ul>
            `;
        }


        html +=
            `</div>`;


        copyFormattedContent(
            html,
            "Job description copied successfully!"
        );
    };


// ============================================================
// PREP MODAL
// ============================================================

let currentJobForCopy =
    null;

let currentStageForCopy =
    null;


window.openPrepModal =
    function(
        jobId,
        stageIndex
    ) {

        const job =
            jobsData.find(
                j =>
                    j.id === jobId
            );


        if (!job) return;


        const stage =
            job.stages[
                stageIndex
            ];


        if (!stage) return;


        currentJobForCopy =
            job;

        currentStageForCopy =
            stage;


        document
            .getElementById(
                "modalPrepTitle"
            )
            .textContent =
            `${job.title} — ${stage.name}`;


        const durationRow =
            document.getElementById(
                "modalPrepDuration"
            );


        if (stage.duration) {

            durationRow
                .classList
                .remove(
                    "hidden"
                );


            durationRow
                .querySelector(
                    "span"
                )
                .textContent =
                stage.duration;

        }

        else {

            durationRow
                .classList
                .add(
                    "hidden"
                );
        }


        const platformRow =
            document.getElementById(
                "modalPrepPlatform"
            );


        if (stage.platform) {

            platformRow
                .classList
                .remove(
                    "hidden"
                );


            platformRow
                .querySelector(
                    "span"
                )
                .textContent =
                stage.platform;

        }

        else {

            platformRow
                .classList
                .add(
                    "hidden"
                );
        }


        const formatRow =
            document.getElementById(
                "modalPrepFormat"
            );


        if (stage.format) {

            formatRow
                .classList
                .remove(
                    "hidden"
                );


            formatRow
                .querySelector(
                    "span"
                )
                .textContent =
                stage.format;

        }

        else {

            formatRow
                .classList
                .add(
                    "hidden"
                );
        }


        let bodyHtml =
            "";


        if (stage.setup) {

            bodyHtml += `
                <div
                    class="danger-box"
                >

                    <h4>
                        ⚠️ Required Setup
                    </h4>

                    <p>
                        ${stage.setup}
                    </p>

                </div>
            `;
        }


        if (stage.expect) {

            bodyHtml += `
                <h4>
                    What to Expect
                </h4>

                <p>
                    ${stage.expect}
                </p>
            `;
        }


        if (
            stage.prepare &&
            stage.prepare.length > 0
        ) {

            bodyHtml += `
                <h4>
                    How to Prepare
                </h4>

                <ul>

                    ${
                        stage.prepare
                            .map(
                                item =>
                                    `<li>${item}</li>`
                            )
                            .join("")
                    }

                </ul>
            `;
        }


        if (
            stage.recommendations
        ) {

            bodyHtml += `
                <h4>
                    Key Recommendations
                </h4>

                <p>
                    ${stage.recommendations}
                </p>
            `;
        }


        document
            .getElementById(
                "modalPrepBody"
            )
            .innerHTML =
            bodyHtml;


        modal
            .classList
            .add(
                "active"
            );
    };


// ============================================================
// CLOSE PREP MODAL
// ============================================================

window.closePrepModal =
    function() {

        modal
            .classList
            .remove(
                "active"
            );
    };


// ============================================================
// HELPER — HTML TO PLAIN TEXT
// ============================================================

function htmlToPlainText(
    html
) {

    const temp =
        document.createElement(
            "div"
        );


    temp.innerHTML =
        html;


    return (
        temp.innerText ||
        temp.textContent ||
        ""
    );
}


// ============================================================
// HELPER — COPY FORMATTED CONTENT
// ============================================================

async function copyFormattedContent(
    html,
    successMessage
) {

    const plainText =
        htmlToPlainText(
            html
        );


    try {

        if (
            navigator.clipboard &&
            window.ClipboardItem
        ) {

            const data = [
                new ClipboardItem({

                    "text/html":
                        new Blob(
                            [html],
                            {
                                type:
                                    "text/html"
                            }
                        ),

                    "text/plain":
                        new Blob(
                            [plainText],
                            {
                                type:
                                    "text/plain"
                            }
                        )
                })
            ];


            await navigator
                .clipboard
                .write(
                    data
                );
        }

        else if (
            navigator.clipboard
        ) {

            await navigator
                .clipboard
                .writeText(
                    plainText
                );
        }

        else {

            throw new Error(
                "Clipboard API unavailable"
            );
        }


        showToast(
            successMessage
        );
    }

    catch (error) {

        const tempTextArea =
            document.createElement(
                "textarea"
            );


        tempTextArea.value =
            plainText;


        tempTextArea.style.position =
            "fixed";

        tempTextArea.style.opacity =
            "0";


        document.body.appendChild(
            tempTextArea
        );


        tempTextArea.focus();

        tempTextArea.select();


        document.execCommand(
            "copy"
        );


        document.body.removeChild(
            tempTextArea
        );


        showToast(
            successMessage
        );
    }
}


// ============================================================
// COPY PREP
// ============================================================

const copyPrepBtn =
    document.getElementById(
        "copyPrepBtn"
    );


if (copyPrepBtn) {

    copyPrepBtn.addEventListener(
        "click",
        () => {

            if (
                !currentJobForCopy ||
                !currentStageForCopy
            ) {
                return;
            }


            const job =
                currentJobForCopy;


            const stage =
                currentStageForCopy;


            let html = `
                <div
                    style="
                        font-family:
                            Arial,
                            sans-serif;
                        color:
                            #333;
                        line-height:
                            1.6;
                    "
                >
            `;


            html += `
                <h2
                    style="
                        color:
                            #052446;
                        border-bottom:
                            2px solid #E6F1FF;
                        padding-bottom:
                            8px;
                    "
                >
                    Interview Preparation:
                    ${job.title}
                    —
                    ${stage.name}
                </h2>
            `;


            if (
                stage.duration ||
                stage.platform ||
                stage.format
            ) {

                html +=
                    `<ul>`;


                if (
                    stage.duration
                ) {

                    html += `
                        <li>

                            <strong>
                                Duration:
                            </strong>

                            ${stage.duration}

                        </li>
                    `;
                }


                if (
                    stage.platform
                ) {

                    html += `
                        <li>

                            <strong>
                                Platform:
                            </strong>

                            ${stage.platform}

                        </li>
                    `;
                }


                if (
                    stage.format
                ) {

                    html += `
                        <li>

                            <strong>
                                Format:
                            </strong>

                            ${stage.format}

                        </li>
                    `;
                }


                html +=
                    `</ul>`;
            }


            if (
                stage.setup
            ) {

                html += `
                    <h3
                        style="
                            color:
                                #D73535;
                        "
                    >
                        ⚠️ Required Setup
                    </h3>

                    <p>
                        ${stage.setup}
                    </p>
                `;
            }


            if (
                stage.expect
            ) {

                html += `
                    <h3
                        style="
                            color:
                                #3543D7;
                        "
                    >
                        What to Expect
                    </h3>

                    <p>
                        ${stage.expect}
                    </p>
                `;
            }


            if (
                stage.prepare &&
                stage.prepare.length > 0
            ) {

                html += `
                    <h3
                        style="
                            color:
                                #3543D7;
                        "
                    >
                        How to Prepare
                    </h3>

                    <ul>
                `;


                stage.prepare.forEach(
                    item => {

                        html += `
                            <li>
                                ${item}
                            </li>
                        `;
                    }
                );


                html +=
                    `</ul>`;
            }


            if (
                stage.recommendations
            ) {

                html += `
                    <h3
                        style="
                            color:
                                #3543D7;
                        "
                    >
                        Key Recommendations
                    </h3>

                    <p>
                        ${stage.recommendations}
                    </p>
                `;
            }


            html +=
                `</div>`;


            copyFormattedContent(
                html,
                "Prep copied successfully!"
            );
        }
    );
}


// ============================================================
// TOAST
// ============================================================

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        message ||
        "Copied successfully!";


    toast
        .classList
        .add(
            "show"
        );


    setTimeout(
        () => {

            toast
                .classList
                .remove(
                    "show"
                );

        },
        3000
    );
}


// ============================================================
// CLOSE MODAL BEHAVIORS
// ============================================================

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modal
            ) {

                closePrepModal();
            }
        }
    );
}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
                "Escape" &&
            modal &&
            modal
                .classList
                .contains(
                    "active"
                )
        ) {

            closePrepModal();
        }
    }
);


// ============================================================
// INITIALIZATION
// ============================================================

if (jobsGrid) {

    renderJobsGrid(
        jobsData
    );
}
