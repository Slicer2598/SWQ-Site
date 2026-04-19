import {
  ShieldIcon,
  NetworkIcon,
  WifiIcon,
  UsersIcon,
  FishingIcon,
  DocumentIcon,
  ArrowRightIcon,
  CheckIcon,
} from "./Icons";

type Service = {
  num: string;
  icon: React.ReactNode;
  name: string;
  price: string;
  duration: string;
  tagline: string;
  explanation: string;
  youGet: string[];
  whyMatters: string;
};

const services: Service[] = [
  {
    num: "01",
    icon: <ShieldIcon className="w-7 h-7" strokeWidth={1.5} />,
    name: "Small Business Cybersecurity Checkup",
    duration: "Half-day review",
    tagline: "A friendly, top-to-bottom health check.",
    explanation:
      "Think of it like an annual physical — but for your business's technology. I look at how you handle passwords, email, Wi-Fi, devices, and backups, then tell you what's healthy and what needs attention.",
    youGet: [
      "A one-hour walkthrough of your setup",
      "A short, plain-English report",
      "A prioritized list of what to fix first (and what can wait)",
      "30-day follow-up email to check in",
    ],
    whyMatters:
      "You can't protect what you don't know is at risk. This is the easiest, cheapest way to find out where you stand — before a problem finds you.",
  },
  {
    num: "02",
    icon: <NetworkIcon className="w-7 h-7" strokeWidth={1.5} />,
    name: "Network Vulnerability Risk Assessment",
    duration: "1–2 days",
    tagline: "What's open that shouldn't be?",
    explanation:
      "I scan your network the way an outsider would and look for doors left unlocked — outdated software, misconfigured settings, devices exposed to the internet that shouldn't be. Then I explain each finding without the tech-speak.",
    youGet: [
      "A safe, non-disruptive scan of your network",
      "A ranked list of risks (high / medium / low)",
      "Clear explanation of what each finding means",
      "Step-by-step fixes you or your IT person can follow",
    ],
    whyMatters:
      "Attackers don't pick targets — they pick easy ones. Most small business breaches come from simple, fixable issues. Finding them first takes you off the easy list.",
  },
  {
    num: "03",
    icon: <WifiIcon className="w-7 h-7" strokeWidth={1.5} />,
    name: "Wireless Security Risk Review",
    duration: "A few hours",
    tagline: "Is your Wi-Fi quietly leaking?",
    explanation:
      "I take a close look at the Wi-Fi your staff, customers, and point-of-sale systems use. I check that guest networks are actually separated, that passwords aren't the default, and that no one is listening in from the parking lot.",
    youGet: [
      "On-site wireless assessment",
      "Check on guest vs. business network separation",
      "Review of router and access-point settings",
      "Simple instructions to harden your setup",
    ],
    whyMatters:
      "Wi-Fi is often the weakest link — and the most overlooked. A misconfigured network can expose customer data, payment systems, and private conversations without anyone noticing.",
  },
  {
    num: "04",
    icon: <UsersIcon className="w-7 h-7" strokeWidth={1.5} />,
    name: "Staff Security Awareness Training",
    duration: "90-minute session",
    tagline: "Turn your team into your first line of defense.",
    explanation:
      "A live, friendly training session for your staff. No boring slides. We talk about how scams actually look today, how to spot a fake email, what to do with suspicious phone calls, and how to handle company passwords the right way.",
    youGet: [
      "A 90-minute interactive session (in person or virtual)",
      "Real-world examples tailored to your industry",
      "A printable one-page quick-reference guide",
      "Q&A time so staff can ask what's actually on their minds",
    ],
    whyMatters:
      "More than 80% of breaches start with a mistake someone made — not with fancy hacking. Training your team is the single highest-return investment you can make.",
  },
  {
    num: "05",
    icon: <FishingIcon className="w-7 h-7" strokeWidth={1.5} />,
    name: "Phishing Simulation Campaign",
    duration: "2-week campaign",
    tagline: "See how your team handles a fake attack — safely.",
    explanation:
      "I send realistic (but completely harmless) test emails to your staff to see who clicks and who spots them. Then I share the results privately with you and use what we learned as a teaching moment — no shame, just progress.",
    youGet: [
      "Two rounds of realistic test emails",
      "A full results report showing click rates and patterns",
      "A short debrief and teaching plan",
      "Recommendations for ongoing practice",
    ],
    whyMatters:
      "People learn by doing, not by being told. Running a safe simulation shows your team what a real scam feels like — and builds habits that stick far better than any lecture.",
  },
  {
    num: "06",
    icon: <DocumentIcon className="w-7 h-7" strokeWidth={1.5} />,
    name: "Cybersecurity Policy Advisory",
    duration: "2–3 weeks",
    tagline: "Write down the rules — so everyone knows them.",
    explanation:
      "I help you put simple, written policies in place: what staff should do with company data, how to handle a lost device, password rules, remote-work guidelines, and what to do if something goes wrong. Plain English. Short documents. Actually useful.",
    youGet: [
      "A tailored set of core security policies",
      "An incident response playbook (what to do if…)",
      "An employee acknowledgment form",
      "A 60-minute review session to walk through it with you",
    ],
    whyMatters:
      "Written policies protect your business legally, operationally, and with clients who ask. More importantly, they stop 'we didn't know what to do' moments before they start.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-36">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900/55 mb-5">
              ○ 002 — Services
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tightest text-ink-900 font-light text-balance">
              Six ways to make your business{" "}
              <em className="italic text-accent-dark">harder to hit.</em>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="text-lg text-ink-900/70 leading-relaxed">
              Every engagement is flat-rate and time-boxed. Pick the one that
              fits where you are — or start with a free consultation and I'll
              tell you honestly which one (if any) makes sense for your
              business right now.
            </p>
          </div>
        </div>

        {/* Service list */}
        <div className="space-y-4">
          {services.map((service) => (
            <ServiceRow key={service.num} service={service} />
          ))}
        </div>

        {/* Post-list CTA */}
        <div className="mt-20 text-center">
          <p className="text-ink-900/60 text-sm mb-6 font-mono uppercase tracking-[0.18em]">
            Not sure which one you need?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 group"
          >
            <span className="font-display italic text-2xl lg:text-3xl text-ink-900 border-b border-ink-900/20 pb-1 group-hover:border-accent group-hover:text-accent-dark transition-colors">
              Let's have a free 30-minute conversation.
            </span>
            <ArrowRightIcon
              className="w-5 h-5 transition-transform group-hover:translate-x-1 text-ink-900"
              strokeWidth={1.75}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <details className="group bg-paper-100 border border-ink-900/8 rounded-2xl overflow-hidden hover:border-ink-900/20 transition-colors">
      <summary className="cursor-pointer list-none p-6 lg:p-8 grid grid-cols-12 gap-4 lg:gap-6 items-center">
        <div className="col-span-2 lg:col-span-1">
          <span className="font-mono text-xs text-ink-900/40">
            {service.num}
          </span>
        </div>
        <div className="col-span-10 lg:col-span-1 text-ink-900">
          {service.icon}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h3 className="font-display text-xl lg:text-2xl text-ink-900 font-normal leading-tight">
            {service.name}
          </h3>
          <p className="text-sm text-ink-900/60 mt-1 italic">
            {service.tagline}
          </p>
        </div>
        <div className="col-span-6 lg:col-span-2 lg:text-right">
          <div className="font-display text-2xl text-ink-900 font-light">
            {service.price}
          </div>
          <div className="text-[11px] text-ink-900/50 font-mono uppercase tracking-wider">
            {service.duration}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex justify-end">
          <span className="w-11 h-11 rounded-full border border-ink-900/15 flex items-center justify-center text-ink-900 group-open:bg-ink-900 group-open:text-paper-50 group-open:rotate-45 transition-all duration-300">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </div>
      </summary>

      <div className="px-6 lg:px-8 pb-8 lg:pb-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 pt-6 border-t border-ink-900/8">
          <div className="col-span-12 lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/50 mb-3">
              What it is
            </div>
            <p className="text-ink-900/80 leading-relaxed">
              {service.explanation}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/50 mb-3">
              What you get
            </div>
            <ul className="space-y-2.5">
              {service.youGet.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-ink-900/80">
                  <CheckIcon
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-dark"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-ink-900/50 mb-3">
              Why it matters
            </div>
            <p className="text-ink-900/80 leading-relaxed">
              {service.whyMatters}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-900 link-underline"
            >
              Start with this one
              <ArrowRightIcon className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </details>
  );
}
