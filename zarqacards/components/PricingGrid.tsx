"use client";

import { useState, Fragment } from "react";

const WHATSAPP = "https://wa.me/923038705165";

function waLink(cardId: string, msg?: string) {
  const text = encodeURIComponent(
    msg ?? `Assalam o Alaikum, I'm interested in Card No. ${cardId}. Please share more details.`
  );
  return `${WHATSAPP}?text=${text}`;
}

function fmt(n: number) {
  return n.toLocaleString("en-PK");
}

/* ── Types ────────────────────────────────────────────────────────── */
type Tier = "classic" | "dori" | "signature" | "premium" | "luxury" | "collectors" | "acrylic";
type Filter = Tier | "all";

interface Card {
  id: string;
  tier: Tier;
  price: number;
  note?: string;
}

/* ── Tier metadata ────────────────────────────────────────────────── */
const META: Record<Tier, { label: string; unit: string; pills: [string, string, string]; bg: string }> = {
  classic:    { label: "Classic Collection",   unit: "per 100 cards",       pills: ["1 Inner Included", "Custom Print", "Digital Proof"],       bg: "hsl(22,60%,14%)" },
  dori:       { label: "Dori & Ribbon Series", unit: "per 100 cards",       pills: ["Dori/Ribbon Closure", "Custom Print", "Digital Proof"],     bg: "hsl(28,58%,14%)" },
  signature:  { label: "Signature Collection", unit: "per 100 cards",       pills: ["Heavier Stock", "1 Inner Included", "WhatsApp Updates"],    bg: "hsl(32,55%,14%)" },
  premium:    { label: "Premium Collection",   unit: "per 100 cards",       pills: ["Gold Foil Detail", "Priority Support", "Tracked Delivery"], bg: "hsl(36,54%,12%)" },
  luxury:     { label: "Luxury Collection",    unit: "per 100 cards",       pills: ["2 Inners Included", "Personal Consult", "Premium Pack"],    bg: "hsl(40,52%,11%)" },
  collectors: { label: "Collector's Edition",  unit: "per 100 cards",       pills: ["Artisan Detail", "Motive Option", "Personal Consult"],      bg: "hsl(44,65%,10%)" },
  acrylic:    { label: "Acrylic Collection",   unit: "per piece · min. 50", pills: ["UV Printed", "Min. 50 pcs", "Custom Text"],                 bg: "hsl(200,30%,12%)" },
};

/* ── Card data ────────────────────────────────────────────────────── */

