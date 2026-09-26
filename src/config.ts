export const config = {
    developer: {
        name: "Abhinav",
        fullName: "Abhinav Tomar",
        title: "AI Rapid Build Engineer | Full Stack Developer",
        description: "Computer Science graduate (VIT) and AI Rapid Build Engineer at TCS building GenAI-powered enterprise applications using Azure OpenAI, LangChain, and LangGraph. Also experienced in React.js, Node.js, and Flutter production systems with 1k+ downloads."
    },
    social: {
        github: "https://github.com/abhinavthakur808",
        linkedin: "https://www.linkedin.com/in/abhinavthakur808",
        email: "abhinavthakur808@gmail.com",
        phone: "+91 8126882790",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "Computer Science graduate from Vellore Institute of Technology (VIT, 8.18 CGPA) currently working as an AI Rapid Build Engineer at Tata Consultancy Services (TCS), building GenAI-powered applications using Azure OpenAI, LangChain, and LangGraph. Also experienced in React.js, Node.js, and Flutter, with production apps including CRAMIX (a live collaborative teaching platform serving 300+ students) and AHabit (a published Play Store habit tracker with 1k+ downloads). Strong Data Structures & Algorithms fundamentals (200+ solved problems) with an exceptional 98th percentile GMAT analytical score (695/800). Passionate about turning cutting-edge AI research into robust, high-performance software."
    },
    experiences: [
        {
            position: "AI Rapid Build Engineer",
            company: "Tata Consultancy Services (TCS)",
            period: "8 Months – Present",
            location: "India",
            description: "Designing and building GenAI-powered enterprise applications using Azure OpenAI and OpenAI API, integrating LLM capabilities into mission-critical workflows. Developed multi-step agentic pipelines using LangChain and LangGraph for orchestrating tool calls, retrieval (RAG), and conversational flows. Rapidly prototyped and demoed AI proof-of-concepts using Python and Streamlit, accelerating stakeholder feedback cycles within an Agile rapid-build environment.",
            responsibilities: [
                "Architected GenAI applications using Azure OpenAI and OpenAI API for enterprise workflows",
                "Developed multi-step agentic pipelines with LangChain and LangGraph for tool execution and retrieval",
                "Built and deployed rapid AI prototypes using Python, Streamlit, and RAG pipelines",
                "Collaborated with cross-functional teams to translate business requirements into working prototypes"
            ],
            technologies: ["Azure OpenAI", "LangChain", "LangGraph", "Python", "Streamlit", "RAG", "Prompt Engineering"]
        },
        {
            position: "Full Stack Developer Intern",
            company: "Ethnus – MERN Stack Industrial Training",
            period: "4 Months",
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
            company: "Google Play Store",
            period: "2024 – Present",
            location: "India",
            description: "Independently designed, developed, and published AHabit to Google Play Store, achieving 1,000+ downloads. Engineered interactive home screen widgets, daily streak tracking, and smart local reminder scheduling. Solved complex Kotlin Int/Long type mismatch in SharedPreferences for real-time widget sync with sub-100ms response times. Architected offline-first local persistence using Hive.",
            responsibilities: [
                "Built and published cross-platform Flutter habit tracker to Google Play Store (1k+ downloads)",
                "Engineered native Android home screen widgets using Kotlin and SharedPreferences sync",
                "Implemented offline-first storage architecture with Hive local database",
                "Optimized background notification scheduling and streak computation"
            ],
            technologies: ["Flutter", "Dart", "Kotlin", "Android", "Hive", "Local Notifications"]
        },
        {
            position: "Management Team Member",
            company: "Otaku Club VIT",
            period: "Jan 2023 – Present",
            location: "Vellore, India",
            description: "Organized 5+ major community events for a 200+ member club, managing end-to-end event logistics, member engagement, and interactive workshops.",
            responsibilities: [
                "Organized 5+ community events for 200+ active members",
                "Managed event logistics, scheduling, and digital marketing",
                "Facilitated team collaboration and member engagement initiatives"
            ],
            technologies: ["Leadership", "Teamwork", "Event Management", "Communication"]
        },
        {
            position: "B.Tech in Computer Science & Engineering",
            company: "Vellore Institute of Technology (VIT)",
            period: "2021 – 2025",
            location: "Vellore, India",
            description: "Graduated with 8.18 / 10.0 CGPA. Core focus in Data Structures & Algorithms, OOP, Database Management Systems, and Operating Systems. Achieved 695 / 800 in GMAT (≈ 98th Percentile Globally), demonstrating exceptional analytical, quantitative, and verbal reasoning abilities.",
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
            title: "CRAMIX",
            category: "Full-Stack Web & Real-Time",
            technologies: "React.js, Node.js, MongoDB, WebSocket, JWT, Zoom SDK, Vercel",
            image: "/images/cramix.png",
            description: "A full-stack live collaborative teaching platform serving 300+ college students. Features real-time chatrooms via WebSocket, live interactive video sessions via Zoom SDK integration, JWT-based authentication with role-based access control (RBAC), and a responsive mobile-first UI that improved student engagement by 40%.",
            link: "https://cramix.vercel.app"
        },
        {
            id: 2,
            title: "AHabit – Habit Tracker",
            category: "Mobile App • Play Store (1k+ DL)",
            technologies: "Flutter, Dart, Kotlin, Hive, Home Widgets, Local Notifications",
            image: "/images/ahabit.png",
            description: "Cross-platform mobile habit tracker published on Google Play Store with 1k+ downloads. Features home screen widgets, daily streak tracking, smart reminders, sub-100ms UI response times via SharedPreferences synchronization, and offline-first Hive persistence.",
            link: "https://play.google.com/store"
        },
        {
            id: 3,
            title: "Enterprise GenAI Agent Pipeline",
            category: "GenAI • Agentic Systems • RAG",
            technologies: "Azure OpenAI, LangGraph, LangChain, Python, Streamlit, RAG",
            image: "/images/genai_pipeline.png",
            description: "Multi-step agentic pipelines developed at TCS for enterprise automation. Features autonomous tool calling, intelligent document retrieval with RAG, and conversational agent workflows with fast Streamlit prototyping.",
            link: "https://github.com/abhinavthakur808"
        },
        {
            id: 4,
            title: "MERN Analytics Dashboard",
            category: "Full-Stack Development",
            technologies: "React.js, Node.js, Express.js, MongoDB, RESTful APIs, Redux",
            image: "/images/mern_portal.png",
            description: "Component-driven enterprise web application built during Ethnus MERN Stack training. Features dynamic dashboards, JWT auth flows, and optimized rendering cycles that cut team bug rate by ~20%.",
            link: "https://github.com/abhinavthakur808"
        },
        {
            id: 5,
            title: "DSA & Algorithmic Problem Solving",
            category: "Algorithms • C++ • Java",
            technologies: "C++, Java, Data Structures, Algorithms, Graph Theory, DP",
            image: "/images/dsa_engine.png",
            description: "200+ solved algorithmic challenges across LeetCode and Coding Ninjas. Emphasizes optimal time and space complexity in binary trees, graph algorithms, dynamic programming, and systems problem solving.",
            link: "/play"
        },
        {
            id: 6,
            title: "Spring AI Microservices",
            category: "AI Backend & Distributed Systems",
            technologies: "Spring AI, Java, REST APIs, Microservices, Vector DB, Docker",
            image: "/images/spring_ai.png",
            description: "Enterprise Java backend service powered by Spring AI, integrating LLMs, semantic vector embeddings, and real-time inference into resilient microservice architectures.",
            link: "https://github.com/abhinavthakur808"
        }
    ],
    contact: {
        email: "abhinavthakur808@gmail.com",
        phone: "+91 8126882790",
        github: "https://github.com/abhinavthakur808",
        linkedin: "https://www.linkedin.com/in/abhinavthakur808",
        twitter: "https://x.com/abhinavtomar",
        facebook: "https://facebook.com/abhinavtomar",
        instagram: "https://instagram.com/abhinavtomar"
    },
    skills: {
        develop: {
            title: "AI & GENAI DEVELOPER",
            description: "Enterprise Agentic Pipelines, LLMs & Intelligent Systems",
            details: "Designing and building GenAI applications using Azure OpenAI, OpenAI API, LangChain, and LangGraph. Developing multi-step agentic pipelines for tool calling, retrieval-augmented generation (RAG), prompt engineering, and conversational workflows.",
            tools: [
                "Azure OpenAI",
                "OpenAI API",
                "LangChain",
                "LangGraph",
                "Python",
                "Streamlit",
                "Prompt Engineering",
                "RAG",
                "Spring AI",
                "C++",
                "Java",
                "SQL"
            ]
        },
        design: {
            title: "FULL-STACK & MOBILE",
            description: "Modern Scalable Web & Native Mobile Engineering",
            details: "Building responsive, component-driven UIs and robust backend architectures with React.js, Node.js, Express, MongoDB, and Flutter. Shipped production systems including live real-time platforms (WebSocket + Zoom SDK) and Android apps with 1k+ Play Store downloads.",
            tools: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Flutter",
                "Dart",
                "Android (Kotlin)",
                "WebSocket",
                "REST APIs",
                "JWT",
                "Tailwind CSS",
                "Git & GitHub"
            ]
        }
    }
};
