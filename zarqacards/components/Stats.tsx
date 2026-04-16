export default function StatsSection() {
  const STATS = [
    { value: "500+",   label: "CARDS DELIVERED" },
    { value: "5 Stars", label: "CLIENT RATING"  },
    { value: "3 Days",  label: "AVG TURNAROUND" },
    { value: "100%",    label: "CUSTOM DESIGN"  },
  ];

  return (
    <section
      style={{
        backgroundColor: "var(--brown-deep)",
        borderTop:    "0.5px solid var(--gold-dim)",
        borderBottom: "0.5px solid var(--gold-dim)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin:   "0 auto",
          padding:  "0 clamp(20px, 4vw, 80px)",
        }}
      >
        {/*
         * .stats-grid = CSS class in globals.css
         * Responsive: 4-col → 2-col at 580px
         * Separators: 1px gold background shows through the 0.5px gap
         */}
        <div
          className="stats-grid reveal"
          style={{
            gap: "0.5px",
            backgroundColor: "var(--gold-dim)",
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "var(--brown-deep)",
                textAlign:   "center",
                padding:     "clamp(28px, 3.5vw, 40px) 20px",
                display:     "flex",
                flexDirection: "column",
                alignItems:  "center",
                gap:         "6px",
              }}
            >
              <div
                style={{
                  fontFamily:  "var(--font-cormorant)",
                  fontSize:    "clamp(32px, 4vw, 42px)",
                  fontWeight:  300,
                  color:       "var(--gold-bright)",
                  lineHeight:  1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily:    "var(--font-jost)",
                  fontSize:      "9px",
                  fontWeight:    400,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color:         "var(--gold-dim)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