// Main tiers (sold per 100 cards)
const CARDS: Card[] = [
  // ── Classic (15 cards · Rs.2,200–2,600) ──────────────────────────
  { id: "470",  tier: "classic",   price: 2200 },
  { id: "476",  tier: "classic",   price: 2200 },
  { id: "478",  tier: "classic",   price: 2200 },
  { id: "488",  tier: "classic",   price: 2200 },
  { id: "483",  tier: "classic",   price: 2400 },
  { id: "484",  tier: "classic",   price: 2400 },
  { id: "485",  tier: "classic",   price: 2400 },
  { id: "501",  tier: "classic",   price: 2400 },
  { id: "526",  tier: "classic",   price: 2600 },
  { id: "527",  tier: "classic",   price: 2600 },
  { id: "540",  tier: "classic",   price: 2600 },
  { id: "541",  tier: "classic",   price: 2600 },
  { id: "542",  tier: "classic",   price: 2600 },
  { id: "544",  tier: "classic",   price: 2600 },
  { id: "545",  tier: "classic",   price: 2600 },

  // ── Dori & Ribbon (11 cards · Rs.2,500–4,200) ───────────────────
  { id: "671",  tier: "dori",      price: 2500 },
  { id: "670",  tier: "dori",      price: 2900 },
  { id: "515",  tier: "dori",      price: 3800 },
  { id: "518",  tier: "dori",      price: 3800 },
  { id: "519",  tier: "dori",      price: 3800 },
  { id: "520",  tier: "dori",      price: 3800 },
  { id: "514",  tier: "dori",      price: 4200 },
  { id: "548",  tier: "dori",      price: 4200 },
  { id: "550",  tier: "dori",      price: 4200 },
  { id: "551",  tier: "dori",      price: 4200 },
  { id: "552",  tier: "dori",      price: 4200 },

  // ── Signature (29 cards · Rs.2,800–7,500) ───────────────────────
  { id: "655",  tier: "signature", price: 2800 },
  { id: "658",  tier: "signature", price: 2800 },
  { id: "662",  tier: "signature", price: 3000 },
  { id: "665",  tier: "signature", price: 3000 },
  { id: "668",  tier: "signature", price: 3200 },
  { id: "672",  tier: "signature", price: 3200 },
  { id: "675",  tier: "signature", price: 3400 },
  { id: "678",  tier: "signature", price: 3400 },
  { id: "681",  tier: "signature", price: 3600 },
  { id: "684",  tier: "signature", price: 3600 },
  { id: "690",  tier: "signature", price: 3800 },
  { id: "695",  tier: "signature", price: 3800 },
  { id: "700",  tier: "signature", price: 4000 },
  { id: "705",  tier: "signature", price: 4200 },
  { id: "710",  tier: "signature", price: 4400 },
  { id: "715",  tier: "signature", price: 4600 },
  { id: "720",  tier: "signature", price: 4800 },
  { id: "725",  tier: "signature", price: 5000 },
  { id: "730",  tier: "signature", price: 5200 },
  { id: "735",  tier: "signature", price: 5400 },
  { id: "740",  tier: "signature", price: 5600 },
  { id: "745",  tier: "signature", price: 5800 },
  { id: "752",  tier: "signature", price: 6000 },
  { id: "758",  tier: "signature", price: 6200 },
  { id: "764",  tier: "signature", price: 6400 },
  { id: "770",  tier: "signature", price: 6600 },
  { id: "778",  tier: "signature", price: 6800 },
  { id: "788",  tier: "signature", price: 7000 },
  { id: "795",  tier: "signature", price: 7500 },

  // ── Premium (36 cards · Rs.6,400–16,200) ────────────────────────
  { id: "626",  tier: "premium",   price: 6400  },
  { id: "628",  tier: "premium",   price: 6400  },
  { id: "630",  tier: "premium",   price: 6800  },
  { id: "632",  tier: "premium",   price: 6800  },
  { id: "634",  tier: "premium",   price: 7200  },
  { id: "636",  tier: "premium",   price: 7200  },
  { id: "638",  tier: "premium",   price: 7600  },
  { id: "640",  tier: "premium",   price: 7600  },
  { id: "642",  tier: "premium",   price: 8000  },
  { id: "644",  tier: "premium",   price: 8000  },
  { id: "646",  tier: "premium",   price: 8400  },
  { id: "648",  tier: "premium",   price: 8400  },
  { id: "650",  tier: "premium",   price: 8800  },
  { id: "652",  tier: "premium",   price: 8800  },
  { id: "654",  tier: "premium",   price: 9200  },
  { id: "800",  tier: "premium",   price: 9200  },
  { id: "805",  tier: "premium",   price: 9600  },
  { id: "810",  tier: "premium",   price: 9600  },
  { id: "815",  tier: "premium",   price: 10000 },
  { id: "820",  tier: "premium",   price: 10400 },
  { id: "825",  tier: "premium",   price: 10800 },
  { id: "830",  tier: "premium",   price: 11200 },
  { id: "835",  tier: "premium",   price: 11600 },
  { id: "840",  tier: "premium",   price: 12000 },
  { id: "845",  tier: "premium",   price: 12400 },
  { id: "848",  tier: "premium",   price: 12800 },
  { id: "852",  tier: "premium",   price: 13200 },
  { id: "856",  tier: "premium",   price: 13600 },
  { id: "860",  tier: "premium",   price: 14000 },
  { id: "864",  tier: "premium",   price: 14400 },
  { id: "868",  tier: "premium",   price: 14800 },
  { id: "870",  tier: "premium",   price: 15000 },
  { id: "874",  tier: "premium",   price: 15200 },
  { id: "876",  tier: "premium",   price: 15600 },
  { id: "878",  tier: "premium",   price: 16000 },
  { id: "880",  tier: "premium",   price: 16200 },

  // ── Luxury (30 cards · Rs.13,800–30,500) ────────────────────────
  { id: "633",  tier: "luxury",    price: 13800 },
  { id: "635",  tier: "luxury",    price: 14500 },
  { id: "637",  tier: "luxury",    price: 15000 },
  { id: "639",  tier: "luxury",    price: 15500 },
  { id: "641",  tier: "luxury",    price: 16000 },
  { id: "643",  tier: "luxury",    price: 16500 },
  { id: "645",  tier: "luxury",    price: 17000 },
  { id: "647",  tier: "luxury",    price: 17500 },
  { id: "649",  tier: "luxury",    price: 18000 },
  { id: "651",  tier: "luxury",    price: 18500 },
  { id: "653",  tier: "luxury",    price: 19000 },
  { id: "900",  tier: "luxury",    price: 19500 },
  { id: "905",  tier: "luxury",    price: 20000 },
  { id: "910",  tier: "luxury",    price: 20500 },
  { id: "915",  tier: "luxury",    price: 21000 },
  { id: "920",  tier: "luxury",    price: 21500 },
  { id: "925",  tier: "luxury",    price: 22000 },
  { id: "930",  tier: "luxury",    price: 22500 },
  { id: "938",  tier: "luxury",    price: 23500 },
  { id: "943",  tier: "luxury",    price: 24000 },
  { id: "948",  tier: "luxury",    price: 24500 },
  { id: "953",  tier: "luxury",    price: 25000 },
  { id: "956",  tier: "luxury",    price: 25500 },
  { id: "963",  tier: "luxury",    price: 26000 },
  { id: "967",  tier: "luxury",    price: 26500 },
  { id: "971",  tier: "luxury",    price: 27000 },
  { id: "976",  tier: "luxury",    price: 27500 },
  { id: "981",  tier: "luxury",    price: 28000 },
  { id: "991",  tier: "luxury",    price: 29000 },
  { id: "996",  tier: "luxury",    price: 30500 },
];

