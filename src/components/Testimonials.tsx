import { Star } from "lucide-react"
import { Reveal, Section, Stagger, StaggerItem } from "../lib/motion"

const TESTIMONIALS = [
  {
    quote:
      "I never realized pressure drops were my #1 trigger until Bask showed me the pattern. Now I take my rescue med before the pain even starts.",
    name: "Sarah K.",
    age: 34,
    initials: "SK",
    detail: "8 months with Bask",
  },
  {
    quote:
      "The 30-second logging is the only reason I stuck with it. Every other migraine app was a chore and I'd quit in a week.",
    name: "Jamie M.",
    age: 41,
    initials: "JM",
    detail: "Chronic migraine, 15+ years",
  },
  {
    quote:
      "My doctor was impressed by the PDF report Bask generated. Actual data, not just 'I get migraines sometimes.' Game changer for appointments.",
    name: "Alex R.",
    age: 29,
    initials: "AR",
    detail: "Doctor's report export",
  },
]

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-bask-accent to-bask-accent-dim">
      <span className="text-sm font-bold text-bask-bg">{initials}</span>
    </div>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="fill-bask-warning text-bask-warning" />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <StaggerItem>
      <div className="flex h-full flex-col rounded-2xl border border-bask-border bg-bask-surface/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-bask-accent/30 hover:bg-bask-elevated/40 sm:p-6">
        <Stars />

        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-bask-foreground">
          "{testimonial.quote}"
        </blockquote>

        <div className="mt-6 flex items-center gap-3 border-t border-bask-border pt-4">
          <Avatar initials={testimonial.initials} />
          <div>
            <p className="text-sm font-semibold text-bask-foreground">
              {testimonial.name}, {testimonial.age}
            </p>
            <p className="text-xs text-bask-subtle">{testimonial.detail}</p>
          </div>
        </div>
      </div>
    </StaggerItem>
  )
}

export function Testimonials() {
  return (
    <Section className="border-y border-bask-border bg-bask-surface/30">
      <div className="mb-12 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-bask-accent">
            Early users
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
            People who stopped guessing
            <br className="hidden sm:block" />
            <span className="gradient-text"> and started knowing.</span>
          </h2>
        </Reveal>
      </div>

      <Stagger className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </Stagger>
    </Section>
  )
}
