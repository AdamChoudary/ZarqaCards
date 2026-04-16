export default function ProcessSection() {
  const STEPS = [
    { num: "01", title: "Consultation", desc: "We listen to your vision, occasion details, and preferences." },
    { num: "02", title: "Design", desc: "Our designers craft a bespoke design tailored to your taste." },
    { num: "03", title: "Revisions", desc: "We iterate until every detail — colour, text, spacing — is exactly right." },
    { num: "04", title: "Delivery", desc: "Your cards are printed and delivered to your door within the timeframe." },
  ];

  return (
    <section
      id="process"
      style={{
        backgroundColor: "var(--brown-warm)",
        padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "var(--gold-dim)",
              marginBottom: "16px",
            }}
          >
            HOW IT WORKS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "42px",
              fontWeight: 300,
              color: "var(--cream-primary)",
              margin: 0,
            }}
          >
            The Process
          </h2>
        </div>

        {/* Steps */}
        <div className="process-grid reveal reveal-delay-1">
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              style={{
                padding: idx === 0
                  ? "0 clamp(20px, 3vw, 40px) 0 0"
                  : "0 clamp(20px, 3vw, 40px)",
                borderRight: idx < STEPS.length - 1
                  ? "0.5px solid var(--gold-dim)"
                  : "none",
              }}
            >
              {/* Ghost Number */}
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "72px",
                  fontWeight: 300,
                  color: "var(--gold-bright)",
                  opacity: 0.07,
                  lineHeight: 1,
                  marginBottom: "-12px",
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              {/* Step label divider */}
              <div
                style={{
                  width: "24px",
                  height: "0.5px",
                  backgroundColor: "var(--gold-primary)",
                  marginBottom: "20px",
                  opacity: 0.6,
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "var(--gold-primary)",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                  lineHeight: 1.9,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
