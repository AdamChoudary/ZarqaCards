import Image from "next/image";
import Link from "next/link";

/*
 * Asymmetric masonry grid — 7 cells, 3 rows:
 *   Row 1 (280px):  Wedding [col 1–2]  |  Mehndi [col 3]
 *   Row 2 (220px):  Diwane  [col 1]    |  Walima [col 2]  |  Texture [col 3]
 *   Row 3 (260px):  Aqeeqa  [col 1]    |  Custom [col 2–3]
 *
 * The .gallery-grid and .gallery-cell classes in globals.css handle
 * responsive collapse to single column on mobile — no JS needed.
 */

const CELLS = [
  {
    name: "Wedding Collection",
    urdu: "شادی کارڈز",
    col: "1 / 3",
    row: "1",
    src: "https://images.unsplash.com/photo-1594954964654-20cebf5acb7e?w=1200&q=80",
  },
  {
    name: "Mehndi Series",
    urdu: "مہندی",
    col: "3",
    row: "1",
    src: "https://images.unsplash.com/photo-1621612046461-1eec5b93cb14?w=800&q=80",
  },
  {
    name: "Diwane Cover",
    urdu: "دیوان",
    col: "1",
    row: "2",
    src: "https://images.unsplash.com/photo-1544322473-b3c9769cb6fa?w=800&q=80",
  },
  {
    name: "Walima Edition",
    urdu: "ولیمہ",
    col: "2",
    row: "2",
    src: "https://images.unsplash.com/photo-1603513364988-cb942c74fe9d?w=800&q=80",
  },
  {
    name: "",
    urdu: "",
    col: "3",
    row: "2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    name: "Aqeeqa Designs",
    urdu: "عقیقہ",
    col: "1",
    row: "3",
    src: "https://images.unsplash.com/photo-1605330386762-b7e512411e73?w=800&q=80",
  },
  {
    name: "Custom Work",
    urdu: "کسٹم",
    col: "2 / 4",
    row: "3",
    src: "https://images.unsplash.com/photo-1610385966348-1db1162446ee?w=1200&q=80",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "var(--brown-deep)",
        padding: "clamp(64px, 8vw, 96px) 0",
        borderTop: "0.5px solid var(--gold-dim)",
        borderBottom: "0.5px solid var(--gold-dim)",
      }}
    >
      {/* Section Header */}
      <div
        className="reveal"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 80px)",
          marginBottom: "56px",
        }}
      >
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
          OUR WORK
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
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
            Our Work
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
            ہمارا کام
          </p>
        </div>
      </div>

      {/* Asymmetric Grid — full-bleed within 1200px max-width container */}
      <div
        className="reveal reveal-delay-1"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 80px)" }}
      >
        <div className="gallery-grid">
          {CELLS.map((cell, idx) => (
            <div
              key={idx}
              className="gallery-card gallery-cell"
              style={{
                gridColumn: cell.col,
                gridRow: cell.row,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Placeholder brown + Islamic pattern (replaced with real photos) */}
              <div
                aria-hidden="true"
                className="islamic-bg"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "var(--brown-warm)",
                  opacity: 0.5,
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <Image
                src={cell.src}
                alt={cell.name || "Design detail"}
                fill
                priority={idx === 0}
                className="gallery-img-fill"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                style={{ objectFit: "cover", zIndex: 1 }}
              />

              {/* Label: always-visible on mobile, hover-reveal on desktop */}
              {cell.name && (
                <>
                  {/* Desktop: slide-up hover overlay */}
                  <div className="gallery-overlay" style={{ zIndex: 2 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "var(--cream-primary)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cell.name}
                    </span>
                    <span
                      dir="rtl"
                      style={{
                        fontFamily: "var(--font-nastaliq)",
                        fontSize: "13px",
                        color: "var(--gold-dim)",
                        marginTop: "4px",
                      }}
                    >
                      {cell.urdu}
                    </span>
                    <Link
                      href="/collection"
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "var(--cream-primary)",
                        marginTop: "12px",
                        borderBottom: "0.5px solid var(--cream-primary)",
                        paddingBottom: "2px",
                        alignSelf: "flex-start",
                        textDecoration: "none",
                      }}
                    >
                      VIEW →
                    </Link>
                  </div>

                  {/* Mobile: persistent label strip at bottom */}
                  <div
                    className="gallery-mobile-label"
                    style={{ zIndex: 2 }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "var(--cream-primary)",
                      }}
                    >
                      {cell.name}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
