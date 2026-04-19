"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon,
  LockIcon,
} from "./Icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    industry: "",
    employees: "",
    concern: "",
    timing: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof typeof form, value: string) =>
    setForm({ ...form, [field]: value });

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 bg-ink-900 text-paper-50 overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/12 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-signal/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left column — pitch */}
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5">
              ○ 007 — Let's talk
            </div>

            <h2 className="font-display text-4xl lg:text-[64px] leading-[0.98] tracking-tightest font-light text-balance">
              Book your{" "}
              <em className="italic text-accent">free 30-minute</em>{" "}
              consultation.
            </h2>

            <p className="mt-8 text-lg text-paper-50/70 leading-relaxed">
              Fill out the form and I'll reply within one business day with a
              few times that work. No cost. No pressure. No one will try to
              sell you anything.
            </p>

            {/* What happens next */}
            <div className="mt-12 p-7 bg-paper-50/[0.04] border border-paper-50/10 rounded-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
                What happens on the call
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "You tell me about your business and what's on your mind",
                  "I ask a few questions to understand your setup",
                  "I give you an honest read — paid work or not",
                  "You decide what, if anything, happens next",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-paper-50/85">
                    <CheckIcon
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct contact methods */}
            <div className="mt-10 space-y-5">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-paper-50/45">
                Prefer to reach out directly?
              </div>
              <a
                href="mailto:hello@securewithquan.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-11 h-11 rounded-full border border-paper-50/15 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <MailIcon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-paper-50/45 font-mono">
                    Email
                  </div>
                  <div className="text-paper-50 link-underline">
                    hello@securewithquan.com
                  </div>
                </div>
              </a>
              <a
                href="tel:+15555550123"
                className="flex items-center gap-4 group"
              >
                <span className="w-11 h-11 rounded-full border border-paper-50/15 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <PhoneIcon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-paper-50/45 font-mono">
                    Phone
                  </div>
                  <div className="text-paper-50 link-underline">
                    (555) 555-0123
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full border border-paper-50/15 flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-paper-50/45 font-mono">
                    Serving
                  </div>
                  <div className="text-paper-50">
                    Nationwide (remote) · On-site in the NYC area
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/10 rounded-3xl rotate-[0.5deg]" />
              <div className="relative bg-paper-50 text-ink-900 rounded-3xl p-8 lg:p-12">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-900/55 mb-1">
                        Request a free consultation
                      </div>
                      <h3 className="font-display text-2xl text-ink-900 font-normal">
                        Tell me a little about your business.
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Your name"
                        required
                        value={form.name}
                        onChange={(v) => update("name", v)}
                        placeholder="Marcus Delaney"
                      />
                      <Field
                        label="Email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(v) => update("email", v)}
                        placeholder="you@yourbusiness.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Business name"
                        value={form.business}
                        onChange={(v) => update("business", v)}
                        placeholder="Iron Path Fitness"
                      />
                      <Select
                        label="Industry"
                        value={form.industry}
                        onChange={(v) => update("industry", v)}
                        options={[
                          "Gym or Fitness Studio",
                          "Restaurant or Café",
                          "Retail Shop",
                          "Medical or Dental Office",
                          "Law Firm",
                          "Real Estate Office",
                          "Salon or Spa",
                          "Auto Shop",
                          "Other",
                        ]}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Select
                        label="Number of employees"
                        value={form.employees}
                        onChange={(v) => update("employees", v)}
                        options={[
                          "Just me",
                          "2–5",
                          "6–15",
                          "16–30",
                          "31–50",
                          "50+",
                        ]}
                      />
                      <Select
                        label="Timing"
                        value={form.timing}
                        onChange={(v) => update("timing", v)}
                        options={[
                          "As soon as possible",
                          "Within a month",
                          "Within 3 months",
                          "Just exploring",
                        ]}
                      />
                    </div>

                    <Textarea
                      label="What's on your mind?"
                      value={form.concern}
                      onChange={(v) => update("concern", v)}
                      placeholder="I'm worried about our Wi-Fi setup / We had a suspicious email last week / I just want to make sure we're OK..."
                    />

                    <button
                      type="submit"
                      className="group w-full bg-ink-900 text-paper-50 rounded-full py-4 px-6 flex items-center justify-center gap-2 hover:bg-ink-700 transition-colors text-sm tracking-wide"
                    >
                      Request my free consultation
                      <ArrowRightIcon
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </button>

                    <div className="flex items-center gap-2 justify-center text-xs text-ink-900/55 font-mono uppercase tracking-wider">
                      <LockIcon className="w-3.5 h-3.5" strokeWidth={1.75} />
                      <span>
                        Your information stays with me — never shared or sold
                      </span>
                    </div>
                  </form>
                ) : (
                  <div className="py-10 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-ink-900 text-paper-50 flex items-center justify-center">
                      <CheckIcon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <h3 className="mt-6 font-display text-3xl text-ink-900 font-normal">
                      Thanks, {form.name || "friend"}.
                    </h3>
                    <p className="mt-4 text-ink-900/70 leading-relaxed max-w-md mx-auto">
                      I've got your request. You'll hear from me within one
                      business day with a few times that work for your call.
                      If it's urgent, feel free to email me directly at{" "}
                      <a
                        href="mailto:hello@securewithquan.com"
                        className="text-ink-900 link-underline"
                      >
                        hello@securewithquan.com
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          business: "",
                          industry: "",
                          employees: "",
                          concern: "",
                          timing: "",
                        });
                      }}
                      className="mt-8 text-sm text-ink-900/60 link-underline"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Form primitives */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-[0.15em] text-ink-900/55 mb-2">
        {label}
        {required && <span className="text-accent-dark ml-1">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink-900/20 py-2.5 text-ink-900 placeholder:text-ink-900/30 focus:border-ink-900 focus:outline-none transition-colors"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-[0.15em] text-ink-900/55 mb-2">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border-b border-ink-900/20 py-2.5 text-ink-900 focus:border-ink-900 focus:outline-none transition-colors appearance-none cursor-pointer pr-8"
        >
          <option value="">Select one</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-0 top-3 w-4 h-4 text-ink-900/50 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-[0.15em] text-ink-900/55 mb-2">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-transparent border-b border-ink-900/20 py-2.5 text-ink-900 placeholder:text-ink-900/30 focus:border-ink-900 focus:outline-none transition-colors resize-none"
      />
    </label>
  );
}
