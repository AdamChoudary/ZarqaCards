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
          backgroundColor: scrolled ? "#1A0803" : "var(--brown-mid)",
          borderBottom: scrolled ? "1px solid var(--gold-dim)" : "0.5px solid var(--gold-dim)",
          transition: "background-color 400ms ease, border-bottom 400ms ease",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(20px, 4vw, 80px)",
        }}
        className="h-[60px] md:h-[72px]"
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            <Image src="/logo.png" alt="Logo" width={36} height={36} style={{ borderRadius: "50%" }} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.35em",
                  color: "var(--gold-bright)",
                  lineHeight: 1,
                }}
              >
                ZARQA
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "var(--gold-dim)",
                  lineHeight: 1,
                  marginTop: "4px",
                }}
              >
                CARDS · زرقا
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div
            style={{ display: "flex", gap: "32px", alignItems: "center" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link${isActive(link.href) ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Right: CTA + Mobile Toggle ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexShrink: 0,
            }}
          >
            <Link
              href="/#contact"
              className="hidden md:inline-block"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold-primary)",
                border: "0.5px solid var(--gold-dim)",
                padding: "10px 24px",
                transition: "background-color 300ms ease, border-color 300ms ease",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(200, 164, 74, 0.1)"; // equivalent to --gold-ghost
                e.currentTarget.style.borderColor = "var(--gold-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "var(--gold-dim)";
              }}
            >
              Order Now
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
            href="https://wa.me/923001234567"
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
            WHATSAPP: +92 300 123 4567
          </a>
        </div>
      </div>
    </>
  );
}
