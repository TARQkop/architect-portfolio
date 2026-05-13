import { S, animate } from "../styles";
import { useInView } from "../hooks";
import { SERVICES } from "../data";

export function ServicesSection() {
  const [ref, visible] = useInView();

  return (
    <section id="services" ref={ref} style={S.section}>
      <div style={S.container}>

        {/* Header */}
        <div style={{ ...S.sectionHeader, ...animate.fadeIn(visible) }}>
          <p style={S.eyebrow}>Services</p>
          <h2 style={S.sectionTitle}>
            How I can<br />work with you.
          </h2>
        </div>

        {/* Cards */}
        <div style={S.servicesGrid}>
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              style={{ ...S.serviceCard, ...animate.fadeIn(visible, 0.08 * i) }}
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
