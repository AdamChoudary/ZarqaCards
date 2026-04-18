"use client";

import Link from "next/link";

const WHATSAPP = "https://wa.me/923038705165";

const COLLECTIONS = [
  {
    num:     "01",
    label:   "Wedding Cards",
    urdu:    "شادی کارڈ",
    desc:    "Bespoke nikkah and wedding invitations crafted to reflect the grandeur of your union. Gold foil, ribbon, and layered detail.",
    tag:     "SHADI",
    href:    "/collection",
    wa:      "Assalam o Alaikum, I'm looking for Wedding Cards. Please share your collection details.",
  },
  {
    num:     "02",
    label:   "Mehndi Cards",
    urdu:    "مہندی کارڈ",
    desc:    "Vibrant, celebratory designs that capture the joy of mehndi night. As lively and colourful as the evening itself.",
    tag:     "MEHNDI",
    href:    "/collection",
    wa:      "Assalam o Alaikum, I'm looking for Mehndi Cards. Please share your collection details.",
    popular: true,
  },
  {
    num:     "03",
    label:   "Walima Cards",
    urdu:    "ولیمہ کارڈ",
    desc:    "Elegant reception cards with quiet dignity. Classic Cormorant typography meets fine paper stock.",
    tag:     "WALIMA",
    href:    "/collection",
    wa:      "Assalam o Alaikum, I'm looking for Walima Cards. Please share your collection details.",
  },
  {
    num:     "04",
    label:   "Aqeeqa Cards",
    urdu:    "عقیقہ کارڈ",
    desc:    "Tender announcements to welcome a new life. Soft luxury for the most sacred of family milestones.",
    tag:     "AQEEQA",
    href:    "/collection",
    wa:      "Assalam o Alaikum, I'm looking for Aqeeqa Cards. Please share your collection details.",
  },
  {
    num:     "05",
    label:   "Birthday Invitations",
    urdu:    "سالگرہ کارڈ",
    desc:    "From intimate gatherings to grand milestone parties — beautifully printed birthday invitations.",
    tag:     "BIRTHDAY",
    href:    "/collection",
    wa:      "Assalam o Alaikum, I'm looking for Birthday Invitation Cards. Please share your collection details.",
  },
  {
    num:     "06",
    label:   "Custom Designs",
    urdu:    "کسٹم ڈیزائن",
    desc:    "Bring your vision to life. We work with you from first concept to final print — every detail yours.",
    tag:     "CUSTOM",
    href:    "/collection",
    wa:      "Assalam o Alaikum, I'm interested in a Custom Card Design. Please share more information.",
  },
];

