import Link from "next/link";

export default function CTASection() {
  return (
    <section
      style={{
        backgroundColor: "var(--brown-warm)",
        padding: "120px 0",
        position: "relative",
        borderTop: "0.5px solid var(--gold-primary)",
      }}
    >
      <div
        className="reveal"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 clamp(20px, 4vw, 80px)",
        }}
      >
        {/* Left Vertical Decor (Visible mostly on desktop) */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            left: "40px",
            top: 0,
            bottom: 0,
            width: "0.5px",
            backgroundColor: "var(--gold-dim)",
          }}
        />

        {/* Right Vertical Decor */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            right: "40px",
            top: 0,
            bottom: 0,
            width: "0.5px",
            backgroundColor: "var(--gold-dim)",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "9px",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.5em",
            color: "var(--gold-dim)",
            marginBottom: "24px",
          }}
        >
          PREMIUM INVITATION DESIGN
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 300,
            color: "var(--cream-primary)",
            margin: "0 0 16px 0",
            maxWidth: "600px",
            lineHeight: 1.1,
          }}
        >
          Ready to Make Your Occasion Unforgettable?
        </h2>

        <p
          dir="rtl"
          style={{
            fontFamily: "var(--font-nastaliq)",
            fontSize: "16px",
            color: "var(--gold-dim)",
            marginBottom: "32px",
          }}
        >
          آج ہی اپنا آرڈر دیں
        </p>

        {/* Gold Ornamental Divider */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", marginBottom: "40px" }}>
          <div style={{ width: "32px", height: "0.5px", backgroundColor: "var(--gold-primary)" }} />
          <div style={{ width: "4px", height: "4px", backgroundColor: "var(--gold-primary)", transform: "rotate(45deg)" }} />
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/contact" className="btn-primary">
            ORDER NOW
          </Link>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}
