import {
  MessageIcon,
  CompassIcon,
  ClipboardIcon,
  CheckIcon,
} from "./Icons";

const steps = [
  {
    num: "01",
    icon: <MessageIcon className="w-6 h-6" strokeWidth={1.5} />,
    title: "We talk — for free, for 30 minutes.",
    body: "A friendly call. You tell me how your business works, what worries you, what you already have in place. I listen. No slide deck, no sales pitch.",
    duration: "30 min · No cost, no obligation",
  },
  {
    num: "02",
    icon: <CompassIcon className="w-6 h-6" strokeWidth={1.5} />,
    title: "I tell you honestly what I'd do.",
    body: "Sometimes that means recommending one of my services. Sometimes it means telling you you're in good shape already, or that a free fix would solve 80% of it. I say what I actually think.",
    duration: "Same day · Written summary",
  },
  {
    num: "03",
    icon: <ClipboardIcon className="w-6 h-6" strokeWidth={1.5} />,
    title: "You decide — no pressure.",
    body: "If we move forward, you get a flat-rate quote, a clear timeline, and a single point of contact (me). No surprises. No upsells. No one from 'the team' you've never met.",
    duration: "Your pace",
  },
  {
    num: "04",
    icon: <CheckIcon className="w-6 h-6" strokeWidth={1.5} />,
    title: "I do the work and hand you plain-English results.",
    body: "Every report is written like a letter to a friend — not a compliance document. You'll understand every finding, what it means, and exactly what to do next.",
    duration: "Ongoing support included",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-36 bg-paper-100">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900/55 mb-5">
              ○ 003 — What to expect
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tightest text-ink-900 font-light text-balance">
              Four simple steps.{" "}
              <em className="italic text-accent-dark">
                No runaround.
              </em>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="text-lg text-ink-900/70 leading-relaxed">
              I know hiring outside help can feel risky, especially for
              something technical. So here's exactly how working with me
              goes — start to finish — so there are no surprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-paper-50 border border-ink-900/8 rounded-2xl p-8 lg:p-10 hover:border-ink-900/20 transition-all duration-500 hover:translate-y-[-2px]"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-ink-900/40">
                  Step {step.num}
                </span>
                <span className="w-11 h-11 rounded-full bg-ink-900 text-paper-50 flex items-center justify-center">
                  {step.icon}
                </span>
              </div>

              <h3 className="font-display text-2xl lg:text-[28px] leading-tight text-ink-900 font-normal text-balance">
                {step.title}
              </h3>

              <p className="mt-4 text-ink-900/70 leading-relaxed">
                {step.body}
              </p>

              <div className="mt-6 pt-5 border-t border-ink-900/8 text-xs font-mono uppercase tracking-[0.15em] text-ink-900/50">
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
