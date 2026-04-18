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

function Logo({ imgSize = 40, nameSize = "20px", tagSize = "7.5px" }: {
  imgSize?: number; nameSize?: string; tagSize?: string;
}) {
  return (
    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{
        width: `${imgSize}px`, height: `${imgSize}px`,
        borderRadius: "50%", overflow: "hidden", flexShrink: 0,
        border: "0.5px solid rgba(200,164,74,0.45)",
        backgroundColor: "var(--brown-deep)",
      }}>
        <Image src="/logo.png" alt="ZarqaCards" width={imgSize} height={imgSize} priority
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div>
        <div style={{
          fontFamily: "var(--font-cormorant)", fontSize: nameSize, fontWeight: 600,
          letterSpacing: "0.35em", color: "var(--gold-bright)", lineHeight: 1, textTransform: "uppercase",
        }}>ZARQA</div>
        <div style={{
          fontFamily: "var(--font-jost)", fontSize: tagSize, fontWeight: 400,
          letterSpacing: "0.28em", color: "var(--gold-dim)", lineHeight: 1,
          marginTop: "4px", textTransform: "uppercase",
        }}>CARDS · زرقا</div>
      </div>
    </Link>
  );
}

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
      {/* ══════════════════════════════════════
          MAIN NAV BAR
      ══════════════════════════════════════ */}
      <nav
        aria-label="Main navigation"
        style={{
          position:        "fixed",
          top: 0, left: 0, right: 0,
          zIndex:          100,
          backgroundColor: scrolled
            ? "rgba(18,5,1,0.95)"
            : "rgba(18,5,1,0.95)",
          backdropFilter:  "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom:    scrolled
            ? "0.5px solid rgba(200,164,74,0.18)"
            : "0.5px solid rgba(200,164,74,0.08)",
          transition:      "border-color 400ms ease",
        }}
      >
        {/* Height: 60px mobile, 72px desktop */}
        <div style={{
          maxWidth: "1400px",
          margin:   "0 auto",
          padding:  "0 clamp(16px, 4vw, 64px)",
          height:   "60px",
          display:  "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
          className="lg:!h-[72px]"
        >
          {/* ── Logo ──────────────────────── */}
          <Logo />

          {/* ── Center: Nav links (lg+ only, absolutely positioned) ── */}
          <div
            className="hidden lg:flex"
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
                <Link key={link.label} href={link.href} className="group"
                  style={{
                    position: "relative",
                    fontFamily: "var(--font-jost)", fontSize: "11px",
                    fontWeight: active ? 500 : 400, letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: active ? "var(--gold-primary)" : "var(--cream-muted)",
                    textDecoration: "none", padding: "6px 0",
                    transition: "color 280ms ease",
                  }}
                >
                  {link.label}
                  <span style={{
                    position: "absolute", bottom: 0, left: 0,
                    width: active ? "100%" : "0%", height: "0.5px",
                    backgroundColor: "var(--gold-primary)",
                    transition: "width 380ms cubic-bezier(0.16,1,0.3,1)",
                  }} className="group-hover:!w-full" />
                </Link>
              );
            })}
          </div>

          {/* ── Right: Desktop actions + Mobile MENU ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Instagram (desktop) */}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="hidden lg:flex"
              style={{ alignItems:"center", color:"var(--gold-dim)", transition:"color 250ms ease", padding:"4px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-dim)")}
            >
              <InstagramIcon size={17} />
            </a>

            {/* Order CTA (desktop) */}
            <Link href="/contact" className="hidden lg:inline-block"
              style={{
                fontFamily:"var(--font-jost)", fontSize:"10px", fontWeight:500,
                letterSpacing:"0.22em", textTransform:"uppercase",
                color:"var(--brown-darkest)", backgroundColor:"var(--gold-primary)",
                border:"0.5px solid var(--gold-primary)", padding:"10px 24px",
                textDecoration:"none", transition:"background-color 280ms ease, color 280ms ease",
                whiteSpace:"nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor="transparent"; e.currentTarget.style.color="var(--gold-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor="var(--gold-primary)"; e.currentTarget.style.color="var(--brown-darkest)"; }}
            >
              Order Now
            </Link>

            {/* MENU button (mobile only) */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex lg:hidden"
              style={{
                minWidth:  "44px",
                minHeight: "44px",
                display:   "flex",
                alignItems:"center",
                justifyContent:"center",
                background:"none",
                border:    "none",
                cursor:    "pointer",
                padding:   "0 4px",
                fontFamily:"var(--font-jost)",
                fontSize:  "10px",
                fontWeight:500,
                letterSpacing:"0.3em",
                textTransform:"uppercase",
                color:     "var(--gold-primary)",
                flexShrink:0,
              }}
            >
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          MOBILE FULL-SCREEN OVERLAY
      ══════════════════════════════════════ */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position:   "fixed",
          inset:      0,
          zIndex:     9999,
          backgroundColor: "#1E0D04",
          display:    "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          transform:  menuOpen ? "translateX(0)" : "translateX(100%)",
          visibility: menuOpen ? "visible" : "hidden",
          transition: "transform 400ms cubic-bezier(0.16,1,0.3,1), visibility 400ms",
          padding:    "0 24px",
          overflowY:  "auto",
        }}
      >
        {/* Subtle islamic texture */}
        <div className="islamic-bg" aria-hidden="true"
          style={{ position:"absolute", inset:0, opacity:0.03, pointerEvents:"none" }} />

        {/* Top: Logo */}
        <div style={{
          width:"100%", paddingTop:"24px", paddingBottom:"8px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          borderBottom:"0.5px solid rgba(200,164,74,0.1)",
          flexShrink:0, position:"relative",
        }}>
          <Logo imgSize={36} nameSize="18px" tagSize="7px" />
          {/* Close in top right for quick access */}
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu"
            style={{
              minWidth:"44px", minHeight:"44px",
              display:"flex", alignItems:"center", justifyContent:"center",
              background:"none", border:"none", cursor:"pointer",
              fontFamily:"var(--font-jost)", fontSize:"10px", fontWeight:400,
              letterSpacing:"0.25em", textTransform:"uppercase",
              color:"var(--gold-dim)", gap:"6px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Center: Nav links */}
        <nav style={{
          flex:1, width:"100%",
          display:"flex", flexDirection:"column", justifyContent:"center",
          gap:"0", paddingTop:"8px", paddingBottom:"8px",
        }}>
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link key={link.label} href={link.href}
                style={{
                  display:"flex", alignItems:"center", gap:"20px",
                  padding:"16px 0",
                  borderBottom: i < NAV_LINKS.length - 1
                    ? "0.5px solid rgba(200,164,74,0.1)"
                    : "none",
                  textDecoration:"none",
                  opacity:    menuOpen ? 1 : 0,
                  transform:  menuOpen ? "translateX(0)" : "translateX(32px)",
                  transition: `opacity 380ms ease ${80 + i*60}ms, transform 380ms cubic-bezier(0.16,1,0.3,1) ${80 + i*60}ms`,
                }}
              >
                <span style={{
                  fontFamily:"var(--font-jost)", fontSize:"10px",
                  fontWeight:400, letterSpacing:"0.25em",
                  color: active ? "var(--gold-primary)" : "var(--gold-dim)",
                  minWidth:"24px",
                }}>
                  0{i+1}
                </span>
                <span style={{
                  fontFamily:"var(--font-cormorant)", fontSize:"clamp(28px,7vw,36px)",
                  fontWeight: active ? 400 : 300, letterSpacing:"0.03em",
                  color: active ? "var(--gold-bright)" : "var(--cream-primary)",
                  lineHeight:1.2,
                }}>
                  {link.label}
                </span>
                {active && (
                  <span style={{ color:"var(--gold-primary)", fontSize:"14px", marginLeft:"auto" }}>→</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: CTA + Contact + Close */}
        <div style={{
          width:"100%", paddingBottom:"32px", paddingTop:"20px",
          borderTop:"0.5px solid rgba(200,164,74,0.1)",
          display:"flex", flexDirection:"column", gap:"16px",
          flexShrink:0, position:"relative",
          opacity:    menuOpen ? 1 : 0,
          transform:  menuOpen ? "translateY(0)" : "translateY(16px)",
          transition: `opacity 360ms ease ${80 + NAV_LINKS.length * 60 + 40}ms, transform 360ms ease ${80 + NAV_LINKS.length * 60 + 40}ms`,
        }}>
          {/* WhatsApp CTA */}
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Assalam o Alaikum, I'd like to enquire about an invitation card.")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display:"flex", alignItems:"center", justifyContent:"center",
              gap:"10px", fontFamily:"var(--font-jost)", fontSize:"11px",
              fontWeight:500, letterSpacing:"0.2em", textTransform:"uppercase",
              color:"var(--brown-darkest)", backgroundColor:"var(--gold-primary)",
              padding:"15px 20px", textDecoration:"none", textAlign:"center",
            }}
          >
            ORDER ON WHATSAPP
          </a>

          {/* Phone + Instagram row */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"8px" }}>
            <a href="tel:+923038705165"
              style={{ fontFamily:"var(--font-jost)", fontSize:"11px", fontWeight:300,
                       letterSpacing:"0.1em", color:"var(--cream-muted)", textDecoration:"none" }}
            >+92 303 870 5165</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", gap:"6px",
                       fontFamily:"var(--font-jost)", fontSize:"11px",
                       color:"var(--gold-dim)", textDecoration:"none" }}
            >
              <InstagramIcon size={13} />
              @zarqacards.offical
            </a>
          </div>

          {/* CLOSE text button */}
          <button onClick={() => setMenuOpen(false)} aria-label="Close navigation menu"
            style={{
              background:"none", border:"none", cursor:"pointer",
              fontFamily:"var(--font-jost)", fontSize:"10px",
              fontWeight:400, letterSpacing:"0.35em", textTransform:"uppercase",
              color:"var(--gold-dim)", padding:"8px 0",
              display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
            }}
          >
            ✕  CLOSE
          </button>
        </div>
      </div>
    </>
  );
}
