import Image from "next/image";
import Link from "next/link";

/* ── 6 Service Blocks ─────────────────────────────────────────────── */
const SERVICES = [
  {
    index: "01",
    title: "Wedding Invitations",
    urdu: "شادی کارڈ",
    body: "The foundation of our craft. A wedding suite is the formal introduction to your union — setting the tone before a single guest arrives. We design comprehensive suites including the main invitation, RSVP inserts, details cards, and custom envelopes. Every element is printed on heavy-weight cotton stock, often finished with hot-foil stamping.",
    includes: [
      "Main invitation card",
      "RSVP card",
      "Details insert",
      "Envelope design",
      "Multiple size options",
      "Print-ready digital files",
    ],
    from: "5,000",
    src: "https://images.unsplash.com/photo-1594954964654-20cebf5acb7e?w=1000&q=80",
    reverse: false,
  },
  {
    index: "02",
    title: "Mehndi Cards",
    urdu: "مہندی کارڈ",
    body: "Celebratory, warm, and deeply rooted in tradition. Our Mehndi designs embrace festivity while maintaining our signature minimalistic luxury. We use gold accents alongside rich tones to mirror the joy of the dholki night — vibrant, but never garish.",
    includes: [
      "Custom Mehndi card",
      "Matching envelope",
      "Urdu and English text",
      "Gold accent options",
      "Digital version included",
    ],
    from: "3,500",
    src: "https://images.unsplash.com/photo-1621612046461-1eec5b93cb14?w=1000&q=80",
    reverse: true,
  },
  {
    index: "03",
    title: "Walima Cards",
    urdu: "ولیمہ کارڈ",
    body: "Elegant and understated, the walima card announces the union with quiet dignity. We favour clean typographic compositions with deliberate use of gold — letting the design breathe and convey the serene formality of the reception.",
    includes: [
      "Walima invitation card",
      "Formal typography",
      "Bilingual text setting",
      "Envelope design",
      "Print + digital delivery",
    ],
    from: "4,500",
    src: "https://images.unsplash.com/photo-1603513364988-cb942c74fe9d?w=1000&q=80",
    reverse: false,
  },
  {
    index: "04",
    title: "Aqeeqa Cards",
    urdu: "عقیقہ کارڈ",
    body: "Tender and meaningful, the aqeeqa announcement is among the most sacred we produce. These cards carry the weight of new life — we design them with softness and warmth, reflecting the gratitude and joy of welcoming a child.",
    includes: [
      "Announcement card",
      "Soft premium finish",
      "Child's name in Nastaliq",
      "Date and occasion details",
      "Digital sharing version",
    ],
    from: "2,500",
    src: "https://images.unsplash.com/photo-1605330386762-b7e512411e73?w=1000&q=80",
    reverse: true,
  },
  {
    index: "05",
    title: "Birthday Invitations",
    urdu: "سالگرہ کارڈ",
    body: "From milestone birthdays to intimate gatherings, beautifully crafted invitations for every celebration. We bring the same premium standards to birthday suites — sharp typography, quality stock, and the ZarqaCards attention to detail.",
    includes: [
      "Birthday invitation card",
      "Custom typography",
      "Event details layout",
      "Colour customisation",
      "Envelope option available",
    ],
    from: "2,500",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80",
    reverse: false,
  },
  {
    index: "06",
    title: "Custom Designs",
    urdu: "کسٹم ڈیزائن",
    body: "No template. No compromise. We build entirely from scratch for clients who have a specific vision or require something beyond our catalogue. This includes custom calligraphy, family crests, bespoke monograms, and multi-piece event suites. The design process is collaborative and unhurried.",
    includes: [
      "Dedicated design session",
      "Original concept development",
      "Unlimited revisions",
      "Custom calligraphy",
      "Full event suite option",
      "Priority support",
    ],
    from: "7,000",
    src: "https://images.unsplash.com/photo-1610385966348-1db1162446ee?w=1000&q=80",
    reverse: true,
  },
];

