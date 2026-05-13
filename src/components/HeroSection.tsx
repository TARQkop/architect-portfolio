import { S, animate } from "../styles";
import { useInView } from "../hooks";
import { HeroIllustration } from "./HeroIllustration";

export function HeroSection() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="hero" ref={ref} style={S.hero}>
      <div style={S.heroGrid}>

        {/* Text column */}
        <div style={animate.fadeIn(visible, 0, "y", 40)}>
          <p style={S.heroEyebrow}>Architectural Designer · Paris &amp; Beyond</p>

          <h1 style={S.heroTitle}>
            Spaces that hold <em style={S.heroEm}>light</em>,<br />
            time, and memory.
          </h1>

          <p style={S.heroBody}>
            I design buildings and interiors that are deeply rooted in place, material,
            and human experience. Each project begins with a question:{" "}
            <em>what does this space want to feel like?</em>
          </p>

          <div style={S.heroActions}>
            <a href="#work"  style={S.primaryBtn}>View Selected Work</a>
            <a href="#about" style={S.ghostBtn}>About Me</a>
          </div>
        </div>

        {/* Visual column */}
        <div style={{ ...animate.fadeIn(visible, 0.2, "y", 60), position: "relative" }}>
          <HeroIllustration />

          <div style={S.heroStat}>
            <span style={S.heroStatNum}>12+</span>
            <span style={S.heroStatLabel}>Years of Practice</span>
          </div>

          <div style={{ ...S.heroStat, bottom: "4rem", right: "-2rem", left: "auto" }}>
            <span style={S.heroStatNum}>38</span>
            <span style={S.heroStatLabel}>Projects Built</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={S.scrollHint}>
        <span style={S.scrollLine} />
        <span style={S.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
