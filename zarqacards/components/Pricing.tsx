"use client";

import Link from "next/link";

const TIERS = [
  {
    num: "01",
    label: "Classic",
    from: "1,900",
    unit: "per 100 cards",
    desc: "Clean, dignified cards — for the family that wants quality without extravagance.",
  },
  {
    num: "02",
    label: "Dori & Ribbon",
    from: "2,400",
    unit: "per 100 cards",
    desc: "Pakistan's most loved style. Handtied Dori and ribbon closures included.",
    popular: true,
  },
  {
    num: "03",
    label: "Signature",
    from: "4,600",
    unit: "per 100 cards",
    desc: "Heavier stock, richer detail — for families who want to make an impression.",
  },
  {
    num: "04",
    label: "Premium",
    from: "6,400",
    unit: "per 100 cards",
    desc: "Gold foil detailing, priority support, and tracked delivery on every order.",
  },
  {
    num: "05",
    label: "Luxury",
    from: "12,500",
    unit: "per 100 cards",
    desc: "Two inners included. Personal consultation. For weddings remembered for decades.",
  },
  {
    num: "06",
    label: "Acrylic",
    from: "360",
    unit: "per piece · min. 50",
    desc: "Modern luxury in clear acrylic. A card every guest will keep long after the occasion.",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "var(--brown-deep)",
        padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
        borderTop: "0.5px solid var(--gold-dim)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Section Header ── */}
        <div className="reveal" style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <p
            style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "9px",
              fontWeight:    400,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color:         "var(--gold-dim)",
              marginBottom:  "8px",
            }}
          >
            THE COLLECTION
          </p>
          <div
            style={{
              width:           "40px",
              height:          "0.5px",
              backgroundColor: "var(--gold-dim)",
              marginBottom:    "24px",
            }}
          />
          <div
            style={{
              display:    "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap:   "wrap",
              gap:        "16px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize:   "clamp(32px, 5vw, 48px)",
                fontWeight: 300,
                color:      "var(--cream-primary)",
                margin:     0,
                lineHeight: 1,
              }}
            >
              Pricing
            </h2>
            <p
              style={{
                fontFamily:   "var(--font-jost)",
                fontSize:     "12px",
                fontWeight:   300,
                color:        "var(--cream-muted)",
                letterSpacing:"0.03em",
                margin:       0,
              }}
            >
              All prices per 100 cards · Includes custom print, digital proof & 1 inner card
            </p>
          </div>
        </div>

        {/* ── Tier Grid ── */}
        <div
          className="reveal reveal-delay-1 pricing-tier-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "1px",
            backgroundColor:     "var(--gold-dim)",
            marginBottom:        "1px",
          }}
        >
          {TIERS.map((tier) => (
            <div
              key={tier.num}
              style={{
                backgroundColor: "var(--brown-mid)",
                padding:         "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px)",
                display:         "flex",
                flexDirection:   "column",
                position:        "relative",
              }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div
                  style={{
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
                  }}
                >
                  POPULAR
                </div>
              )}

              {/* Number */}
              <p
                style={{
                  fontFamily:    "var(--font-jost)",
                  fontSize:      "9px",
                  fontWeight:    400,
                  letterSpacing: "0.25em",
                  color:         "var(--gold-dim)",
                  marginBottom:  "12px",
                }}
              >
                {tier.num}
              </p>

              {/* Tier name */}
              <h3
                style={{
                  fontFamily:   "var(--font-cormorant)",
                  fontSize:     "clamp(20px, 2.5vw, 26px)",
                  fontWeight:   300,
                  color:        "var(--cream-primary)",
                  lineHeight:   1.1,
                  marginBottom: "16px",
                  margin:       "0 0 16px",
                }}
              >
                {tier.label}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width:           "24px",
                  height:          "0.5px",
                  backgroundColor: "var(--gold-dim)",
                  marginBottom:    "16px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily:  "var(--font-jost)",
                  fontSize:    "11px",
                  fontWeight:  300,
                  color:       "var(--cream-muted)",
                  lineHeight:  1.8,
                  flex:        1,
                  marginBottom:"20px",
                }}
              >
                {tier.desc}
              </p>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily:  "var(--font-cormorant)",
                    fontStyle:   "italic",
                    fontSize:    "11px",
                    fontWeight:  300,
                    color:       "var(--cream-muted)",
                  }}
                >
                  Starting
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize:   "clamp(24px, 3vw, 30px)",
                    fontWeight: 300,
                    color:      "var(--gold-bright)",
                    lineHeight: 1,
                  }}
                >
                  Rs. {tier.from}
                </span>
                <span
                  style={{
                    fontFamily:    "var(--font-jost)",
                    fontSize:      "9px",
                    fontWeight:    300,
                    color:         "var(--cream-muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tier.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer Note + CTA ── */}
        <div
          className="reveal reveal-delay-2"
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "20px",
            padding:        "clamp(20px, 3vw, 32px)",
            backgroundColor:"var(--brown-mid)",
            borderTop:      "0.5px solid var(--gold-dim)",
          }}
        >
          <p
            style={{
              fontFamily:   "var(--font-jost)",
              fontSize:     "11px",
              fontWeight:   300,
              color:        "var(--cream-muted)",
              lineHeight:   1.7,
              maxWidth:     "560px",
              margin:       0,
            }}
          >
            Minimum 100 cards per paper order · 50 pieces per acrylic order · Each price includes custom wording, digital proof before printing, and one standard inner card.
          </p>
          <Link
            href="/pricing"
            style={{
              fontFamily:     "var(--font-jost)",
              fontSize:       "10px",
              fontWeight:     500,
              letterSpacing:  "0.22em",
              textTransform:  "uppercase",
              color:          "var(--gold-primary)",
              border:         "0.5px solid var(--gold-primary)",
              padding:        "13px 28px",
              textDecoration: "none",
              whiteSpace:     "nowrap",
              transition:     "background-color 250ms ease, color 250ms ease",
              display:        "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--gold-primary)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--brown-darkest)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-primary)";
            }}
          >
            VIEW FULL COLLECTION →
          </Link>
        </div>
      </div>
    </section>
  );
}
