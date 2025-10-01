import { Fingerprint, Lock, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Built-in biometrics",
    desc: "First-class support for Face ID, Touch ID, and passkeys across devices with WebAuthn.",
  },
  {
    icon: Lock,
    title: "Phishing-resistant",
    desc: "Public-key cryptography eliminates shared secrets and credential stuffing attacks.",
  },
  {
    icon: Cpu,
    title: "Edge-ready SDK",
    desc: "Tiny client + server helpers designed for serverless, Next.js, Vite, and FastAPI.",
  },
  {
    icon: Zap,
    title: "1-line integration",
    desc: "Drop-in snippet creates users, registers authenticators, and signs in—no flows to choreograph.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Why HoloAuth</h2>
          <p className="mt-2 text-slate-400">Everything you need to ship passwordless auth that feels invisible.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 border border-white/10 flex items-center justify-center">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
