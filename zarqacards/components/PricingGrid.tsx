"use client";

import { useState, Fragment } from "react";
import Image from "next/image";

const WHATSAPP = "https://wa.me/923038705165";

function waLink(card: Card, msg?: string) {
  const ref = card.display ?? card.id;
  const noteStr = card.note ? ` (${card.note})` : "";
  const text = encodeURIComponent(
    msg ?? `Assalam o Alaikum, I'm interested in Card No. ${ref}${noteStr}. Please share more details.`
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
  display?: string;
  tier: Tier;
  price: number;
  note?: string;
}

/* ── Tier metadata ────────────────────────────────────────────────── */
const META: Record<Tier, { label: string; unit: string; pills: [string, string, string]; bg: string }> = {
  classic: { label: "Classic Collection", unit: "per 100 cards", pills: ["1 Inner Included", "Custom Print", "Digital Proof"], bg: "hsl(22,60%,14%)" },
  dori: { label: "Dori & Ribbon Series", unit: "per 100 cards", pills: ["Dori/Ribbon Closure", "Custom Print", "Digital Proof"], bg: "hsl(28,58%,14%)" },
  signature: { label: "Signature Collection", unit: "per 100 cards", pills: ["Heavier Stock", "1 Inner Included", "WhatsApp Updates"], bg: "hsl(32,55%,14%)" },
  premium: { label: "Premium Collection", unit: "per 100 cards", pills: ["Gold Foil Detail", "Priority Support", "Tracked Delivery"], bg: "hsl(36,54%,12%)" },
  luxury: { label: "Luxury Collection", unit: "per 100 cards", pills: ["2 Inners Included", "Personal Consult", "Premium Pack"], bg: "hsl(40,52%,11%)" },
  collectors: { label: "Collector's Edition", unit: "per 100 cards", pills: ["Artisan Detail", "Motive Option", "Personal Consult"], bg: "hsl(44,65%,10%)" },
  acrylic: { label: "Acrylic Collection", unit: "per piece · min. 50", pills: ["UV Printed", "Min. 50 pcs", "Custom Text"], bg: "hsl(200,30%,12%)" },
};

/* ── Card data ────────────────────────────────────────────────────── */

// Main tiers (sold per 100 cards)
const CARDS: Card[] = [
  // ── Classic (16 cards · Rs.1,900–2,600) ──────────────────────────
  { id: "470", tier: "classic", price: 1900 },
  { id: "476", tier: "classic", price: 1900 },
  { id: "478", tier: "classic", price: 1900 },
  { id: "488", tier: "classic", price: 1900 },
  { id: "483", tier: "classic", price: 2200 },
  { id: "484", tier: "classic", price: 2200 },
  { id: "485", tier: "classic", price: 2200 },
  { id: "501", tier: "classic", price: 2200 },
  { id: "526", tier: "classic", price: 2600 },
  { id: "527", tier: "classic", price: 2600 },
  { id: "540", tier: "classic", price: 2600 },
  { id: "541", tier: "classic", price: 2600 },
  { id: "542", tier: "classic", price: 2600 },
  { id: "544", tier: "classic", price: 2600 },
  { id: "545", tier: "classic", price: 2600 },
  { id: "721", tier: "classic", price: 2600, note: "No Inner" },

  // ── Dori & Ribbon (21 cards · Rs.2,400–12,500) ──────────────────
  { id: "671", tier: "dori", price: 2400 },
  { id: "655", tier: "dori", price: 2700 },
  { id: "656", tier: "dori", price: 2700 },
  { id: "657", tier: "dori", price: 2700 },
  { id: "658", tier: "dori", price: 2700 },
  { id: "660", tier: "dori", price: 2900 },
  { id: "661", tier: "dori", price: 2900 },
  { id: "670", tier: "dori", price: 2900 },
  { id: "515", tier: "dori", price: 3400 },
  { id: "518", tier: "dori", price: 3400 },
  { id: "519", tier: "dori", price: 3400 },
  { id: "520", tier: "dori", price: 3400 },
  { id: "514", tier: "dori", price: 4300 },
  { id: "548", tier: "dori", price: 4300 },
  { id: "550", tier: "dori", price: 4300 },
  { id: "551", tier: "dori", price: 4300 },
  { id: "552", tier: "dori", price: 4300 },
  { id: "805", tier: "dori", price: 12500, note: "2 Inners" },
  { id: "806", tier: "dori", price: 12500, note: "2 Inners" },
  { id: "807", tier: "dori", price: 12500, note: "2 Inners" },
  { id: "808", tier: "dori", price: 12500, note: "2 Inners" },

  // ── Signature (12 cards · Rs.4,600–5,900) ───────────────────────
  { id: "662", tier: "signature", price: 4600 },
  { id: "663", tier: "signature", price: 4600 },
  { id: "664", tier: "signature", price: 4600 },
  { id: "665", tier: "signature", price: 4600 },
  { id: "648", tier: "signature", price: 5500 },
  { id: "650", tier: "signature", price: 5500 },
  { id: "651", tier: "signature", price: 5500 },
  { id: "652", tier: "signature", price: 5500 },
  { id: "825", tier: "signature", price: 5900 },
  { id: "826", tier: "signature", price: 5900 },
  { id: "827", tier: "signature", price: 5900 },
  { id: "836", tier: "signature", price: 5900 },

  // ── Premium (38 cards · Rs.6,400–10,800) ────────────────────────
  { id: "761", tier: "premium", price: 6400 },
  { id: "762", tier: "premium", price: 6400 },
  { id: "835", tier: "premium", price: 6400 },
  { id: "918", tier: "premium", price: 6400 },
  { id: "832", tier: "premium", price: 6600 },
  { id: "833", tier: "premium", price: 6600 },
  { id: "834", tier: "premium", price: 6600 },
  { id: "844", tier: "premium", price: 6600 },
  { id: "851", tier: "premium", price: 6600 },
  { id: "766", tier: "premium", price: 7200 },
  { id: "771", tier: "premium", price: 7200 },
  { id: "772", tier: "premium", price: 7200 },
  { id: "774", tier: "premium", price: 7200 },
  { id: "776", tier: "premium", price: 7200 },
  { id: "777", tier: "premium", price: 7200 },
  { id: "778", tier: "premium", price: 7200 },
  { id: "780", tier: "premium", price: 7200 },
  { id: "781", tier: "premium", price: 7200 },
  { id: "590", tier: "premium", price: 7600 },
  { id: "640", tier: "premium", price: 7600 },
  { id: "642", tier: "premium", price: 7600 },
  { id: "645", tier: "premium", price: 7600 },
  { id: "646", tier: "premium", price: 7600 },
  { id: "615W", display: "615", tier: "premium", price: 8200, note: "White Finish" },
  { id: "768", tier: "premium", price: 8200 },
  { id: "782", tier: "premium", price: 8200 },
  { id: "783", tier: "premium", price: 8200 },
  { id: "784", tier: "premium", price: 8200 },
  { id: "615B", display: "615", tier: "premium", price: 9000, note: "Black Finish" },
  { id: "829", tier: "premium", price: 9000 },
  { id: "830", tier: "premium", price: 9000 },
  { id: "842", tier: "premium", price: 9000 },
  { id: "870", tier: "premium", price: 9000 },
  { id: "631", tier: "premium", price: 10800 },
  { id: "818", tier: "premium", price: 10800 },
  { id: "819", tier: "premium", price: 10800 },
  { id: "820", tier: "premium", price: 10800 },
  { id: "821", tier: "premium", price: 10800 },

  // ── Luxury (38 cards · Rs.12,500–34,500) ────────────────────────
  { id: "626", tier: "luxury", price: 12500, note: "2 Inners" },
  { id: "632", tier: "luxury", price: 15000 },
  { id: "633", tier: "luxury", price: 26000, note: "3 Inners" },
  { id: "802", tier: "luxury", price: 15000, note: "2 Inners" },
  { id: "811", tier: "luxury", price: 15000, note: "2 Inners" },
  { id: "812", tier: "luxury", price: 15000, note: "2 Inners" },
  { id: "813", tier: "luxury", price: 17500, note: "2 Inners" },
  { id: "814", tier: "luxury", price: 17500, note: "2 Inners" },
  { id: "865", tier: "luxury", price: 17500, note: "2 Inners" },
  { id: "872", tier: "luxury", price: 16000, note: "2 Inners" },
  { id: "873", tier: "luxury", price: 17500, note: "2 Inners" },
  { id: "885", tier: "luxury", price: 16000, note: "2 Inners" },
  { id: "886", tier: "luxury", price: 17500, note: "2 Inners" },
  { id: "887", tier: "luxury", price: 17500, note: "2 Inners" },
  { id: "888", tier: "luxury", price: 26000, note: "2 Inners" },
  { id: "892", tier: "luxury", price: 15000, note: "2 Inners" },
  { id: "893", tier: "luxury", price: 19500, note: "2 Inners" },
  { id: "894", tier: "luxury", price: 26000, note: "Extra Inner Rs. 47/card" },
  { id: "895", tier: "luxury", price: 26000, note: "2 Inners" },
  { id: "938", tier: "luxury", price: 26000, note: "2 Inners" },
  { id: "970", tier: "luxury", price: 29500, note: "2 Inners" },
  { id: "972", tier: "luxury", price: 29500, note: "2 Inners" },
  { id: "987", tier: "luxury", price: 34500, note: "2 Inners" },
  { id: "988", tier: "luxury", price: 28000, note: "2 Inners" },
  { id: "1001", tier: "luxury", price: 24500, note: "2 Inners" },
  { id: "1002", tier: "luxury", price: 29500, note: "2 Inners" },
  { id: "1004", tier: "luxury", price: 21000, note: "2 Inners" },
  { id: "1005", tier: "luxury", price: 21000, note: "2 Inners" },
  { id: "1006", tier: "luxury", price: 34500, note: "2 Inners" },
  { id: "1010", tier: "luxury", price: 21000, note: "2 Inners" },
  { id: "1016", tier: "luxury", price: 31500, note: "2 Inners" },
  { id: "1017", tier: "luxury", price: 26000, note: "2 Inners" },
  { id: "1018", tier: "luxury", price: 26000, note: "Motive Rs. 30/pc" },
  { id: "1019", tier: "luxury", price: 21000, note: "2 Inners" },
  { id: "1020", tier: "luxury", price: 31500, note: "Motive Rs. 30/pc" },
  { id: "1021", tier: "luxury", price: 31500, note: "Motive Rs. 30/pc" },
  { id: "1025", tier: "luxury", price: 20000, note: "2 Inners" },
  { id: "1027", tier: "luxury", price: 26000, note: "2 Inners" },
];

// Collector's Edition (shown in separate section)
const COLLECTORS: Card[] = [
  { id: "942", tier: "collectors", price: 13500, note: "Black · 2 Inners" },
  { id: "960", tier: "collectors", price: 14500, note: "Extra Inner Rs. 47/card" },
  { id: "786", tier: "collectors", price: 37500, note: "Dori · 2 Inners" },
  { id: "994", tier: "collectors", price: 42500, note: "2 Inners" },
  { id: "1013", tier: "collectors", price: 44000, note: "2 Inners" },
  { id: "935", tier: "collectors", price: 47000, note: "2 Inners" },
];

// Acrylic (shown in separate section, priced per piece = rate ÷ 100)
const ACRYLIC: Card[] = [
  { id: "896", tier: "acrylic", price: 360 },
  { id: "1007", tier: "acrylic", price: 370 },
  { id: "1008", tier: "acrylic", price: 370 },
  { id: "984", tier: "acrylic", price: 400 },
  { id: "985", tier: "acrylic", price: 400 },
  { id: "1015", tier: "acrylic", price: 400 },
  { id: "1012", tier: "acrylic", price: 460 },
  { id: "1014", tier: "acrylic", price: 470 },
  { id: "1022", tier: "acrylic", price: 470 },
  { id: "891", tier: "acrylic", price: 500 },
  { id: "1011", tier: "acrylic", price: 520 },
];

/* ── Filter tabs ──────────────────────────────────────────────────── */
const FILTER_TABS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "classic", label: "Classic" },
  { value: "dori", label: "Dori & Ribbon" },
  { value: "signature", label: "Signature" },
  { value: "premium", label: "Premium" },
  { value: "luxury", label: "Luxury" },
  { value: "collectors", label: "Collector's" },
  { value: "acrylic", label: "Acrylic" },
];

