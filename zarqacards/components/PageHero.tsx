interface PageHeroProps {
  eyebrow: string;
  title: string;
  urduTitle?: string;
  description?: string;
}

export default function PageHero({
  eyebrow,
  title,
  urduTitle,
  description,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      {/* Islamic geometric texture */}
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

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            marginBottom: "20px",
          }}
        >
          {eyebrow}
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 300,
            color: "var(--cream-text)",
            letterSpacing: "0.03em",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {title}
        </h1>

        {/* Urdu title */}
        {urduTitle && (
          <p
            dir="rtl"
            style={{
              fontFamily: "var(--font-nastaliq)",
              fontSize: "20px",
              fontWeight: 400,
              color: "var(--gold-dim)",
              marginTop: "10px",
              lineHeight: 2,
            }}
          >
            {urduTitle}
          </p>
        )}

        {/* Optional description */}
        {description && (
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "14px",
              fontWeight: 300,
              color: "var(--cream-muted)",
              marginTop: "20px",
              maxWidth: "560px",
              lineHeight: 1.9,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
