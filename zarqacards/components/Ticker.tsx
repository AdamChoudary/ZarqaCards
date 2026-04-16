const ITEMS = [
  "Wedding Cards",
  "Mehndi Invitations",
  "Walima Cards",
  "Digital Delivery",
  "Custom Design",
  "24hr Turnaround",
  "Aqeeqa Cards",
  "Birthday Invites",
  "All Over Pakistan",
];

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: "var(--brown-mid)",
        borderTop: "0.5px solid var(--gold-dim)",
        borderBottom: "0.5px solid var(--gold-dim)",
        overflow: "hidden",
        height: "44px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="ticker-track">
        {/* Duplicate lists for seamless css looping */}
        {[0, 1].map((listIdx) => (
          <div key={listIdx} style={{ display: "flex", alignItems: "center" }}>
            {ITEMS.map((item, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.4em",
                  color: "var(--gold-dim)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item}
                <span
                  style={{
                    color: "var(--gold-primary)",
                    margin: "0 24px",
                    fontSize: "12px",
                  }}
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