export default function HomeCollectionSection() {
  return (
    <section
      id="collection"
      style={{
        position:        "relative",
        backgroundColor: "var(--brown-mid)",
        padding:         "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
        borderTop:       "0.5px solid var(--gold-dim)",
        borderBottom:    "0.5px solid var(--gold-dim)",
      }}
    >
      {/* Islamic texture */}
      <div
        aria-hidden="true"
        className="islamic-bg"
        style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div
          className="reveal"
          style={{
            display:       "flex",
            justifyContent:"space-between",
            alignItems:    "flex-end",
            flexWrap:      "wrap",
            gap:           "24px",
            marginBottom:  "clamp(40px, 6vw, 64px)",
          }}
        >
          <div>
            <p style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "9px",
              fontWeight:    400,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color:         "var(--gold-dim)",
              marginBottom:  "8px",
            }}>
              BROWSE BY OCCASION
            </p>
            <div style={{
              width: "40px", height: "0.5px",
              backgroundColor: "var(--gold-dim)", marginBottom: "24px",
            }} />
            <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
              <h2 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize:   "clamp(28px, 5vw, 48px)",
                fontWeight: 300,
                color:      "var(--cream-primary)",
                margin:     0,
                lineHeight: 1,
              }}>
                The Collection
              </h2>
              <p dir="rtl" style={{
                fontFamily: "var(--font-nastaliq)",
                fontSize:   "20px",
                color:      "var(--gold-dim)",
                margin:     0,
              }}>
                ہمارا مجموعہ
              </p>
            </div>
          </div>

          <Link
            href="/collection"
            style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "10px",
              fontWeight:    400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color:         "var(--gold-primary)",
              textDecoration:"none",
              border:        "0.5px solid var(--gold-primary)",
              padding:       "12px 28px",
              whiteSpace:    "nowrap",
              transition:    "background-color 250ms ease, color 250ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold-primary)";
              e.currentTarget.style.color = "var(--brown-darkest)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--gold-primary)";
            }}
          >
            View All Cards →
          </Link>
        </div>

        {/* ── 3 × 2 Card Grid ── */}
        <div
          className="reveal reveal-delay-1 pricing-tier-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "1px",
            backgroundColor:     "var(--gold-dim)",
          }}
        >
          {COLLECTIONS.map((col) => (
            <div
              key={col.num}
              style={{
                backgroundColor: "var(--brown-deep)",
                padding:         "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px)",
                display:         "flex",
                flexDirection:   "column",
                position:        "relative",
                transition:      "background-color 250ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--brown-mid)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--brown-deep)";
              }}
            >
              {/* Popular badge */}
              {col.popular && (
                <div style={{
                  position:        "absolute",
                  top:             "16px",
                  right:           "16px",
                  backgroundColor: "var(--gold-primary)",
                  color:           "var(--brown-darkest)",
                  fontFamily:      "var(--font-jost)",
                  fontSize:        "7px",
                  fontWeight:      500,
                  letterSpacing:   "0.2em",
                  textTransform:   "uppercase",
                  padding:         "3px 8px",
                }}>
                  POPULAR
                </div>
              )}

              {/* Number */}
              <p style={{
                fontFamily:    "var(--font-jost)",
                fontSize:      "9px",
                fontWeight:    400,
                letterSpacing: "0.25em",
                color:         "var(--gold-dim)",
                marginBottom:  "12px",
              }}>
                {col.num}
              </p>

              {/* Name */}
              <h3 style={{
                fontFamily:   "var(--font-cormorant)",
                fontSize:     "clamp(20px, 2.5vw, 26px)",
                fontWeight:   300,
                color:        "var(--cream-primary)",
                lineHeight:   1.1,
                margin:       "0 0 4px",
              }}>
                {col.label}
              </h3>

              {/* Urdu label */}
              <p dir="rtl" style={{
                fontFamily:   "var(--font-nastaliq)",
                fontSize:     "14px",
                color:        "var(--gold-dim)",
                marginBottom: "16px",
                lineHeight:   1.4,
              }}>
                {col.urdu}
              </p>

              {/* Divider */}
              <div style={{
                width:           "24px",
                height:          "0.5px",
                backgroundColor: "var(--gold-dim)",
                marginBottom:    "16px",
              }} />

              {/* Description */}
              <p style={{
                fontFamily:   "var(--font-jost)",
                fontSize:     "11px",
                fontWeight:   300,
                color:        "var(--cream-muted)",
                lineHeight:   1.8,
                flex:         1,
                marginBottom: "24px",
              }}>
                {col.desc}
              </p>

              {/* Tag + CTA row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <span style={{
                  fontFamily:    "var(--font-jost)",
                  fontSize:      "8px",
                  fontWeight:    400,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color:         "var(--gold-dim)",
                  border:        "0.5px solid var(--gold-dim)",
                  padding:       "3px 8px",
                }}>
                  {col.tag}
                </span>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(col.wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:    "var(--font-jost)",
                    fontSize:      "9px",
                    fontWeight:    400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color:         "var(--gold-primary)",
                    textDecoration:"none",
                    transition:    "color 200ms ease",
                    display:       "flex",
                    alignItems:    "center",
                    gap:           "4px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-bright)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
                >
                  ENQUIRE →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p
          className="reveal reveal-delay-2"
          style={{
            textAlign:     "center",
            fontFamily:    "var(--font-jost)",
            fontSize:      "11px",
            fontWeight:    300,
            color:         "var(--cream-muted)",
            letterSpacing: "0.03em",
            marginTop:     "clamp(28px, 4vw, 40px)",
          }}
        >
          Every card is custom-printed · Digital proof before printing · Free design consultation on WhatsApp
        </p>
      </div>
    </section>
  );
}
