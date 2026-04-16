"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Card Data ────────────────────────────────────────────────────── */
const CARDS = [
  // WEDDING
  { id: 1,  title: "Royal Nikkah Suite",       urdu: "نکاح سیٹ",         category: "WEDDING",  price: "5,000", src: "https://images.unsplash.com/photo-1594954964654-20cebf5acb7e?w=800&q=80" },
  { id: 2,  title: "Ivory Ceremony Suite",      urdu: "آئیوری سیٹ",       category: "WEDDING",  price: "6,500", src: "https://images.unsplash.com/photo-1544322473-b3c9769cb6fa?w=800&q=80" },
  { id: 3,  title: "The Heritage Nikkahnama",   urdu: "ہیریٹیج نکاح",     category: "WEDDING",  price: "8,000", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  // MEHNDI
  { id: 4,  title: "Golden Mehndi Envelope",    urdu: "سونے کا لفافہ",    category: "MEHNDI",   price: "3,500", src: "https://images.unsplash.com/photo-1621612046461-1eec5b93cb14?w=800&q=80" },
  { id: 5,  title: "The Jasmine Mehndi Set",    urdu: "چمیلی مہندی",      category: "MEHNDI",   price: "4,000", src: "https://images.unsplash.com/photo-1603513364988-cb942c74fe9d?w=800&q=80" },
  { id: 6,  title: "Saffron Night Card",        urdu: "زعفران رات",        category: "MEHNDI",   price: "3,000", src: "https://images.unsplash.com/photo-1605330386762-b7e512411e73?w=800&q=80" },
  // WALIMA
  { id: 7,  title: "Ivory Walima Design",       urdu: "آئیوری ولیمہ",     category: "WALIMA",   price: "4,500", src: "https://images.unsplash.com/photo-1610385966348-1db1162446ee?w=800&q=80" },
  { id: 8,  title: "Pearl Reception Suite",     urdu: "موتی سیٹ",         category: "WALIMA",   price: "5,500", src: "https://images.unsplash.com/photo-1594954964654-20cebf5acb7e?w=800&q=80" },
  { id: 9,  title: "The Grand Walima",          urdu: "عظیم ولیمہ",       category: "WALIMA",   price: "7,000", src: "https://images.unsplash.com/photo-1544322473-b3c9769cb6fa?w=800&q=80" },
  // AQEEQA
  { id: 10, title: "Ceremonial Aqeeqa Card",    urdu: "عقیقہ کارڈ",       category: "AQEEQA",   price: "2,500", src: "https://images.unsplash.com/photo-1603513364988-cb942c74fe9d?w=800&q=80" },
  { id: 11, title: "The Blessing Announcement", urdu: "خوشخبری اعلان",    category: "AQEEQA",   price: "3,000", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { id: 12, title: "Rose Garden Aqeeqa",        urdu: "گلاب باغ",         category: "AQEEQA",   price: "3,500", src: "https://images.unsplash.com/photo-1621612046461-1eec5b93cb14?w=800&q=80" },
  // BIRTHDAY
  { id: 13, title: "Milestone Birthday Suite",  urdu: "خاص سالگرہ",       category: "BIRTHDAY", price: "2,500", src: "https://images.unsplash.com/photo-1605330386762-b7e512411e73?w=800&q=80" },
  { id: 14, title: "The Classic Invitation",    urdu: "کلاسک کارڈ",       category: "BIRTHDAY", price: "3,000", src: "https://images.unsplash.com/photo-1610385966348-1db1162446ee?w=800&q=80" },
  { id: 15, title: "A Year in Gold",            urdu: "سونے کا سال",      category: "BIRTHDAY", price: "3,500", src: "https://images.unsplash.com/photo-1594954964654-20cebf5acb7e?w=800&q=80" },
  // CUSTOM
  { id: 16, title: "Emerald Custom Edition",    urdu: "کسٹم ایڈیشن",     category: "CUSTOM",   price: "7,000", src: "https://images.unsplash.com/photo-1544322473-b3c9769cb6fa?w=800&q=80" },
  { id: 17, title: "The Monogram Series",       urdu: "مونوگرام سیریز",   category: "CUSTOM",   price: "9,000", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { id: 18, title: "Bespoke Family Crest",      urdu: "خاندانی نشان",     category: "CUSTOM",   price: "9,000", src: "https://images.unsplash.com/photo-1603513364988-cb942c74fe9d?w=800&q=80" },
];

const TABS = ["ALL", "WEDDING", "MEHNDI", "WALIMA", "AQEEQA", "BIRTHDAY", "CUSTOM"];

/* ── Page ─────────────────────────────────────────────────────────── */
export default function CollectionPage() {
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL" ? CARDS : CARDS.filter((c) => c.category === active);

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
            BROWSE ALL DESIGNS
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
              Our Collection
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
              ہمارا مجموعہ
            </p>
          </div>
        </div>
      </div>

      {/* ── Filters + Grid ── */}
      <section
        style={{
          padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 80px)",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Filter Tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "56px",
            justifyContent: "center",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`filter-tab${active === tab ? " active" : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--brown-light)",
          }}
        >
          {filtered.map((card, idx) => (
            <div
              key={card.id}
              className={`collection-card reveal reveal-delay-${(idx % 3) + 1}`}
              style={{ backgroundColor: "var(--brown-mid)" }}
            >
              {/* Image */}
              <div className="card-image-area" style={{ position: "relative" }}>
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  priority={idx < 3}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                {/* Category pill overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    fontFamily: "var(--font-jost)",
                    fontSize: "8px",
                    fontWeight: 500,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--brown-darkest)",
                    backgroundColor: "var(--gold-primary)",
                    padding: "4px 10px",
                  }}
                >
                  {card.category}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "24px 28px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "var(--cream-primary)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  dir="rtl"
                  style={{
                    fontFamily: "var(--font-nastaliq)",
                    fontSize: "12px",
                    color: "var(--gold-dim)",
                    margin: 0,
                  }}
                >
                  {card.urdu}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "10px",
                    fontWeight: 300,
                    color: "var(--cream-faint)",
                    letterSpacing: "0.05em",
                    margin: "4px 0 0",
                  }}
                >
                  From Rs. {card.price}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "0.5px",
                    backgroundColor: "var(--brown-light)",
                    margin: "8px 0",
                  }}
                />

                <div>
                  <a
                    href={`https://wa.me/923038705165?text=${encodeURIComponent(
                      `Hi ZarqaCards, I saw your ${card.title} from the Collection page and would like to order one.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-order-link"
                  >
                  ORDER THIS DESIGN →
                </a>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section
        style={{
          borderTop: "0.5px solid var(--gold-dim)",
          backgroundColor: "var(--brown-mid)",
          padding: "64px clamp(20px, 4vw, 80px)",
          textAlign: "center",
        }}
      >
        <div className="reveal" style={{ maxWidth: "600px", margin: "0 auto" }}>
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
            BESPOKE STUDIO
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "var(--cream-primary)",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "12px",
              fontWeight: 300,
              color: "var(--cream-muted)",
              marginBottom: "36px",
            }}
          >
            Every design we offer can be customised. Bring your vision and we will build it.
          </p>
          <Link href="/contact" className="btn-primary">
            REQUEST CUSTOM DESIGN
          </Link>
        </div>
      </section>
    </>
  );
}
