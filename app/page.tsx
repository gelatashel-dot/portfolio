// app/page.tsx
import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2,
  Code2, Database, Github, Globe2, Linkedin, Mail, Network,
  Server, Workflow, MapPin, ExternalLink
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { getHomeData } from "@/lib/store";
import type { IconName } from "@/lib/home-data";

// always render the latest admin edits (no stale cache)
export const dynamic = "force-dynamic";

// map the serializable icon names stored in JSON → lucide components
const ICONS = {
  Database, Workflow, Code2, Network, Server, Globe2, BriefcaseBusiness,
} satisfies Record<IconName, unknown>;

const iconFor = (name: IconName) => ICONS[name] ?? Database;

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

export default async function Home() {
  const { hero, about, projects, skills, experience, contact } = await getHomeData();

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    "Professional Opportunity"
  )}`;

  return (
    <main>
      <SiteHeader />

      <section id="home" className="relative overflow-hidden pb-24 pt-20 sm:pt-28">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-sky/10 blur-[120px]" />

        <div className="container grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/[.07] px-3 py-2 text-[11px] font-semibold text-mint">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
              {hero.available
                ? "OPEN TO PROFESSIONAL OPPORTUNITIES"
                : "CURRENTLY UNAVAILABLE"}
            </div>

            <div className="eyebrow mb-5">
              IT • ERP • SOFTWARE DEVELOPMENT
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-[72px]">
              Technology that <span className="gradient-text">works for</span> business.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m{" "}
              <strong className="font-semibold text-white">{hero.name}</strong>{" "}
              — {hero.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a className="btn-secondary" href="#contact">
                Get in touch <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-mint" /> {hero.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness size={14} className="text-mint" /> IT Support & ERP
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 size={14} className="text-mint" /> Freelance projects
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-mint/15 to-sky/10 blur-2xl" />

            <div className="glass relative rounded-[28px] p-7 shadow-glow">
              <div className="flex items-center justify-between">
                <span className="eyebrow">PROFILE / {new Date().getFullYear()}</span>
                <span className="rounded-full border border-mint/30 px-2.5 py-1 text-[10px] text-mint">
                  {hero.available ? "AVAILABLE" : "BUSY"}
                </span>
              </div>

              {/* GELETA PROFILE IMAGE — path is editable from /admin/home */}
              <Image
                src="/images/geleta.jpg"
                alt={`${hero.name} profile`}
                width={250}
                height={250}
                unoptimized
                className="mt-9 h-24 w-24 rounded-3xl border border-mint/30 object-cover shadow-lg"
              />

              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                {hero.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {hero.role}
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">4+</div>
                  <div className="mt-1 text-[11px] text-slate-500">Years in IT support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{skills.length}</div>
                  <div className="mt-1 text-[11px] text-slate-500">Core focus areas</div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {hero.highlights.map((h) => (
                  <Pill key={h}>{h}</Pill>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-7 hidden items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3 shadow-xl sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/10 text-mint">
                <CheckCircle2 size={18} />
              </span>
              <span>
                <span className="block text-xs font-bold">Practical problem solver</span>
                <span className="mt-1 block text-[10px] text-slate-500">Support · Systems · Delivery</span>
              </span>
            </div>
          </div>
        </div>

        <div className="container mt-20 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-slate-600">
          <span className="h-px w-10 bg-slate-700" /> Scroll to explore <ArrowDown size={13} />
        </div>
      </section>

      <section id="about" className="section border-t border-white/[.06]">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="01 / About me" title="Connecting IT operations with business needs." />
          </div>

          <div className="pt-1">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "text-lg leading-9 text-slate-300" : "muted mt-6 text-sm leading-8"}
              >
                {p}
              </p>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <div className="eyebrow mb-2">Education</div>
                <div className="font-semibold">{about.education}</div>
                <p className="muted mt-2 text-xs">{about.educationSchool}</p>
              </div>

              <div className="card p-5">
                <div className="eyebrow mb-2">Professional focus</div>
                <div className="font-semibold">{about.focus}</div>
                <p className="muted mt-2 text-xs">{about.focusDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section border-y border-white/[.06] bg-[#0b1220]">
        <div className="container">
          <SectionHeading
            eyebrow="02 / Expertise"
            title="Tools I use to solve problems."
            description="A practical mix of enterprise systems, development technologies and infrastructure support."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => {
              const Icon = iconFor(group.icon);
              return (
                <div key={group.title} className="card transition-card p-6 sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint/10 text-mint">
                      <Icon size={19} />
                    </span>
                    <h3 className="font-bold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="03 / Selected work"
            title="Projects & practical experience."
            description="A selection of professional focus areas and project work. Individual case studies and public repositories can be linked here as they are published."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => {
              const Icon = iconFor(project.icon);
              return (
                <article key={project.number} className="card transition-card group p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">{project.type}</span>
                    <span className="text-xs text-slate-600">{project.number}</span>
                  </div>

                  <div className="mt-7 grid h-12 w-12 place-items-center rounded-2xl border border-mint/20 bg-mint/[.08] text-mint">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="muted mt-3 min-h-[72px] text-sm leading-7">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-mint">
                    Professional focus
                    <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section border-y border-white/[.06] bg-[#0b1220]">
        <div className="container">
          <SectionHeading
            eyebrow="04 / Experience"
            title="Where I make an impact."
            description="Professional experience across enterprise IT support and independent software projects."
          />

          <div className="relative ml-2 border-l border-line pl-8">
            {experience.map((item) => (
              <div key={item.role} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-mint bg-ink shadow-[0_0_18px_rgba(110,231,194,.5)]" />

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold">{item.role}</h3>
                    <p className="mt-1 text-sm text-mint">{item.company}</p>
                  </div>

                  <span className="rounded-full border border-line px-3 py-1.5 text-[11px] text-slate-400">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <CheckCircle2 size={15} className="mt-1.5 shrink-0 text-mint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeading
            eyebrow="05 / Learning"
            title="Always building the next skill."
            description="Continuously developing practical capabilities through professional learning and hands-on projects."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["AWS", "Cloud fundamentals and services"],
              ["Docker", "Containerization fundamentals"],
              ["Meta", "Full-stack development learning"],
              ["Microsoft Dynamics", "D365FO functional and technical learning"],
            ].map(([name, detail]) => (
              <div key={name} className="card flex items-start gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky/10 text-sky">
                  <CheckCircle2 size={18} />
                </span>

                <span>
                  <strong className="block text-sm">{name}</strong>
                  <span className="muted mt-1 block text-xs leading-5">{detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24 pt-8">
        <div className="container">
          <div className="relative overflow-hidden rounded-[28px] border border-mint/20 bg-gradient-to-br from-[#122438] via-[#101c2b] to-[#0c1523] p-8 sm:p-14">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-mint/10 blur-[90px]" />

            <div className="relative max-w-2xl">
              <div className="eyebrow mb-5">06 / Contact</div>

              <h2 className="section-title">
                Have a project or opportunity in mind?
              </h2>

              <p className="muted mt-5 text-sm leading-7">
                I&apos;m open to IT support, ERP consulting, Odoo development and full-stack opportunities. Let&apos;s connect and discuss how I can contribute.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-primary" href={mailto}>
                  <Mail size={16} /> Email me
                </a>

                <a
                  className="btn-secondary"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={15} /> LinkedIn <ExternalLink size={12} />
                </a>

                <a
                  className="btn-secondary"
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} /> GitHub <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[.07] py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} {hero.name}. Built with Next.js.
          </div>

          <div className="flex gap-5 text-xs text-slate-500">
            <a className="hover:text-mint" href="#home">Back to top ↑</a>
            <a className="hover:text-mint" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}