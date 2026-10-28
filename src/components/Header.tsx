"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RaihanFradita";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#top" },
    { label: "Projects", href: "/#projects" },
    { label: "Waguri Flow", href: "/#deep-dive" },
    { label: "Skills", href: "/#skills" },
    { label: "About", href: "/#about" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-[var(--bg-surface)]/90 backdrop-blur-md border-[var(--border-color)] shadow-xs py-3"
          : "bg-[var(--bg-primary)]/80 backdrop-blur-xs border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/#top"
          className="flex items-center gap-2.5 text-[var(--text-primary)] hover:opacity-85 transition-opacity"
        >
          <div className="w-7 h-7 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center font-mono text-xs font-bold">
            RF
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)] leading-none">
              Raihan Fradita
            </span>
            <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider mt-0.5">
              ASPIRING AI ENGINEER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-xs font-medium text-[var(--text-secondary)]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[var(--accent-blue)] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: GitHub + Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-mono"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[var(--accent-blue)] transition-colors border-b border-[var(--border-subtle)] last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
              >
                <Github size={14} />
                <span>github.com/RaihanFradita</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
