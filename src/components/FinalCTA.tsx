import { motion } from "framer-motion"
import { Apple, ArrowRight } from "lucide-react"
import { Reveal } from "../lib/motion"

function PlayStoreIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6 2.3C3.3 2.6 3.1 3 3.1 3.6v16.8c0 .6.2 1 .5 1.3l9.1-9.1L3.6 2.3z" fill="#22D3EE" />
      <path d="M16.8 8.4L13.5 6.2L20.5 2.1C20.8 1.9 21.2 1.8 21.5 1.9L16.8 8.4z" fill="#4ADE80" />
      <path d="M16.8 8.4l3.7-6.5c.6.2 1 .7 1 1.5v17.2c0 .8-.4 1.3-1 1.5l-3.7-6.5l-3.3-2.2l3.3-2.5z" fill="#FBBF24" />
      <path d="M3.6 2.3L12.7 11.6L16.8 8.4L4 2.1C3.8 2 3.7 2.1 3.6 2.3z" fill="#F87171" />
      <path d="M3.6 21.7c.1.2.2.3.4.3L16.8 15.6L12.7 11.6L3.6 21.7z" fill="#A78BFA" />
    </svg>
  )
}

export function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-32 lg:px-10">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, color-mix(in srgb, var(--color-bask-accent) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-bask-accent shadow-2xl shadow-bask-accent/40">
              <ArrowRight size={28} className="text-bask-bg" strokeWidth={2.5} />
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-[2rem] font-bold leading-tight tracking-tight text-bask-foreground sm:text-5xl lg:text-6xl">
            Stop guessing.
            <br />
            <span className="gradient-text">Start predicting.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-bask-muted sm:text-lg">
            Download Bask free. Log your next attack in 30 seconds. Discover
            what's been triggering you all along.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <a
              href="#download"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-bask-accent px-7 py-4 text-base font-semibold text-bask-bg transition-all hover:bg-bask-accent-bright hover:shadow-xl hover:shadow-bask-accent/30 active:scale-95 sm:w-auto"
            >
              Download Bask — Free
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            <a href="#download" className="store-badge">
              <Apple size={20} className="shrink-0 text-bask-foreground sm:size-[22px]" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] text-bask-muted">Download on the</span>
                <span className="text-sm font-semibold text-bask-foreground">App Store</span>
              </div>
            </a>
            <a href="#download" className="store-badge">
              <PlayStoreIcon className="h-5 w-5" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] text-bask-muted">GET IT ON</span>
                <span className="text-sm font-semibold text-bask-foreground">Google Play</span>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-6 text-xs text-bask-subtle">
            No account needed · Your data stays private · iPhone & Android
          </p>
        </Reveal>
      </div>
    </section>
  )
}
