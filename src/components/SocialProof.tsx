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
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:px-8 sm:py-6 lg:px-10">
          {TRUST_SIGNALS.map((signal, i) => (
            <div key={i} className="flex items-center gap-2 sm:justify-center">
              <signal.icon size={14} className="shrink-0 text-bask-accent sm:size-[15px]" />
              <span className="text-[11px] font-medium text-bask-muted sm:text-xs">{signal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
