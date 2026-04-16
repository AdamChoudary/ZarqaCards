"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1594954964654-20cebf5acb7e?w=1920&q=80",
  "https://images.unsplash.com/photo-1605330386762-b7e512411e73?w=1920&q=80",
  "https://images.unsplash.com/photo-1621612046461-1eec5b93cb14?w=1920&q=80",
  "https://images.unsplash.com/photo-1544322473-b3c9769cb6fa?w=1920&q=80",
  "https://images.unsplash.com/photo-1603513364988-cb942c74fe9d?w=1920&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((i) => (i + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Layer 1: Ken Burns Slideshow ── */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* ── Layer 2: Dark Overlay 65% ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#1E0D04",
          opacity: 0.65,
          zIndex: 1,
        }}
      />

      {/* ── Layer 3: Islamic Geometric Texture 6% ── */}
      <div
        aria-hidden="true"
        className="islamic-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Layer 4: Ghost Concentric Rings ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min(1000px, 140vw)",
            height: "min(1000px, 140vw)",
            borderRadius: "50%",
            border: "0.5px solid var(--gold-primary)",
            opacity: 0.04,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "min(800px, 115vw)",
            height: "min(800px, 115vw)",
            borderRadius: "50%",
            border: "0.5px solid var(--gold-primary)",
            opacity: 0.04,
          }}
        />
      </div>

      {/* ── Layer 5: Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 clamp(20px, 5vw, 60px)",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-appear"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "9px",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.6em",
            color: "var(--gold-dim)",
            marginBottom: "24px",
          }}
        >
          Est. 2024 &nbsp;·&nbsp; Rawalpindi, Pakistan &nbsp;·&nbsp; Premium Invitations
        </p>

        {/* Main Title */}
        <h1
          className="hero-appear hero-appear-d1"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(52px, 9vw, 84px)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            color: "var(--cream-primary)",
            margin: "0 0 8px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "var(--gold-bright)" }}>Z</span>arqaCards
        </h1>

        {/* Urdu Accent */}
        <p
          className="hero-appear hero-appear-d2"
          dir="rtl"
          style={{
            fontFamily: "var(--font-nastaliq)",
            fontSize: "18px",
            color: "var(--gold-dim)",
            marginBottom: "32px",
            lineHeight: 2,
          }}
        >
          خوبصورت کارڈز — آپ کی خوشیوں کے لیے
        </p>

        {/* Service Pill Tags */}
        <div
          className="hero-appear hero-appear-d3"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "44px",
          }}
        >
          {["WEDDING", "MEHNDI", "WALIMA", "AQEEQA"].map((pill) => (
            <span
              key={pill}
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "var(--gold-dim)",
                border: "0.5px solid var(--gold-dim)",
                borderRadius: "20px",
                padding: "7px 18px",
                backgroundColor: "transparent",
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-appear hero-appear-d4"
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/collection" className="btn-primary">
            VIEW COLLECTION
          </Link>
          <a
            href="https://wa.me/923001234567?text=Hi%20ZarqaCards%2C%20I%20want%20to%20order%20a%20card."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            WHATSAPP ORDER
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator (above dots) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "68px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
          zIndex: 4,
        }}
      >
        <div
          style={{
            width: "0.5px",
            height: "36px",
            backgroundColor: "var(--gold-dim)",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "var(--gold-dim)",
            transform: "rotate(45deg)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* ── Navigation Dots (bottom) ── */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0",
          zIndex: 4,
        }}
      >
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              /* 44px hit area with centered 6px visual dot */
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: i === current ? "var(--gold-primary)" : "transparent",
                border: "1px solid var(--gold-primary)",
                display: "block",
                transition: "background-color 400ms ease",
                flexShrink: 0,
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
