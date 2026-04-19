import { ShieldIcon, MailIcon, PhoneIcon, MapPinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-paper-50 border-t border-ink-900/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-ink-900 flex items-center justify-center text-paper-50">
                <ShieldIcon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-display text-xl text-ink-900 font-medium tracking-tight">
                  SecureWithQuan
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-900/50 font-mono">
                  LLC · Cybersecurity Risk Advisory
                </div>
              </div>
            </div>

            <p className="mt-6 text-ink-900/70 leading-relaxed max-w-md">
              Simple, practical cybersecurity consulting for small
              businesses. Clear risk assessments, honest recommendations, no
              long-term contracts.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink-900 text-paper-50 px-5 py-2.5 rounded-full text-sm hover:bg-ink-700 transition-colors"
            >
              Book a free consultation
              <span className="w-1 h-1 rounded-full bg-accent" />
            </a>
          </div>

          {/* Links column */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-7">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/55 mb-5">
              Explore
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-ink-900/75 hover:text-ink-900 link-underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-ink-900/75 hover:text-ink-900 link-underline"
                >
                  What to Expect
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-ink-900/75 hover:text-ink-900 link-underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-ink-900/75 hover:text-ink-900 link-underline"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-ink-900/75 hover:text-ink-900 link-underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-span-6 lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/55 mb-5">
              Get in touch
            </div>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:hello@securewithquan.com"
                  className="flex items-start gap-3 text-ink-900/75 hover:text-ink-900 transition-colors group"
                >
                  <MailIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-ink-900/50 group-hover:text-accent-dark transition-colors"
                    strokeWidth={1.75}
                  />
                  <span>hello@securewithquan.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15555550123"
                  className="flex items-start gap-3 text-ink-900/75 hover:text-ink-900 transition-colors group"
                >
                  <PhoneIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-ink-900/50 group-hover:text-accent-dark transition-colors"
                    strokeWidth={1.75}
                  />
                  <span>(555) 555-0123</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-900/75">
                <MapPinIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-ink-900/50"
                  strokeWidth={1.75}
                />
                <span>
                  Remote nationwide
                  <br />
                  On-site in the NYC metro area
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ink-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-ink-900/55 font-mono">
            © {new Date().getFullYear()} SecureWithQuan LLC. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-ink-900/55">
            <a href="#" className="hover:text-ink-900 link-underline">
              Privacy
            </a>
            <a href="#" className="hover:text-ink-900 link-underline">
              Terms
            </a>
            <span className="font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-subtle-pulse" />
              Accepting new clients
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
