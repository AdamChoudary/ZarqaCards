"use client";

import { useState } from "react";

/* ── FAQ Data ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How much time is required for a custom design?",
    a: "We recommend starting 4 to 6 weeks before your mail-out date. Rush orders are possible subject to studio availability — reach out on WhatsApp to confirm.",
  },
  {
    q: "Can I see a proof before printing?",
    a: "Always. Every order includes a full digital proof for your approval before a single card is printed. We do not proceed without your written confirmation.",
  },
  {
    q: "Do you deliver outside Rawalpindi?",
    a: "Yes — we deliver nationwide across Pakistan via secure courier. We also provide high-resolution digital files for international clients or local printing.",
  },
  {
    q: "Can I incorporate my own Urdu or English text?",
    a: "Absolutely. The wording is the soul of the invitation. We professionally typeset both English and Urdu text, including custom poems and religious phrases.",
  },
  {
    q: "What file formats do you provide?",
    a: "Print-ready PDF (CMYK, 300dpi), PNG for digital sharing, and the working design file on request for Premium and Luxury packages.",
  },
  {
    q: "What payment methods do you accept?",
    a: "JazzCash, EasyPaisa, bank transfer, and cash on delivery within Rawalpindi. Full payment or 50% advance is required before design begins.",
  },
];

/* ── Order Form ───────────────────────────────────────────────────── */
function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "Wedding Suite",
    date: "",
    qty: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi ZarqaCards,\n\nI would like to place an order.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Event: ${form.event}\n` +
        (form.date ? `Event Date: ${form.date}\n` : "") +
        (form.qty ? `Quantity: ${form.qty}\n` : "") +
        (form.message ? `\nMessage:\n${form.message}` : "")
    );
    window.open(`https://wa.me/923038705165?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "48px 40px",
          backgroundColor: "var(--brown-mid)",
          border: "0.5px solid var(--gold-primary)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "4px",
            height: "4px",
            backgroundColor: "var(--gold-primary)",
            transform: "rotate(45deg)",
            marginBottom: "8px",
          }}
        />
        <h3
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "28px",
            fontWeight: 300,
            color: "var(--cream-primary)",
            margin: 0,
          }}
        >
          WhatsApp Opened
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "12px",
            fontWeight: 300,
            color: "var(--cream-muted)",
            maxWidth: "320px",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Your message has been pre-filled. Send it on WhatsApp to begin your
          order. We respond within 2 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-ghost"
          style={{ marginTop: "8px" }}
        >
          SUBMIT ANOTHER
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "var(--brown-mid)",
        border: "0.5px solid var(--gold-primary)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "32px",
          fontWeight: 300,
          color: "var(--cream-primary)",
          marginBottom: "6px",
          lineHeight: 1,
        }}
      >
        Begin Your Order
      </h2>
      <p
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: "11px",
          fontWeight: 300,
          color: "var(--cream-muted)",
          marginBottom: "32px",
          lineHeight: 1.8,
        }}
      >
        Fill in the details below. Submitting opens WhatsApp with your message
        pre-filled — no backend, no waiting.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {/* Name */}
        <div>
          <label className="form-label" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-field"
            placeholder="E.g., Ali & Fatima"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Phone + Event */}
        <div className="form-row-2">
          <div>
            <label className="form-label" htmlFor="phone">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="form-field"
              placeholder="+92 3XX XXXXXXX"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="event">
              Event Type *
            </label>
            <select
              id="event"
              name="event"
              required
              className="form-field"
              value={form.event}
              onChange={handleChange}
            >
              <option>Wedding Suite</option>
              <option>Mehndi Card</option>
              <option>Walima Card</option>
              <option>Aqeeqa</option>
              <option>Birthday Invitation</option>
              <option>Custom Design</option>
            </select>
          </div>
        </div>

        {/* Date + Qty */}
        <div className="form-row-2">
          <div>
            <label className="form-label" htmlFor="date">
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-field"
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="qty">
              Card Quantity
            </label>
            <input
              type="number"
              id="qty"
              name="qty"
              className="form-field"
              placeholder="E.g., 200"
              min="1"
              value={form.qty}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="form-label" htmlFor="message">
            Vision & Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-field"
            placeholder="Describe the mood, colour palette, or any specific ideas for your card..."
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          style={{ width: "100%", border: "none", cursor: "pointer" }}
        >
          SEND VIA WHATSAPP
        </button>
      </form>
    </div>
  );
}

