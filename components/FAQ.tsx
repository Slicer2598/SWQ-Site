"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "./Icons";

const faqs = [
  {
    q: "I'm a small business. Do I really need this?",
    a: "If you use email, Wi-Fi, a payment system, or store customer information, then yes — you have something worth protecting. The good news: small businesses don't need enterprise-grade security. A few right-sized steps will put you ahead of 90% of small businesses out there.",
  },
  {
    q: "Isn't cybersecurity really expensive?",
    a: "It can be — if you hire a large firm built for big companies. My engagements are flat-rate and range from $250 to $900. That's roughly the price of a weekend at a nice hotel, not a six-figure contract. And the free 30-minute consultation is designed to tell you honestly whether you even need paid work yet.",
  },
  {
    q: "I don't understand tech. Will this be over my head?",
    a: "Not with me. My whole promise is to explain things the way I'd explain them to a friend who owns a bakery. Every report, every finding, every recommendation gets translated into plain English. If you can read a lease or a menu, you can read one of my reports.",
  },
  {
    q: "I already have an IT person (or a guy who handles our computers). Isn't that enough?",
    a: "Your IT person keeps things running — that's different from cybersecurity. Think of it like this: a great mechanic isn't the same thing as a safety inspector. I work alongside your existing IT help, not instead of them. In fact, many of my clients' IT folks appreciate having a second, independent set of eyes.",
  },
  {
    q: "Are you going to try to sell me a bunch of software or a monthly contract?",
    a: "No. I don't resell products, I don't take commissions from vendors, and I don't do retainers. You hire me for a specific engagement, I finish the work, and if you need me again later — you know where to find me.",
  },
  {
    q: "What if I start working with you and realize I need more than I thought?",
    a: "That's fine and it happens. Every service is standalone, so you can add another one whenever you're ready. There's no pressure and no ladder I'm trying to push you up. Many clients start with a Checkup and come back six months later for training or policies.",
  },
  {
    q: "How long does any of this take?",
    a: "Most engagements wrap up in one to three weeks from kickoff. The Wireless Review can be done in an afternoon. The Policy Advisory is the longest at about three weeks because we're writing documents together. You'll always know the timeline up front.",
  },
  {
    q: "Will anyone find out you were looking at our systems?",
    a: "Everything I do is confidential. I sign an NDA before any paid work begins, findings stay between us, and no one — not vendors, not insurers, not competitors — gets any information about your business unless you tell me to share it.",
  },
  {
    q: "What if I'm not sure which service I need?",
    a: "That's exactly what the free 30-minute consultation is for. Tell me what's on your mind and I'll tell you — honestly — which service (if any) is the right starting point. Sometimes the answer is 'none of them yet,' and I'll tell you that too.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-36 bg-paper-100">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left column — header */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900/55 mb-5">
                ○ 006 — Frequently asked
              </div>
              <h2 className="font-display text-4xl lg:text-[56px] leading-[1.02] tracking-tightest text-ink-900 font-light text-balance">
                The questions{" "}
                <em className="italic text-accent-dark">
                  everyone asks
                </em>{" "}
                before hiring me.
              </h2>
              <p className="mt-8 text-ink-900/70 leading-relaxed">
                If something else is on your mind, the fastest way to get an
                answer is a quick call.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-900 link-underline"
              >
                Ask me directly →
              </a>
            </div>
          </div>

          {/* Right column — FAQs */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-ink-900/12">
              {faqs.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={i}
                    className="border-b border-ink-900/12 group"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 lg:py-7 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex gap-5 items-start">
                        <span className="font-mono text-xs text-ink-900/40 mt-1.5 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl lg:text-2xl text-ink-900 font-normal leading-snug pr-4">
                          {faq.q}
                        </h3>
                      </div>
                      <span
                        className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-ink-900 text-paper-50 border-ink-900"
                            : "border-ink-900/15 text-ink-900 group-hover:border-ink-900/40"
                        }`}
                      >
                        {isOpen ? (
                          <MinusIcon className="w-4 h-4" strokeWidth={2} />
                        ) : (
                          <PlusIcon className="w-4 h-4" strokeWidth={2} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-7"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-11 text-ink-900/75 leading-relaxed text-base lg:text-[17px] max-w-2xl">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
