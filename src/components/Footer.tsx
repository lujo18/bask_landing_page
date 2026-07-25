

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Privacy", href: "#privacy" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Support", href: "mailto:support@bask.app" },
      { label: "Contact", href: "mailto:hello@bask.app" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Deletion", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-bask-border bg-bask-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[2fr_3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/app-icon.png"
                alt="Bask"
                className="h-8 w-8 rounded-lg shadow-md shadow-bask-accent/30"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-bask-foreground">
                Bask
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bask-muted">
              A calm place to track migraines and find what sets them off.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-bask-subtle">
                  {group.title}
                </h4>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-bask-muted transition-colors hover:text-bask-accent-bright"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-bask-border pt-6 sm:mt-10">
          <p className="text-[11px] leading-relaxed text-bask-subtle sm:text-xs">
            Bask is not a medical device. It is a tracking and pattern-discovery
            tool. Always consult your physician for migraine diagnosis, treatment,
            and medical advice. Your use of Bask does not create a
            doctor-patient relationship.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-bask-subtle">© 2026 Bask. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-bask-subtle">
            <span>iPhone & Android</span>
            <span className="h-1 w-1 rounded-full bg-bask-subtle" />
            <span>7 languages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