// Collector's Edition (shown in separate section)
const COLLECTORS: Card[] = [
  { id: "786",  tier: "collectors", price: 34000, note: "Motive Included" },
  { id: "935",  tier: "collectors", price: 43000, note: "Motive Included" },
  { id: "994",  tier: "collectors", price: 38500, note: "Motive Included" },
  { id: "1013", tier: "collectors", price: 40000, note: "Motive Included" },
  { id: "942",  tier: "collectors", price: 13000, note: "Motive Rs.30/pc extra" },
  { id: "960",  tier: "collectors", price: 13400, note: "Motive Rs.30/pc extra" },
];

// Acrylic (shown in separate section, priced per piece)
const ACRYLIC: Card[] = [
  { id: "896",  tier: "acrylic", price: 480 },
  { id: "985",  tier: "acrylic", price: 520 },
  { id: "1008", tier: "acrylic", price: 520 },
  { id: "1007", tier: "acrylic", price: 530 },
  { id: "984",  tier: "acrylic", price: 540 },
  { id: "1015", tier: "acrylic", price: 600 },
  { id: "891",  tier: "acrylic", price: 620 },
  { id: "1012", tier: "acrylic", price: 620 },
  { id: "1014", tier: "acrylic", price: 640 },
  { id: "1022", tier: "acrylic", price: 640 },
  { id: "1011", tier: "acrylic", price: 720 },
];

/* ── Filter tabs ──────────────────────────────────────────────────── */
const FILTER_TABS: { value: Filter; label: string }[] = [
  { value: "all",        label: "All" },
  { value: "classic",    label: "Classic" },
  { value: "dori",       label: "Dori & Ribbon" },
  { value: "signature",  label: "Signature" },
  { value: "premium",    label: "Premium" },
  { value: "luxury",     label: "Luxury" },
  { value: "collectors", label: "Collector's" },
  { value: "acrylic",    label: "Acrylic" },
];

/* ── Spotlight messages ───────────────────────────────────────────── */
const SPOTLIGHTS = [
  {
    text: "Order your complete wedding suite — Shadi, Mehndi, and Walima — and receive a complimentary Motive card.",
    cta:  "Assalam o Alaikum, I'm interested in the Complete Wedding Suite offer. Please share details.",
  },
  {
    text: "First-time clients receive a complimentary digital mockup of any card in the Signature Collection.",
    cta:  "Assalam o Alaikum, I'd like a complimentary digital mockup from the Signature Collection.",
  },
  {
    text: "Every Premium and Luxury order includes tracked delivery and a dedicated WhatsApp coordinator for your order.",
    cta:  "Assalam o Alaikum, I'm interested in a Premium or Luxury card. Please guide me.",
  },
  {
    text: "Gold foil, ribbon closure, embossing — mix and match finishes to create a card that is entirely yours.",
    cta:  "Assalam o Alaikum, I'd like to discuss custom finishes for my card order.",
  },
];

