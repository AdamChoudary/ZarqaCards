import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A0803",
        borderTop: "0.5px solid var(--gold-dim)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px clamp(20px, 4vw, 80px) 40px",
        }}
      >
        {/* 4 Column Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "64px",
          }}
        >
          {/* Column 1: Brand */}
          <div style={{ paddingRight: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "16px" }}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "24px",
                  fontWeight: 400,
                  letterSpacing: "0.35em",
                  color: "var(--gold-bright)",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ borderRadius: "50%" }} />
                ZARQA
              </div>
            </Link>
            <p
              dir="rtl"
              style={{
                fontFamily: "var(--font-nastaliq)",
                fontSize: "14px",
                color: "var(--gold-dim)",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              ہر خوشی کا آغاز ایک کارڈ سے
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                fontWeight: 300,
                color: "var(--cream-muted)",
                maxWidth: "240px",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Premium wedding invitation design based in Rawalpindi, crafting beautiful cards for every occasion.
            </p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                fontWeight: 400,
                color: "var(--gold-primary)",
              }}
            >
              WhatsApp Us →
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 500,
                color: "var(--gold-dim)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              SERVICES
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Wedding Invitations", "Mehndi Cards", "Walima Cards", "Aqeeqa Cards", "Custom Designs", "Birthday Cards"].map((link) => (
                <Link key={link} href="/services" className="footer-link">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Pages */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 500,
                color: "var(--gold-dim)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              PAGES
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "Collection", "Services", "Process", "Gallery", "Pricing", "Contact"].map((page) => (
                <Link
                  key={page}
                  href={`/${page === "Home" ? "" : page.toLowerCase()}`}
                  className="footer-link"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 500,
                color: "var(--gold-dim)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              CONTACT
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontFamily: "var(--font-jost)", fontSize: "11px", fontWeight: 300, color: "var(--cream-muted)" }}>
              <span>WhatsApp: +92 300 123 4567</span>
              <span>Email: hello@zarqacards.pk</span>
              <span>City: Rawalpindi, Pakistan</span>
              <span>Hours: Mon–Sat, 9am–9pm</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "0.5px solid var(--gold-dim)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span style={{ fontFamily: "var(--font-jost)", fontSize: "10px", color: "var(--cream-faint)" }}>
            © 2024 ZarqaCards. All Rights Reserved.
          </span>
          <span
            dir="rtl"
            style={{
              fontFamily: "var(--font-nastaliq)",
              fontSize: "12px",
              color: "var(--cream-faint)",
            }}
          >
            آپ کی خوشیاں ہمارے کارڈز میں
          </span>
        </div>
      </div>
    </footer>
  );
}
