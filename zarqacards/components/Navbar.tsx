"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Collection", href: "/collection" },
  { label: "About",      href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Pricing",    href: "/pricing"    },
  { label: "Contact",    href: "/contact"    },
];

const INSTAGRAM = "https://www.instagram.com/zarqacards.offical/";
const WHATSAPP  = "https://wa.me/923038705165";

/* ── Inline SVG icons ────────────────────────────────────────────── */
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

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/* ── Logo wordmark ───────────────────────────────────────────────── */
function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize  = size === "sm" ? 36 : 42;
  const nameSize = size === "sm" ? "18px" : "22px";
  const tagSize  = size === "sm" ? "7px" : "8px";

  return (
    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{
        width:           `${imgSize}px`,
        height:          `${imgSize}px`,
        borderRadius:    "50%",
        overflow:        "hidden",
        flexShrink:      0,
        border:          "0.5px solid rgba(200,164,74,0.45)",
        backgroundColor: "var(--brown-deep)",
        boxShadow:       "0 0 0 3px rgba(200,164,74,0.06)",
      }}>
        <Image
          src="/logo.png"
          alt="ZarqaCards logo"
          width={imgSize}
          height={imgSize}
          priority
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div>
        <div style={{
          fontFamily:    "var(--font-cormorant)",
          fontSize:      nameSize,
          fontWeight:    600,
          letterSpacing: "0.35em",
          color:         "var(--gold-bright)",
          lineHeight:    1,
          textTransform: "uppercase",
        }}>
          ZARQA
        </div>
        <div style={{
          fontFamily:    "var(--font-jost)",
          fontSize:      tagSize,
          fontWeight:    400,
          letterSpacing: "0.28em",
          color:         "var(--gold-dim)",
          lineHeight:    1,
          marginTop:     "5px",
          textTransform: "uppercase",
        }}>
          CARDS &middot; زرقا
        </div>
      </div>
    </Link>
  );
}

