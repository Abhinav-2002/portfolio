import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Chess, Square, PieceSymbol, Color } from "chess.js";
import RedoxChessEngine from "../utils/redoxchessEngine";
import "./Play.css";

// Piece SVG components matching chess.com style with custom colors
const PIECES: Record<string, string> = {
  // White pieces (light cream color)
  wK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  wQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L14 11v14L7 14l2 12z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
  wR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>`,
  wB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  wN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#fff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#fff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#000" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  wP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
  // Black pieces (dark purple color matching theme)
  bK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6" stroke="#c2a4ff"/><path fill="#1a1a2e" stroke="#c2a4ff" d="M20 8h5"/><path fill="#1a1a2e" stroke="#c2a4ff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#1a1a2e" stroke="#c2a4ff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path stroke="#c2a4ff" d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  bQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#1a1a2e"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path fill="#1a1a2e" stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path fill="#1a1a2e" stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke-linecap="butt" d="M11 38.5a35 35 1 0 0 23 0"/><path fill="none" d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0"/></g></svg>`,
  bR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#1a1a2e" stroke-linecap="butt" d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z"/><path fill="#1a1a2e" stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13H14z"/><path fill="#1a1a2e" stroke-linecap="butt" d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"/><path fill="none" stroke-linejoin="miter" d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"/></g></svg>`,
  bB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#1a1a2e" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  bN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#1a1a2e" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#1a1a2e" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#c2a4ff" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  bP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#1a1a2e" stroke="#c2a4ff" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
};

interface MoveHistory {
  from: string;
  to: string;
  piece: string;
  captured?: string;
  san: string;
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// API key is now handled server-side in api/chat.js

const SYSTEM_PROMPT = `You are the interactive AI persona for Abhinav Tomar. Speak in Abhinav's first-person voice ("I", "my", "me") as a warm, articulate, and technically sharp software engineer. Use the facts below and say when something is not known. Never invent false details.

Profile:
- Name: Abhinav Tomar; based in India.
- Role: AI Rapid Build Engineer at Tata Consultancy Services (TCS) & Full Stack Developer (MERN Stack).
- Education: Bachelor of Technology in Computer Science from Vellore Institute of Technology (VIT, Vellore, 2021 – 2025, 8.18 CGPA).
- Quantitative & Analytical: GMAT score 695 / 800 (≈ 98th Percentile Globally).
- Core Languages: Python, JavaScript (ES6+), TypeScript, C++, Java, Kotlin, Dart, SQL, HTML5, CSS3.
- AI & GenAI: Azure OpenAI, OpenAI API, LangChain, LangGraph, Streamlit, Prompt Engineering, RAG, Spring AI.
- Full Stack & Mobile: React.js, Node.js, Express.js, Flutter, Redux, Tailwind CSS, Hive DB, MongoDB, MySQL, Firebase, WebSocket, REST APIs, Zoom SDK.
- Core CS: 200+ solved DSA challenges on LeetCode & Coding Ninjas (C++ & Java), OOP, DBMS, OS, Android.
- Community: Management Team Member at Otaku Club VIT (organized 5+ community events for 200+ members).

Career Experience:
- AI Rapid Build Engineer at TCS (8 Months – Present): Designed and built GenAI applications using Azure OpenAI and OpenAI API. Built multi-step agentic pipelines using LangChain and LangGraph for orchestrating tool calls, RAG retrieval, and conversational flows. Rapidly prototyped AI POCs using Python and Streamlit.
- Full Stack Developer Intern at Ethnus (4 Months): Engineered component-driven React UIs, integrated RESTful APIs with Node.js/Express, cut page load times, and led Agile code reviews reducing team bug rate by ~20%.
- Independent Mobile Developer: Shipped AHabit to Google Play Store (1k+ downloads) with home screen widgets and offline-first Hive storage.

Key Projects:
- Custom CSV & Excel MCP Server: High-performance Model Context Protocol (MCP) server engineered at TCS for enterprise automation. It allows AI agents to inspect, filter, query, transform, and analyze enterprise spreadsheets via standard MCP protocols. Note: As an enterprise internal tool built at TCS, its source code is proprietary and not hosted on a public GitHub repo.
- CRAMIX: Full-stack live collaborative teaching platform serving 300+ college students. Features WebSocket real-time chatrooms, Zoom SDK live video sessions, JWT role-based access control, and responsive React.js UI deployed on Vercel.
- AHabit: Cross-platform habit tracker on Google Play Store (1,000+ active downloads). Features Android home screen widgets, daily streak tracking, smart notifications, and sub-100ms sync.
- AI Persona & Chess Playground: Interactive AI game and persona system running on Google Gemini.

Contact and links:
- Email: abhinavthakur808@gmail.com
- Phone: +91 8126882790
- GitHub: https://github.com/Abhinav-2002
- LinkedIn: https://www.linkedin.com/in/abhinav-tomar-87339b28a/

Conversation rules:
1. Answer directly, naturally, and concisely; expand with technical depth when asked.
2. For project questions, explain architecture, technologies, and achievements.
3. For chess questions, engage pleasantly and discuss strategy.
4. Keep the tone friendly, professional, humble, and forward-looking.`;

const Play = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<Square[]>([]);
  const [moveHistory, setMoveHistory] = useState<MoveHistory[]>([]);
  const [capturedWhite, setCapturedWhite] = useState<string[]>([]);
  const [capturedBlack, setCapturedBlack] = useState<string[]>([]);
  const [boardFlipped, setBoardFlipped] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [gameStatus, setGameStatus] = useState<string>("");
  const [playerColor] = useState<Color>("w");
  const [engineThinking, setEngineThinking] = useState(false);
  const redoxchessRef = useRef<RedoxChessEngine | null>(null);

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello there! I am Abhinav Tomar 👋 Ask me anything about my projects, GenAI work at TCS, full-stack development, or background!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const files = boardFlipped ? ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'] : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = boardFlipped ? ['1', '2', '3', '4', '5', '6', '7', '8'] : ['8', '7', '6', '5', '4', '3', '2', '1'];

