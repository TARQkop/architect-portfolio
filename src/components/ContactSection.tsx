import { useState } from "react";
import type { ChangeEvent } from "react";
import { S, TOKEN, animate } from "../styles";
import { useInView } from "../hooks";
import type { FormState } from "../types";

const PROJECT_OPTIONS = [
  "Residential",
  "Commercial",
  "Cultural",
  "Hospitality",
  "Renovation",
  "Other",
] as const;

const INITIAL_FORM: FormState = { name: "", email: "", project: "", message: "" };

export function ContactSection() {
  const [ref, visible] = useInView();
  const [form, setForm]  = useState<FormState>(INITIAL_FORM);
  const [sent, setSent]  = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) return;
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} style={S.sectionTinted}>
      <div style={{ ...S.container, maxWidth: 680 }}>

        {/* Header */}
        <div style={{ ...S.sectionHeader, ...animate.fadeIn(visible) }}>
          <p style={S.eyebrow}>Contact</p>
          <h2 style={S.sectionTitle}>
            Start a conversation<br />about your project.
          </h2>
          <p style={{ ...S.bodyText, marginTop: "1rem" }}>
            Whether you have a brief, a site, or just a feeling — I&apos;d love to hear from you.
          </p>
        </div>

        {sent ? (
          <ThankYou name={form.name} />
        ) : (
          <div style={{ ...S.contactForm, ...animate.fadeIn(visible, 0.1) }}>

            {/* Name + Email */}
            <div style={S.formRow}>
              <div style={S.formGroup}>
                <label style={S.label}>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={S.input}
                />
              </div>
              <div style={S.formGroup}>
                <label style={S.label}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={S.input}
                />
              </div>
            </div>

            {/* Project type */}
            <div style={S.formGroup}>
              <label style={S.label}>Project Type</label>
              <select
                name="project"
                value={form.project}
                onChange={handleChange}
                style={S.input}
              >
                <option value="">Select a category</option>
                {PROJECT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={S.formGroup}>
              <label style={S.label}>Tell me about your project</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="A few words about the space, the site, the feeling you're after…"
                style={{ ...S.input, resize: "vertical" }}
              />
            </div>

            <button onClick={handleSubmit} style={S.submitBtn}>
              Send Message <span style={{ marginLeft: 8 }}>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Thank-you confirmation ────────────────────────────────────────────────────

interface ThankYouProps {
  name: string;
}

function ThankYou({ name }: ThankYouProps) {
  return (
    <div style={S.thankYou}>
      <span style={{ fontSize: "2rem" }}>✦</span>
      <h3
        style={{
          fontFamily: TOKEN.serif,
          fontSize:   "1.5rem",
          color:      TOKEN.brown,
          margin:     "1rem 0 0.5rem",
        }}
      >
        Thank you, {name}.
      </h3>
      <p style={{ color: TOKEN.brownLight, fontSize: "0.95rem" }}>
        I&apos;ll be in touch within 48 hours.
      </p>
    </div>
  );
}
