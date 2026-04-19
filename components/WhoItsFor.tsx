export default function WhoItsFor() {
  const businesses = [
    "Gyms & Studios",
    "Restaurants & Cafés",
    "Retail Shops",
    "Medical & Dental Offices",
    "Law Firms",
    "Real Estate Offices",
    "Salons & Spas",
    "Auto Shops",
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-ink-900 text-paper-50 overflow-hidden noise">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5">
              ○ Who I help
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tightest font-light text-balance">
              Small businesses that run on trust —{" "}
              <em className="italic text-accent">
                and can't afford to lose it.
              </em>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pt-2">
            <p className="text-paper-50/75 text-lg leading-relaxed">
              If you're running a business with fewer than 50 employees and no
              full-time IT or security person, you're exactly who I work with.
              You don't need a Fortune 500 security program. You need someone
              to quietly look things over, tell you the truth, and give you a
              short list of things worth doing.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {businesses.map((b) => (
                <span
                  key={b}
                  className="text-sm border border-paper-50/15 text-paper-50/80 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
