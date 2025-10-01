import { ArrowRight, Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/20" />
          <span className="text-white font-semibold tracking-tight text-lg">HoloAuth</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#code" className="hover:text-white transition-colors">Code</a>
          <a href="#trust" className="hover:text-white transition-colors flex items-center gap-1">
            <Shield className="h-4 w-4" /> Trust</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-md bg-white/5 hover:bg-white/10 text-white px-4 py-2 text-sm border border-white/10 transition-colors"
          >
            Join waitlist <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