/* ── Component ───────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
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
      {/* ══════════════════════════════════════════════
          DESKTOP / TABLET NAV
      ══════════════════════════════════════════════ */}
      <nav
        aria-label="Main navigation"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          100,
          height:          scrolled ? "68px" : "80px",
          padding:         "0 clamp(16px, 4vw, 64px)",
          backgroundColor: scrolled
            ? "rgba(18, 5, 1, 0.94)"
            : "transparent",
          backdropFilter:  scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom:    scrolled
            ? "0.5px solid rgba(200,164,74,0.18)"
            : "none",
          transition:
            "height 400ms ease, background-color 450ms ease, " +
            "backdrop-filter 450ms ease, border-color 450ms ease",
          display:         "flex",
          alignItems:      "center",
        }}
      >
        <div style={{
          maxWidth:            "1400px",
          margin:              "0 auto",
          width:         "100%",
          display:       "flex",
          alignItems:    "center",
          justifyContent:"space-between",
          position:      "relative",
        }}>
          {/* ── Left: Logo ──────────────────────────── */}
          <Logo />

          {/* ── Center: Nav links (desktop only, absolutely centered) ── */}
          <div
            className="hidden md:flex"
            style={{
              position:  "absolute",
              left:      "50%",
              transform: "translateX(-50%)",
              gap:       "40px",
              alignItems:"center",
            }}
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group"
                  style={{
                    position:       "relative",
                    fontFamily:     "var(--font-jost)",
                    fontSize:       "11px",
                    fontWeight:     active ? 500 : 400,
                    letterSpacing:  "0.18em",
                    textTransform:  "uppercase",
                    color:          active ? "var(--gold-primary)" : "var(--cream-muted)",
                    textDecoration: "none",
                    padding:        "6px 0",
                    transition:     "color 280ms ease",
                  }}
                >
                  {link.label}
                  <span style={{
                    position:        "absolute",
                    bottom:          0,
                    left:            0,
                    width:           active ? "100%" : "0%",
                    height:          "0.5px",
                    backgroundColor: "var(--gold-primary)",
                    transition:      "width 380ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }} className="group-hover:!w-full" />
                </Link>
              );
            })}
          </div>

          {/* ── Right: Icons + CTA + Hamburger ─────── */}
          <div style={{
            display:        "flex",
            alignItems:     "center",
            gap:            "20px",
            justifyContent: "flex-end",
          }}>
            {/* Instagram (desktop) */}
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
                border:          "0.5px solid var(--gold-primary)",
                padding:         "10px 24px",
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

            {/* Hamburger (mobile) — 44×44 touch target */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="flex md:hidden"
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
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          MOBILE OVERLAY
      ══════════════════════════════════════════════ */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        style={{
          position:   "fixed",
          inset:      0,
          zIndex:     998,
          backgroundColor: "rgba(10, 3, 0, 0.60)",
          opacity:    menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 380ms ease, visibility 380ms ease",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />

      {/* Drawer panel */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position:        "fixed",
          top:             0,
          right:           0,
          bottom:          0,
          zIndex:          999,
          width:           "min(360px, 100vw)",
          display:         "flex",
          flexDirection:   "column",
          backgroundColor: "var(--brown-darkest)",
          borderLeft:      "0.5px solid rgba(200,164,74,0.12)",
          transform:       menuOpen ? "translateX(0)" : "translateX(100%)",
          visibility:      menuOpen ? "visible" : "hidden",
          transition:      "transform 420ms cubic-bezier(0.16, 1, 0.3, 1), visibility 420ms",
        }}
      >
        {/* ── Panel header ────────────────────────── */}
        <div style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "0 24px",
          height:         "72px",
          borderBottom:   "0.5px solid rgba(200,164,74,0.12)",
          flexShrink:     0,
        }}>
          <Logo size="sm" />

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
              transition:     "color 200ms ease",
              flexShrink:     0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-dim)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Nav links ───────────────────────────── */}
        <nav style={{
          flex:          1,
          display:       "flex",
          flexDirection: "column",
          padding:       "12px 0",
          overflowY:     "auto",
        }}>
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "20px",
                  padding:        "18px 28px",
                  textDecoration: "none",
                  borderBottom:   "0.5px solid rgba(200,164,74,0.07)",
                  backgroundColor: active ? "rgba(200,164,74,0.06)" : "transparent",
                  transition:     "background-color 200ms ease",
                  // Stagger entrance
                  opacity:        menuOpen ? 1 : 0,
                  transform:      menuOpen ? "translateX(0)" : "translateX(24px)",
                  transitionProperty: "opacity, transform, background-color",
                  transitionDuration: `350ms, 350ms, 200ms`,
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1), cubic-bezier(0.16,1,0.3,1), ease",
                  transitionDelay: `${80 + i * 55}ms, ${80 + i * 55}ms, 0ms`,
                }}
              >
                {/* Index number */}
                <span style={{
                  fontFamily:    "var(--font-cormorant)",
                  fontStyle:     "italic",
                  fontSize:      "13px",
                  fontWeight:    300,
                  letterSpacing: "0.1em",
                  color:         active ? "var(--gold-primary)" : "var(--gold-dim)",
                  minWidth:      "20px",
                  lineHeight:    1,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Thin vertical separator */}
                <span style={{
                  width:           "0.5px",
                  height:          "16px",
                  backgroundColor: active ? "var(--gold-primary)" : "rgba(138,101,32,0.35)",
                  flexShrink:      0,
                }} />

                {/* Link label */}
                <span style={{
                  fontFamily:    "var(--font-cormorant)",
                  fontSize:      "clamp(22px, 6vw, 28px)",
                  fontWeight:    active ? 400 : 300,
                  letterSpacing: "0.03em",
                  color:         active ? "var(--gold-bright)" : "var(--cream-primary)",
                  lineHeight:    1.2,
                  flex:          1,
                }}>
                  {link.label}
                </span>

                {/* Active indicator arrow */}
                {active && (
                  <span style={{
                    color:      "var(--gold-primary)",
                    fontSize:   "14px",
                    lineHeight: 1,
                  }}>
                    →
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Bottom strip ────────────────────────── */}
        <div style={{
          flexShrink:  0,
          borderTop:   "0.5px solid rgba(200,164,74,0.12)",
          padding:     "20px 28px 28px",
          display:     "flex",
          flexDirection: "column",
          gap:         "16px",
          opacity:     menuOpen ? 1 : 0,
          transform:   menuOpen ? "translateY(0)" : "translateY(12px)",
          transition:  `opacity 380ms ease ${80 + NAV_LINKS.length * 55 + 40}ms, transform 380ms ease ${80 + NAV_LINKS.length * 55 + 40}ms`,
        }}>
          {/* WhatsApp CTA */}
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Assalam o Alaikum, I'd like to enquire about an invitation card.")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              gap:             "10px",
              fontFamily:      "var(--font-jost)",
              fontSize:        "11px",
              fontWeight:      500,
              letterSpacing:   "0.18em",
              textTransform:   "uppercase",
              color:           "var(--brown-darkest)",
              backgroundColor: "var(--gold-primary)",
              padding:         "14px 20px",
              textDecoration:  "none",
            }}
          >
            <WhatsAppIcon size={16} />
            Order on WhatsApp
          </a>

          {/* Social row */}
          <div style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}>
            <a
              href={`tel:+923038705165`}
              style={{
                fontFamily:     "var(--font-jost)",
                fontSize:       "11px",
                fontWeight:     300,
                letterSpacing:  "0.1em",
                color:          "var(--cream-muted)",
                textDecoration: "none",
              }}
            >
              +92 303 870 5165
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZarqaCards on Instagram"
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        "6px",
                fontFamily: "var(--font-jost)",
                fontSize:   "11px",
                fontWeight: 300,
                color:      "var(--gold-dim)",
                textDecoration: "none",
              }}
            >
              <InstagramIcon size={14} />
              <span>@zarqacards.offical</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
