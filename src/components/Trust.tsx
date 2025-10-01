import { CheckCircle2, ShieldCheck, LockKeyhole, Globe } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'WebAuthn native' },
  { icon: LockKeyhole, label: 'FIDO2 compliant' },
  { icon: Globe, label: 'Global edge' },
];

export default function Trust() {
  return (
    <section id="trust" className="relative py-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Security you can prove</h2>
            <p className="mt-3 text-slate-400 max-w-xl">
              We never store shared secrets. Each device holds its private key securely in the secure enclave, and we verify signatures at the edge.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Passkeys and platform authenticators out of the box',
                'Attestation and device-bound credentials',
                'SOC 2 in progress, GDPR-ready data flows',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 text-sm">
                  <Icon className="h-4 w-4 text-cyan-300" /> {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-tr from-cyan-400/10 via-transparent to-indigo-500/10 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs text-slate-400">Latency</p>
                  <p className="text-2xl font-semibold text-white">&lt; 100ms</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs text-slate-400">Uptime</p>
                  <p className="text-2xl font-semibold text-white">99.99%</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs text-slate-400">SDK size</p>
                  <p className="text-2xl font-semibold text-white">4.8 kB</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs text-slate-400">Regions</p>
                  <p className="text-2xl font-semibold text-white">260+</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Metrics are indicative for preview. Real numbers will be published at GA.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
