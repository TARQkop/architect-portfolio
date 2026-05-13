import { S, animate } from "../styles";
import { useInView, useIsMobile } from "../hooks";
import { HeroIllustration } from "./HeroIllustration";

export function HeroSection() {
  const [ref, visible] = useInView(0.05);
  const isMobile = useIsMobile();
  const heroStatStyle = isMobile
    ? { position: "static" as const, padding: "0.85rem 1rem", minWidth: 0 }
    : {};

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        ...S.hero,
        ...(isMobile
          ? { minHeight: "auto", padding: "6.5rem 1.25rem 3rem" }
          : {}),
      }}
    >
      <div
        style={{
          ...S.heroGrid,
          ...(isMobile ? { gridTemplateColumns: "1fr", gap: "2.5rem" } : {}),
        }}
      >
        {/* Text column */}
        <div style={animate.fadeIn(visible, 0, "y", 40)}>
          <p style={S.heroEyebrow}>Architectural Designer - Paris &amp; Beyond</p>

          <h1
            style={{
              ...S.heroTitle,
              ...(isMobile ? { fontSize: "2.35rem" } : {}),
            }}
          >
            Spaces that hold <em style={S.heroEm}>light</em>,<br />
            time, and memory.
          </h1>

          <p style={{ ...S.heroBody, ...(isMobile ? { fontSize: "1rem" } : {}) }}>
            I design buildings and interiors that are deeply rooted in place, material,
            and human experience. Each project begins with a question:{" "}
            <em>what does this space want to feel like?</em>
          </p>

          <div style={S.heroActions}>
            <a href="#work" className="hero-btn hero-btn-primary" style={S.primaryBtn}>
              View Selected Work
            </a>
            <a href="#about" className="hero-btn hero-btn-ghost" style={S.ghostBtn}>
              About Me
            </a>
          </div>
        </div>

        {/* Visual column */}
        <div
          style={{
            ...animate.fadeIn(visible, 0.2, "y", 60),
            position: "relative",
            ...(isMobile ? { maxWidth: 420, width: "100%", margin: "0 auto" } : {}),
          }}
        >
          <HeroIllustration />

          <div
            style={
              isMobile
                ? {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "0.75rem",
                    marginTop: "0.9rem",
                  }
                : undefined
            }
          >
            <div style={{ ...S.heroStat, ...heroStatStyle }}>
              <span style={S.heroStatNum}>12+</span>
              <span style={S.heroStatLabel}>Years of Practice</span>
            </div>

            <div
              style={{
                ...S.heroStat,
                bottom: "4rem",
                right: "-2rem",
                left: "auto",
                ...heroStatStyle,
              }}
            >
              <span style={S.heroStatNum}>38</span>
              <span style={S.heroStatLabel}>Projects Built</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ ...S.scrollHint, ...(isMobile ? { marginTop: "2.5rem" } : {}) }}>
        <span style={S.scrollLine} />
        <span style={S.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
