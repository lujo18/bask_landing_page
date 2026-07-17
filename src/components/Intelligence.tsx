import { motion } from "framer-motion"
import { Activity, Brain, Droplets, Heart, Layers, Moon, Sun, Thermometer } from "lucide-react"
import { Reveal, Section } from "../lib/motion"

const INTELLIGENCE_POINTS = [
  {
    icon: Activity,
    title: "Pressure correlation",
    description: "See how often your attacks follow barometric drops within 24 hours.",
  },
  {
    icon: Layers,
    title: "Trigger stacking",
    description: "Some triggers only matter when they combine. Bask finds those intersections.",
  },
  {
    icon: Heart,
    title: "Relief leaderboard",
    description: "Which medications actually work for you — ranked by effectiveness.",
  },
  {
    icon: Brain,
    title: "Attack context",
    description: "Monday mornings, stress spikes, missed preventatives — Bask sees the full picture.",
  },
]

const CORRELATIONS = [
  { label: "Pressure Drop", value: 73, icon: Activity, color: "var(--color-bask-danger)" },
  { label: "Sleep < 6 hrs", value: 54, icon: Moon, color: "var(--color-bask-warning)" },
  { label: "High Humidity", value: 38, icon: Droplets, color: "var(--color-bask-warning)" },
  { label: "Temperature Δ", value: 24, icon: Thermometer, color: "var(--color-bask-success)" },
]

function CorrelationCard() {
  return (
    <div className="rounded-2xl border border-bask-border bg-bask-surface/80 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-bask-border px-6 py-4">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-bask-accent" />
          <span className="text-sm font-semibold text-bask-foreground">
            Bask Intelligence Report
          </span>
        </div>
        <span className="text-[10px] font-medium text-bask-subtle">Sample</span>
      </div>

      <div className="space-y-4 px-6 py-5">
        {CORRELATIONS.map((item, i) => (
          <div key={i}>
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <item.icon size={13} className="text-bask-muted" />
                <span className="text-xs font-medium text-bask-foreground">{item.label}</span>
              </div>
              <span className="text-xs font-bold text-bask-foreground">{item.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-bask-elevated">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-b-2xl border-t border-bask-border bg-bask-elevated/40 px-6 py-4">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-bask-danger/20">
            <Sun size={11} className="text-bask-danger" />
          </div>
          <div>
            <p className="text-xs font-semibold text-bask-foreground">Your #1 trigger: Pressure</p>
            <p className="text-[11px] leading-tight text-bask-muted">
              73% of your attacks follow a barometric drop within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Intelligence() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-bask-accent">
              The pattern engine
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
              Bask Intelligence
              <br />
              <span className="gradient-text">finds YOUR triggers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-bask-muted">
              Bask doesn't just track — it analyzes. Every attack you log is
              compared against 40+ environmental data points to find the patterns
              unique to your migraines.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {INTELLIGENCE_POINTS.map((point, i) => (
              <Reveal key={i} delay={0.2 + i * 0.08}>
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-bask-border bg-bask-elevated/50">
                    <point.icon size={16} className="text-bask-accent-bright" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-bask-foreground">
                      {point.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-bask-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-8 rounded-3xl opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-bask-accent), transparent 70%)" }}
            />
            <div className="relative">
              <CorrelationCard />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
