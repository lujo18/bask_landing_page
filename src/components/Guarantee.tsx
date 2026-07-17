import { Database, ShieldCheck, Smartphone, Trash2 } from "lucide-react"
import { Reveal, Section } from "../lib/motion"

const GUARANTEES = [
  {
    icon: Smartphone,
    title: "Free to start",
    description:
      "Download free. No credit card. No trial expiration on core features — logging, weather tracking, and pattern detection are yours.",
  },
  {
    icon: Database,
    title: "Your data stays on your phone",
    description:
      "Everything lives on your device by default. No cloud storage, no account required. You can export a doctor's report PDF whenever you choose.",
  },
  {
    icon: ShieldCheck,
    title: "No health data shared",
    description:
      "Bask never sells, shares, or uploads your health data. Your migraine logs, symptoms, and patterns are yours alone.",
  },
  {
    icon: Trash2,
    title: "Delete everything anytime",
    description:
      "One tap wipes all your data permanently. No support tickets, no waiting periods. Your data, your choice, always.",
  },
]

export function Guarantee() {
  return (
    <Section id="privacy">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-bask-success/30 bg-bask-success/10">
              <ShieldCheck size={28} className="text-bask-success" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl font-bold tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
            No catch. No tricks.
            <br />
            <span className="gradient-text">Just your data, protected.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-bask-muted">
            Bask was built privacy-first because migraine data is some of the
            most sensitive health information you have. Here's exactly what that
            means:
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {GUARANTEES.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="flex gap-4 rounded-2xl border border-bask-border bg-bask-surface/60 p-6 backdrop-blur-sm transition-all hover:border-bask-success/20">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bask-success/15">
                <item.icon size={18} className="text-bask-success" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-bask-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-bask-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
