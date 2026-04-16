import Link from "next/link";

const PLANS = [
  {
    label: "BASIC",
    amount: "Rs. 2,500",
    desc: "Perfect for single-event digital cards",
    features: ["1 Design Concept", "2 Revisions", "Digital File Only", "48hr Delivery", "1 Card Size"],
    featured: false,
  },
  {
    label: "PREMIUM",
    badge: "MOST POPULAR",
    amount: "Rs. 5,000",
    desc: "Full suite for complete wedding events",
    features: [
      "3 Design Concepts",
      "Unlimited Revisions",
      "All 3 Event Cards",
      "24hr Delivery",
      "Multiple Sizes",
      "WhatsApp Support",
      "Print-Ready File",
    ],
    featured: true,
  },
  {
    label: "LUXURY",
    amount: "Rs. 9,000",
    desc: "Bespoke designs for the discerning family",
    features: [
      "5 Design Concepts",
      "Unlimited Revisions",
      "Full Wedding Suite",
      "Same Day Delivery",
      "Print + Digital Files",
      "Priority WhatsApp",
      "Custom Monogram",
      "Premium Typography",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "var(--brown-deep)",
        padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "42px",
              fontWeight: 300,
              color: "var(--cream-primary)",
              marginBottom: "12px",
              margin: 0,
            }}
          >
            Pricing
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "12px",
              fontWeight: 300,
              color: "var(--cream-muted)",
              letterSpacing: "0.1em",
            }}
          >
            Transparent pricing for every occasion
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div
          className="reveal reveal-delay-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.label}
              className={`pricing-card${plan.featured ? " featured" : ""}`}
              style={{
                padding: "48px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--gold-primary)",
                    color: "var(--brown-darkest)",
                    padding: "4px 16px",
                    fontFamily: "var(--font-jost)",
                    fontSize: "9px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  color: "var(--gold-dim)",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                {plan.label}
              </p>
              
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "48px",
                  fontWeight: 300,
                  color: "var(--gold-bright)",
                  textAlign: "center",
                  margin: "0 0 16px",
                  lineHeight: 1,
                }}
              >
                {plan.amount}
              </h3>
              
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                {plan.desc}
              </p>

              {/* Feature List */}
              <div style={{ flex: 1, marginBottom: "40px" }}>
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "16px 0",
                      borderTop: "0.5px solid var(--gold-dim)",
                      borderBottom: idx === plan.features.length - 1 ? "0.5px solid var(--gold-dim)" : "none",
                    }}
                  >
                    <div style={{ width: "4px", height: "4px", backgroundColor: "var(--gold-primary)", transform: "rotate(45deg)" }} />
                    <span
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "var(--cream-muted)",
                        lineHeight: 1.8,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button Button */}
              <div style={{ textAlign: "center", width: "100%" }}>
                <Link
                  href="/contact"
                  className={plan.featured ? "btn-primary" : "btn-ghost"}
                  style={{ width: "100%" }}
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
