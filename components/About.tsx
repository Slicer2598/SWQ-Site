import { CheckIcon } from "./Icons";

export default function About() {
  const principles = [
    {
      h: "Plain language, always.",
      p: "If I can't explain a risk to you the way I'd explain it to my mother, I haven't understood it well enough yet.",
    },
    {
      h: "No contracts, no retainers.",
      p: "You hire me when you need me. If the work is done and I've told you the truth, that's a success — not a reason to keep billing you.",
    },
    {
      h: "No fear-mongering.",
      p: "Cybersecurity is already stressful. My job isn't to scare you — it's to give you enough clarity that you can make good decisions calmly.",
    },
    {
      h: "Small-business-first thinking.",
      p: "Enterprise tools and advice don't work for a 12-person office. Every recommendation I make is sized to your budget, your staff, and your reality.",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-accent/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Portrait column */}
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute -inset-3 bg-ink-900 rounded-2xl rotate-1 opacity-90" />
                <div className="relative aspect-[4/5] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 rounded-2xl overflow-hidden -rotate-1">
                  {/* Decorative "portrait placeholder" */}
                  <div className="absolute inset-0 bg-grid-dark opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/10 border border-paper-50/10 flex items-center justify-center">
                        <span className="font-display text-7xl text-paper-50/90 font-light">
                          Q
                        </span>
                      </div>
                      <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-50/40">
                        Quan · Founder
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="font-display italic text-paper-50/80 text-sm">
                        "Tell me what you're worried about.
                      </div>
                      <div className="font-display italic text-paper-50/80 text-sm">
                        I'll tell you if you should be."
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credentials strip */}
              <div className="mt-8 p-6 bg-paper-100 rounded-xl border border-ink-900/8">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/55 mb-4">
                  Background
                </div>
                <ul className="space-y-3 text-sm text-ink-900/80">
                  <li className="flex gap-2.5">
                    <CheckIcon
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-dark"
                      strokeWidth={2}
                    />
                    <span>
                      Years of hands-on security work, translated for real
                      humans
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckIcon
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-dark"
                      strokeWidth={2}
                    />
                    <span>
                      Industry-recognized cybersecurity certifications
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckIcon
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-dark"
                      strokeWidth={2}
                    />
                    <span>
                      Focus on small businesses, not enterprise playbooks
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <CheckIcon
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-dark"
                      strokeWidth={2}
                    />
                    <span>Fully insured and independent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900/55 mb-5">
              ○ 004 — About
            </div>
            <h2 className="font-display text-4xl lg:text-[60px] leading-[1.02] tracking-tightest text-ink-900 font-light text-balance">
              I started SecureWithQuan because good advice{" "}
              <em className="italic text-accent-dark">shouldn't cost $10,000.</em>
            </h2>

            <div className="mt-10 space-y-6 text-lg text-ink-900/75 leading-relaxed">
              <p>
                I spent years in cybersecurity watching the same thing happen:
                large firms would quote small businesses tens of thousands of
                dollars, months-long engagements, and reports so technical the
                owner couldn't actually use them.
              </p>
              <p>
                Meanwhile the problems were almost always the same handful of
                things — a shared password, a network someone set up once and
                forgot about, a staff member who didn't know what to look
                for. Simple stuff. Fixable stuff.
              </p>
              <p>
                So I built SecureWithQuan around a different idea:{" "}
                <span className="text-ink-900 font-medium">
                  one honest advisor, flat-rate engagements, and reports your
                  cousin could read.
                </span>{" "}
                If you run a real small business with real customers and a real
                inbox full of things to worry about, I'd like to make
                cybersecurity one less of them.
              </p>
            </div>

            {/* Principles */}
            <div className="mt-16">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/55 mb-8">
                ○ How I work
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {principles.map((p, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3 mb-3">
                      <span className="font-mono text-xs text-accent-dark mt-1.5">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-xl text-ink-900 font-medium leading-tight">
                        {p.h}
                      </h3>
                    </div>
                    <p className="text-ink-900/70 leading-relaxed pl-8">
                      {p.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
