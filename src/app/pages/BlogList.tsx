import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../LangContext";
import { ui, posts } from "../data";

const PAGE_SIZE = 4;

export default function BlogList() {
  const { lang } = useLang();
  const t = ui[lang];
  const navigate = useNavigate();
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-[10px] text-accent-foreground tracking-widest">Blog</span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.allBlogs}</h1>
      </div>
      <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-14 ml-10">
        {posts.length} {lang === "en" ? "posts" : "件"}
      </p>

      <div className="flex flex-col divide-y divide-border">
        {shown.map(post => (
          <article
            key={post.slug}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="py-7 group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <time className="font-mono text-[10px] text-muted-foreground shrink-0 md:w-36">
                {post.date[lang]}
              </time>
              <span className="font-mono text-[9px] tracking-widest uppercase text-accent-foreground border border-accent-foreground/25 px-2 py-0.5 rounded-sm w-fit">
                {post.tag[lang]}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-medium text-sm group-hover:text-accent-foreground transition-colors mb-1">
                  {post.title[lang]}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt[lang]}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-muted-foreground group-hover:text-accent-foreground shrink-0 hidden md:block transition-colors"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        {hasMore ? (
          <button
            onClick={() => setVisible(v => v + PAGE_SIZE)}
            className="px-6 py-2.5 border border-border text-xs font-mono tracking-widest uppercase text-muted-foreground rounded-sm hover:text-foreground hover:border-foreground/20 transition-all"
          >
            {t.loadMore}
          </button>
        ) : (
          <p className="font-mono text-[10px] text-muted-foreground tracking-widest">{t.noMore}</p>
        )}
      </div>
    </div>
  );
}
