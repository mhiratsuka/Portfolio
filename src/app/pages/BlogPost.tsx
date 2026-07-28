import { useParams, useNavigate } from "react-router";
import { useLang } from "../LangContext";
import { ui, posts } from "../data";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const t = ui[lang];
  const navigate = useNavigate();

  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-muted-foreground font-mono text-sm">Post not found.</p>
        <button onClick={() => navigate("/blog")} className="mt-6 text-xs font-mono text-accent-foreground underline">
          {t.back}
        </button>
      </div>
    );
  }

  const paragraphs = post.body[lang].split("\n\n");

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <button
        onClick={() => navigate("/blog")}
        className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12 block"
      >
        {t.back}
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-5">
          <time className="font-mono text-[10px] text-muted-foreground">{post.date[lang]}</time>
          <span className="font-mono text-[9px] tracking-widest uppercase text-accent-foreground border border-accent-foreground/25 px-2 py-0.5 rounded-sm">
            {post.tag[lang]}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">{post.title[lang]}</h1>
      </div>

      <div className="border-t border-border pt-10 space-y-5">
        {paragraphs.map((para, i) => {
          if (para.startsWith("**") && para.includes(".**")) {
            const boldEnd = para.indexOf(".**") + 3;
            const bold = para.slice(2, boldEnd - 3);
            const rest = para.slice(boldEnd);
            return (
              <p key={i} className="text-foreground leading-relaxed text-[15px]">
                <strong className="font-semibold">{bold}.</strong>
                {rest}
              </p>
            );
          }
          return (
            <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">
              {para}
            </p>
          );
        })}
      </div>
    </div>
  );
}
