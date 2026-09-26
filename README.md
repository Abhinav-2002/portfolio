# Abhinav Tomar — 3D Motion Graphics Developer Portfolio

A responsive, award-winning style 3D developer portfolio website built with **React**, **TypeScript**, **Three.js**, **GSAP**, and **Vite**.

Inspired by modern creative developer portfolios, tailored specifically for **Abhinav Tomar** (AI Rapid Build Engineer & Full Stack Developer).

---

## 🌟 Key Features & Animations

- **Interactive 3D Cyberpunk Character**:
  - Rendered with Three.js WebGL & HDR environment lighting
  - Head and eye tracking following your cursor smoothly (LERP)
  - Procedural keyboard typing animations and realistic laptop screen glow flickers
  - Eyebrow interaction on mouse hover
- **Cinematic Scroll-Driven Animations**:
  - Seamless GSAP ScrollTrigger timeline moving and zooming the 3D scene through Hero, About, and What I Do sections
  - Horizontal scroll pinning for featured projects
  - Dynamic expanding career timeline with pulsating status dot
  - Custom split-text character roll-ups and letter reveal animations
- **Retro Pong Game Loader & Spotlights**:
  - Interactive loader screen with mini Pong tennis paddle game
  - Dynamic mouse radial spotlight tracking with CSS variables
  - Zoom transition revealing the portfolio upon loading completion
- **Tech Stack Inverted Pyramid**:
  - Glowing 6-tier pyramid showcasing LangChain, LangGraph, Azure OpenAI, Python, React, Flutter, and algorithms
- **Interactive AI Persona & Chess Playground (`/play`)**:
  - Custom AI chat persona loaded with Abhinav's real engineering background and achievements
  - Interactive chess board with high-performance engine
- **Direct Resume Download**:
  - Integrated with the user's actual uploaded resume PDF (`/resume.pdf`)

---

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/
│   ├── draco/               # 3D Draco decompression binaries
│   ├── images/              # Custom high-tech project banners & profile graphics
│   ├── models/              # 3D Cyberpunk character model & HDR environment map
│   ├── video/               # Ambient tech stack background video
│   └── resume.pdf           # Abhinav Tomar's uploaded resume PDF
├── src/
│   ├── components/
│   │   ├── Character/       # Three.js 3D character, shaders, animations, and lighting
│   │   ├── styles/          # Section-specific CSS styling & cyberpunk effects
│   │   ├── utils/           # GSAP timelines, text splitters, and initial FX
│   │   ├── Career.tsx       # Experience & Career timeline
│   │   ├── Contact.tsx      # Contact links, social icons, and copyright
│   │   ├── Cursor.tsx       # Custom magnetic cursor
│   │   ├── Landing.tsx      # Hero section with dual alternating role titles
│   │   ├── Loading.tsx      # Retro Pong loader & spotlight button
│   │   ├── Navbar.tsx       # Glassmorphism navbar & Lenis smooth scroll
│   │   ├── SocialIcons.tsx  # Magnetic social icons & Resume download button
│   │   ├── TechStackNew.tsx # Inverted pyramid of technologies
│   │   ├── WhatIDo.tsx      # Cyberpunk dashed cards & skillset breakdown
│   │   └── Work.tsx         # Horizontal project scroll showcase
│   ├── pages/
│   │   ├── MyWorks.tsx      # Complete project showcase grid
│   │   └── Play.tsx         # AI persona chat & Chess playground
│   ├── config.ts            # Centralized configuration with Abhinav Tomar's details
│   ├── App.tsx              # Router setup & routes
│   └── main.tsx             # Application entry point
├── package.json
└── vite.config.ts
```

---

## 💼 Featured Projects in Portfolio

1. **CRAMIX** — Live Collaborative Teaching Platform (React.js, Node.js, WebSocket, Zoom SDK, MongoDB)
2. **AHabit** — Smart Habit Tracker App published on Google Play Store (1k+ downloads, Flutter, Kotlin widgets, Hive DB)
3. **Enterprise GenAI Agent Pipeline** — Multi-step agentic reasoning pipelines with Azure OpenAI, LangChain & LangGraph (TCS)
4. **MERN Analytics Portal** — Component-driven enterprise dashboard (React, Express, MongoDB)
5. **DSA & Problem Solving Engine** — 200+ solved algorithmic problems on LeetCode & Coding Ninjas (Top 2% GMAT)
6. **Spring AI Microservices** — Distributed Java microservices with vector search & LLM embeddings
