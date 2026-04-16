import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            EST. 2024 · RAWALPINDI
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
              Our Story
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
              ہماری کہانی
            </p>
          </div>
        </div>
      </div>

      {/* ── Brand Statement ── */}
      <section
        style={{
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            borderLeft: "2px solid var(--gold-primary)",
            paddingLeft: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--cream-primary)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            An invitation is the very first whisper of an occasion. Before
            the flowers are arranged, before the music begins, before the
            guests arrive — the card arrives. It sets the tone for everything
            that follows. At ZarqaCards, we believe this first impression
            deserves nothing less than extraordinary.
          </p>
        </div>
      </section>

      {/* ── Founding Story ── */}
      <section
        style={{
          backgroundColor: "var(--brown-mid)",
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div className="reveal">
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
                marginBottom: "20px",
              }}
            >
              THE ORIGIN
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                color: "var(--gold-bright)",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              A Ceremony Before the Ceremony
            </h2>
            <div
              style={{
                width: "40px",
                height: "0.5px",
                backgroundColor: "var(--gold-primary)",
                marginBottom: "28px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--cream-muted)",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              Founded in the historic heart of Rawalpindi, ZarqaCards was born
              from a simple belief: the invitation card is not a formality — it
              is an heirloom. It is the artefact a family will keep long after
              the celebration is over.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--cream-muted)",
                lineHeight: 1.9,
              }}
            >
              We blend deep-rooted Pakistani aesthetic traditions — Islamic
              geometry, Nastaliq calligraphy, heritage motifs — with the clean
              precision of modern design. The result is a card that feels both
              timeless and utterly of its moment.
            </p>
          </div>

          {/* Decorative Panel */}
          <div
            className="reveal reveal-delay-1"
            style={{
              position: "relative",
              minHeight: "420px",
              backgroundColor: "var(--brown-warm)",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1605330386762-b7e512411e73?w=800&q=80"
              alt="The craft of invitation design"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ objectFit: "cover", opacity: 0.8 }}
            />
            {/* Urdu quote overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "flex-end",
                padding: "32px",
                background: "linear-gradient(to top, rgba(30,13,4,0.75) 0%, transparent 60%)",
              }}
            >
              <p
                dir="rtl"
                style={{
                  fontFamily: "var(--font-nastaliq)",
                  fontSize: "20px",
                  color: "var(--gold-dim)",
                  lineHeight: 2,
                  margin: 0,
                }}
              >
                ہر کارڈ ایک یادگار ہے
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fact Strip ── */}
      <section
        style={{
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Established", value: "2024" },
            { label: "Location", value: "Rawalpindi" },
            { label: "Specialty", value: "Premium Foil" },
            { label: "Reach", value: "All Pakistan" },
          ].map((item, i) => (
            <div
              key={i}
              className="feature-strip-item"
              style={{ flex: "1 1 200px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold-dim)",
                  marginBottom: "10px",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "var(--cream-primary)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three Values ── */}
      <section
        style={{
          backgroundColor: "var(--brown-deep)",
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
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
              WHAT WE STAND FOR
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 300,
                color: "var(--cream-primary)",
                margin: 0,
              }}
            >
              Our Values
            </h2>
          </div>

          {/* Roman Numeral Value Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--brown-light)",
            }}
          >
            {[
              {
                roman: "I",
                title: "Heirloom Quality",
                desc: "Materials chosen not for cost, but for their ability to outlast the occasion. Every paper, every finish, every ink is selected with the same care as the design itself.",
              },
              {
                roman: "II",
                title: "Ceremonial Intention",
                desc: "We approach each card as a sacred commission. The card carries the weight of the event — its formality, its warmth, its culture. We never treat that lightly.",
              },
              {
                roman: "III",
                title: "Handcrafted Detail",
                desc: "Mass production has no place here. Every layout is composed by hand, every spacing decision made deliberately, every Urdu line set with typographic care.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className={`values-card reveal reveal-delay-${i + 1}`}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "52px",
                    fontWeight: 300,
                    color: "var(--gold-dim)",
                    opacity: 0.5,
                    lineHeight: 1,
                    marginBottom: "20px",
                  }}
                >
                  {v.roman}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--gold-primary)",
                    marginBottom: "16px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "var(--cream-muted)",
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Four Feature Highlights ── */}
      <section
        style={{
          backgroundColor: "var(--brown-mid)",
          borderBottom: "0.5px solid var(--brown-light)",
        }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "◆", label: "Premium Stock Papers" },
            { icon: "◆", label: "Unlimited Revisions" },
            { icon: "◆", label: "3-Day Turnaround" },
            { icon: "◆", label: "100% Custom Design" },
          ].map((f, i) => (
            <div
              key={i}
              className="feature-strip-item"
              style={{ flex: "1 1 200px", textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "8px",
                  color: "var(--gold-primary)",
                  marginBottom: "12px",
                }}
              >
                {f.icon}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--cream-muted)",
                  margin: 0,
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "var(--brown-warm)",
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
          textAlign: "center",
        }}
      >
        <div className="reveal" style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "var(--cream-primary)",
              margin: "0 0 24px",
              lineHeight: 1.2,
            }}
          >
            Begin Your Order
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
            آج ہی شروع کریں
          </p>
          <Link href="/contact" className="btn-primary">
            START YOUR ORDER
          </Link>
        </div>
      </section>
    </>
  );
}
