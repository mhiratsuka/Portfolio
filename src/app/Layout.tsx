import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "./LangContext";
import { ui } from "./data";

const NAV_LINKS = ["about", "contact"] as const;

export default function Layout() {
  const { lang, setLang } = useLang();
  const t = ui[lang];
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const handleNavClick = (key: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
          scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
            aria-label="Home"
          >
            <span className="text-accent-foreground font-mono text-xs font-semibold tracking-[0.2em] uppercase">MH</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(key => {
              const active = false;
              return (
                <button
                  key={key}
                  onClick={() => handleNavClick(key)}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors ${
                    active ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.nav[key]}
                </button>
              );
            })}
            <button
              onClick={() => setLang(lang === "en" ? "ja" : "en")}
              className="ml-2 px-3 py-1.5 border border-border rounded-sm text-[10px] font-mono tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
            >
              {lang === "en" ? "Japanese" : "English"}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ja" : "en")}
              className="px-2.5 py-1 border border-border rounded-sm text-[10px] font-mono text-muted-foreground"
            >
              {lang === "en" ? "JA" : "EN"}
            </button>
            <button onClick={() => setMenuOpen(o => !o)} className="p-1" aria-label="Toggle menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map(key => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className="text-left text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-0.5"
              >
                {t.nav[key]}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-14">
        <Outlet />
      </main>
      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="font-mono text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.built}
            </p>
        </div>
      </footer>
    </div>
  );
}
