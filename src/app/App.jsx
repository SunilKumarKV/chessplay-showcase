import { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Chess from "../features/chess/pages/ChessPage";
import LocalChessPage from "../features/chess/pages/LocalChessPage";

const pages = {
  ai: {
    label: "Stockfish",
    description: "Play a local match against the bundled engine.",
  },
  local: {
    label: "Local",
    description: "Play over-the-board style on one device.",
  },
};

export default function App() {
  const [page, setPage] = useState("ai");

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#070b0a] text-white">
        <header className="border-b border-white/10 bg-black/30 px-4 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#81b64c]">ChessPlay Showcase</p>
              <h1 className="mt-1 font-['Montserrat'] text-2xl font-black">Public frontend demo</h1>
            </div>
            <nav className="flex rounded-2xl border border-white/10 bg-white/5 p-1">
              {Object.entries(pages).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPage(key)}
                  className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                    page === key ? "bg-[#81b64c] text-[#07100a]" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                  title={item.description}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {page === "local" ? (
          <LocalChessPage onBack={() => setPage("ai")} onNavigate={setPage} />
        ) : (
          <Chess onBack={() => setPage("local")} onNavigate={setPage} initialAiEnabled title="Play Stockfish" />
        )}
      </div>
    </ErrorBoundary>
  );
}
