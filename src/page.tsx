import Header from './components/Header';
import Hero from './components/Hero';
import CodeSnippets from './components/CodeSnippets';
import Trust from './components/Trust';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <CodeSnippets />
        <Trust />
        <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} HoloAuth, Inc. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
