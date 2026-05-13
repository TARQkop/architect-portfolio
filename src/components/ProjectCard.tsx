import type { Project } from "../types";
import { S } from "../styles";

interface ProjectCardProps {
  project:  Project;
  index:    number;
  isActive: boolean;
  visible:  boolean;
  isMobile: boolean;
  onToggle: () => void;
}

export function ProjectCard({
  project,
  index,
  isActive,
  visible,
  isMobile,
  onToggle,
}: ProjectCardProps) {
  return (
    <article
      className="interactive-card"
      onClick={onToggle}
      style={{
        ...S.projectCard,
        ...(isMobile ? { padding: "1.35rem 1.2rem 1.15rem" } : {}),
        background: project.color,
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s ${0.05 * index}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Header row */}
      <div style={{ ...S.projectTop, ...(isMobile ? { gap: "1rem" } : {}) }}>
        <div>
          <p style={{ ...S.projectCat, color: project.accent }}>{project.category}</p>
          <h3 style={{ ...S.projectTitle, ...(isMobile ? { fontSize: "1.2rem" } : {}) }}>
            {project.title}
          </h3>
        </div>
        <div style={{ ...S.projectToggle, borderColor: project.accent, color: project.accent }}>
          {isActive ? "−" : "+"}
        </div>
      </div>

      {/* Meta */}
      <div style={{ ...S.projectMeta, ...(isMobile ? { flexWrap: "wrap" } : {}) }}>
        <span style={S.metaItem}>{project.year}</span>
        <span style={{ fontSize: "0.9rem", color: project.accent }}>·</span>
        <span style={S.metaItem}>{project.location}</span>
      </div>

      {/* Expandable content */}
      <div
        style={{
          maxHeight:  isActive ? (isMobile ? 420 : 300) : 0,
          overflow:   "hidden",
          transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <p style={S.projectDesc}>{project.description}</p>
        <div style={S.tagRow}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{ ...S.tag, color: project.accent, borderColor: project.accent }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Accent bar */}
      <div style={{ ...S.projectBar, background: project.accent }} />
    </article>
  );
}
