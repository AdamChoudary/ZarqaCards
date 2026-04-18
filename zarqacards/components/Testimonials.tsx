"use client";

import { useState, useEffect } from "react";

const QUOTES = [
  {
    text: "The card design felt intensely personal and rich with our heritage. It was exactly what we envisioned for our walima—an heirloom piece.",
    client: "AMINA & ZAIN",
    context: "Walima Ceremony · Lahore",
  },
  {
    text: "Incredible attention to detail. Fast delivery and the gold foil work was immaculate. Our guests are still complimenting the invitations.",
    client: "HASSAN FAMILY",
    context: "Wedding Suite · Islamabad",
  },
  {
    text: "Beyond anything we could have hoped for. The paper quality and layout reflect a level of luxury very few designers in Pakistan offer.",
    client: "SARAH FAKHAR",
    context: "Mehndi Night · Rawalpindi",
  },
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => setCurrentIdx((i) => (i + 1) % QUOTES.length);
  const prevQuote = () => setCurrentIdx((i) => (i - 1 + QUOTES.length) % QUOTES.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextQuote();
    else if (diff < -50) prevQuote();
    setTouchStart(null);
  };

  return (
    <section
      style={{
        backgroundColor: "var(--brown-mid)",
        padding: "clamp(64px, 8vw, 120px) clamp(20px, 4vw, 80px)",
        borderTop: "0.5px solid var(--gold-dim)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        {/* Header */}
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 300,
            color: "var(--cream-primary)",
            margin: "0 0 64px 0",
          }}
        >
          What Our Clients Say
        </h2>

        {/* Carousel Area */}
        <div
          className="reveal reveal-delay-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "260px",
          }}
        >
          {/* Controls: Left */}
          <button
            onClick={prevQuote}
            aria-label="Previous quote"
            style={{
              background: "none",
              border: "0.5px solid var(--gold-dim)",
              cursor: "pointer",
              padding: "10px 14px",
              color: "var(--gold-dim)",
              transition: "color 200ms ease, border-color 200ms ease",
              flexShrink: 0,
              fontSize: "14px",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold-primary)";
              e.currentTarget.style.borderColor = "var(--gold-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--gold-dim)";
              e.currentTarget.style.borderColor = "var(--gold-dim)";
            }}
            className="hidden md:block"
          >
            ←
          </button>

          {/* Quote Content Container */}
          <div style={{ flex: 1, position: "relative", minHeight: "260px", width: "100%" }}>
            {QUOTES.map((quote, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: currentIdx === idx ? 1 : 0,
                  transition: "opacity 600ms ease-in-out",
                  pointerEvents: currentIdx === idx ? "auto" : "none",
                }}
              >
                {/* Large Opening Quote */}
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(48px, 8vw, 80px)",
                    color: "rgba(200, 164, 74, 0.35)", // --gold-primary at 35%
                    lineHeight: 0.5,
                    marginBottom: "32px",
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(16px, 2.5vw, 22px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--cream-primary)",
                    lineHeight: 1.8,
                    margin: "0 0 32px 0",
                    maxWidth: "640px",
                  }}
                >
                  {quote.text}
                </p>

                {/* Gold Divider */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                    marginBottom: "24px",
                  }}
                >
                  <div style={{ width: "40px", height: "0.5px", backgroundColor: "var(--gold-primary)" }} />
                  <div style={{ width: "4px", height: "4px", backgroundColor: "var(--gold-primary)", transform: "rotate(45deg)" }} />
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "var(--gold-dim)",
                    marginBottom: "8px",
                  }}
                >
                  {quote.client}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "9px",
                    fontWeight: 300,
                    color: "var(--cream-faint)",
                  }}
                >
                  {quote.context}
                </div>
              </div>
            ))}
          </div>

          {/* Controls: Right */}
          <button
            onClick={nextQuote}
            aria-label="Next quote"
            style={{
              background: "none",
              border: "0.5px solid var(--gold-dim)",
              cursor: "pointer",
              padding: "10px 14px",
              color: "var(--gold-dim)",
              transition: "color 200ms ease, border-color 200ms ease",
              flexShrink: 0,
              fontSize: "14px",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold-primary)";
              e.currentTarget.style.borderColor = "var(--gold-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--gold-dim)";
              e.currentTarget.style.borderColor = "var(--gold-dim)";
            }}
            className="hidden md:block"
          >
            →
          </button>
        </div>
        
        {/* Mobile Nav Indicators */}
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0", marginTop: "24px" }}
          className="md:hidden"
        >
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: i === currentIdx ? "var(--gold-primary)" : "transparent",
                  border: "1px solid var(--gold-primary)",
                  display: "block",
                  transition: "background-color 300ms ease",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
