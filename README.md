# ChessPlay Showcase

ChessPlay Showcase is the safe public frontend demo for ChessPlay. It highlights the React chess interface, local play, Stockfish integration, move history, board themes, sounds, and responsive gameplay UI.

This repository intentionally excludes private production code: backend APIs, authentication, admin tooling, payment logic, referral systems, database models, production Socket.IO logic, deployment secrets, and real environment values.

## Features

- Local chess against Stockfish
- Same-device player-vs-player mode
- Move history and captured-piece panels
- Board theme and sound settings
- Responsive React/Vite frontend
- Bundled Stockfish WebAssembly assets

## Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- Redux Toolkit
- chess.js
- Stockfish WebAssembly

## Live Demo

getchessplay.vercel.app

## Screenshots

Place public screenshots in `screenshots/` and reference them here.

## Local Setup

```bash
npm install
npm run dev
```

## What Is Not Included

- Backend source code
- Authentication/session logic
- Admin dashboard
- Payment, premium, and referral logic
- Database schemas and data access
- Production socket server logic
- Production API keys or secrets

## Security

This showcase is designed to be public-safe. If you find a sensitive file, credential, or private implementation detail, please report it privately.