/* ── Spotlight messages ───────────────────────────────────────────── */
const SPOTLIGHTS = [
  {
    text: "Order your complete wedding suite — Shadi, Mehndi, and Walima — and receive a complimentary Motive card.",
    cta: "Assalam o Alaikum, I'm interested in the Complete Wedding Suite offer. Please share details.",
  },
  {
    text: "First-time clients receive a complimentary digital mockup of any card in the Signature Collection.",
    cta: "Assalam o Alaikum, I'd like a complimentary digital mockup from the Signature Collection.",
  },
  {
    text: "Every Premium and Luxury order includes tracked delivery and a dedicated WhatsApp coordinator for your order.",
    cta: "Assalam o Alaikum, I'm interested in a Premium or Luxury card. Please guide me.",
  },
  {
    text: "Gold foil, ribbon closure, embossing — mix and match finishes to create a card that is entirely yours.",
    cta: "Assalam o Alaikum, I'd like to discuss custom finishes for my card order.",
  },
];

/* ── Wedding Suites ───────────────────────────────────────────────── */
const SUITES = [
  {
    name: "Mehndi + Shadi Suite",
    saving: "Rs. 3,000",
    items: ["Mehndi Card", "Wedding Card", "Matching Inners"],
    cta: "Assalam o Alaikum, I'm interested in the Mehndi + Shadi Suite.",
  },
  {
    name: "Shadi + Walima Suite",
    saving: "Rs. 2,500",
    items: ["Wedding Card", "Walima Card", "Matching Inners"],
    cta: "Assalam o Alaikum, I'm interested in the Shadi + Walima Suite.",
  },
  {
    name: "Full Wedding Suite",
    saving: "Rs. 6,000 + Free Motive",
    items: ["Mehndi Card", "Wedding Card", "Walima Card", "Matching Inners"],
    cta: "Assalam o Alaikum, I'm interested in the Full Wedding Suite.",
  },
  {
    name: "Grand Family Package",
    saving: "Rs. 8,000 + Free Delivery",
    items: ["Mehndi", "Shadi", "Walima", "Aqeeqa Card"],
    cta: "Assalam o Alaikum, I'm interested in the Grand Family Package.",
  },
];

