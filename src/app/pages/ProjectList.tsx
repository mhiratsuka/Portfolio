import { ExternalLink, Github } from "lucide-react";
import { useLang } from "../LangContext";
import { ui, projects } from "../data";

export default function ProjectList() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Title */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t.allProjects}
        </h2>
      </div>

      {/* Project List */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="
              grid
              md:grid-cols-[0.75fr_1.25fr]
              gap-8
              md:gap-12
              py-12
            "
          >
            {/* Left: Project Image */}
            <div className="overflow-hidden rounded-sm bg-card self-start">
							<img
								src={project.image}
								alt={project.name}
								className="
								w-full
								aspect-[16/10]
								object-cover
								"
							/>
            </div>

            {/* Right: Project Information */}
            <div className="flex flex-col justify-center">
              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
                {project.name}
              </h3>

              {/* Project Type */}
              <p className="text-sm text-muted-foreground mb-5">
                {project.type}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description[lang]}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <span className="text-sm font-semibold">
                  Tech Stack:
                </span>

                <span className="text-sm text-muted-foreground ml-2">
                  {project.tech}
                </span>
              </div>

              {/* GitHub - Public Repository */}
              {project.github && !project.privateRepo && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold">
                    GitHub:
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-sm
                      text-muted-foreground
                      hover:text-foreground
                      transition-colors
                    "
                  >
                    <Github size={14} />
                    Repository
                  </a>
                </div>
              )}

              {/* GitHub - Private Repository */}
              {project.privateRepo && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold">
                    GitHub:
                  </span>

                  <span className="text-sm text-muted-foreground">
                    Private repository — available upon request
                  </span>
                </div>
              )}

              {/* Deployed Site */}
              {project.link && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    Deployed Site:
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-sm
                      text-muted-foreground
                      hover:text-foreground
                      transition-colors
                    "
                  >
                    <ExternalLink size={14} />
                    View Site
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