/* ── Add-Ons ──────────────────────────────────────────────────────── */
const ADDONS = [
  { title: "Envelope Design",   desc: "Matching envelope with address layout and brand elements." },
  { title: "Box Packaging",     desc: "Luxury keepsake box to house the complete invitation suite." },
  { title: "Digital Version",   desc: "WhatsApp-optimised digital card — animated or static." },
  { title: "Foil Printing",     desc: "Hot-foil stamping in gold, silver, or rose gold." },
  { title: "Embossing",         desc: "Tactile raised press for logos, monograms, and borders." },
  { title: "Rush Delivery",     desc: "24-hour turnaround for urgent orders (subject to availability)." },
];

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ borderBottom: "0.5px solid var(--gold-primary)" }}
      >
        <div
          aria-hidden="true"
          className="islamic-bg"
          style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.5em",
              color: "var(--gold-dim)",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            WHAT WE OFFER
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(42px, 6vw, 64px)",
                fontWeight: 300,
                color: "var(--cream-primary)",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Our Services
            </h1>
            <p
              dir="rtl"
              style={{
                fontFamily: "var(--font-nastaliq)",
                fontSize: "22px",
                color: "var(--gold-dim)",
                margin: 0,
              }}
            >
              ہماری خدمات
            </p>
          </div>
        </div>
      </div>

      {/* ── 6 Alternating Service Blocks ── */}
      {SERVICES.map((svc, idx) => (
        <div
          key={svc.index}
          className="service-detail-block reveal"
          style={{
            borderBottom: "0.5px solid var(--brown-light)",
            minHeight: "480px",
          }}
        >
          {/* Text Side */}
          <div
            style={{
              padding: "clamp(48px, 6vw, 80px) clamp(32px, 4vw, 72px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: svc.reverse ? 2 : 1,
              borderRight: svc.reverse
                ? "none"
                : "0.5px solid var(--brown-light)",
            }}
          >
            {/* Index */}
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color: "var(--gold-dim)",
                marginBottom: "16px",
              }}
            >
              {svc.index}
            </p>

            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 300,
                color: "var(--cream-primary)",
                marginBottom: "8px",
                lineHeight: 1.1,
              }}
            >
              {svc.title}
            </h2>
            <p
              dir="rtl"
              style={{
                fontFamily: "var(--font-nastaliq)",
                fontSize: "14px",
                color: "var(--gold-dim)",
                marginBottom: "24px",
              }}
            >
              {svc.urdu}
            </p>

            <div
              style={{
                width: "32px",
                height: "0.5px",
                backgroundColor: "var(--gold-dim)",
                marginBottom: "24px",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--cream-muted)",
                lineHeight: 1.9,
                marginBottom: "28px",
              }}
            >
              {svc.body}
            </p>

            {/* Includes list */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {svc.includes.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "4px",
                      height: "4px",
                      backgroundColor: "var(--gold-primary)",
                      transform: "rotate(45deg)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold-dim)",
                }}
              >
                From Rs. {svc.from}
              </span>
              <Link href="/contact" className="btn-ghost" style={{ padding: "10px 24px" }}>
                ORDER THIS SERVICE
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div
            style={{
              position: "relative",
              minHeight: "360px",
              backgroundColor: "var(--brown-warm)",
              overflow: "hidden",
              order: svc.reverse ? 1 : 2,
            }}
          >
            {/* Decorative Urdu watermark */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <span
                dir="rtl"
                style={{
                  fontFamily: "var(--font-nastaliq)",
                  fontSize: "clamp(60px, 10vw, 100px)",
                  color: "var(--gold-primary)",
                  opacity: 0.08,
                  userSelect: "none",
                  lineHeight: 1,
                }}
              >
                {svc.urdu}
              </span>
            </div>
            <Image
              src={svc.src}
              alt={svc.title}
              fill
              priority={idx === 0}
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ objectFit: "cover", opacity: 0.7, zIndex: 1 }}
            />
          </div>
        </div>
      ))}

      {/* ── Add-Ons ── */}
      <section
        style={{
          backgroundColor: "var(--brown-mid)",
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ marginBottom: "56px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
                marginBottom: "8px",
              }}
            >
              ENHANCEMENTS
            </p>
            <div
              style={{
                width: "40px",
                height: "0.5px",
                backgroundColor: "var(--gold-dim)",
                marginBottom: "20px",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                color: "var(--cream-primary)",
                margin: 0,
              }}
            >
              Optional Add-Ons
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--brown-light)",
            }}
          >
            {ADDONS.map((addon, i) => (
              <div
                key={addon.title}
                className={`addon-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    backgroundColor: "var(--gold-primary)",
                    transform: "rotate(45deg)",
                    marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "var(--cream-primary)",
                    marginBottom: "12px",
                  }}
                >
                  {addon.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Reminder ── */}
      <section
        style={{
          backgroundColor: "var(--brown-warm)",
          padding: "clamp(48px, 6vw, 72px) clamp(20px, 4vw, 80px)",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px 0",
          }}
        >
          {[
            { n: "01", t: "Consultation", d: "We listen to your vision." },
            { n: "02", t: "Design",       d: "A bespoke concept is crafted." },
            { n: "03", t: "Revisions",    d: "We iterate until perfect." },
            { n: "04", t: "Delivery",     d: "Printed and delivered with care." },
          ].map((step, i) => (
            <div
              key={step.n}
              style={{ paddingRight: "24px", borderRight: i < 3 ? "0.5px solid var(--brown-light)" : "none" }}
              className={i < 3 ? "" : ""}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "52px",
                  fontWeight: 300,
                  color: "var(--gold-bright)",
                  opacity: 0.08,
                  lineHeight: 1,
                  marginBottom: "-8px",
                }}
              >
                {step.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "var(--gold-primary)",
                  marginBottom: "8px",
                }}
              >
                {step.t}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "var(--brown-mid)",
          padding: "clamp(64px, 8vw, 80px) clamp(20px, 4vw, 80px)",
          textAlign: "center",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div className="reveal" style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 300,
              color: "var(--cream-primary)",
              marginBottom: "16px",
            }}
          >
            Not seeing exactly what you need?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "12px",
              fontWeight: 300,
              color: "var(--cream-muted)",
              marginBottom: "32px",
            }}
          >
            We build bespoke packages from scratch. Bring your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            START A CONVERSATION
          </Link>
        </div>
      </section>
    </>
  );
}
