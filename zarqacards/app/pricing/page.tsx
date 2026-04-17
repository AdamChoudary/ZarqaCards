import type { Metadata } from "next";
import Link from "next/link";
import PricingGrid from "@/components/PricingGrid";

export const metadata: Metadata = {
  title: "Pricing — The Collection",
  description:
    "Browse ZarqaCards' full invitation card collection with transparent pricing. Classic from Rs. 2,200, Signature from Rs. 5,500, Luxury from Rs. 16,000 per 100 cards.",
};

const WHATSAPP = "https://wa.me/923038705165";
const SUITE_TEXT = encodeURIComponent(
  "Assalam o Alaikum, I'm interested in the Complete Wedding Suite offer — Shadi, Mehndi, and Walima cards together."
);

const FAQS = [
  {
    q: "What is included in the price?",
    a: "Every card includes custom wording printed, one standard inner card, and a digital proof for your approval before production begins.",
  },
  {
    q: "How long does printing take?",
    a: "Standard orders are ready in 3–5 days after proof approval. Rush delivery (48 hours) is available for Rs. 500 extra.",
  },
  {
    q: "How do I pay?",
    a: "We accept EasyPaisa, JazzCash, bank transfer, and cash on pickup in Rawalpindi. A 50% advance is required to begin production.",
  },
  {
    q: "Can I add extra inner cards?",
    a: "Yes. Extra inner cards are priced at Rs. 700–2,000 per 100 depending on your tier. Ask us on WhatsApp for exact pricing.",
  },
  {
    q: "Do you deliver outside Rawalpindi?",
    a: "Nationwide delivery via TCS or Leopards for Rs. 350–500 depending on weight. Rawalpindi and Islamabad hand delivery is Rs. 200.",
  },
  {
    q: "What is the minimum order?",
    a: "Paper cards: minimum 100 pieces per order. Acrylic cards: minimum 50 pieces per order.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — "The Collection Room"
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "var(--brown-darkest)",
          paddingTop:      "clamp(100px, 14vw, 160px)",
          paddingBottom:   "clamp(56px, 8vw, 96px)",
          paddingLeft:     "clamp(20px, 4vw, 80px)",
          paddingRight:    "clamp(20px, 4vw, 80px)",
          textAlign:       "center",
          borderBottom:    "0.5px solid var(--gold-dim)",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily:    "var(--font-jost)",
              fontSize:      "10px",
              fontWeight:    400,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color:         "var(--gold-dim)",
              marginBottom:  "24px",
            }}
          >
            ZARQACARDS
          </p>

          <h1
            style={{
              fontFamily:   "var(--font-cormorant)",
              fontSize:     "clamp(48px, 8vw, 72px)",
              fontWeight:   300,
              color:        "var(--cream-primary)",
              lineHeight:   1,
              marginBottom: "20px",
            }}
          >
            The Collection
          </h1>

          <p
            dir="rtl"
            style={{
              fontFamily:   "var(--font-nastaliq)",
              fontSize:     "clamp(18px, 3vw, 24px)",
              color:        "var(--gold-primary)",
              marginBottom: "24px",
            }}
          >
            ہمارا مجموعہ
          </p>

          {/* Ornamental divider */}
          <div
            style={{
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "12px",
              marginBottom:   "24px",
            }}
          >
            <div style={{ width: "40px", height: "0.5px", backgroundColor: "var(--gold-dim)" }} />
            <div
              style={{
                width:           "6px",
                height:          "6px",
                backgroundColor: "var(--gold-primary)",
                transform:       "rotate(45deg)",
              }}
            />
            <div style={{ width: "40px", height: "0.5px", backgroundColor: "var(--gold-dim)" }} />
          </div>

          <p
            style={{
              fontFamily:   "var(--font-jost)",
              fontSize:     "13px",
              fontWeight:   300,
              color:        "var(--cream-muted)",
              lineHeight:   1.8,
              letterSpacing:"0.02em",
            }}
          >
            Each card is priced per 100 pieces and includes custom printing,
            one standard inner card, and a digital proof before production begins.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OFFER STRIP — Wedding Suite Bundle
      ══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          backgroundColor: "var(--brown-warm)",
          borderTop:       "0.5px solid rgba(200,164,74,0.3)",
          borderBottom:    "0.5px solid rgba(200,164,74,0.3)",
          padding:         "20px clamp(20px, 4vw, 80px)",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          gap:             "24px",
          flexWrap:        "wrap",
          textAlign:       "center",
        }}
      >
        <span
          style={{
            color:         "var(--gold-primary)",
            fontSize:      "10px",
            marginRight:   "4px",
          }}
        >
          ◆
        </span>
        <p
          style={{
            fontFamily:   "var(--font-cormorant)",
            fontStyle:    "italic",
            fontSize:     "clamp(15px, 2vw, 18px)",
            fontWeight:   300,
            color:        "var(--cream-primary)",
            lineHeight:   1.5,
          }}
        >
          Order your complete wedding suite — Shadi, Mehndi, and Walima cards together — and receive your Motive at no extra charge.
        </p>
        <a
          href={`${WHATSAPP}?text=${SUITE_TEXT}`}
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
            padding:        "10px 20px",
            textDecoration: "none",
            whiteSpace:     "nowrap",
            flexShrink:     0,
          }}
        >
          CLAIM THIS OFFER
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          GRID SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "var(--brown-deep)",
          padding:         "clamp(48px, 7vw, 80px) clamp(20px, 4vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PricingGrid />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "var(--brown-darkest)",
          padding:         "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
          borderTop:       "0.5px solid var(--gold-dim)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* FAQ header */}
          <div style={{ marginBottom: "48px" }}>
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
              BEFORE YOU ORDER
            </p>
            <div
              style={{
                width:           "40px",
                height:          "0.5px",
                backgroundColor: "var(--gold-dim)",
                marginBottom:    "16px",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize:   "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                color:      "var(--cream-primary)",
                margin:     0,
              }}
            >
              Common Questions
            </h2>
          </div>

          {/* FAQ 2-col grid */}
          <div
            className="faq-pricing-grid"
            style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr",
              gap:                 "0 48px",
            }}
          >
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                style={{
                  padding:    "24px 0",
                  borderTop:  "0.5px solid var(--brown-light)",
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-cormorant)",
                    fontSize:      "18px",
                    fontWeight:    400,
                    color:         "var(--gold-primary)",
                    marginBottom:  "10px",
                    lineHeight:    1.3,
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize:   "13px",
                    fontWeight: 300,
                    color:      "var(--cream-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
