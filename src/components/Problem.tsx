import { motion } from "framer-motion"
import { BookX, Calendar, Check, Coffee, Pill, X } from "lucide-react"
import { Reveal, Section } from "../lib/motion"

const TRIED_BEFORE = [
  { icon: Calendar, text: "Paper headache diaries" },
  { icon: Coffee, text: "Hydration & caffeine tracking" },
  { icon: Pill, text: "Generic symptom apps" },
  { icon: BookX, text: "Endless spreadsheets" },
]

const WHAT_BASK_DOES = [
  "Tracks 40+ environmental factors automatically",
  "Connects your attacks to weather, pressure & sleep",
  "Finds YOUR unique trigger patterns",
  "Warns you before the next attack",
]

function CrossedItem({ icon: Icon, text }: { icon: typeof Calendar; text: string }) {
  return (
    <div className="flex items-center gap-3 text-bask-subtle">
      <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-bask-elevated/50">
        <Icon size={14} className="opacity-40" />
      </div>
      <span className="text-sm line-through decoration-bask-danger/40">{text}</span>
      <X size={12} className="ml-auto text-bask-danger/50" />
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-bask-accent/20">
        <Check size={14} className="text-bask-accent-bright" strokeWidth={2.5} />
      </div>
      <span className="text-sm font-medium text-bask-foreground">{text}</span>
    </div>
  )
}

export function Problem() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-bask-accent">
              The problem
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
              Migraines feel random.
              <br />
              <span className="gradient-text">They're not.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-bask-muted">
              You've tried diaries and apps and hydration reminders. Nothing
              stuck — because the problem was never logging. It was that nobody
              connected your notes to the environmental factors that actually
              trigger your migraines.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 max-w-md text-base leading-relaxed text-bask-muted">
              Barometric pressure drops. Temperature swings. Sleep gaps. These
              are the signals your body responds to. Bask watches all of them —
              automatically.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="grid gap-6 rounded-2xl border border-bask-border bg-bask-surface/60 p-6 backdrop-blur-sm sm:p-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-bask-subtle">
                What you've tried
              </p>
              <div className="flex flex-col gap-3">
                {TRIED_BEFORE.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <CrossedItem icon={item.icon} text={item.text} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="h-px bg-bask-border" />

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-bask-accent">
                What Bask does
              </p>
              <div className="flex flex-col gap-3">
                {WHAT_BASK_DOES.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    <CheckItem text={text} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
