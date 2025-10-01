import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-1/3 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Auth that disappears.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-slate-300 max-w-xl"
          >
            Passwordless authentication with built-in biometrics. Ship secure logins in one line of code and let the friction vanish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#code" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold hover:opacity-90 px-5 py-3">
              Get the one-liner
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/15 px-5 py-3 border border-white/10">
              Explore features
            </a>
          </motion.div>
          <p className="mt-4 text-xs text-slate-400">Supports WebAuthn, Passkeys, Face/Touch ID, and platform authenticators.</p>
        </div>

        <div className="relative h-[440px] sm:h-[520px] lg:h-[560px] w-full">
          <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 bg-gradient-to-tr from-cyan-400/10 via-transparent to-indigo-500/10 pointer-events-none" />
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