/* ── Wedding Suites ───────────────────────────────────────────────── */
const SUITES = [
  {
    name:   "Mehndi + Shadi Suite",
    saving: "Rs. 3,000",
    items:  ["Mehndi Card", "Wedding Card", "Matching Inners"],
    cta:    "Assalam o Alaikum, I'm interested in the Mehndi + Shadi Suite.",
  },
  {
    name:   "Shadi + Walima Suite",
    saving: "Rs. 2,500",
    items:  ["Wedding Card", "Walima Card", "Matching Inners"],
    cta:    "Assalam o Alaikum, I'm interested in the Shadi + Walima Suite.",
  },
  {
    name:   "Full Wedding Suite",
    saving: "Rs. 6,000 + Free Motive",
    items:  ["Mehndi Card", "Wedding Card", "Walima Card", "Matching Inners"],
    cta:    "Assalam o Alaikum, I'm interested in the Full Wedding Suite.",
  },
  {
    name:   "Grand Family Package",
    saving: "Rs. 8,000 + Free Delivery",
    items:  ["Mehndi", "Shadi", "Walima", "Aqeeqa Card"],
    cta:    "Assalam o Alaikum, I'm interested in the Grand Family Package.",
  },
];

/* ── Add-ons ──────────────────────────────────────────────────────── */
const ADDONS = [
  { name: "Extra Inner Card",    price: "Rs. 300",   unit: "per 100 cards" },
  { name: "Printed Envelopes",   price: "Rs. 200",   unit: "per 100 pcs"   },
  { name: "Motive (Paper)",      price: "Rs. 30",    unit: "per piece"     },
  { name: "Gold Foil Upgrade",   price: "Rs. 800",   unit: "per 100 cards" },
  { name: "Embossing Upgrade",   price: "Rs. 600",   unit: "per 100 cards" },
  { name: "Packaging Upgrade",   price: "Rs. 400",   unit: "per 100 cards" },
  { name: "Express Processing",  price: "Rs. 1,200", unit: "flat · 3 days" },
];

