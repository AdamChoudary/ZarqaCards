"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "About",      href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Pricing",    href: "/pricing"    },
  { label: "Contact",    href: "/contact"    },
];

const INSTAGRAM = "https://www.instagram.com/zarqacards.offical/";
const WHATSAPP  = "https://wa.me/923038705165";

/* ── Inline SVG icons (no external dep) ────────────────────────────── */
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );
}

/* ── Component ──────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (!base || base === "/") return pathname === "/";
    return pathname.startsWith(base);
  };

  return (
    <>
      {/* ══════════════════════════════════
          MAIN NAVBAR
      ══════════════════════════════════ */}
      <nav
        aria-label="Main navigation"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          100,
          padding:         scrolled
            ? "0 clamp(16px, 4vw, 64px)"
            : "0 clamp(16px, 4vw, 64px)",
          height:          scrolled ? "68px" : "76px",
          backgroundColor: scrolled
            ? "rgba(26, 8, 3, 0.82)"
            : "rgba(61, 26, 10, 0.65)",
          backdropFilter:  "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom:    scrolled
            ? "0.5px solid rgba(200, 164, 74, 0.25)"
            : "0.5px solid rgba(200, 164, 74, 0.12)",
          transition:      "height 400ms ease, background-color 400ms ease, border-color 400ms ease",
          display:         "flex",
          alignItems:      "center",
        }}
      >
        <div
          style={{
            maxWidth:       "1400px",
            margin:         "0 auto",
            width:          "100%",
            display:        "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems:     "center",
            gap:            "24px",
          }}
        >
          {/* ── Left: Logo ──────────────────────── */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display:        "flex",
                alignItems:     "center",
                gap:            "12px",
              }}
            >
              {/* Circular logo — overflow:hidden guarantees clip even if PNG has square bg */}
              <div
                style={{
                  width:           "42px",
                  height:          "42px",
                  borderRadius:    "50%",
                  overflow:        "hidden",
                  flexShrink:      0,
                  border:          "0.5px solid rgba(200, 164, 74, 0.45)",
                  backgroundColor: "var(--brown-deep)",
                  boxShadow:       "0 0 0 3px rgba(200,164,74,0.06)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="ZarqaCards logo"
                  width={42}
                  height={42}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Wordmark */}
              <div>
                <div
                  style={{
                    fontFamily:    "var(--font-cormorant)",
                    fontSize:      "22px",
                    fontWeight:    600,
                    letterSpacing: "0.35em",
                    color:         "var(--gold-bright)",
                    lineHeight:    1,
                    textTransform: "uppercase",
                  }}
                >
                  ZARQA
                </div>
                <div
                  style={{
                    fontFamily:    "var(--font-jost)",
                    fontSize:      "8px",
                    fontWeight:    400,
                    letterSpacing: "0.28em",
                    color:         "var(--gold-dim)",
                    lineHeight:    1,
                    marginTop:     "5px",
                    textTransform: "uppercase",
                  }}
                >
                  CARDS &middot; زرقا
                </div>
              </div>
            </Link>
          </div>

          {/* ── Center: Nav Links (desktop only) ── */}
          <div
            className="hidden md:flex"
            style={{ gap: "36px", alignItems: "center", justifyContent: "center" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group"
                style={{
                  position:      "relative",
                  fontFamily:    "var(--font-jost)",
                  fontSize:      "11px",
                  fontWeight:    400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color:         isActive(link.href) ? "var(--gold-primary)" : "var(--cream-muted)",
                  textDecoration: "none",
                  transition:    "color 280ms ease",
                  padding:       "6px 0",
                }}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  style={{
                    position:        "absolute",
                    bottom:          0,
                    left:            0,
                    width:           isActive(link.href) ? "100%" : "0%",
                    height:          "0.5px",
                    backgroundColor: "var(--gold-primary)",
                    transition:      "width 380ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="group-hover:!w-full"
                />
              </Link>
            ))}
          </div>

          {/* ── Right: Instagram + CTA + Mobile toggle ── */}
          <div
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "20px",
              justifyContent: "flex-end",
            }}
          >
            {/* Instagram icon (desktop) */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow ZarqaCards on Instagram"
              className="hidden md:flex"
              style={{
                alignItems: "center",
                color:      "var(--gold-dim)",
                transition: "color 250ms ease",
                padding:    "4px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-dim)")}
            >
              <InstagramIcon size={17} />
            </a>

            {/* Order CTA (desktop) */}
            <Link
              href="/contact"
              className="hidden md:inline-block"
              style={{
                fontFamily:      "var(--font-jost)",
                fontSize:        "10px",
                fontWeight:      500,
                letterSpacing:   "0.22em",
                textTransform:   "uppercase",
                color:           "var(--brown-darkest)",
                backgroundColor: "var(--gold-primary)",
                border:          "1px solid var(--gold-primary)",
                padding:         "11px 26px",
                textDecoration:  "none",
                transition:      "background-color 280ms ease, color 280ms ease",
                whiteSpace:      "nowrap",
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
              Order Now
            </Link>

            {/* Hamburger — 44×44 touch target */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="md:hidden"
              style={{
                width:          "44px",
                height:         "44px",
                alignItems:     "center",
                justifyContent: "center",
                color:          "var(--gold-primary)",
                background:     "none",
                border:         "none",
                cursor:         "pointer",
                flexShrink:     0,
                padding:        0,
              }}
            >
              {/* Hamburger lines */}
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════
          MOBILE OVERLAY
      ══════════════════════════════════ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position:        "fixed",
          inset:           0,
          zIndex:          999,
          display:         "flex",
          flexDirection:   "column",
          backgroundColor: "var(--brown-darkest)",
          transform:       menuOpen ? "translateX(0)" : "translateX(100%)",
          visibility:      menuOpen ? "visible" : "hidden",
          transition:      "transform 380ms cubic-bezier(0.16, 1, 0.3, 1), visibility 380ms",
          pointerEvents:   menuOpen ? "auto" : "none",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            padding:        "0 20px",
            height:         "72px",
            borderBottom:   "0.5px solid rgba(138, 101, 32, 0.25)",
            flexShrink:     0,
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display:        "flex",
              alignItems:     "center",
              gap:            "10px",
            }}
          >
            <div
              style={{
                width:           "34px",
                height:          "34px",
                borderRadius:    "50%",
                overflow:        "hidden",
                border:          "0.5px solid var(--gold-dim)",
                backgroundColor: "var(--brown-deep)",
              }}
            >
              <Image
                src="/logo.png"
                alt="ZarqaCards"
                width={34}
                height={34}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <span
              style={{
                fontFamily:    "var(--font-cormorant)",
                fontSize:      "20px",
                fontWeight:    600,
                letterSpacing: "0.3em",
                color:         "var(--gold-bright)",
                textTransform: "uppercase",
              }}
            >
              ZARQA
            </span>
          </Link>

          {/* Close — 44×44 touch target */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              width:          "44px",
              height:         "44px",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              color:          "var(--gold-dim)",
              background:     "none",
              border:         "none",
              cursor:         "pointer",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Links */}
        <nav
          style={{
            flex:           1,
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "center",
            padding:        "0 32px",
            gap:            "0",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily:     "var(--font-cormorant)",
                fontSize:       "clamp(28px, 7vw, 36px)",
                fontWeight:     300,
                letterSpacing:  "0.04em",
                color:          isActive(link.href) ? "var(--gold-bright)" : "var(--cream-primary)",
                textDecoration: "none",
                padding:        "16px 0",
                borderBottom:   i < navLinks.length - 1
                  ? "0.5px solid rgba(138, 101, 32, 0.18)"
                  : "none",
                transition:     "color 200ms ease",
                display:        "flex",
                alignItems:     "center",
                gap:            "16px",
              }}
            >
              <span
                style={{
                  fontFamily:    "var(--font-jost)",
                  fontSize:      "10px",
                  fontWeight:    400,
                  letterSpacing: "0.3em",
                  color:         "var(--gold-dim)",
                  minWidth:      "24px",
                }}
              >
                0{i + 1}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom strip */}
        <div
          style={{
            padding:        "20px 32px",
            borderTop:      "0.5px solid rgba(138, 101, 32, 0.25)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "12px",
            flexShrink:     0,
          }}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily:     "var(--font-jost)",
              fontSize:       "11px",
              fontWeight:     400,
              letterSpacing:  "0.15em",
              color:          "var(--gold-primary)",
              textDecoration: "none",
            }}
          >
            +92 303 870 5165
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "7px",
              fontFamily:     "var(--font-jost)",
              fontSize:       "11px",
              fontWeight:     400,
              letterSpacing:  "0.12em",
              color:          "var(--gold-dim)",
              textDecoration: "none",
            }}
          >
            <InstagramIcon size={14} />
            @zarqacards.offical
          </a>
        </div>
      </div>
    </>
  );
}
