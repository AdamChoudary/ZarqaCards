const SERVICES = [
  {
    index: "01",
    title: "Wedding Invitations",
    desc: "Bespoke wedding cards handcrafted to reflect the grandeur and intimacy of your nikkah. Every detail tells your story.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
        <path d="M3 8l9 6 9-6"></path>
      </svg>
    )
  },
  {
    index: "02",
    title: "Mehndi Cards",
    desc: "Vibrant and celebratory designs that capture the joy and colour of mehndi night. A card as lively as the evening itself.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    )
  },
  {
    index: "03",
    title: "Walima Cards",
    desc: "Elegant reception cards that announce the union with quiet dignity. Classic typography, timeless aesthetics.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  {
    index: "04",
    title: "Aqeeqa Cards",
    desc: "Tender and meaningful cards to welcome a new life into the world. Soft luxury for the most sacred of announcements.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    index: "05",
    title: "Birthday Invitations",
    desc: "From intimate gatherings to grand celebrations — beautifully crafted birthday invitations for every milestone.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"></polyline>
        <rect x="2" y="7" width="20" height="5"></rect>
        <line x1="12" y1="22" x2="12" y2="7"></line>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
      </svg>
    )
  },
  {
    index: "06",
    title: "Custom Designs",
    desc: "Bring your vision to life with a fully custom card. We work with you from concept to print, every step of the way.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        backgroundColor: "var(--brown-deep)",
        padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
        borderBottom: "0.5px solid var(--gold-primary)",
      }}
    >
      {/* Texture Layer */}
      <div
        aria-hidden="true"
        className="islamic-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: "64px", display: "flex", flexDirection: "column" }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
              }}
            >
              OUR SERVICES
            </p>
            <div
              style={{
                width: "40px",
                height: "0.5px",
                backgroundColor: "var(--gold-dim)",
                marginTop: "8px",
                marginBottom: "24px",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "42px",
                fontWeight: 300,
                color: "var(--cream-primary)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Our Services
            </h2>
            <p
              dir="rtl"
              style={{
                fontFamily: "var(--font-nastaliq)",
                fontSize: "20px",
                color: "var(--gold-dim)",
                margin: 0,
              }}
            >
              خدمات ہماری
            </p>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px", // the 1px gap forms the visual border
            backgroundColor: "var(--gold-dim)", 
            padding: "1px", // Outer frame
          }}
          className="reveal reveal-delay-1"
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.index}
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px 28px",
                height: "100%",
                minHeight: "260px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "11px",
                    color: "var(--gold-dim)",
                    letterSpacing: "0.15em",
                    marginBottom: "16px",
                  }}
                >
                  {svc.index}
                </p>

                {/* 32x32px Icon Container */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "0.5px solid var(--gold-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                    marginTop: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {svc.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--cream-primary)",
                    marginBottom: "16px",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "var(--cream-muted)",
                  }}
                >
                  {svc.desc}
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
                <div
                  className="card-arrow"
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "0.5px solid var(--gold-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-dim)",
                    fontSize: "12px",
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
