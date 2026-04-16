"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Pricing",    href: "/#pricing" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

  return (
    <>
      {/* ── Main Nav Bar ─────────────────────────────────────────── */}
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "18px clamp(20px, 4vw, 60px)" : "32px clamp(20px, 4vw, 60px)",
          backgroundColor: scrolled ? "rgba(26, 8, 3, 0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(150%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(150%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200, 164, 74, 0.15)" : "1px solid transparent",
          transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* ── Logo (Left) ── */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ borderRadius: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/logo.png" alt="Logo" width={34} height={34} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "22px",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  color: "var(--cream-primary)",
                  lineHeight: 1,
                  textTransform: "uppercase"
                }}
              >
                Zarqa
              </div>
            </div>
          </Link>
          </div>

          {/* ── Desktop Nav Links (Center) ── */}
          <div
            style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group"
                style={{
                  position: "relative",
                  fontFamily: "var(--font-jost)",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: isActive(link.href) ? "var(--gold-primary)" : "var(--cream-text)",
                  transition: "color 300ms ease",
                  padding: "8px 0"
                }}
              >
                {link.label}
                {/* Custom animated underline */}
                <span 
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: isActive(link.href) ? "100%" : "0%",
                    height: "1px",
                    backgroundColor: "var(--gold-primary)",
                    transition: "width 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          {/* ── Right: CTA + Mobile Toggle ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", justifyContent: "flex-end" }}>
            <Link
              href="/#contact"
              className="hidden md:inline-block"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--brown-darkest)",
                backgroundColor: "var(--gold-primary)",
                border: "1px solid var(--gold-primary)",
                padding: "10px 24px",
                transition: "all 300ms ease",
                borderRadius: "2px" // very subtle softening for modern touch
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--gold-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--gold-primary)";
                e.currentTarget.style.color = "var(--brown-darkest)";
              }}
            >
              Start Order
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold-primary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
              }}
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Overlay ────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          backgroundColor: "var(--brown-darkest)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          transition: "transform 400ms ease-out, visibility 400ms ease",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontFamily: "var(--font-jost)",
            fontSize: "12px",
            color: "var(--gold-dim)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "28px",
              fontWeight: 400,
              color: isActive(link.href) ? "var(--gold-bright)" : "var(--cream-text)",
              textDecoration: "none",
              transition: "color 200ms ease",
            }}
          >
            {link.label}
          </Link>
        ))}

        <div style={{ position: "absolute", bottom: "40px", textAlign: "center" }}>
          <a
            href="https://wa.me/923038705165"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              color: "var(--gold-primary)",
              textDecoration: "none",
            }}
          >
            WHATSAPP: +92 303 870 5165
          </a>
        </div>
      </div>
    </>
  );
}
