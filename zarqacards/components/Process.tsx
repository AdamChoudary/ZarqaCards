"use client";

const WHATSAPP_LINK = `https://wa.me/923038705165?text=${encodeURIComponent(
  "Assalam o Alaikum, I'd like to start a consultation for an invitation card."
)}`;

const STEPS = [
  {
    num:   "01",
    title: "Consultation",
    desc:  "We listen to your vision, occasion details, and preferences — so the final card is entirely yours.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num:   "02",
    title: "Design",
    desc:  "Our designers craft a bespoke layout tailored to your taste — typography, layout, and every detail.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num:   "03",
    title: "Revisions",
    desc:  "We refine until every detail — colour, text, and spacing — is exactly right. No rush, no limits.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-3.6"/>
      </svg>
    ),
  },
  {
    num:   "04",
    title: "Delivery",
    desc:  "Printed to the highest standard and delivered to your door — within the timeframe we agree.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: "var(--parchment-mid)",
        padding:         "clamp(64px, 8vw, 100px) clamp(20px, 4vw, 80px)",
        position:        "relative",
        overflow:        "hidden",
      }}
    >
      {/* Giant watermark word */}
      <div
        aria-hidden="true"
        style={{
          position:     "absolute",
          right:        "-10px",
          bottom:       "-40px",
          fontFamily:   "var(--font-cormorant)",
          fontSize:     "clamp(100px, 18vw, 220px)",
          fontWeight:   300,
          fontStyle:    "italic",
          color:        "var(--brown-mid)",
          opacity:      0.055,
          lineHeight:   1,
          userSelect:   "none",
          pointerEvents:"none",
          letterSpacing:"-0.02em",
        }}
      >
        Process
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* ── Section Header ── */}
        <div
          className="reveal"
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            flexWrap:       "wrap",
            gap:            "24px",
            marginBottom:   "clamp(48px, 7vw, 80px)",
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
              marginBottom:  "10px",
            }}>
              HOW IT WORKS
            </p>
            <div style={{
              width:           "32px",
              height:          "0.5px",
              backgroundColor: "var(--gold-primary)",
              marginBottom:    "20px",
            }} />
            <h2 style={{
              fontFamily: "var(--font-cormorant)",
              fontSize:   "clamp(28px, 5vw, 48px)",
              fontWeight: 300,
              color:      "var(--brown-deep)",
              margin:     0,
              lineHeight: 1,
            }}>
              The Process
            </h2>
          </div>

          <p style={{
            fontFamily:   "var(--font-jost)",
            fontSize:     "12px",
            fontWeight:   300,
            color:        "var(--brown-light)",
            letterSpacing:"0.02em",
            maxWidth:     "340px",
            lineHeight:   1.8,
            margin:       0,
            paddingBottom:"4px",
          }}>
            From first conversation to final delivery — every step guided personally by our team.
          </p>
        </div>

        {/* ── Steps Grid ── */}
        <div className="process-steps-grid reveal reveal-delay-1">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="process-step-item">

              {/* Badge row with connector line */}
              <div style={{
                display:    "flex",
                alignItems: "center",
                marginBottom:"32px",
              }}>
                {/* Square numbered badge */}
                <div style={{
                  width:           "52px",
                  height:          "52px",
                  border:          "0.5px solid var(--gold-primary)",
                  backgroundColor: "var(--parchment)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  flexShrink:      0,
                  position:        "relative",
                  zIndex:          1,
                  transition:      "background-color 300ms ease",
                }}
                  className="process-badge"
                >
                  <span style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize:   "20px",
                    fontWeight: 300,
                    color:      "var(--gold-primary)",
                    lineHeight: 1,
                  }}>
                    {step.num}
                  </span>
                </div>

                {/* Connector line (hidden on last) */}
                {idx < STEPS.length - 1 && (
                  <div style={{
                    flex:            1,
                    height:          "0.5px",
                    background:      "linear-gradient(to right, var(--gold-primary) 0%, transparent 100%)",
                    opacity:         0.7,
                  }} />
                )}
              </div>

              {/* Icon */}
              <div style={{
                width:        "44px",
                height:       "44px",
                display:      "flex",
                alignItems:   "center",
                justifyContent:"center",
                marginBottom: "18px",
                color:        "var(--gold-dim)",
                border:       "0.5px solid rgba(138,101,32,0.2)",
                backgroundColor:"rgba(238,224,196,0.55)",
              }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily:   "var(--font-cormorant)",
                fontSize:     "clamp(18px, 2.2vw, 22px)",
                fontWeight:   400,
                color:        "var(--brown-deep)",
                marginBottom: "10px",
                lineHeight:   1.1,
              }}>
                {step.title}
              </h3>

              {/* Short gold rule */}
              <div style={{
                width:           "20px",
                height:          "0.5px",
                backgroundColor: "var(--gold-primary)",
                marginBottom:    "14px",
                opacity:         0.8,
              }} />

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-jost)",
                fontSize:   "12px",
                fontWeight: 300,
                color:      "var(--brown-light)",
                lineHeight: 1.85,
                margin:     0,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="reveal reveal-delay-2"
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "20px",
            marginTop:      "clamp(48px, 6vw, 72px)",
            paddingTop:     "clamp(28px, 4vw, 40px)",
            borderTop:      "0.5px solid rgba(138,101,32,0.2)",
          }}
        >
          <p style={{
            fontFamily:   "var(--font-jost)",
            fontSize:     "12px",
            fontWeight:   300,
            color:        "var(--brown-warm)",
            letterSpacing:"0.02em",
            margin:       0,
            lineHeight:   1.7,
          }}>
            Ready to start?&nbsp;
            <span style={{ color: "var(--brown-deep)", fontWeight: 400 }}>
              The first consultation is completely free.
            </span>
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "10px",
              fontFamily:     "var(--font-jost)",
              fontSize:       "10px",
              fontWeight:     500,
              letterSpacing:  "0.25em",
              textTransform:  "uppercase",
              color:          "var(--brown-darkest)",
              backgroundColor:"var(--gold-primary)",
              padding:        "14px 36px",
              textDecoration: "none",
              transition:     "background-color 250ms ease",
              whiteSpace:     "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-primary)")}
          >
            BEGIN YOUR ORDER
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
