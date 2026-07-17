import { motion } from "framer-motion"
import { BrainCircuit, MapPin, PenLine } from "lucide-react"
import { Reveal, Section } from "../lib/motion"

const STEPS = [
  {
    number: "01",
    icon: PenLine,
    title: "Log an attack in 30 seconds",
    description:
      "Tap the + button. The guided wizard walks you through 10 quick steps — type, severity, head map, pain, symptoms, triggers, meds. Tap, tap, done before the pain peaks.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Bask tracks your environment",
    description:
      "Every time you log, Bask pulls weather, pressure, humidity, and temperature for your exact location. It also reads sleep and heart rate from Apple Health. All automatic — zero manual entry.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Discover YOUR trigger patterns",
    description:
      "After 5 attacks, Bask Intelligence analyzes your data against environmental factors. You'll see what triggers your migraines — and get a 12-hour heads-up before the next one hits.",
  },
]

function StepConnector() {
  return (
    <div className="absolute left-0 right-0 top-7 hidden h-px lg:block">
      <motion.div
        className="h-full bg-gradient-to-r from-transparent via-bask-accent/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-bask-border bg-bask-surface/30">
      <div className="mb-14 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-bask-accent">
            How it works
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
            From frustration to foresight
            <br className="hidden sm:block" />
            <span className="gradient-text"> in three steps.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
        <StepConnector />

        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.15}>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-bask-accent/30 bg-bask-surface shadow-lg shadow-bask-accent/10">
                <step.icon size={24} className="text-bask-accent-bright" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-bask-accent text-[10px] font-bold text-bask-bg">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold tracking-tight text-bask-foreground sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-bask-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
