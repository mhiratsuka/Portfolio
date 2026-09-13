import { ExternalLink, Github } from "lucide-react";
import { useLang } from "../LangContext";
import { ui, projects } from "../data";

export default function ProjectList() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex items-baseline gap-4 mb-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t.allProjects}
        </h1>
      </div>

      <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-14 ml-10">
        {projects.length} {lang === "en" ? "projects" : "件"}
      </p>

      <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-background p-8 hover:bg-card transition-colors group"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base font-semibold group-hover:text-accent-foreground transition-colors">
                  {project.name}
                </h2>

                <span className="font-mono text-[10px] text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={14} />
                  </a>
                )}

                {project.privateRepo && (
                  <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">
                    Private repository — available upon request
                  </span>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="font-mono text-[10px] text-accent-foreground mb-3 tracking-wide">
              {project.tech}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description[lang]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
