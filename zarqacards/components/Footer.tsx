"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/zarqacards.offical/";
const WHATSAPP  = "https://wa.me/923038705165";

function InstagramIcon({ size = 15 }: { size?: number }) {
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

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Header row - tappable on mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="footer-accordion-toggle w-full"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0",
          marginBottom: "0",
        }}
      >
        <h4 style={{
          fontFamily: "var(--font-jost)", fontSize: "10px", fontWeight: 500,
          color: "var(--gold-dim)", letterSpacing: "0.35em", textTransform: "uppercase",
          margin: 0,
        }}>
          {title}
        </h4>
        <span
          className="lg:hidden"
          style={{
            color: "var(--gold-dim)", fontSize: "16px", lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 250ms ease",
            display: "inline-block",
          }}
        >+</span>
      </button>

      {/* Content: always visible on lg+, accordion on mobile */}
      <div
        className="footer-accordion-body"
        style={{
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 350ms ease, opacity 300ms ease",
          marginTop: open ? "20px" : "0",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A0803",
        borderTop: "0.5px solid var(--gold-dim)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px clamp(20px, 4vw, 80px) 48px",
        }}
      >
        {/* 4 Column Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: "40px",
            marginBottom: "64px",
          }}
        >
          {/* Column 1: Brand */}
          <div style={{ paddingRight: "32px" }}>
            {/* Logo + Wordmark */}
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "12px",
                marginBottom:   "20px",
              }}
            >
              {/* Circular logo container — overflow:hidden guarantees clip */}
              <div
                style={{
                  width:           "40px",
                  height:          "40px",
                  borderRadius:    "50%",
                  overflow:        "hidden",
                  flexShrink:      0,
                  border:          "0.5px solid rgba(200, 164, 74, 0.4)",
                  backgroundColor: "var(--brown-deep)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="ZarqaCards logo"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
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
                    marginTop:     "4px",
                    textTransform: "uppercase",
                  }}
                >
                  CARDS &middot; زرقا
                </div>
              </div>
            </Link>

            {/* Urdu tagline */}
            <p
              dir="rtl"
              style={{
                fontFamily:  "var(--font-nastaliq)",
                fontSize:    "15px",
                color:       "var(--gold-dim)",
                marginBottom: "16px",
                textAlign:   "left",
              }}
            >
              ہر خوشی کا آغاز ایک کارڈ سے
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily:  "var(--font-jost)",
                fontSize:    "13px",
                fontWeight:  300,
                color:       "var(--cream-muted)",
                maxWidth:    "260px",
                lineHeight:  1.8,
                marginBottom: "24px",
              }}
            >
              Premium wedding invitation design based in Rawalpindi,
              crafting beautiful cards for every occasion.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "8px",
                  fontFamily:     "var(--font-jost)",
                  fontSize:       "12px",
                  fontWeight:     400,
                  letterSpacing:  "0.05em",
                  color:          "var(--gold-primary)",
                  textDecoration: "none",
                  transition:     "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-bright)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
              >
                <WhatsAppIcon size={14} />
                +92 303 870 5165
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ZarqaCards on Instagram"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "8px",
                  fontFamily:     "var(--font-jost)",
                  fontSize:       "12px",
                  fontWeight:     400,
                  letterSpacing:  "0.05em",
                  color:          "var(--cream-muted)",
                  textDecoration: "none",
                  transition:     "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-muted)")}
              >
                <InstagramIcon size={14} />
                @zarqacards.offical
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <AccordionSection title="SERVICES">
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  "Wedding Invitations",
                  "Mehndi Cards",
                  "Walima Cards",
                  "Aqeeqa Cards",
                  "Birthday Cards",
                  "Custom Designs",
                ].map((label) => (
                  <Link key={label} href="/services" className="footer-link py-2">
                    {label}
                  </Link>
                ))}
              </div>
            </AccordionSection>
          </div>

          {/* Column 3: Pages */}
          <div>
            <AccordionSection title="NAVIGATE">
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  { label: "Home",       href: "/"           },
                  { label: "Collection", href: "/collection" },
                  { label: "About",      href: "/about"      },
                  { label: "Services",   href: "/services"   },
                  { label: "Pricing",    href: "/pricing"    },
                  { label: "Contact",    href: "/contact"    },
                ].map(({ label, href }) => (
                  <Link key={label} href={href} className="footer-link py-2">
                    {label}
                  </Link>
                ))}
              </div>
            </AccordionSection>
          </div>

          {/* Column 4: Contact */}
          <div>
            <AccordionSection title="REACH US">
              <div
                style={{
                  display:       "flex",
                  flexDirection: "column",
                  gap:           "13px",
                  fontFamily:    "var(--font-jost)",
                  fontSize:      "13px",
                  fontWeight:    300,
                  color:         "var(--cream-muted)",
                  lineHeight:    1.6,
                }}
              >
                <span>Rawalpindi, Pakistan</span>
                <span>Mon – Sat, 9am – 9pm</span>
                <a
                  href={`mailto:zarqacards@gmail.com`}
                  style={{
                    color:          "var(--cream-muted)",
                    textDecoration: "none",
                    transition:     "color 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-muted)")}
                >
                  zarqacards@gmail.com
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        "inline-block",
                    fontFamily:     "var(--font-jost)",
                    fontSize:       "10px",
                    fontWeight:     500,
                    letterSpacing:  "0.2em",
                    textTransform:  "uppercase",
                    color:          "var(--brown-darkest)",
                    backgroundColor:"var(--gold-primary)",
                    padding:        "10px 20px",
                    textDecoration: "none",
                    transition:     "background-color 250ms ease",
                    marginTop:      "4px",
                    whiteSpace:     "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold-bright)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold-primary)";
                  }}
                >
                  Order on WhatsApp
                </a>
              </div>
            </AccordionSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop:      "0.5px solid rgba(138, 101, 32, 0.3)",
            paddingTop:     "28px",
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            flexWrap:       "wrap",
            gap:            "16px",
          }}
        >
          <span
            style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "11px",
              fontWeight:    300,
              color:         "var(--cream-faint)",
              letterSpacing: "0.05em",
            }}
          >
            © 2025 ZarqaCards. All rights reserved.
          </span>

          {/* Instagram badge */}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "7px",
              fontFamily:     "var(--font-jost)",
              fontSize:       "10px",
              fontWeight:     400,
              letterSpacing:  "0.15em",
              color:          "var(--cream-faint)",
              textDecoration: "none",
              transition:     "color 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-faint)")}
          >
            <InstagramIcon size={13} />
            @zarqacards.offical
          </a>

          <span
            dir="rtl"
            style={{
              fontFamily: "var(--font-nastaliq)",
              fontSize:   "13px",
              color:      "var(--cream-faint)",
            }}
          >
            آپ کی خوشیاں ہمارے کارڈز میں
          </span>
        </div>
      </div>
    </footer>
  );
}
