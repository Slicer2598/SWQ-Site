import { StarIcon } from "./Icons";

const testimonials = [
  {
    quote:
      "Quan walked through our gym on a Tuesday morning, found three things I didn't even know were problems, and explained them in about ten minutes without making me feel dumb. Money well spent.",
    name: "Marcus Delaney",
    title: "Owner, Iron Path Fitness",
    location: "24 members, 6 staff",
  },
  {
    quote:
      "We're a small law office. I was quoted $8,000 by another firm for what amounted to the same thing Quan did for a flat fee in two days. His report was actually readable.",
    name: "Priya Shankar",
    title: "Managing Partner, Shankar & Moss",
    location: "Boutique law firm",
  },
  {
    quote:
      "I hired him for the staff training after one of my servers almost wired money to a fake 'vendor.' The team still talks about his session — and we've caught three scam emails since.",
    name: "Danny Ruiz",
    title: "Owner, Casa Verde Restaurant",
    location: "Family-owned, 22 employees",
  },
  {
    quote:
      "No contract, no upsell, no trying to scare us. Just a clear list of what we were doing right and three things we should fix. I recommend him to every small business I know.",
    name: "Ellen Park",
    title: "Director of Operations, Park Dental",
    location: "Two-location dental practice",
  },
  {
    quote:
      "The phishing simulation was honestly kind of fun. We saw exactly who needed more training, nobody got embarrassed, and we built a real security culture out of it.",
    name: "Jordan Whitaker",
    title: "Owner, Whitaker Auto Service",
    location: "Independent auto shop",
  },
  {
    quote:
      "He told me I didn't need half of what I thought I needed. That kind of honesty is rare. I signed up for the policy advisory three months later anyway.",
    name: "Sofia Esposito",
    title: "Founder, Bloom & Vine Salon",
    location: "5-chair salon",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-36 bg-ink-900 text-paper-50 overflow-hidden noise">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5">
              ○ 005 — What clients say
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tightest font-light text-balance">
              In their own{" "}
              <em className="italic text-accent">words.</em>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="text-lg text-paper-50/70 leading-relaxed">
              The best proof of the work is how small business owners — the
              people I built this for — talk about it afterward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="group relative bg-paper-50/[0.03] border border-paper-50/10 rounded-2xl p-7 lg:p-8 hover:bg-paper-50/[0.06] hover:border-paper-50/20 transition-all duration-500"
            >
              <div className="flex gap-0.5 mb-5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>

              <blockquote className="font-display text-lg lg:text-[19px] leading-snug text-paper-50 font-light">
                <span className="text-accent mr-0.5">"</span>
                {t.quote}
                <span className="text-accent ml-0.5">"</span>
              </blockquote>

              <figcaption className="mt-7 pt-5 border-t border-paper-50/10">
                <div className="font-medium text-paper-50 text-sm">
                  {t.name}
                </div>
                <div className="text-paper-50/60 text-xs mt-1">{t.title}</div>
                <div className="text-paper-50/45 text-[11px] mt-2 font-mono uppercase tracking-wider">
                  {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
