import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 via-transparent to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-signal/8 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          {/* Eyebrow */}
          <div className="col-span-12 mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-ink-900/40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900/60">
              Independent cybersecurity advisory · Est. 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="col-span-12 lg:col-span-10 font-display text-[48px] sm:text-[68px] lg:text-[104px] leading-[0.95] tracking-tightest text-ink-900 font-light text-balance">
            Cybersecurity,{" "}
            <em className="italic font-normal text-accent-dark">
              finally
            </em>{" "}
            explained in plain English.
          </h1>

          {/* Subhead */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 mt-10">
            <p className="text-lg lg:text-xl text-ink-900/70 leading-relaxed max-w-xl">
              SecureWithQuan helps gyms, restaurants, offices, and local shops
              find the real risks hiding in their technology — then tells you
              exactly what to do about it. No jargon. No long-term contracts.
              No fear tactics.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-ink-900 text-paper-50 px-7 py-4 rounded-full hover:bg-ink-700 transition-all duration-300 text-sm tracking-wide"
              >
                Book a free 30-minute consultation
                <ArrowRightIcon
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-ink-900/15 text-ink-900 px-7 py-4 rounded-full hover:bg-ink-900/5 transition-colors text-sm tracking-wide"
              >
                See what I offer
              </a>
            </div>

            {/* Trust markers */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-mono uppercase tracking-[0.15em] text-ink-900/55">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-subtle-pulse" />
                Accepting new clients
              </span>
              <span>Flat-rate pricing</span>
              <span>No contracts</span>
            </div>
          </div>

          {/* Right-side decorative card */}
          <div className="hidden lg:block col-span-4 col-start-9 mt-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-ink-900/3 rounded-2xl rotate-2" />
              <div className="relative bg-paper-100 border border-ink-900/10 rounded-2xl p-7 -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-900/50">
                    Sample findings
                  </span>
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-ink-900/15" />
                    <span className="w-2 h-2 rounded-full bg-ink-900/15" />
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </span>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3 pb-4 border-b border-ink-900/8">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-ink-900">
                        Wi-Fi password hasn't changed in 3 years
                      </div>
                      <div className="text-ink-900/55 text-xs mt-0.5">
                        Used by ex-employees, vendors
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3 pb-4 border-b border-ink-900/8">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-ink-900">
                        Staff email lacks 2-step verification
                      </div>
                      <div className="text-ink-900/55 text-xs mt-0.5">
                        #1 cause of small-biz breaches
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0" />
                    <div>
                      <div className="font-medium text-ink-900">
                        No written response plan
                      </div>
                      <div className="text-ink-900/55 text-xs mt-0.5">
                        If something goes wrong, what now?
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-ink-900/8 flex items-center justify-between">
                  <span className="font-display italic text-ink-900/70 text-sm">
                    "Real report. Real plain language."
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row — clients framing */}
        <div className="mt-24 lg:mt-32 pt-8 border-t border-ink-900/8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "30", label: "Minute free call to start" },
              { num: "0", label: "Long-term contracts" },
              { num: "1", label: "Real human (not a call center)" },
              { num: "100%", label: "Plain-language reports" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-4xl lg:text-5xl text-ink-900 font-light">
                  {stat.num}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-ink-900/55 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
