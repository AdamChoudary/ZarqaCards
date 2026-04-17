"use client";

import { useState, Fragment } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/923038705165";

/* ── helpers ─────────────────────────────────────────────────────── */
function whatsappLink(cardId: string) {
  const text = encodeURIComponent(
    `Assalam o Alaikum, I'm interested in Card No. ${cardId}. Please share more details.`
  );
  return `${WHATSAPP}?text=${text}`;
}

/* ── data ─────────────────────────────────────────────────────────── */
type Tier = "classic" | "dori" | "signature" | "premium" | "luxury" | "acrylic";

interface Card {
  id: string;
  tier: Tier;
  tierLabel: string;
  startingPrice: string;
  unit: string;
  pills: string[];
  bg: string;
}

const CARDS: Card[] = [
  // Classic
  { id: "470", tier: "classic",   tierLabel: "Classic Collection",   startingPrice: "2,200", unit: "per 100 cards", pills: ["1 Inner Included", "Custom Print", "Digital Proof"],  bg: "hsl(22,60%,14%)" },
  { id: "483", tier: "classic",   tierLabel: "Classic Collection",   startingPrice: "2,200", unit: "per 100 cards", pills: ["1 Inner Included", "Custom Print", "Digital Proof"],  bg: "hsl(22,55%,16%)" },
  { id: "491", tier: "classic",   tierLabel: "Classic Collection",   startingPrice: "2,200", unit: "per 100 cards", pills: ["1 Inner Included", "Custom Print", "Digital Proof"],  bg: "hsl(22,50%,18%)" },
  // Dori
  { id: "512", tier: "dori",      tierLabel: "Dori & Ribbon Series", startingPrice: "3,800", unit: "per 100 cards", pills: ["Dori Closure",      "Custom Print", "Digital Proof"],  bg: "hsl(28,58%,15%)" },
  { id: "527", tier: "dori",      tierLabel: "Dori & Ribbon Series", startingPrice: "4,000", unit: "per 100 cards", pills: ["Ribbon Tie",         "Custom Print", "Digital Proof"],  bg: "hsl(28,52%,17%)" },
  { id: "535", tier: "dori",      tierLabel: "Dori & Ribbon Series", startingPrice: "4,500", unit: "per 100 cards", pills: ["Premium Dori",       "Custom Print", "Digital Proof"],  bg: "hsl(28,48%,19%)" },
  // Signature
  { id: "621", tier: "signature", tierLabel: "Signature Collection", startingPrice: "5,500", unit: "per 100 cards", pills: ["Heavy Stock",        "1 Inner Included", "WhatsApp Updates"], bg: "hsl(32,56%,14%)" },
  { id: "648", tier: "signature", tierLabel: "Signature Collection", startingPrice: "6,500", unit: "per 100 cards", pills: ["Detailed Print",     "1 Inner Included", "WhatsApp Updates"], bg: "hsl(32,50%,16%)" },
  { id: "672", tier: "signature", tierLabel: "Signature Collection", startingPrice: "7,500", unit: "per 100 cards", pills: ["Premium Stock",      "1 Inner Included", "WhatsApp Updates"], bg: "hsl(32,46%,18%)" },
  // Premium
  { id: "780", tier: "premium",   tierLabel: "Premium Collection",   startingPrice: "8,500", unit: "per 100 cards", pills: ["Gold Foil Detail",   "Priority Support", "Tracked Delivery"], bg: "hsl(36,54%,13%)" },
  { id: "810", tier: "premium",   tierLabel: "Premium Collection",   startingPrice: "11,000", unit: "per 100 cards", pills: ["Gold Foil Detail",   "Priority Support", "Tracked Delivery"], bg: "hsl(36,50%,15%)" },
  { id: "845", tier: "premium",   tierLabel: "Premium Collection",   startingPrice: "14,000", unit: "per 100 cards", pills: ["Foil + Emboss",      "Priority Support", "Tracked Delivery"], bg: "hsl(36,46%,17%)" },
  // Luxury
  { id: "935", tier: "luxury",    tierLabel: "Luxury Collection",    startingPrice: "16,000", unit: "per 100 cards", pills: ["2 Inners Included",  "Personal Consult",  "Packaging Upgrade"], bg: "hsl(40,52%,12%)" },
  { id: "987", tier: "luxury",    tierLabel: "Luxury Collection",    startingPrice: "22,000", unit: "per 100 cards", pills: ["Artisan Detail",     "Personal Consult",  "Packaging Upgrade"], bg: "hsl(40,48%,14%)" },
  { id: "994", tier: "luxury",    tierLabel: "Luxury Collection",    startingPrice: "30,000", unit: "per 100 cards", pills: ["Collector Grade",    "Priority Delivery", "Free Motive"],       bg: "hsl(40,44%,16%)" },
  // Acrylic
  { id: "1011", tier: "acrylic",  tierLabel: "Acrylic Collection",   startingPrice: "500",   unit: "per piece · min. 50 pcs", pills: ["UV Printed",       "Min. 50 pcs",      "Custom Text"],       bg: "hsl(200,30%,12%)" },
  { id: "1013", tier: "acrylic",  tierLabel: "Acrylic Collection",   startingPrice: "650",   unit: "per piece · min. 50 pcs", pills: ["Premium Acrylic",  "Min. 50 pcs",      "Gold Detail"],       bg: "hsl(200,28%,14%)" },
  { id: "1015", tier: "acrylic",  tierLabel: "Acrylic Collection",   startingPrice: "950",   unit: "per piece · min. 50 pcs", pills: ["Frosted Finish",   "Min. 50 pcs",      "Laser Etched"],      bg: "hsl(200,26%,16%)" },
];

