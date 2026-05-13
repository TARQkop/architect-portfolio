import { S, animate } from "../styles";
import { useInView } from "../hooks";
import { AboutIllustration } from "./AboutIllustration";

const STATS = [
  { num: "12+", label: "Years"     },
  { num: "38",  label: "Projects"  },
  { num: "4",   label: "Countries" },
] as const;

export function AboutSection() {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} style={S.sectionDark}>
      <div style={{ ...S.container, ...S.aboutGrid }}>

        {/* Illustration */}
        <div style={animate.fadeIn(visible, 0, "x", -40)}>
          <AboutIllustration />
        </div>

        {/* Text */}
        <div style={animate.fadeIn(visible, 0.15, "x", 40)}>
          <p style={S.eyebrowLight}>About</p>

          <h2 style={S.sectionTitleLight}>
            Architecture as a<br />form of listening.
          </h2>

          <p style={{ ...S.bodyTextLight, marginTop: "1.5rem" }}>
            I&apos;m Layla Hassan — an architect based between Paris and Beirut with over twelve years
            of practice across Europe, the Middle East, and East Asia. My work is defined by a
            reverence for material, context, and the people who will ultimately call a space their own.
          </p>

          <p style={{ ...S.bodyTextLight, marginTop: "1rem" }}>
            Before founding my studio, I collaborated with Kengo Kuma in Tokyo and Lacaton &amp; Vassal
            in Paris. I hold a Master of Architecture from the École des Beaux-Arts and a postgraduate
            diploma in Sustainable Heritage from UCL.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem" }}>
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <p style={S.aboutStatNum}>{num}</p>
                <p style={S.aboutStatLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