/* ── FAQ Accordion ────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {FAQS.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button
            className="faq-trigger"
            onClick={() => setOpen(open === idx ? null : idx)}
            style={{
              color:
                open === idx ? "var(--gold-bright)" : "var(--cream-primary)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "18px",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              {faq.q}
            </span>
            <span
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "16px",
                color: "var(--gold-dim)",
                flexShrink: 0,
              }}
            >
              {open === idx ? "−" : "+"}
            </span>
          </button>
          <div
            style={{
              maxHeight: open === idx ? "240px" : "0",
              overflow: "hidden",
              transition: "max-height 350ms ease",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "12px",
                fontWeight: 300,
                color: "var(--cream-muted)",
                lineHeight: 1.9,
                paddingBottom: "24px",
                margin: 0,
              }}
            >
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ContactPage() {
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
            WE RESPOND WITHIN 2 HOURS
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
              Place Your Order
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
              آرڈر کریں
            </p>
          </div>
        </div>
      </div>

      {/* ── Split Layout: Form + Info ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Order Form — 60% */}
          <div className="reveal" style={{ gridColumn: "span 1" }}>
            <OrderForm />
          </div>

          {/* Contact Info — 40% */}
          <div
            className="reveal reveal-delay-1"
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Direct contact panel */}
            <div
              style={{
                padding: "32px",
                backgroundColor: "var(--brown-mid)",
                border: "0.5px solid var(--brown-light)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold-dim)",
                  marginBottom: "20px",
                }}
              >
                DIRECT CONTACT
              </p>
              <a
                href="https://wa.me/923038705165"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "var(--gold-bright)",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                +92 303 870 5165
              </a>
              <div
                style={{
                  height: "0.5px",
                  backgroundColor: "var(--brown-light)",
                  marginBottom: "16px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontFamily: "var(--font-jost)",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                }}
              >
                <span>Rawalpindi, Pakistan</span>
                <span>Mon – Sat · 9am to 9pm</span>
                <span>hello@zarqacards.pk</span>
              </div>
              <div style={{ marginTop: "20px" }}>
                <a
                  href="https://wa.me/923038705165?text=Hi%20ZarqaCards%2C%20I%20want%20to%20order%20a%20card."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: "inline-block", padding: "10px 24px" }}
                >
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>

            {/* Urdu decorative element */}
            <div
              style={{
                textAlign: "center",
                padding: "24px",
                backgroundColor: "var(--brown-warm)",
                border: "0.5px solid var(--brown-light)",
              }}
            >
              <p
                dir="rtl"
                style={{
                  fontFamily: "var(--font-nastaliq)",
                  fontSize: "clamp(20px, 4vw, 28px)",
                  color: "var(--gold-dim)",
                  margin: 0,
                  lineHeight: 2,
                }}
              >
                زرقا کارڈز
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "9px",
                  fontWeight: 300,
                  letterSpacing: "0.3em",
                  color: "var(--cream-faint)",
                  textTransform: "uppercase",
                  margin: "8px 0 0",
                }}
              >
                PREMIUM INVITATION DESIGN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section
        style={{
          borderTop: "0.5px solid var(--brown-light)",
          backgroundColor: "var(--brown-mid)",
          padding: "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "48px" }}>
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
              COMMON QUESTIONS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                color: "var(--cream-primary)",
                margin: 0,
              }}
            >
              Frequently Asked
            </h2>
          </div>

          <div className="reveal reveal-delay-1">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ── Location Strip ── */}
      <section
        style={{
          borderTop: "0.5px solid var(--brown-light)",
          backgroundColor: "var(--brown-deep)",
          padding: "32px clamp(20px, 4vw, 80px)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "10px",
            fontWeight: 300,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            margin: 0,
          }}
        >
          ZarqaCards Studio &nbsp;·&nbsp; Rawalpindi, Punjab, Pakistan
          &nbsp;·&nbsp; Mon – Sat &nbsp;·&nbsp; 9am – 9pm
        </p>
      </section>
    </>
  );
}
