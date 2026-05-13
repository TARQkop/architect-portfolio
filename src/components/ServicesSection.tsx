import { S, animate } from "../styles";
import { useInView, useIsMobile } from "../hooks";
import { SERVICES } from "../data";

export function ServicesSection() {
  const [ref, visible] = useInView();
  const isMobile = useIsMobile();

  return (
    <section
      id="services"
      ref={ref}
      style={{ ...S.section, ...(isMobile ? { padding: "4.5rem 1.25rem" } : {}) }}
    >
      <div style={S.container}>

        {/* Header */}
        <div style={{ ...S.sectionHeader, ...animate.fadeIn(visible) }}>
          <p style={S.eyebrow}>Services</p>
          <h2 style={{ ...S.sectionTitle, ...(isMobile ? { fontSize: "2rem" } : {}) }}>
            How I can<br />work with you.
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            ...S.servicesGrid,
            ...(isMobile
              ? { gridTemplateColumns: "minmax(0, 1fr)", gap: "1rem", marginTop: "2rem" }
              : {}),
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              style={{
                ...S.serviceCard,
                ...(isMobile ? { padding: "1.6rem 1.25rem" } : {}),
                ...animate.fadeIn(visible, 0.08 * i),
              }}
            >
              <span style={S.serviceIcon} aria-hidden="true">{service.icon}</span>
              <h3 style={S.serviceTitle}>{service.title}</h3>
              <p style={S.serviceDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
