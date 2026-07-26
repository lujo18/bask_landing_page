import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Reveal, Section } from "../lib/motion"

const FAQS = [
  {
    question: "Do I need to log every day?",
    answer:
      "No. Bask tracks weather automatically even if you don't log. But the more attacks you log, the better your pattern detection. Most users start seeing meaningful results after 5 attacks — about two weeks of tracking.",
  },
  {
    question: "How does Bask know what triggers MY migraines?",
    answer:
      "After 5 attacks, Bask Intelligence cross-references your attack data with environmental readings — barometric pressure, temperature, humidity, and weather — to find correlations that match your specific patterns. It also reads your sleep and heart rate from Apple Health. No two people have the same triggers, and Bask learns yours.",
  },
  {
    question: "Is my health data safe?",
    answer:
      "Everything stays on your device by default. No cloud storage, no account required, no health data shared with third parties. You can export a doctor's report PDF anytime — but only if you choose to. You can also delete all data permanently with one tap.",
  },
  {
    question: "Does the prediction actually work?",
    answer:
      "Bask uses barometric pressure trends, weather patterns, and your personal attack history to calculate a 12-hour risk forecast. When environmental conditions match your historical triggers — like a pressure drop — you get a heads-up before symptoms start. The more you log, the more accurate it gets.",
  },
  {
    question: "What if I don't live in the US?",
    answer:
      "Bask works worldwide. Weather data comes from Apple WeatherKit and Open-Meteo, both of which provide global coverage. The app is available in 7 languages: English, Spanish, French, Arabic, Hindi, Japanese, and Korean.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes. Logging attacks, daily check-ins, weather tracking, pattern detection, and 12-hour risk forecasts are all free — no time limit. Premium unlocks advanced analytics, weather alert notifications, pressure forecasts, and doctor's report exports. You decide if and when to upgrade.",
  },
]

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-bask-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[13px] font-semibold text-bask-foreground sm:text-base">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-bask-accent" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-bask-muted">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-12">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-bask-accent">
              Questions
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold tracking-tight text-bask-foreground sm:text-4xl lg:text-5xl">
              Everything you
              <br />
              <span className="gradient-text">want to know.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-sm text-bask-muted">
              Can't find your answer?{" "}
              <a
                href="mailto:support@baskmigraine.app"
                className="font-medium text-bask-accent-bright underline decoration-bask-accent/30 underline-offset-2 hover:decoration-bask-accent"
              >
                We'll help you directly.
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-bask-border bg-bask-surface/40 px-4 backdrop-blur-sm sm:px-8">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
