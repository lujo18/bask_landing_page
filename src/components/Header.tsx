import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <img
        src="/app-icon.png"
        alt="Bask"
        className="h-8 w-8 rounded-lg shadow-md shadow-bask-accent/30"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-bask-foreground">
        Bask
      </span>
    </a>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong border-b border-bask-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-bask-muted transition-colors hover:text-bask-foreground"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-bask-muted transition-colors hover:text-bask-foreground"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-bask-muted transition-colors hover:text-bask-foreground"
          >
            FAQ
          </a>
        </nav>

        <a
          href="#download"
          className="rounded-lg bg-bask-accent px-3.5 py-1.5 text-xs font-semibold text-bask-bg transition-all hover:bg-bask-accent-bright hover:shadow-lg hover:shadow-bask-accent/30 active:scale-95 sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
        >
          Download
        </a>
      </div>
    </motion.header>
  )
}