  const updateGameStatus = useCallback((g: Chess) => {
    if (g.isCheckmate()) {
      setGameStatus(g.turn() === 'w' ? 'Checkmate! Black wins!' : 'Checkmate! White wins!');
    } else if (g.isDraw()) {
      if (g.isStalemate()) setGameStatus('Draw by stalemate');
      else if (g.isThreefoldRepetition()) setGameStatus('Draw by repetition');
      else if (g.isInsufficientMaterial()) setGameStatus('Draw by insufficient material');
      else setGameStatus('Draw');
    } else if (g.isCheck()) {
      setGameStatus(g.turn() === 'w' ? 'White is in check!' : 'Black is in check!');
    } else {
      setGameStatus(g.turn() === 'w' ? "White's turn" : "Black's turn");
    }
  }, []);

  useEffect(() => {
    updateGameStatus(game);
  }, [game, updateGameStatus]);

  useEffect(() => {
    const initEngine = async () => {
      redoxchessRef.current = new RedoxChessEngine();
      await redoxchessRef.current.init();
    };
    initEngine();
    return () => {
      redoxchessRef.current?.quit();
    };
  }, []);

  useEffect(() => {
    if (game.turn() === 'b' && !game.isGameOver() && redoxchessRef.current) {
      setEngineThinking(true);
      redoxchessRef.current.setPosition(game.fen());
      redoxchessRef.current.getBestMove((move) => {
        const from = move.substring(0, 2) as Square;
        const to = move.substring(2, 4) as Square;
        makeMove(from, to);
        setEngineThinking(false);
      }, 12);
    }
  }, [game]);

  const getPieceAt = (square: Square): { type: PieceSymbol; color: Color } | null => {
    return game.get(square) || null;
  };

  const handleSquareClick = (square: Square) => {
    if (engineThinking || game.turn() !== 'w') return;
    const piece = getPieceAt(square);

    // If a piece is already selected
    if (selectedSquare) {
      // Try to make a move
      if (possibleMoves.includes(square)) {
        makeMove(selectedSquare, square);
      } else if (piece && piece.color === game.turn()) {
        // Select a different piece of the same color
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setPossibleMoves(moves.map(m => m.to as Square));
      } else {
        // Deselect
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } else {
      // Select a piece if it's the current player's turn
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setPossibleMoves(moves.map(m => m.to as Square));
      }
    }
  };

