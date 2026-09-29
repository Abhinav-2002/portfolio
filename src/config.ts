export const config = {
    developer: {
        name: "Abhinav",
        fullName: "Abhinav Tomar",
        title: "AI Agentic Engineer | Rapid Build Developer",
        description: "1+ year of experience currently focused on AI Agentic Roles, designing and shipping multi-step agentic pipelines, custom MCP servers, and enterprise GenAI systems using Azure OpenAI, LangChain, and LangGraph."
    },
    social: {
        github: "https://github.com/Abhinav-2002",
        linkedin: "https://www.linkedin.com/in/abhinav-tomar-87339b28a/",
        email: "abhinavthakur808@gmail.com",
        phone: "+91 8126882790",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "Computer Science graduate from Vellore Institute of Technology (VIT, 8.18 CGPA) with 1+ year of experience, currently focused on AI Agentic Roles as an AI Rapid Build Engineer at Tata Consultancy Services (TCS). I specialize in designing autonomous agentic pipelines with LangGraph & LangChain, building custom Model Context Protocol (MCP) servers for enterprise tabular data (CSV/Excel), and integrating Azure OpenAI capabilities into mission-critical workflows. In addition to enterprise AI, I founded and shipped RoleFit AI (live precision resume matching SaaS), AHabit (published on Google Play Store with 1,000+ downloads), and CRAMIX live teaching platform (300+ students). With strong Data Structures & Algorithms foundations (200+ solved problems) and a 98th percentile GMAT analytical score (695/800), I transform complex problem domains into production-grade autonomous software."
    },
    experiences: [
        {
            position: "AI Rapid Build Engineer",
            company: "Tata Consultancy Services (TCS)",
            period: "1+ Year – Present",
            location: "India",
            description: "Leading rapid-build development of GenAI and AI Agentic systems using Azure OpenAI and OpenAI API. Architected multi-step agentic pipelines using LangChain and LangGraph for tool execution, retrieval (RAG), and conversational reasoning. Engineered custom CSV and Excel Model Context Protocol (MCP) servers allowing autonomous agents to query and transform complex enterprise tabular data. Prototyped high-impact AI solutions accelerating client validation cycles.",
            responsibilities: [
                "Architected GenAI applications using Azure OpenAI and OpenAI API for enterprise workflows",
                "Developed multi-step agentic pipelines with LangChain and LangGraph for tool execution and retrieval",
                "Built custom CSV & Excel MCP servers for autonomous agent dataset analysis",
                "Rapidly built and deployed AI prototypes with Streamlit and Python within tight Agile delivery timelines"
            ],
            technologies: ["AI Agents", "MCP", "LangGraph", "LangChain", "Azure OpenAI", "Python", "Streamlit", "RAG"]
        },
        {
            position: "Full Stack Developer Intern",
            company: "Ethnus – MERN Stack Industrial Training",
            period: "2024",
            location: "India",
            description: "Engineered responsive, component-driven UIs using React.js with modern hooks and state management, cutting page load time by optimizing rendering cycles. Integrated RESTful APIs from Node.js/Express backend into frontend, enabling seamless data flow across auth flows and dynamic dashboards. Led Agile code reviews that drove team improvements and reduced bug rate by approximately 20%.",
            responsibilities: [
                "Engineered component-driven UIs with React.js, hooks, and optimized rendering cycles",
                "Integrated RESTful APIs from Node.js & Express into dynamic frontend dashboards",
                "Implemented secure authentication and state management architectures",
                "Led Agile code reviews cutting team bug rate by ~20%"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Agile"]
        },
        {
            position: "Mobile App Developer (Independent)",
            company: "Google Play Store (AHabit)",
            period: "2024",
            location: "India",
            description: "Independently designed, developed, and published AHabit to Google Play Store, achieving 1,000+ active downloads. Engineered native Android home screen widgets in Kotlin with sub-100ms SharedPreferences synchronization, resolved complex Int/Long type sync mismatches, and built an offline-first persistence engine with Hive database.",
            responsibilities: [
                "Built and published cross-platform Flutter habit tracker to Google Play Store (1k+ downloads)",
                "Engineered native Android home screen widgets using Kotlin and SharedPreferences sync",
                "Implemented offline-first storage architecture with Hive local database",
                "Optimized background notification scheduling and streak computation"
            ],
            technologies: ["Flutter", "Dart", "Kotlin", "Android", "Hive DB", "Local Notifications"]
        },
        {
            position: "Management Team Member",
            company: "Otaku Club VIT",
            period: "2023",
            location: "Vellore, India",
            description: "During college at VIT, organized 5+ major community events for a 200+ member club, managing end-to-end event logistics, digital campaigns, member engagement, and interactive tech workshops.",
            responsibilities: [
                "Organized 5+ community events for 200+ active club members during college",
                "Managed event logistics, scheduling, and digital outreach",
                "Facilitated team collaboration and member engagement initiatives"
            ],
            technologies: ["Leadership", "Event Logistics", "Community Management", "Communication"]
        },
        {
            position: "B.Tech in Computer Science & Engineering",
            company: "Vellore Institute of Technology (VIT)",
            period: "2021 – 2025",
            location: "Vellore, India",
            description: "Graduated with 8.18 / 10.0 CGPA in Computer Science. Core focus in Data Structures & Algorithms, OOP, Database Management Systems, and Operating Systems. Achieved 695 / 800 in GMAT (≈ 98th Percentile Globally), demonstrating exceptional analytical, quantitative, and verbal reasoning abilities.",
            responsibilities: [
                "Graduated with 8.18 / 10.0 CGPA in Computer Science",
                "Achieved 695 / 800 GMAT score (Top 2% globally)",
                "Solved 200+ DSA algorithmic challenges on LeetCode and Coding Ninjas"
            ],
            technologies: ["DSA", "OOP", "DBMS", "Operating Systems", "C++", "Java"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "RoleFit AI – Precision Resume & ATS Matcher",
            category: "Live AI SaaS • LLM Pipeline • ATS Engine",
            technologies: "Next.js, React, Node.js, LLM APIs, Web Scraping, PDF Engine, Vercel",
            image: "/images/rolefit_ai.png",
            description: "Launched production AI SaaS that automates the job application workflow. Features master PDF resume parsing, instant job requirement scraping from LinkedIn, Greenhouse, Ashby & Lever, fit radar gap scoring, and 1-click tailored ATS resume generation.",
            link: "https://saas-psi-flax.vercel.app/"
        },
        {
            id: 2,
            title: "Custom CSV & Excel MCP Server",
            category: "Enterprise AI • Built at TCS (Proprietary / Internal)",
            technologies: "Model Context Protocol (MCP), Python, Pandas, Azure OpenAI, LangGraph",
            image: "/images/mcp_server.png",
            description: "High-performance Model Context Protocol (MCP) server engineered at TCS for enterprise automation. Empowers autonomous AI agents to inspect, filter, query, transform, and analyze enterprise CSV/Excel spreadsheets via standard MCP protocols. (Internal enterprise tool — code proprietary to TCS).",
            link: ""
        },
        {
            id: 3,
            title: "AHabit – Smart Habit Tracker",
            category: "Mobile App • Play Store (1k+ DL)",
            technologies: "Flutter, Dart, Kotlin, Hive DB, Home Widgets, Local Notifications",
            image: "/images/ahabit.png",
            description: "Cross-platform mobile habit tracker published on Google Play Store with 1,000+ active downloads. Features native Android home screen widgets, daily streak tracking, sub-100ms sync, and offline-first Hive persistence.",
            link: "https://play.google.com/store/apps/details?id=com.ahabit.tracker"
        },
        {
            id: 4,
            title: "CRAMIX",
            category: "Full-Stack Web & Real-Time Platform",
            technologies: "React.js, Node.js, MongoDB, WebSocket, Zoom SDK, JWT, Vercel",
            image: "/images/cramix.png",
            description: "Shipped a full-stack live collaborative teaching platform serving 300+ college students. Features real-time chatrooms via WebSocket, interactive live video sessions via Zoom SDK, JWT role-based access control (RBAC), and responsive mobile-first UI.",
            link: "https://cramix.vercel.app"
        },
        {
            id: 5,
            title: "AI Persona & Chess Playground",
            category: "Interactive AI & Game Engine",
            technologies: "Google Gemini 2.5 Flash, React, Chess.js, WebAssembly",
            image: "/images/dsa_engine.png",
            description: "Interactive gaming and AI playground featuring a conversational persona trained on Abhinav's technical career and a high-performance chess engine with full move validation.",
            link: "/play"
        }
    ],
    contact: {
        email: "abhinavthakur808@gmail.com",
        phone: "+91 8126882790",
        github: "https://github.com/Abhinav-2002",
        linkedin: "https://www.linkedin.com/in/abhinav-tomar-87339b28a/"
    },
    skills: {
        develop: {
            title: "AI & AGENTIC SYSTEMS",
            description: "Autonomous Agentic Pipelines, MCP Servers & Enterprise LLMs",
            details: "Specializing in AI Agentic Roles with 1+ year of experience. Architecting multi-step agentic pipelines with LangChain & LangGraph, custom Model Context Protocol (MCP) CSV/Excel servers, Azure OpenAI, structured tool calling, and retrieval-augmented generation (RAG).",
            tools: [
                "AI Agents",
                "LangGraph",
                "LangChain",
                "MCP Servers",
                "Azure OpenAI",
                "Python",
                "Streamlit",
                "RAG",
                "Prompt Engineering",
                "C++",
                "Java",
                "SQL"
            ]
        },
        design: {
            title: "FULL-STACK & MOBILE",
            description: "Modern Scalable Web & Native Mobile Systems",
            details: "Building responsive, component-driven web platforms and native mobile apps with React.js, Next.js, Node.js, Express, MongoDB, and Flutter. Shipped production systems including RoleFit AI (live precision resume matching SaaS), AHabit on Google Play Store (1k+ downloads), and CRAMIX live teaching platform (300+ users).",
            tools: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Flutter",
                "Dart",
                "Android (Kotlin)",
                "PWA",
                "WebSocket",
                "REST APIs",
                "JWT",
                "Git & GitHub"
            ]
        }
    }
};
