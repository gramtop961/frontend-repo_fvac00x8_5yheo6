import { useState } from 'react';

const tabs = [
  { name: 'JavaScript', id: 'js' },
  { name: 'React', id: 'react' },
  { name: 'FastAPI', id: 'fastapi' },
];

const snippets: Record<string, string> = {
  js: `// Install: npm i @holoauth/js
import { login } from '@holoauth/js';

await login(); // one line, biometrics-first`,
  react: `// Install: npm i @holoauth/react
import { LoginButton } from '@holoauth/react';

export function App() {
  return <LoginButton onSuccess={(user) => console.log(user)} />;
}`,
  fastapi: `# Install: pip install holoauth
from holoauth import verify

@app.get('/session')
def session(request):
    return verify(request)  # one line server guard`,
};

export default function CodeSnippets() {
  const [active, setActive] = useState('js');

  return (
    <section id="code" className="relative py-20 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">One line to sign in</h2>
            <p className="mt-2 text-slate-400">Copy, paste, and ship. Works with passkeys and platform authenticators by default.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 p-1">
            {tabs.map(({ name, id }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  active === id ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-500/20 blur pointer-events-none" />
          <pre className="relative rounded-xl border border-white/10 bg-slate-900/80 p-4 overflow-auto text-sm leading-relaxed text-cyan-100 shadow-xl">
            <code>{snippets[active]}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
