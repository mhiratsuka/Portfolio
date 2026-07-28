import { useNavigate } from "react-router";
import { Linkedin, Github} from "lucide-react";
import { useState } from "react";
import { useLang } from "../LangContext";
import { ui, skills, formId } from "../data";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const { lang } = useLang();
  const t = ui[lang];
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [formState, handleSubmit] = useForm(formId);

  return (
    <>
      {/* Hero */}
      <section id="hero" className="min-h-[calc(100vh-3.5rem)] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-28 md:py-36">
          <p className="font-mono text-xs text-accent-foreground tracking-[0.25em] uppercase mb-6">
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-5">
            {t.hero.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-9">
            {t.hero.role}
          </h2>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-6">
            {t.hero.description}
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 bg-foreground text-background text-xs font-mono tracking-widest uppercase rounded-sm hover:bg-foreground/85 transition-colors"
          >
            {t.hero.contact}
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader num="01" title={t.about.title} />
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 mt-14">
            <div className="md:col-span-3 space-y-5">
              <p className="text-muted-foreground leading-relaxed">{t.about.bio1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.bio2}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-foreground mb-5">
                {t.about.skills}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-border text-[11px] font-mono text-muted-foreground rounded-sm hover:border-accent-foreground/30 hover:text-foreground transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader num="02" title={t.contactTitle}/>
          <div className="mt-14 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-10 text-sm">{t.contactDesc}</p>
              {/* <div className="flex flex-col gap-5"> */}
              <div className="flex gap-5">

                <a href={t.github} className="flex items-center gap-3 text-xs font-mono text-muted-foreground hover:text-foreground group transition-colors">
                  <Github size={25} className="group-hover:text-accent-foreground transition-colors" />
                </a>
                <a href={t.linkedin} className="flex items-center gap-3 text-xs font-mono text-muted-foreground hover:text-foreground group transition-colors">
                  <Linkedin size={25} className="group-hover:text-accent-foreground transition-colors" />
                </a>
              </div>
            </div>

            {formState.succeeded ? (
                <div
                    role="status"
                    className="border border-border bg-card rounded-sm p-6"
                >
                    <p className="text-sm text-foreground leading-relaxed">
                    {t.form.success}
                    </p>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <Field label={t.form.name} htmlFor="contact-name">
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder={t.form.placeholders.name}
                        value={form.name}
                        onChange={e =>
                        setForm(current => ({
                            ...current,
                            name: e.target.value,
                        }))
                        }
                        required
                        autoComplete="name"
                        className="w-full bg-card border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent-foreground/40 transition-colors"
                    />

                    <ValidationError
                        field="name"
                        prefix={t.form.name}
                        errors={formState.errors}
                        className="mt-2 text-xs text-red-500"
                    />
                    </Field>

                    <Field label={t.form.email} htmlFor="contact-email">
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder={t.form.placeholders.email}
                        value={form.email}
                        onChange={e =>
                        setForm(current => ({
                            ...current,
                            email: e.target.value,
                        }))
                        }
                        required
                        autoComplete="email"
                        className="w-full bg-card border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent-foreground/40 transition-colors"
                    />

                    <ValidationError
                        field="email"
                        prefix={t.form.email}
                        errors={formState.errors}
                        className="mt-2 text-xs text-red-500"
                    />
                    </Field>

                    <Field label={t.form.message} htmlFor="contact-message">
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder={t.form.placeholders.message}
                        rows={5}
                        value={form.message}
                        onChange={e =>
                        setForm(current => ({
                            ...current,
                            message: e.target.value,
                        }))
                        }
                        required
                        className="w-full bg-card border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent-foreground/40 transition-colors resize-none"
                    />

                    <ValidationError
                        field="message"
                        prefix={t.form.message}
                        errors={formState.errors}
                        className="mt-2 text-xs text-red-500"
                    />
                    </Field>

                    <input
                        type="hidden"
                        name="subject"
                        value="New message from Michika Hiratsuka's portfolio"
                    />

                    <ValidationError
                        errors={formState.errors}
                        className="text-xs text-red-500"
                    />

                    <button
                        type="submit"
                        disabled={formState.submitting}
                        className="self-start px-6 py-2.5 bg-foreground text-background text-xs font-mono tracking-widest uppercase rounded-sm hover:bg-foreground/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        {formState.submitting ? t.form.sending : t.form.send}
                    </button>
                </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ title, subtitle }: { num?: string; title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mt-2">{subtitle}</p>
      )}
    </div>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label
       htmlFor={htmlFor}
       className="block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
            {label}
      </label>
      {children}
    </div>
  );
}