/* ── Add-ons ──────────────────────────────────────────────────────── */
const ADDONS = [
  { name: "Extra Inner Card", price: "Rs. 300", unit: "per 100 cards" },
  { name: "Printed Envelopes", price: "Rs. 200", unit: "per 100 pcs" },
  { name: "Motive (Paper)", price: "Rs. 30", unit: "per piece" },
  { name: "Gold Foil Upgrade", price: "Rs. 800", unit: "per 100 cards" },
  { name: "Embossing Upgrade", price: "Rs. 600", unit: "per 100 cards" },
  { name: "Packaging Upgrade", price: "Rs. 400", unit: "per 100 cards" },
  { name: "Express Processing", price: "Rs. 1,200", unit: "flat · 3 days" },
];

/* ── Subcomponents ────────────────────────────────────────────────── */
function PricingCard({ card }: { card: Card }) {
  const [hovered,   setHovered]   = useState(false);
  const [active,    setActive]    = useState(0);      // 0 = photo 1, 1 = photo 2
  const [p1Missing, setP1Missing] = useState(false);  // no photo uploaded yet
  const [p2Missing, setP2Missing] = useState(false);  // only 1 photo uploaded
  const meta = META[card.tier];

  const photoSrc = active === 1 && !p2Missing
    ? `/cards/${card.id}-2.jpg`
    : `/cards/${card.id}-1.jpg`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--brown-mid)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image zone ──────────────────────────────────────────── */}
      <div style={{ position: "relative", aspectRatio: "3 / 2", overflow: "hidden", backgroundColor: meta.bg }}>

        {!p1Missing ? (
          /* ── Real card photo ──────────────────────────────────── */
          <>
            <Image
              key={photoSrc}
              src={photoSrc}
              alt={`ZarqaCards No. ${card.display ?? card.id}`}
              fill
              loading="lazy"
              sizes="(max-width: 560px) 100vw, (max-width: 1023px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
              onError={() => {
                if (active === 1) {
                  setP2Missing(true);
                  setActive(0);
                } else {
                  setP1Missing(true);
                }
              }}
            />
            {/* bottom gradient for tag legibility */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "linear-gradient(to top, rgba(18,5,1,0.65) 0%, rgba(18,5,1,0.08) 50%, transparent 100%)",
              zIndex: 1,
            }} />
            {/* Photo dot toggle — hidden once photo 2 confirmed missing */}
            {!p2Missing && (
              <div style={{
                position: "absolute", bottom: "44px", left: "50%",
                transform: "translateX(-50%)",
                display: "flex", gap: "6px", zIndex: 4,
              }}>
                {[0, 1].map((i) => (
                  <button key={i}
                    onClick={(e) => { e.stopPropagation(); setActive(i); }}
                    aria-label={`Photo ${i + 1}`}
                    style={{
                      width: "7px", height: "7px", borderRadius: "50%", padding: 0,
                      border: "0.5px solid rgba(200,164,74,0.7)",
                      backgroundColor: active === i ? "var(--gold-primary)" : "rgba(255,255,255,0.28)",
                      cursor: "pointer", transition: "background-color 200ms ease",
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          /* ── Decorative placeholder (photo not added yet) ─────── */
          <>
            <div className="islamic-bg" aria-hidden="true"
              style={{ position: "absolute", inset: 0, opacity: 0.12 }} />
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(0,0,0,0.18) 0%, transparent 60%)",
            }} />
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}>
              <div style={{ position: "absolute", inset: "12px", border: "0.5px solid rgba(200,164,74,0.18)" }} />
              {[
                { top: "14px", left: "14px" }, { top: "14px", right: "14px" },
                { bottom: "14px", left: "14px" }, { bottom: "14px", right: "14px" },
              ].map((pos, i) => (
                <div key={i} aria-hidden="true" style={{
                  position: "absolute", width: "8px", height: "8px",
                  borderColor: "rgba(200,164,74,0.35)", borderStyle: "solid", borderWidth: 0,
                  borderTopWidth: pos.top ? "0.5px" : 0, borderBottomWidth: pos.bottom ? "0.5px" : 0,
                  borderLeftWidth: pos.left ? "0.5px" : 0, borderRightWidth: pos.right ? "0.5px" : 0,
                  ...pos,
                }} />
              ))}
              <div aria-hidden="true" style={{
                position: "absolute", inset: 0, display: "flex",
                alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-cormorant)", fontStyle: "italic",
                fontSize: "clamp(52px, 9vw, 88px)", fontWeight: 300,
                color: "var(--gold-dim)", opacity: 0.14,
                userSelect: "none", letterSpacing: "0.05em",
              }}>
                {card.display ?? card.id}
              </div>
            </div>
          </>
        )}

        {/* Card number tag — top left (always visible) */}
        <div style={{
          position: "absolute", top: "12px", left: "12px",
          backgroundColor: "rgba(30,13,4,0.80)", backdropFilter: "blur(6px)",
          padding: "4px 10px", fontFamily: "var(--font-jost)",
          fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em",
          color: "var(--gold-primary)", zIndex: 3,
        }}>
          No. {card.display ?? card.id}
        </div>

        {/* Tier badge — top right (always visible) */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          backgroundColor: "rgba(30,13,4,0.80)", backdropFilter: "blur(6px)",
          padding: "4px 10px", fontFamily: "var(--font-jost)",
          fontSize: "8px", fontWeight: 500, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--gold-dim)", zIndex: 3,
        }}>
          {card.tier === "collectors" ? "COLLECTOR'S" : card.tier.toUpperCase()}
        </div>

        {/* Hover overlay — slides up from bottom */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          backgroundColor: "rgba(30,13,4,0.88)", backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 16px",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 380ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 4,
        }}>
          <span style={{
            fontFamily: "var(--font-cormorant)", fontStyle: "italic",
            fontSize: "13px", fontWeight: 300, color: "var(--cream-muted)",
          }}>
            {card.tier === "acrylic" ? "Per piece · min. 50 pcs" : "Per 100 cards"}
          </span>
          <a
            href={waLink(card)} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: "var(--font-jost)", fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "var(--gold-primary)", border: "0.5px solid var(--gold-primary)",
              padding: "8px 14px", textDecoration: "none", whiteSpace: "nowrap",
              transition: "background-color 200ms ease, color 200ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-primary)"; e.currentTarget.style.color = "var(--brown-darkest)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gold-primary)"; }}
          >
            ENQUIRE →
          </a>
        </div>
      </div>

      {/* ── Info zone ───────────────────────────────────────────── */}
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "28px",
          fontWeight: 300,
          color: "var(--gold-bright)",
          lineHeight: 1,
          marginBottom: "4px",
        }}>
          No. {card.display ?? card.id}
        </div>
        <div style={{
          fontFamily: "var(--font-jost)",
          fontSize: "9px",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--gold-dim)",
          marginBottom: "14px",
        }}>
          {meta.label}
        </div>

        {card.note && (
          <div style={{
            fontFamily: "var(--font-jost)",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "var(--gold-primary)",
            marginBottom: "10px",
            textTransform: "uppercase",
          }}>
            ✦ {card.note}
          </div>
        )}

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "12px",
            fontWeight: 300,
            color: "var(--cream-muted)",
          }}>Starting</span>
          <span style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "30px",
            fontWeight: 300,
            color: "var(--gold-bright)",
            lineHeight: 1,
          }}>
            Rs.&nbsp;{fmt(card.price)}
          </span>
          <span style={{
            width: "0.5px",
            height: "14px",
            backgroundColor: "var(--gold-dim)",
            flexShrink: 0,
            alignSelf: "center",
          }} />
          <span style={{
            fontFamily: "var(--font-jost)",
            fontSize: "9px",
            fontWeight: 300,
            letterSpacing: "0.05em",
            color: "var(--cream-muted)",
          }}>
            {meta.unit}
          </span>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
          {meta.pills.map((pill) => (
            <span key={pill} style={{
              fontFamily: "var(--font-jost)",
              fontSize: "8px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold-dim)",
              border: "0.5px solid var(--gold-dim)",
              padding: "3px 8px",
              borderRadius: "2px",
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
      gridColumn: "1 / -1",
      position: "relative",
      overflow: "hidden",
      padding: "40px clamp(24px, 4vw, 60px)",
      backgroundColor: index % 2 === 0 ? "var(--brown-warm)" : "var(--brown-deep)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      flexWrap: "wrap",
      borderTop: "0.5px solid var(--gold-dim)",
      borderBottom: "0.5px solid var(--gold-dim)",
    }}>
      <div className="islamic-bg" aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
      <p style={{
        fontFamily: "var(--font-cormorant)",
        fontStyle: "italic",
        fontSize: "clamp(16px, 2.2vw, 21px)",
        fontWeight: 300,
        color: "var(--cream-primary)",
        lineHeight: 1.6,
        maxWidth: "640px",
        position: "relative",
        margin: 0,
      }}>
        &ldquo;{text}&rdquo;
      </p>
      <a
        href={`${WHATSAPP}?text=${encodeURIComponent(cta)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold-primary)",
          border: "0.5px solid var(--gold-primary)",
          padding: "12px 24px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          position: "relative",
          flexShrink: 0,
          transition: "background-color 250ms ease, color 250ms ease",
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
        fontFamily: "var(--font-jost)",
        fontSize: "9px",
        fontWeight: 400,
        letterSpacing: "0.5em",
        textTransform: "uppercase",
        color: "var(--gold-dim)",
        marginBottom: "8px",
      }}>
        {eyebrow}
      </p>
      <div style={{
        width: "40px",
        height: "0.5px",
        backgroundColor: "var(--gold-dim)",
        marginBottom: "20px",
      }} />
      <div style={{ display: "flex", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 300,
          color: "var(--cream-primary)",
          lineHeight: 1,
          margin: 0,
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{
            fontFamily: "var(--font-jost)",
            fontSize: "12px",
            fontWeight: 300,
            color: "var(--cream-muted)",
            margin: 0,
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
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1px",
      backgroundColor: "var(--gold-dim)",
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
  const showAcrylic = active === "all" || active === "acrylic";

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
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: isActive ? 500 : 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isActive ? "var(--brown-darkest)" : "var(--cream-muted)",
                backgroundColor: isActive ? "var(--gold-primary)" : "transparent",
                border: `0.5px solid ${isActive ? "var(--gold-primary)" : "rgba(138,101,32,0.4)"}`,
                padding: "9px 20px",
                borderRadius: "999px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "background-color 220ms ease, color 220ms ease, border-color 220ms ease",
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
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "var(--gold-dim)",
            marginBottom: "1px",
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
            borderTop: "0.5px solid var(--gold-dim)",
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
            borderTop: "0.5px solid var(--gold-dim)",
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
            borderTop: "0.5px solid var(--gold-dim)",
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
                    padding: "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 28px)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="islamic-bg" aria-hidden="true"
                    style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }} />
                  <h3 style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    fontWeight: 300,
                    color: "var(--cream-primary)",
                    marginBottom: "8px",
                    position: "relative",
                  }}>
                    {suite.name}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    color: "var(--gold-primary)",
                    marginBottom: "20px",
                    position: "relative",
                  }}>
                    Save {suite.saving}
                  </p>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: 1,
                    position: "relative",
                  }}>
                    {suite.items.map((item) => (
                      <li key={item} style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "var(--cream-muted)",
                        letterSpacing: "0.04em",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}>
                        <span style={{
                          display: "inline-block",
                          width: "4px",
                          height: "4px",
                          backgroundColor: "var(--gold-dim)",
                          flexShrink: 0,
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
                      fontFamily: "var(--font-jost)",
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--gold-primary)",
                      border: "0.5px solid var(--gold-primary)",
                      padding: "11px 20px",
                      textDecoration: "none",
                      textAlign: "center",
                      position: "relative",
                      transition: "background-color 220ms ease, color 220ms ease",
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
            borderTop: "0.5px solid var(--gold-dim)",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 0",
                    borderBottom: i < ADDONS.length - 1 ? "0.5px solid rgba(138,101,32,0.22)" : "none",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "var(--cream-primary)",
                    letterSpacing: "0.04em",
                  }}>
                    {addon.name}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 300,
                      color: "var(--gold-bright)",
                      lineHeight: 1,
                    }}>
                      {addon.price}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "9px",
                      fontWeight: 300,
                      letterSpacing: "0.08em",
                      color: "var(--cream-muted)",
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
        marginTop: "clamp(48px, 7vw, 80px)",
        textAlign: "center",
        padding: "clamp(40px, 6vw, 64px) 24px",
        border: "0.5px solid var(--brown-light)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="islamic-bg" aria-hidden="true"
          style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }} />
        <p style={{
          fontFamily: "var(--font-jost)",
          fontSize: "9px",
          fontWeight: 400,
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: "var(--gold-dim)",
          marginBottom: "16px",
          position: "relative",
        }}>
          BESPOKE
        </p>
        <h3 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: 300,
          color: "var(--cream-primary)",
          marginBottom: "12px",
          position: "relative",
        }}>
          Need a custom design?
        </h3>
        <p style={{
          fontFamily: "var(--font-jost)",
          fontSize: "13px",
          fontWeight: 300,
          color: "var(--cream-muted)",
          maxWidth: "460px",
          margin: "0 auto 32px",
          lineHeight: 1.8,
          position: "relative",
        }}>
          Share your vision on WhatsApp. We work with you from concept to print — at a price agreed before we begin.
        </p>
        <a
          href={`${WHATSAPP}?text=${encodeURIComponent("Assalam o Alaikum, I need a custom card design. Can you help me?")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-primary)",
            border: "0.5px solid var(--gold-primary)",
            padding: "14px 32px",
            textDecoration: "none",
            display: "inline-block",
            position: "relative",
            transition: "background-color 250ms ease, color 250ms ease",
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