  const makeMove = (from: Square, to: Square) => {
    try {
      const gameCopy = new Chess(game.fen());
      const move = gameCopy.move({ from, to, promotion: 'q' }); // Auto-promote to queen

      if (move) {
        // Update captured pieces
        if (move.captured) {
          if (move.color === 'w') {
            setCapturedBlack(prev => [...prev, move.captured!]);
          } else {
            setCapturedWhite(prev => [...prev, move.captured!]);
          }
        }

        // Update move history
        setMoveHistory(prev => [...prev, {
          from: move.from,
          to: move.to,
          piece: move.piece,
          captured: move.captured,
          san: move.san
        }]);

        setLastMove({ from: from, to: to });
        setGame(gameCopy);
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } catch {
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  };

  const resetGame = () => {
    setGame(new Chess());
    setSelectedSquare(null);
    setPossibleMoves([]);
    setMoveHistory([]);
    setCapturedWhite([]);
    setCapturedBlack([]);
    setLastMove(null);
    setGameStatus("White's turn");
    setBoardFlipped(false);
  };

  const flipBoard = () => {
    // If game is in progress, ask to start new game
    if (moveHistory.length > 0) {
      if (window.confirm('Start new game?')) {
        resetGame();
        setBoardFlipped(!boardFlipped);
      }
      return;
    }
    setBoardFlipped(!boardFlipped);
  };

  const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || "";

  const getOnDevicePersonaResponse = (query: string): string => {
    const q = query.toLowerCase().trim();

    if (q.includes("mcp") || q.includes("csv") || q.includes("excel")) {
      return "At TCS, I designed and implemented a custom Model Context Protocol (MCP) server for CSV and Excel files. As an enterprise internal tool built for TCS client workflows, it allows autonomous AI agents (using LangGraph, LangChain, and Cursor) to inspect schemas, execute parameterized queries, filter rows, and extract verified tabular insights without hallucinations. Because it was developed as an enterprise tool at TCS, its codebase is proprietary and not hosted on a public GitHub repo.";
    }

    if (q.includes("ahabit") || q.includes("habit") || q.includes("play store") || q.includes("tracker")) {
      return "I built and published AHabit to the Google Play Store (1,000+ active downloads)! It's a cross-platform Flutter app with native Android home screen widgets written in Kotlin, sub-100ms sync via SharedPreferences, smart reminders, and an offline-first architecture using Hive.";
    }

    if (q.includes("cramix") || q.includes("teaching") || q.includes("zoom")) {
      return "CRAMIX is a full-stack live collaborative teaching platform serving 300+ students. I engineered real-time chatrooms with WebSockets, live video sessions with Zoom SDK, JWT role-based access control, and a responsive React frontend deployed on Vercel.";
    }

    if (q.includes("experience") || q.includes("tcs") || q.includes("work") || q.includes("job") || q.includes("role") || q.includes("years") || q.includes("year")) {
      return "I have 1+ year of engineering experience currently focused on AI Agentic Roles as an AI Rapid Build Engineer at Tata Consultancy Services (TCS). My day-to-day involves designing multi-step agentic pipelines with LangGraph & LangChain, integrating Azure OpenAI into enterprise systems, and building custom MCP servers. Previously, I worked as a Full Stack Developer Intern at Ethnus.";
    }

    if (q.includes("agent") || q.includes("agentic") || q.includes("langgraph") || q.includes("langchain")) {
      return "I'm heavily focused on AI Agentic architectures! At TCS, I build autonomous multi-step reasoning loops using LangGraph and LangChain, integrating tools via MCP (Model Context Protocol), semantic retrieval with RAG, and Azure OpenAI LLMs to automate complex enterprise decisions.";
    }

    if (q.includes("skills") || q.includes("tech stack") || q.includes("technologies") || q.includes("tools")) {
      return "My core tech stack covers: \n• AI & Agents: LangChain, LangGraph, Azure OpenAI, OpenAI API, Custom MCP Servers, RAG, Streamlit\n• Languages: Python, JavaScript (ES6+), TypeScript, C++, Java, Kotlin, Dart\n• Full-Stack & Mobile: React.js, Node.js, Express, MongoDB, Flutter, Hive DB, WebSocket, REST APIs\n• CS Fundamentals: 200+ solved DSA problems, DBMS, OOP, System Architecture.";
    }

    if (q.includes("education") || q.includes("college") || q.includes("vit") || q.includes("degree") || q.includes("gmat")) {
      return "I graduated with a B.Tech in Computer Science & Engineering from Vellore Institute of Technology (VIT, Vellore) with an 8.18 CGPA. I also achieved a 695 / 800 on the GMAT (≈ 98th Percentile Globally), reflecting strong quantitative and analytical problem-solving skills!";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone") || q.includes("reach") || q.includes("linkedin") || q.includes("github")) {
      return "I'd love to connect! You can reach me via email at abhinavthakur808@gmail.com, phone at +91 8126882790, LinkedIn (https://www.linkedin.com/in/abhinav-tomar-87339b28a/), or explore my code on GitHub (https://github.com/Abhinav-2002).";
    }

    if (q.includes("chess") || q.includes("elo") || q.includes("game")) {
      return "Chess is one of my favorite strategy games! This engine on the board is rated 3640 ELO and calculates deep tactical lines with bitboards and alpha-beta pruning. Make a move on the board to test your strategy!";
    }

    if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("who are you")) {
      return "Hey! I'm Abhinav Tomar 👋 AI Rapid Build Engineer at TCS specializing in AI Agentic systems, multi-step LLM pipelines, and full-stack development. Feel free to ask me anything about my work, projects, or background!";
    }

    return "Thanks for asking! As an AI Rapid Build Engineer at TCS with 1+ year of experience, I focus on building production-ready AI Agentic workflows (LangGraph, Azure OpenAI, custom MCP servers) and full-stack applications like AHabit and CRAMIX. Feel free to ask about any specific project or my tech stack!";
  };

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const currentText = chatInput;
    const userMessage: ChatMessage = { role: 'user', content: currentText };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    let answer = "";

    // 1. Try Google Gemini API with provided key
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${currentText}` }]
            }
          ]
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (geminiText) {
          answer = geminiText;
        }
      }
    } catch (e) {
      console.warn("Direct Gemini call bypassed, falling back:", e);
    }

    // 2. If Gemini didn't respond, try /api/chat serverless route
    if (!answer) {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...chatMessages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content })),
              { role: 'user', content: currentText }
            ],
          }),
        });
        if (response.ok) {
          const data = await response.json();
          if (data?.choices?.[0]?.message?.content) {
            answer = data.choices[0].message.content;
          }
        }
      } catch (e) {
        console.warn("API route bypassed:", e);
      }
    }

    // 3. Guaranteed instant intelligent on-device persona engine
    if (!answer) {
      answer = getOnDevicePersonaResponse(currentText);
    }

    setChatMessages(prev => [...prev, { role: 'assistant', content: answer }]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderPiece = (piece: { type: PieceSymbol; color: Color } | null) => {
    if (!piece) return null;
    const key = `${piece.color}${piece.type.toUpperCase()}`;
    const svg = PIECES[key];
    if (!svg) return null;
    return <div className="chess-piece" dangerouslySetInnerHTML={{ __html: svg }} />;
  };

  const isSquareLight = (file: string, rank: string): boolean => {
    const fileIndex = 'abcdefgh'.indexOf(file);
    const rankIndex = parseInt(rank) - 1;
    return (fileIndex + rankIndex) % 2 === 1;
  };

  const renderCapturedPieces = (pieces: string[], color: Color) => {
    return pieces.map((piece, index) => {
      const key = `${color}${piece.toUpperCase()}`;
      const svg = PIECES[key];
      return (
        <div key={index} className="captured-piece" dangerouslySetInnerHTML={{ __html: svg || '' }} />
      );
    });
  };

  const formatMoveHistory = () => {
    const formatted: { moveNum: number; white: string; black: string }[] = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      formatted.push({
        moveNum: Math.floor(i / 2) + 1,
        white: moveHistory[i]?.san || '',
        black: moveHistory[i + 1]?.san || ''
      });
    }
    return formatted;
  };

  return (
    <div className="play-page">
      {/* Header */}
      <div className="play-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
      </div>

      <div className="chess-container">
        {/* Chat Panel - Left Side */}
        <div className="chat-panel">
          <div className="chat-header">
            <span className="chat-title">💬 Talk with me</span>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message assistant">
                <div className="message-content typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
              data-cursor="disable"
            />
            <button className="chat-send-btn" onClick={sendMessage} data-cursor="disable">
              ➤
            </button>
          </div>
        </div>

        {/* Board Section with Player Labels */}
        <div className="chess-board-section">
          {/* Opponent Info - Top of Board */}
          <div className="player-bar opponent-bar">
            <div className="player-info">
              <div className="player-avatar">
                <img src="/images/abhinav_avatar.png" alt="Abhinav Tomar" loading="lazy" decoding="async" />
              </div>
              <div className="player-details">
                <span className="player-name">Abhinav Tomar</span>
                <span className="player-rating">{engineThinking ? '🤔 Thinking...' : 'ELO 3640'}</span>
              </div>
            </div>
            <div className="captured-pieces">
              {renderCapturedPieces(capturedWhite, 'w')}
            </div>
          </div>

          {/* Chess Board */}
          <div className="chess-board-wrapper">
            <div className="chess-board">
              {ranks.map((rank) => (
                files.map((file) => {
                  const square = `${file}${rank}` as Square;
                  const piece = getPieceAt(square);
                  const isLight = isSquareLight(file, rank);
                  const isSelected = selectedSquare === square;
                  const isPossibleMove = possibleMoves.includes(square);
                  const isLastMoveSquare = lastMove && (lastMove.from === square || lastMove.to === square);
                  const isCheck = game.isCheck() && piece?.type === 'k' && piece?.color === game.turn();

                  return (
                    <div
                      key={square}
                      className={`chess-square ${isLight ? 'light' : 'dark'} 
                        ${isSelected ? 'selected' : ''} 
                        ${isLastMoveSquare ? 'last-move' : ''}
                        ${isCheck ? 'in-check' : ''}`}
                      onClick={() => handleSquareClick(square)}
                      data-cursor="disable"
                    >
                      {/* Coordinate labels */}
                      {file === (boardFlipped ? 'h' : 'a') && (
                        <span className="coord-rank">{rank}</span>
                      )}
                      {rank === (boardFlipped ? '8' : '1') && (
                        <span className="coord-file">{file}</span>
                      )}

                      {/* Piece */}
                      {renderPiece(piece)}

                      {/* Possible move indicator */}
                      {isPossibleMove && (
                        <div className={`move-indicator ${piece ? 'capture' : ''}`} />
                      )}
                    </div>
                  );
                })
              ))}
            </div>
          </div>

          {/* Player Info - Bottom of Board */}
          <div className="player-bar player-bar-bottom">
            <div className="player-info">
              <div className="player-avatar">
                <span>👤</span>
              </div>
              <div className="player-details">
                <span className="player-name">You</span>
                <span className="player-rating">{playerColor === 'w' ? 'White' : 'Black'}</span>
              </div>
            </div>
            <div className="captured-pieces">
              {renderCapturedPieces(capturedBlack, 'b')}
            </div>
          </div>
        </div>

        {/* Right Panel - Controls & Move History */}
        <div className="chess-side-panel right-panel">
          {/* Game Status */}
          <div className="game-status">
            <span className={game.isCheck() ? 'check' : ''}>{gameStatus}</span>
          </div>

          {/* Move History */}
          <div className="move-history">
            <div className="move-history-header">Moves</div>
            <div className="move-history-list">
              {formatMoveHistory().map((move, index) => (
                <div key={index} className="move-row">
                  <span className="move-num">{move.moveNum}.</span>
                  <span className="move-white">{move.white}</span>
                  <span className="move-black">{move.black}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="game-controls">
            <button onClick={resetGame} className="control-btn" data-cursor="disable">
              New Game
            </button>
            <button onClick={flipBoard} className="control-btn" data-cursor="disable">
              Flip Board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
