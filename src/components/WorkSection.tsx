import { useState } from "react";
import { S, animate } from "../styles";
import { useInView } from "../hooks";
import { PROJECTS, PROJECT_CATEGORIES } from "../data";
import type { ProjectCategory } from "../data";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const [ref, visible]        = useInView();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [filter, setFilter]     = useState<ProjectCategory>("All");

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleToggle = (id: number) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <section id="work" ref={ref} style={S.section}>
      <div style={S.container}>

        {/* Header */}
        <div style={{ ...S.sectionHeader, ...animate.fadeIn(visible) }}>
          <p style={S.eyebrow}>Selected Work</p>
          <h2 style={S.sectionTitle}>
            Projects that shape<br />the way we inhabit space.
          </h2>
        </div>

        {/* Filter pills */}
        <div style={{ ...S.filters, ...animate.fadeIn(visible, 0.1) }}>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{ ...S.filterBtn, ...(filter === cat ? S.filterBtnActive : {}) }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={S.projectsGrid}>
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeId === project.id}
              visible={visible}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
