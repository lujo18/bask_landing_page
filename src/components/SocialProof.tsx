import { Globe, HeartPulse, Lock, Sparkles } from "lucide-react"
import { Reveal } from "../lib/motion"

const TRUST_SIGNALS = [
  {
    icon: Lock,
    text: "Data stays on your device",
  },
  {
    icon: HeartPulse,
    text: "No account required",
  },
  {
    icon: Sparkles,
    text: "Powered by Apple WeatherKit",
  },
  {
    icon: Globe,
    text: "Available in 7 languages",
  },
]

export function SocialProof() {
  return (
    <Reveal>
      <div className="border-y border-bask-border bg-bask-surface/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8 lg:px-10">
          {TRUST_SIGNALS.map((signal, i) => (
            <div key={i} className="flex items-center gap-2">
              <signal.icon size={15} className="text-bask-accent" />
              <span className="text-xs font-medium text-bask-muted">{signal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
