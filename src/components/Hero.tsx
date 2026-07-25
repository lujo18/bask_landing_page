import { motion } from "framer-motion"
import { Apple, ArrowRight, ShieldCheck } from "lucide-react"
import { PhoneMockup } from "./PhoneMockup"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

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

function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-5 sm:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="inline-flex items-center gap-2 rounded-full border border-bask-border bg-bask-elevated/50 px-3 py-1.5 backdrop-blur-sm"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-bask-success" />
        <span className="text-[11px] font-medium text-bask-muted sm:text-xs">Free to start — no account needed</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        className="font-display text-[2.25rem] font-bold leading-[1.05] tracking-tight text-bask-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        Your migraines
        <br />
        aren't <span className="gradient-text">random.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
        className="max-w-xl text-sm leading-relaxed text-bask-muted sm:text-lg"
      >
        Bask tracks barometric pressure, weather, and sleep patterns — then
        warns you before the next attack hits.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
        className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
      >
        <a
          href="#download"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-bask-accent px-6 py-3.5 text-sm font-semibold text-bask-bg transition-all hover:bg-bask-accent-bright hover:shadow-xl hover:shadow-bask-accent/30 active:scale-95 sm:w-auto"
        >
          Download Bask — Free
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#how-it-works"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-bask-border-light px-6 py-3.5 text-sm font-semibold text-bask-foreground transition-all hover:bg-bask-elevated active:scale-95 sm:w-auto"
        >
          See how it works
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.32, ease: EASE }}
        className="flex w-full flex-col gap-3"
      >
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
          <a href="#download" className="store-badge">
            <Apple size={20} className="shrink-0 text-bask-foreground sm:size-[22px]" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] text-bask-muted">Download on the</span>
              <span className="text-sm font-semibold text-bask-foreground">App Store</span>
            </div>
          </a>
          <a href="#download" className="store-badge">
            <PlayStoreIcon className="h-5 w-5 shrink-0" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] text-bask-muted">GET IT ON</span>
              <span className="text-sm font-semibold text-bask-foreground">Google Play</span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="shrink-0 text-bask-success" />
          <span className="text-[11px] text-bask-subtle sm:text-xs">
            No account needed · iPhone & Android · Data stays private
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-bask-accent), transparent 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
        <HeroContent />

        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="flex items-center justify-center lg:justify-end"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