/* ── Subcomponents ────────────────────────────────────────────────── */
function PricingCard({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false);
  const meta = META[card.tier];

  return (
    <div
      style={{
        display:         "flex",
        flexDirection:   "column",
        backgroundColor: "var(--brown-mid)",
        cursor:          "pointer",
        position:        "relative",
        overflow:        "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image zone ──────────────────────────────────────────── */}
      <div style={{ position: "relative", aspectRatio: "3 / 2", overflow: "hidden", backgroundColor: meta.bg }}>

        {/* Islamic pattern watermark */}
        <div className="islamic-bg" aria-hidden="true"
          style={{ position: "absolute", inset: 0, opacity: 0.12 }} />

        {/* Gradient overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.18) 0%, transparent 60%)",
        }} />

        {/* Scalable inner layer */}
        <div aria-hidden="true" style={{
          position:   "absolute",
          inset:      0,
          transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          transform:  hovered ? "scale(1.04)" : "scale(1)",
        }}>
          {/* Inset frame */}
          <div style={{
            position: "absolute",
            inset:    "12px",
            border:   "0.5px solid rgba(200,164,74,0.18)",
          }} />
          {/* Corner marks */}
          {[
            { top: "14px",   left: "14px"  },
            { top: "14px",   right: "14px" },
            { bottom: "14px",left: "14px"  },
            { bottom: "14px",right: "14px" },
          ].map((pos, i) => (
            <div key={i} aria-hidden="true" style={{
              position:        "absolute",
              width:           "8px",
              height:          "8px",
              borderColor:     "rgba(200,164,74,0.35)",
              borderStyle:     "solid",
              borderWidth:     0,
              borderTopWidth:  pos.top    ? "0.5px" : 0,
              borderBottomWidth: pos.bottom ? "0.5px" : 0,
              borderLeftWidth: pos.left   ? "0.5px" : 0,
              borderRightWidth: pos.right  ? "0.5px" : 0,
              ...pos,
            }} />
          ))}
          {/* Watermark card number */}
          <div aria-hidden="true" style={{
            position:       "absolute",
            inset:          0,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            fontFamily:     "var(--font-cormorant)",
            fontStyle:      "italic",
            fontSize:       "clamp(52px, 9vw, 88px)",
            fontWeight:     300,
            color:          "var(--gold-dim)",
            opacity:        0.14,
            userSelect:     "none",
            letterSpacing:  "0.05em",
          }}>
            {card.id}
          </div>
        </div>

        {/* Card number tag — top left */}
        <div style={{
          position:        "absolute",
          top:             "12px",
          left:            "12px",
          backgroundColor: "rgba(30,13,4,0.80)",
          backdropFilter:  "blur(6px)",
          padding:         "4px 10px",
          fontFamily:      "var(--font-jost)",
          fontSize:        "9px",
          fontWeight:      500,
          letterSpacing:   "0.2em",
          color:           "var(--gold-primary)",
          zIndex:          2,
        }}>
          No. {card.id}
        </div>

        {/* Tier badge — top right */}
        <div style={{
          position:        "absolute",
          top:             "12px",
          right:           "12px",
          backgroundColor: "rgba(30,13,4,0.80)",
          backdropFilter:  "blur(6px)",
          padding:         "4px 10px",
          fontFamily:      "var(--font-jost)",
          fontSize:        "8px",
          fontWeight:      500,
          letterSpacing:   "0.22em",
          textTransform:   "uppercase",
          color:           "var(--gold-dim)",
          zIndex:          2,
        }}>
          {card.tier === "collectors" ? "COLLECTOR'S" : card.tier.toUpperCase()}
        </div>

        {/* Hover overlay — slides up from bottom */}
        <div style={{
          position:        "absolute",
          bottom:          0,
          left:            0,
          right:           0,
          height:          "40%",
          backgroundColor: "rgba(30,13,4,0.88)",
          backdropFilter:  "blur(10px)",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "space-between",
          padding:         "0 16px",
          transform:       hovered ? "translateY(0)" : "translateY(100%)",
          transition:      "transform 380ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex:          3,
        }}>
          <span style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle:  "italic",
            fontSize:   "13px",
            fontWeight: 300,
            color:      "var(--cream-muted)",
          }}>
            {card.tier === "acrylic" ? "Per piece · min. 50 pcs" : "Per 100 cards"}
          </span>
          <a
            href={waLink(card.id)}
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

      {/* ── Info zone ───────────────────────────────────────────── */}
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{
          fontFamily:   "var(--font-cormorant)",
          fontSize:     "28px",
          fontWeight:   300,
          color:        "var(--gold-bright)",
          lineHeight:   1,
          marginBottom: "4px",
        }}>
          No. {card.id}
        </div>
        <div style={{
          fontFamily:    "var(--font-jost)",
          fontSize:      "9px",
          fontWeight:    500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color:         "var(--gold-dim)",
          marginBottom:  "14px",
        }}>
          {meta.label}
        </div>

        {card.note && (
          <div style={{
            fontFamily:    "var(--font-jost)",
            fontSize:      "9px",
            fontWeight:    400,
            letterSpacing: "0.12em",
            color:         "var(--gold-primary)",
            marginBottom:  "10px",
            textTransform: "uppercase",
          }}>
            ✦ {card.note}
          </div>
        )}

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle:  "italic",
            fontSize:   "12px",
            fontWeight: 300,
            color:      "var(--cream-muted)",
          }}>Starting</span>
          <span style={{
            fontFamily: "var(--font-cormorant)",
            fontSize:   "30px",
            fontWeight: 300,
            color:      "var(--gold-bright)",
            lineHeight: 1,
          }}>
            Rs.&nbsp;{fmt(card.price)}
          </span>
          <span style={{
            width:           "0.5px",
            height:          "14px",
            backgroundColor: "var(--gold-dim)",
            flexShrink:      0,
            alignSelf:       "center",
          }} />
          <span style={{
            fontFamily:    "var(--font-jost)",
            fontSize:      "9px",
            fontWeight:    300,
            letterSpacing: "0.05em",
            color:         "var(--cream-muted)",
          }}>
            {meta.unit}
          </span>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
          {meta.pills.map((pill) => (
            <span key={pill} style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "8px",
              fontWeight:    400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color:         "var(--gold-dim)",
              border:        "0.5px solid var(--gold-dim)",
              padding:       "3px 8px",
              borderRadius:  "2px",
            }}>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpotlightCard({ text, cta, index }: { text: string; cta: string; index: number }) {
  return (
    <div style={{
      gridColumn:      "1 / -1",
      position:        "relative",
      overflow:        "hidden",
      padding:         "40px clamp(24px, 4vw, 60px)",
      backgroundColor: index % 2 === 0 ? "var(--brown-warm)" : "var(--brown-deep)",
      display:         "flex",
      alignItems:      "center",
      justifyContent:  "space-between",
      gap:             "24px",
      flexWrap:        "wrap",
      borderTop:       "0.5px solid var(--gold-dim)",
      borderBottom:    "0.5px solid var(--gold-dim)",
    }}>
      <div className="islamic-bg" aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
      <p style={{
        fontFamily: "var(--font-cormorant)",
        fontStyle:  "italic",
        fontSize:   "clamp(16px, 2.2vw, 21px)",
        fontWeight: 300,
        color:      "var(--cream-primary)",
        lineHeight: 1.6,
        maxWidth:   "640px",
        position:   "relative",
        margin:     0,
      }}>
        &ldquo;{text}&rdquo;
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
          flexShrink:     0,
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
        LEARN MORE →
      </a>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ marginBottom: "clamp(32px, 5vw, 52px)" }}>
      <p style={{
        fontFamily:    "var(--font-jost)",
        fontSize:      "9px",
        fontWeight:    400,
        letterSpacing: "0.5em",
        textTransform: "uppercase",
        color:         "var(--gold-dim)",
        marginBottom:  "8px",
      }}>
        {eyebrow}
      </p>
      <div style={{
        width:           "40px",
        height:          "0.5px",
        backgroundColor: "var(--gold-dim)",
        marginBottom:    "20px",
      }} />
      <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize:   "clamp(28px, 4vw, 40px)",
          fontWeight: 300,
          color:      "var(--cream-primary)",
          lineHeight: 1,
          margin:     0,
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{
            fontFamily: "var(--font-jost)",
            fontSize:   "12px",
            fontWeight: 300,
            color:      "var(--cream-muted)",
            margin:     0,
            paddingBottom: "2px",
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Card grid with gap trick ─────────────────────────────────────── */
function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="pricing-card-grid" style={{
      display:             "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap:                 "1px",
      backgroundColor:     "var(--gold-dim)",
    }}>
      {cards.map((card) => (
        <PricingCard key={card.id} card={card} />
      ))}
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function PricingGrid() {
  const [active, setActive] = useState<Filter>("all");

  const MAIN_TIERS: Tier[] = ["classic", "dori", "signature", "premium", "luxury"];

  const visibleMain =
    active === "all"
      ? CARDS
      : MAIN_TIERS.includes(active as Tier)
      ? CARDS.filter((c) => c.tier === active)
      : [];

  const showCollectors = active === "all" || active === "collectors";
  const showAcrylic    = active === "all" || active === "acrylic";

  const spotlightEvery = 9;

  return (
    <>
      {/* ── Filter Bar ──────────────────────────────────────────── */}
      <div
        className="filter-scroll"
        role="tablist"
        aria-label="Filter by card tier"
        style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}
      >
        {FILTER_TABS.map(({ value, label }) => {
          const isActive = active === value;
          return (
            <button
              key={value}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(value)}
              style={{
                fontFamily:      "var(--font-jost)",
                fontSize:        "10px",
                fontWeight:      isActive ? 500 : 400,
                letterSpacing:   "0.18em",
                textTransform:   "uppercase",
                color:           isActive ? "var(--brown-darkest)" : "var(--cream-muted)",
                backgroundColor: isActive ? "var(--gold-primary)" : "transparent",
                border:          `0.5px solid ${isActive ? "var(--gold-primary)" : "rgba(138,101,32,0.4)"}`,
                padding:         "9px 20px",
                borderRadius:    "999px",
                cursor:          "pointer",
                whiteSpace:      "nowrap",
                flexShrink:      0,
                transition:      "background-color 220ms ease, color 220ms ease, border-color 220ms ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "var(--gold-dim)";
                  e.currentTarget.style.color = "var(--cream-primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "rgba(138,101,32,0.4)";
                  e.currentTarget.style.color = "var(--cream-muted)";
                }
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ── Main Card Grid + Spotlights ─────────────────────────── */}
      {visibleMain.length > 0 && (
        <div
          className="pricing-card-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "1px",
            backgroundColor:     "var(--gold-dim)",
            marginBottom:        "1px",
          }}
        >
          {visibleMain.map((card, idx) => (
            <Fragment key={card.id}>
              <PricingCard card={card} />
              {(idx + 1) % spotlightEvery === 0 && idx + 1 < visibleMain.length && (
                <SpotlightCard
                  text={SPOTLIGHTS[Math.floor((idx + 1) / spotlightEvery - 1) % SPOTLIGHTS.length].text}
                  cta={SPOTLIGHTS[Math.floor((idx + 1) / spotlightEvery - 1) % SPOTLIGHTS.length].cta}
                  index={Math.floor((idx + 1) / spotlightEvery - 1)}
                />
              )}
            </Fragment>
          ))}
        </div>
      )}

      {/* ── Collector's Edition ─────────────────────────────────── */}
      {showCollectors && (
        <div style={{ marginTop: visibleMain.length > 0 || !showCollectors ? "80px" : "0" }}>
          <div style={{
            borderTop:  "0.5px solid var(--gold-dim)",
            paddingTop: "clamp(40px, 6vw, 64px)",
          }}>
            <SectionHeading
              eyebrow="PRESTIGE TIER"
              title="Collector's Edition"
              subtitle="Six exclusive designs — for occasions worthy of a legacy"
            />
            <CardGrid cards={COLLECTORS} />
          </div>
        </div>
      )}

      {/* ── Acrylic Collection ──────────────────────────────────── */}
      {showAcrylic && (
        <div style={{ marginTop: "clamp(48px, 7vw, 80px)" }}>
          <div style={{
            borderTop:  "0.5px solid var(--gold-dim)",
            paddingTop: "clamp(40px, 6vw, 64px)",
          }}>
            <SectionHeading
              eyebrow="MODERN LUXURY"
              title="Acrylic Collection"
              subtitle="Priced per piece · Minimum order 50 pieces"
            />
            <CardGrid cards={ACRYLIC} />
          </div>
        </div>
      )}

      {/* ── Wedding Suites ──────────────────────────────────────── */}
      {(active === "all") && (
        <div style={{ marginTop: "clamp(48px, 7vw, 80px)" }}>
          <div style={{
            borderTop:  "0.5px solid var(--gold-dim)",
            paddingTop: "clamp(40px, 6vw, 64px)",
          }}>
            <SectionHeading
              eyebrow="BUNDLE OFFERS"
              title="Wedding Suites"
              subtitle="Order matching sets across your wedding events and save"
            />
            <div className="suites-grid">
              {SUITES.map((suite) => (
                <div
                  key={suite.name}
                  style={{
                    backgroundColor: "var(--brown-mid)",
                    padding:         "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 28px)",
                    display:         "flex",
                    flexDirection:   "column",
                    position:        "relative",
                    overflow:        "hidden",
                  }}
                >
                  <div className="islamic-bg" aria-hidden="true"
                    style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
                  <h3 style={{
                    fontFamily:   "var(--font-cormorant)",
                    fontSize:     "clamp(20px, 2.5vw, 24px)",
                    fontWeight:   300,
                    color:        "var(--cream-primary)",
                    marginBottom: "8px",
                    position:     "relative",
                  }}>
                    {suite.name}
                  </h3>
                  <p style={{
                    fontFamily:    "var(--font-jost)",
                    fontSize:      "10px",
                    fontWeight:    500,
                    letterSpacing: "0.15em",
                    color:         "var(--gold-primary)",
                    marginBottom:  "20px",
                    position:      "relative",
                  }}>
                    Save {suite.saving}
                  </p>
                  <ul style={{
                    listStyle:   "none",
                    padding:     0,
                    margin:      "0 0 24px",
                    display:     "flex",
                    flexDirection: "column",
                    gap:         "8px",
                    flex:        1,
                    position:    "relative",
                  }}>
                    {suite.items.map((item) => (
                      <li key={item} style={{
                        fontFamily:    "var(--font-jost)",
                        fontSize:      "11px",
                        fontWeight:    300,
                        color:         "var(--cream-muted)",
                        letterSpacing: "0.04em",
                        display:       "flex",
                        alignItems:    "center",
                        gap:           "10px",
                      }}>
                        <span style={{
                          display:         "inline-block",
                          width:           "4px",
                          height:          "4px",
                          backgroundColor: "var(--gold-dim)",
                          flexShrink:      0,
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(suite.cta)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily:     "var(--font-jost)",
                      fontSize:       "9px",
                      fontWeight:     500,
                      letterSpacing:  "0.22em",
                      textTransform:  "uppercase",
                      color:          "var(--gold-primary)",
                      border:         "0.5px solid var(--gold-primary)",
                      padding:        "11px 20px",
                      textDecoration: "none",
                      textAlign:      "center",
                      position:       "relative",
                      transition:     "background-color 220ms ease, color 220ms ease",
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
                    ENQUIRE SUITE →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Add-ons ─────────────────────────────────────────────── */}
      {(active === "all") && (
        <div style={{ marginTop: "clamp(48px, 7vw, 80px)" }}>
          <div style={{
            borderTop:  "0.5px solid var(--gold-dim)",
            paddingTop: "clamp(40px, 6vw, 64px)",
          }}>
            <SectionHeading
              eyebrow="EXTRAS"
              title="Add-Ons & Upgrades"
            />
            <div className="addons-table">
              {ADDONS.map((addon, i) => (
                <div
                  key={addon.name}
                  style={{
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "space-between",
                    padding:        "18px 0",
                    borderBottom:   i < ADDONS.length - 1 ? "0.5px solid rgba(138,101,32,0.22)" : "none",
                    gap:            "16px",
                    flexWrap:       "wrap",
                  }}
                >
                  <span style={{
                    fontFamily:    "var(--font-jost)",
                    fontSize:      "12px",
                    fontWeight:    400,
                    color:         "var(--cream-primary)",
                    letterSpacing: "0.04em",
                  }}>
                    {addon.name}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize:   "22px",
                      fontWeight: 300,
                      color:      "var(--gold-bright)",
                      lineHeight: 1,
                    }}>
                      {addon.price}
                    </span>
                    <span style={{
                      fontFamily:    "var(--font-jost)",
                      fontSize:      "9px",
                      fontWeight:    300,
                      letterSpacing: "0.08em",
                      color:         "var(--cream-muted)",
                    }}>
                      {addon.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Custom Quote CTA ────────────────────────────────────── */}
      <div style={{
        marginTop:  "clamp(48px, 7vw, 80px)",
        textAlign:  "center",
        padding:    "clamp(40px, 6vw, 64px) 24px",
        border:     "0.5px solid var(--brown-light)",
        position:   "relative",
        overflow:   "hidden",
      }}>
        <div className="islamic-bg" aria-hidden="true"
          style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }} />
        <p style={{
          fontFamily:    "var(--font-jost)",
          fontSize:      "9px",
          fontWeight:    400,
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color:         "var(--gold-dim)",
          marginBottom:  "16px",
          position:      "relative",
        }}>
          BESPOKE
        </p>
        <h3 style={{
          fontFamily:   "var(--font-cormorant)",
          fontSize:     "clamp(26px, 4vw, 38px)",
          fontWeight:   300,
          color:        "var(--cream-primary)",
          marginBottom: "12px",
          position:     "relative",
        }}>
          Need a custom design?
        </h3>
        <p style={{
          fontFamily: "var(--font-jost)",
          fontSize:   "13px",
          fontWeight: 300,
          color:      "var(--cream-muted)",
          maxWidth:   "460px",
          margin:     "0 auto 32px",
          lineHeight: 1.8,
          position:   "relative",
        }}>
          Share your vision on WhatsApp. We work with you from concept to print — at a price agreed before we begin.
        </p>
        <a
          href={`${WHATSAPP}?text=${encodeURIComponent("Assalam o Alaikum, I need a custom card design. Can you help me?")}`}
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
            padding:        "14px 32px",
            textDecoration: "none",
            display:        "inline-block",
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
          WHATSAPP FOR CUSTOM PRICING
        </a>
      </div>
    </>
  );
}
