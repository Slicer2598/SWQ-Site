"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon, ShieldIcon } from "./Icons";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper-50/85 backdrop-blur-lg border-b border-ink-900/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-ink-900 flex items-center justify-center text-paper-50 transition-transform duration-500 group-hover:rotate-[-6deg]">
                <ShieldIcon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div className="absolute -inset-1 bg-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            <div className="leading-none">
              <div className="font-display text-lg font-medium tracking-tight text-ink-900">
                SecureWithQuan
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink-900/50 mt-0.5 font-mono">
                LLC · Risk Advisory
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-ink-900/75 hover:text-ink-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm bg-ink-900 text-paper-50 px-5 py-2.5 rounded-full hover:bg-ink-700 transition-colors inline-flex items-center gap-2 group"
            >
              Book free call
              <span className="w-1 h-1 rounded-full bg-accent group-hover:bg-paper-50 transition-colors" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink-900 p-2"
            aria-label="Menu"
          >
            {open ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper-50 border-t border-ink-900/8">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-ink-900 border-b border-ink-900/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-6 text-center bg-ink-900 text-paper-50 px-5 py-3.5 rounded-full"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
