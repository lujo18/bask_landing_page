import { motion } from "framer-motion"
import { Bell, ChevronDown, Clock, Home, Plus, TrendingUp, User, Waves } from "lucide-react"

const RISK_BARS = [
  { h: 28, color: "var(--color-bask-success)" },
  { h: 32, color: "var(--color-bask-success)" },
  { h: 30, color: "var(--color-bask-success)" },
  { h: 52, color: "var(--color-bask-warning)" },
  { h: 58, color: "var(--color-bask-warning)" },
  { h: 78, color: "var(--color-bask-danger)" },
  { h: 84, color: "var(--color-bask-danger)" },
  { h: 70, color: "var(--color-bask-danger)" },
  { h: 50, color: "var(--color-bask-warning)" },
  { h: 34, color: "var(--color-bask-success)" },
  { h: 28, color: "var(--color-bask-success)" },
  { h: 26, color: "var(--color-bask-success)" },
]

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-bask-foreground">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-[1px]">
          <div className="h-[5px] w-[3px] rounded-[1px] bg-bask-foreground/60" />
          <div className="h-[7px] w-[3px] rounded-[1px] bg-bask-foreground/60" />
          <div className="h-[9px] w-[3px] rounded-[1px] bg-bask-foreground/60" />
          <div className="h-[11px] w-[3px] rounded-[1px] bg-bask-foreground" />
        </div>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="opacity-70">
          <rect x="0.5" y="0.5" width="13" height="9" rx="2" stroke="currentColor" />
          <rect x="2" y="2" width="10" height="6" rx="1" fill="currentColor" />
          <rect x="14" y="3" width="1.5" height="4" rx="0.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

function RiskBarGraph() {
  return (
    <div className="px-4 pt-2">
      <div className="flex items-center justify-between pb-2">
        <span className="text-[10px] font-semibold text-bask-muted">12-hour migraine risk</span>
        <span className="text-[9px] text-bask-subtle">Now</span>
      </div>
      <div className="flex h-[90px] items-end gap-[5px]">
        {RISK_BARS.map((bar, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[3px]"
            style={{
              height: bar.h,
              backgroundColor: bar.color,
              opacity: i === 5 ? 1 : 0.85,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: i === 5 ? 1 : 0.85 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            {...(i === 5 ? { originY: "bottom" } : {})}
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between">
        <span className="text-[8px] text-bask-subtle">9a</span>
        <span className="text-[8px] text-bask-subtle">3p</span>
        <span className="text-[8px] text-bask-subtle">9p</span>
      </div>
    </div>
  )
}

function AlertCard() {
  return (
    <div className="mx-4 mt-3 rounded-xl border border-bask-warning/30 bg-bask-warning/[0.08] p-3">
      <div className="flex items-start gap-2">
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-bask-warning/20">
          <Bell size={12} className="text-bask-warning" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-bask-warning">Tonight's pressure</p>
          <p className="text-[9px] leading-tight text-bask-muted">
            May be in your risk range. Plan to rest.
          </p>
        </div>
      </div>
    </div>
  )
}

function StatCards() {
  return (
    <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
      <div className="rounded-xl border border-bask-border bg-bask-elevated/60 p-3">
        <p className="text-xl font-bold text-bask-accent-bright">3</p>
        <p className="text-[9px] text-bask-muted">pain-free days</p>
      </div>
      <div className="rounded-xl border border-bask-border bg-bask-elevated/60 p-3">
        <div className="flex items-center gap-1">
          <Waves size={11} className="text-bask-accent" />
          <ChevronDown size={10} className="text-bask-danger" />
        </div>
        <p className="text-[10px] font-semibold text-bask-foreground mt-1">1012 hPa</p>
        <p className="text-[9px] text-bask-muted">dropping</p>
      </div>
    </div>
  )
}

function TabBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex h-[52px] items-center justify-around border-t border-bask-border bg-bask-surface/90 px-2 backdrop-blur-md">
      <div className="flex flex-col items-center gap-0.5">
        <Home size={17} className="text-bask-accent" />
        <span className="text-[7px] font-medium text-bask-accent">Home</span>
      </div>
      <div className="flex flex-col items-center gap-0.5 opacity-50">
        <TrendingUp size={17} className="text-bask-foreground" />
        <span className="text-[7px] text-bask-muted">Insights</span>
      </div>
      <div className="-mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-bask-accent shadow-lg shadow-bask-accent/30">
        <Plus size={20} className="text-bask-bg" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col items-center gap-0.5 opacity-50">
        <Bell size={17} className="text-bask-foreground" />
        <span className="text-[7px] text-bask-muted">Meds</span>
      </div>
      <div className="flex flex-col items-center gap-0.5 opacity-50">
        <User size={17} className="text-bask-foreground" />
        <span className="text-[7px] text-bask-muted">You</span>
      </div>
    </div>
  )
}

export function PhoneMockup() {
  return (
    <div className="phone-frame animate-float">
      <div className="phone-notch" />
      <div className="phone-screen">
        <StatusBar />

        <div className="px-5 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-bask-foreground">
                Hi, Friend
              </h3>
              <p className="text-[9px] text-bask-muted">Bask is with you.</p>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-bask-border bg-bask-elevated/50 px-2 py-1">
              <Clock size={9} className="text-bask-success" />
              <span className="text-[8px] font-medium text-bask-muted">clear days</span>
            </div>
          </div>
        </div>

        <RiskBarGraph />
        <AlertCard />
        <StatCards />

        <TabBar />
      </div>
    </div>
  )
}