const TIER_LABELS: { value: Tier | "all"; label: string }[] = [
  { value: "all",       label: "ALL"       },
  { value: "classic",   label: "CLASSIC"   },
  { value: "dori",      label: "DORI"      },
  { value: "signature", label: "SIGNATURE" },
  { value: "premium",   label: "PREMIUM"   },
  { value: "luxury",    label: "LUXURY"    },
  { value: "acrylic",   label: "ACRYLIC"   },
];

/* ── Card component ──────────────────────────────────────────────── */
function PricingCard({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display:        "flex",
        flexDirection:  "column",
        backgroundColor: card.tier === "acrylic" ? "hsl(200,28%,11%)" : "var(--brown-mid)",
        cursor:         "pointer",
        position:       "relative",
        overflow:       "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image zone (60%) */}
      <div
        style={{
          position:       "relative",
          aspectRatio:    "3 / 2",
          overflow:       "hidden",
          backgroundColor: card.bg,
        }}
      >
        {/* Islamic pattern watermark */}
        <div
          className="islamic-bg"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, opacity: 0.12 }}
        />

        {/* Decorative Urdu numeral */}
        <div
          aria-hidden="true"
          style={{
            position:      "absolute",
            inset:         0,
            display:       "flex",
            alignItems:    "center",
            justifyContent:"center",
            fontFamily:    "var(--font-nastaliq)",
            fontSize:      "clamp(48px, 8vw, 80px)",
            color:         "var(--gold-dim)",
            opacity:       0.18,
            userSelect:    "none",
          }}
        >
          {card.id}
        </div>

        {/* Scale on hover */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
            transform:  hovered ? "scale(1.03)" : "scale(1)",
          }}
        />

        {/* Top-left: card number tag */}
        <div
          style={{
            position:        "absolute",
            top:             "12px",
            left:            "12px",
            backgroundColor: "rgba(26, 8, 3, 0.75)",
            backdropFilter:  "blur(4px)",
            padding:         "4px 10px",
            fontFamily:      "var(--font-jost)",
            fontSize:        "9px",
            fontWeight:      500,
            letterSpacing:   "0.2em",
            color:           "var(--gold-primary)",
          }}
        >
          No. {card.id}
        </div>

        {/* Top-right: tier badge */}
        <div
          style={{
            position:        "absolute",
            top:             "12px",
            right:           "12px",
            backgroundColor: "rgba(26, 8, 3, 0.75)",
            backdropFilter:  "blur(4px)",
            padding:         "4px 10px",
            fontFamily:      "var(--font-jost)",
            fontSize:        "8px",
            fontWeight:      500,
            letterSpacing:   "0.25em",
            textTransform:   "uppercase",
            color:           "var(--gold-dim)",
          }}
        >
          {card.tier.toUpperCase()}
        </div>

        {/* Hover overlay panel — slides up from bottom */}
        <div
          style={{
            position:        "absolute",
            bottom:          0,
            left:            0,
            right:           0,
            height:          "35%",
            backgroundColor: "rgba(26, 8, 3, 0.85)",
            backdropFilter:  "blur(8px)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "space-between",
            padding:         "0 16px",
            transform:       hovered ? "translateY(0)" : "translateY(100%)",
            transition:      "transform 380ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span
            style={{
              fontFamily:  "var(--font-cormorant)",
              fontStyle:   "italic",
              fontSize:    "13px",
              fontWeight:  300,
              color:       "var(--cream-muted)",
            }}
          >
            {card.tier === "acrylic" ? "Per piece · min. 50 pcs" : "100 pieces · Custom printed"}
          </span>
          <a
            href={whatsappLink(card.id)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily:     "var(--font-jost)",
              fontSize:       "9px",
              fontWeight:     500,
              letterSpacing:  "0.25em",
              textTransform:  "uppercase",
              color:          "var(--gold-primary)",
              border:         "0.5px solid var(--gold-primary)",
              padding:        "8px 14px",
              textDecoration: "none",
              whiteSpace:     "nowrap",
              transition:     "background-color 200ms ease, color 200ms ease",
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
            ENQUIRE →
          </a>
        </div>
      </div>

      {/* Info zone (40%) */}
      <div style={{ padding: "20px 20px 22px" }}>
        {/* Card number — dominant */}
        <div
          style={{
            fontFamily:    "var(--font-cormorant)",
            fontSize:      "30px",
            fontWeight:    300,
            color:         "var(--gold-bright)",
            lineHeight:    1,
            marginBottom:  "6px",
          }}
        >
          No. {card.id}
        </div>

        {/* Tier label */}
        <div
          style={{
            fontFamily:    "var(--font-jost)",
            fontSize:      "9px",
            fontWeight:    500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color:         "var(--gold-dim)",
            marginBottom:  "14px",
          }}
        >
          {card.tierLabel}
        </div>

        {/* Price statement */}
        <div
          style={{
            display:     "flex",
            alignItems:  "baseline",
            gap:         "8px",
            marginBottom: "14px",
            flexWrap:    "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle:  "italic",
              fontSize:   "13px",
              fontWeight: 300,
              color:      "var(--cream-muted)",
            }}
          >
            Starting
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize:   "32px",
              fontWeight: 300,
              color:      "var(--gold-bright)",
              lineHeight: 1,
            }}
          >
            Rs. {card.startingPrice}
          </span>
          <span
            style={{
              width:           "0.5px",
              height:          "16px",
              backgroundColor: "var(--gold-dim)",
              flexShrink:      0,
              alignSelf:       "center",
            }}
          />
          <span
            style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "10px",
              fontWeight:    300,
              letterSpacing: "0.05em",
              color:         "var(--cream-muted)",
            }}
          >
            {card.unit}
          </span>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {card.pills.map((pill) => (
            <span
              key={pill}
              style={{
                fontFamily:    "var(--font-jost)",
                fontSize:      "8px",
                fontWeight:    400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:         "var(--gold-dim)",
                border:        "0.5px solid var(--gold-dim)",
                padding:       "4px 8px",
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Spotlight card ──────────────────────────────────────────────── */
function SpotlightCard({ text, cta }: { text: string; cta: string }) {
  return (
    <div
      style={{
        gridColumn:      "1 / -1",
        position:        "relative",
        overflow:        "hidden",
        padding:         "40px clamp(24px, 4vw, 60px)",
        backgroundColor: "var(--brown-warm)",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "space-between",
        gap:             "24px",
        flexWrap:        "wrap",
        borderTop:       "0.5px solid var(--gold-dim)",
        borderBottom:    "0.5px solid var(--gold-dim)",
      }}
    >
      <div
        className="islamic-bg"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }}
      />
      <p
        style={{
          fontFamily:    "var(--font-cormorant)",
          fontStyle:     "italic",
          fontSize:      "clamp(17px, 2.5vw, 22px)",
          fontWeight:    300,
          color:         "var(--cream-primary)",
          lineHeight:    1.5,
          maxWidth:      "680px",
          position:      "relative",
        }}
      >
        {text}
      </p>
      <a
        href={`${WHATSAPP}?text=${encodeURIComponent(cta)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily:     "var(--font-jost)",
          fontSize:       "10px",
          fontWeight:     500,
          letterSpacing:  "0.22em",
          textTransform:  "uppercase",
          color:          "var(--gold-primary)",
          border:         "0.5px solid var(--gold-primary)",
          padding:        "12px 24px",
          textDecoration: "none",
          whiteSpace:     "nowrap",
          position:       "relative",
          transition:     "background-color 250ms ease, color 250ms ease",
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
        CLAIM THIS →
      </a>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function PricingGrid() {
  const [active, setActive] = useState<Tier | "all">("all");

  const mainCards = CARDS.filter((c) => c.tier !== "acrylic");
  const acrylicCards = CARDS.filter((c) => c.tier === "acrylic");

  const visibleMain =
    active === "all" || active === "acrylic"
      ? mainCards
      : mainCards.filter((c) => c.tier === active);

  const showAcrylic = active === "all" || active === "acrylic";

  return (
    <>
      {/* ── Filter Bar ────────────────────────────────────────────── */}
      <div
        style={{
          display:        "flex",
          flexWrap:       "wrap",
          gap:            "8px",
          justifyContent: "center",
          marginBottom:   "48px",
        }}
      >
        {TIER_LABELS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`filter-tab${active === value ? " active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Main Card Grid ─────────────────────────────────────────── */}
      {visibleMain.length > 0 && (
        <div
          className="pricing-card-grid"
          style={{
            display:         "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:             "1px",
            backgroundColor: "var(--gold-dim)",
            marginBottom:    "1px",
          }}
        >
          {visibleMain.map((card, idx) => (
            <Fragment key={card.id}>
              <PricingCard card={card} />
              {/* Spotlight every 6 cards */}
              {(idx + 1) % 6 === 0 && idx + 1 < visibleMain.length && (
                <SpotlightCard
                  key={`spot-${idx}`}
                  text={
                    idx === 5
                      ? "Order your complete wedding suite — Shadi, Mehndi, and Walima — and receive your Motive card complimentary."
                      : "First-time clients receive a complimentary digital mockup of any card in the Signature Collection."
                  }
                  cta={
                    idx === 5
                      ? "Assalam o Alaikum, I'm interested in the Complete Wedding Suite offer."
                      : "Assalam o Alaikum, I'd like a complimentary digital mockup from the Signature Collection."
                  }
                />
              )}
            </Fragment>
          ))}
        </div>
      )}

      {/* ── Acrylic Section ────────────────────────────────────────── */}
      {showAcrylic && (
        <div style={{ marginTop: "80px" }}>
          {/* Acrylic heading */}
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontFamily:    "var(--font-jost)",
                fontSize:      "10px",
                fontWeight:    400,
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color:         "var(--gold-dim)",
                marginBottom:  "8px",
              }}
            >
              PREMIUM TIER
            </p>
            <div
              style={{
                width:           "40px",
                height:          "0.5px",
                backgroundColor: "var(--gold-dim)",
                marginBottom:    "20px",
              }}
            />
            <div
              style={{
                display:    "flex",
                alignItems: "flex-end",
                gap:        "24px",
                flexWrap:   "wrap",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize:   "clamp(32px, 5vw, 48px)",
                  fontWeight: 300,
                  color:      "var(--cream-primary)",
                  lineHeight: 1,
                  margin:     0,
                }}
              >
                Acrylic Collection
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize:   "12px",
                  fontWeight: 300,
                  color:      "var(--cream-muted)",
                  marginBottom:"2px",
                }}
              >
                Priced per piece · Minimum order 50 pieces
              </p>
            </div>
          </div>

          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap:                 "1px",
              backgroundColor:     "var(--gold-dim)",
            }}
          >
            {acrylicCards.map((card) => (
              <PricingCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* ── Custom Quote CTA ───────────────────────────────────────── */}
      <div
        style={{
          marginTop:      "80px",
          textAlign:      "center",
          padding:        "56px 24px",
          border:         "0.5px solid var(--brown-light)",
        }}
      >
        <p
          style={{
            fontFamily:    "var(--font-jost)",
            fontSize:      "10px",
            fontWeight:    400,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color:         "var(--gold-dim)",
            marginBottom:  "16px",
          }}
        >
          BESPOKE
        </p>
        <h3
          style={{
            fontFamily:   "var(--font-cormorant)",
            fontSize:     "clamp(28px, 4vw, 40px)",
            fontWeight:   300,
            color:        "var(--cream-primary)",
            marginBottom: "12px",
          }}
        >
          Need a design not listed here?
        </h3>
        <p
          style={{
            fontFamily:   "var(--font-jost)",
            fontSize:     "13px",
            fontWeight:   300,
            color:        "var(--cream-muted)",
            marginBottom: "32px",
            maxWidth:     "480px",
            margin:       "0 auto 32px",
            lineHeight:   1.8,
          }}
        >
          We create fully custom designs from scratch. Share your vision on WhatsApp and we&apos;ll advise on the best approach.
        </p>
        <a
          href={`${WHATSAPP}?text=${encodeURIComponent("Assalam o Alaikum, I need a custom card design. Can you help?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          WHATSAPP FOR CUSTOM PRICING
        </a>
      </div>
    </>
  );
}
