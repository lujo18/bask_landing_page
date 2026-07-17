import { Clock, Radar, TrendingUp } from "lucide-react"
import { Reveal, Section, Stagger, StaggerItem } from "../lib/motion"

const FEATURES = [
  {
    icon: Radar,
    title: "Sees What You Can't",
    description:
      "Automatic barometric pressure, temperature, humidity, and weather tracking. No manual entry. Bask watches the patterns you'd miss.",
    highlight: "40+ factors tracked",
  },
  {
    icon: Clock,
    title: "Logs in 30 Seconds",
    description:
      "A guided 10-step wizard. Tap through type, severity, head map, symptoms, triggers, meds. Done before the pain peaks.",
    highlight: "10-step guided wizard",
  },
  {
    icon: TrendingUp,
    title: "Predicts Your Attacks",
    description:
      "Your personalized 12-hour risk forecast. When pressure drops or patterns line up, Bask sends a heads-up before the first throb.",
    highlight: "12-hour risk forecast",
  },
]

function FeatureCard({ feature }: { feature: (typeof FEATURES)[number] }) {
  const { icon: Icon, title, description, highlight } = feature

  return (
    <StaggerItem>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-bask-border bg-bask-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-bask-accent/40 hover:bg-bask-elevated/60 sm:p-7">
        {/* Glow on hover */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ background: "var(--color-bask-accent)" }}
        />

        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bask-accent shadow-md shadow-bask-accent/20">
          <Icon size={22} className="text-bask-bg" strokeWidth={2} />
        </div>

        <h3 className="font-display text-xl font-bold tracking-tight text-bask-foreground">
          {title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-bask-muted">{description}</p>

        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-bask-accent/20 bg-bask-accent/10 px-3 py-1 text-xs font-medium text-bask-accent-bright">
            {highlight}
          </span>
        </div>
      </div>
    </StaggerItem>
  )
}

export function Features() {
  return (
    <Section id="features">
      <div className="mb-12 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-bask-accent">
            Why Bask works
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
            The migraine companion that
            <br className="hidden sm:block" />
            <span className="gradient-text"> actually finds your triggers.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-base text-bask-muted">
            Three things Bask does that paper diaries and generic apps never could.
          </p>
        </Reveal>
      </div>

      <Stagger className="grid gap-5 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </Stagger>
    </Section>
  )
}
