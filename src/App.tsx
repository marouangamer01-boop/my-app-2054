import React, { useState } from 'react';
import { Sparkles, Code2, Rocket, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center mx-auto text-indigo-400">
          <Rocket className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">My-app</h1>
          <p className="text-sm text-slate-400 mt-2">Production starter for my-app</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-left space-y-2 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>React 19 + Vite + TypeScript</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-400">
            <Code2 className="w-4 h-4 shrink-0" />
            <span>Tailwind CSS Styling</span>
          </div>
        </div>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Clicked {count} {count === 1 ? 'time' : 'times'}</span>
        </button>
      </div>
    </div>
  );
}
