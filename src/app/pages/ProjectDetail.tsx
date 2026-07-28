import { useParams, useNavigate } from "react-router";
import { ExternalLink, Github } from "lucide-react";
import { useLang } from "../LangContext";
import { ui, projects } from "../data";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const t = ui[lang];
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);
  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-muted-foreground font-mono text-sm">Project not found.</p>
        <button onClick={() => navigate("/projects")} className="mt-6 text-xs font-mono text-accent-foreground underline">
          {t.back}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <button
        onClick={() => navigate("/projects")}
        className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12 block"
      >
        {t.back}
      </button>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{project.name}</h1>
        <p className="font-mono text-xs text-accent-foreground tracking-wide">{project.tech}</p>
      </div>

      <div className="border-t border-border pt-10">
        <p className="text-muted-foreground leading-relaxed text-[15px] mb-10">
          {project.detail[lang]}
        </p>

        <div className="flex gap-4">
          <a
            href={project.link}
            className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs font-mono tracking-widest uppercase rounded-sm hover:bg-foreground/85 transition-colors"
          >
            <ExternalLink size={12} />
            {t.viewProject}
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-xs font-mono tracking-widest uppercase text-muted-foreground rounded-sm hover:text-foreground hover:border-foreground/20 transition-all"
          >
            <Github size={12} />
            {t.sourceCode}
          </a>
        </div>
      </div>
    </div>
  );
}
