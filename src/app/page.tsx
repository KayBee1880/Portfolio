import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  FileText,
  Sparkles,
  Shield,
  Cloud,
  Code2,
  BarChart3,
  Timer,
  Database,
  ShieldCheck,
  Briefcase,
  Wrench,
} from "lucide-react";

import { featuredProjects } from "@/data/projects";
import { featuredExperience } from "@/data/experience";
import { skills } from "@/data/skills";

import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ThemeToggle } from "@/components/ThemeToggle";

const profile = {
  name: "Kwaku Boateng",
  headline: "Software Engineer • Cloud • Cybersecurity",
  summary:
    "I build reliable backend systems, ship cloud infrastructure, and conduct security-focused analysis to reduce real-world risk. I care about measurable impact, clean system design, and engineering discipline.",
  links: {
    github: "https://github.com/KayBee1880",
    linkedin: "https://linkedin.com/in/kboateng18",
    resume: "/resume.pdf",
    email: "boatengkwaku1965@gmail.com",
  },
};

function SectionTitle({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900/5 text-zinc-900 dark:bg-white/10 dark:text-white">
            {icon}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-white/65 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 shadow-sm hover:bg-zinc-50
                    dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:bg-white/10">
      <span className="opacity-90">{icon}</span>
      <span className="opacity-95">{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#070A0F] dark:text-white">
      {/* LIGHT background (premium, not plain) */}
      <div className="pointer-events-none fixed inset-0 -z-10 dark:hidden">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-56 left-1/3 h-[560px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05),transparent_55%)]" />
      </div>

      {/* DARK background (your signature look) */}
      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-56 left-1/3 h-[560px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/75 backdrop-blur
                         dark:border-white/10 dark:bg-black/45">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {profile.name}
          </div>

          <nav className="hidden gap-8 text-base font-medium text-zinc-700 md:flex dark:text-white/80">
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={profile.links.resume}
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-zinc-800
                         dark:bg-white dark:text-black dark:hover:bg-zinc-100"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm
                            dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none">
              <Sparkles className="h-4 w-4" />
              Hybrid portfolio: SWE + Cloud + Security
            </div>

            <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-zinc-950 dark:text-white">Building systems that are </span>
              <span className="bg-gradient-to-r from-blue-600 via-zinc-950 to-emerald-600 bg-clip-text text-transparent
                               dark:from-blue-300 dark:via-white dark:to-emerald-200">
                fast, reliable, and secure
              </span>
              <span className="text-zinc-950 dark:text-white">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-white/75">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Pill icon={<Code2 className="h-4 w-4" />} label="Backend + APIs" />
              <Pill icon={<Cloud className="h-4 w-4" />} label="Cloud + Terraform" />
              <Pill icon={<Shield className="h-4 w-4" />} label="SIEM + Threat Hunting" />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={profile.links.github}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800
                           dark:bg-white dark:text-black dark:hover:bg-zinc-100"
              >
                <Github className="h-4 w-4" />
                GitHub <ArrowUpRight className="h-4 w-4 opacity-70" />
              </a>

              <a
                href={profile.links.linkedin}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50
                           dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn <ArrowUpRight className="h-4 w-4 opacity-70" />
              </a>

              <a
                href={`mailto:${profile.links.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50
                           dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          {/* At a glance tile (pretty in both modes) */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.18)]
                          dark:border-white/10 dark:bg-white/5 dark:backdrop-blur dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-2xl
                            dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)]" />
            <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] blur-2xl
                            dark:bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_60%)]" />

            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-white/60">
                At a glance
              </div>
              <div className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">
                Impact + focus areas
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { icon: <BarChart3 className="h-5 w-5" />, label: "Users impacted", value: "10K+ (data systems)" },
                  { icon: <Timer className="h-5 w-5" />, label: "Infra automation", value: "Setup time -45%" },
                  { icon: <Database className="h-5 w-5" />, label: "Reliability", value: "DB downtime -80%" },
                  { icon: <ShieldCheck className="h-5 w-5" />, label: "Security", value: "Threat hunting + SIEM" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4
                               dark:border-white/10 dark:bg-black/25"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-zinc-900 shadow-sm
                                    dark:bg-white/10 dark:text-white dark:shadow-none">
                      {m.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-zinc-500 dark:text-white/60">{m.label}</div>
                      <div className="mt-1 text-sm font-semibold text-zinc-950 dark:text-white">
                        {m.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm
                              dark:border-white/10 dark:bg-black/25 dark:shadow-none">
                <div className="text-xs text-zinc-500 dark:text-white/60">Quick links</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/projects"
                    className="rounded-xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800
                               dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                  >
                    View all projects
                  </a>
                  <a
                    href="/experience"
                    className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-50
                               dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    View all experience
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main canvas */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-[0_40px_110px_-50px_rgba(0,0,0,0.16)] md:p-12
                        dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl dark:shadow-[0_40px_110px_-50px_rgba(0,0,0,0.9)]">


          {/* Experience */}
          <section id="experience" className="mb-20">
            <SectionTitle
              title="Experience"
              subtitle="Featured roles and professional programs"
              icon={<Briefcase className="h-5 w-5" />}
            />
            <div className="space-y-8">
              {featuredExperience.map((exp) => (
                <ExperienceCard key={exp.id} item={exp} />
              ))}
            </div>
            <div className="mt-8">
              <a className="text-sm font-semibold text-zinc-900 hover:underline dark:text-white" href="/experience">
                Browse all experience →
              </a>
            </div>
          </section>

          <div className="my-20 h-px w-full bg-zinc-200 dark:bg-white/15" />

          {/* Projects */}
          <section id="projects" className="mb-20">
            <SectionTitle
              title="Projects"
              subtitle="Featured work across SWE, cloud, and security"
              icon={<Code2 className="h-5 w-5" />}
            />
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.slice(0, 6).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-8">
              <a className="text-sm font-semibold text-zinc-900 hover:underline dark:text-white" href="/projects">
                Browse all projects →
              </a>
            </div>
          </section>

          <div className="my-20 h-px w-full bg-zinc-200 dark:bg-white/15" />

          {/* Skills */}
          <section id="skills">
            <SectionTitle
              title="Skills"
              subtitle="Tools and technologies"
              icon={<Wrench className="h-5 w-5" />}
            />
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                             dark:border-white/10 dark:bg-white/5 dark:backdrop-blur dark:hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {group}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700
                                   dark:border-white/10 dark:bg-black/20 dark:text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ================= CONTACT ================= */}
            <div id="contact" className="mt-20">
              <SectionTitle
                title="Contact"
                subtitle="Send a message or leave your email — I’ll get back to you."
                icon={<Mail className="h-5 w-5" />}
              />

              <div className="grid gap-6 md:grid-cols-2">
                {/* Left info card */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                    dark:border-white/10 dark:bg-white/5 dark:backdrop-blur">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    Let’s connect
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-white/70">
                    If you’re recruiting, collaborating, or want to talk engineering, drop a note here.
                    I reply fastest by email.
                  </p>

                  <div className="mt-4 text-sm text-zinc-600 dark:text-white/70">
                    Or email me directly:{" "}
                    <a
                      className="font-semibold text-zinc-900 hover:underline dark:text-white"
                      href="mailto:boatengkwaku1965@gmail.com"
                    >
                      boatengkwaku1965@gmail.com
                    </a>
                  </div>
                </div>

                {/* Formspree form */}
                <form
                  action="https://formspree.io/f/mwvvedee"
                  method="POST"
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur"
                >
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm
                   text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400
                   dark:border-white/10 dark:bg-black/20 dark:text-white
                   dark:placeholder:text-white/40 dark:focus:border-white/25"
                  />

                  <label className="mt-4 block text-sm font-semibold text-zinc-900 dark:text-white">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm
                   text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400
                   dark:border-white/10 dark:bg-black/20 dark:text-white
                   dark:placeholder:text-white/40 dark:focus:border-white/25"
                  />

                  <label className="mt-4 block text-sm font-semibold text-zinc-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="What would you like to talk about?"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm
                   text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400
                   dark:border-white/10 dark:bg-black/20 dark:text-white
                   dark:placeholder:text-white/40 dark:focus:border-white/25"
                  />

                  {/* Optional redirect after submit */}
                  <input type="hidden" name="_redirect" value="#contact" />

                  <button
                    type="submit"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl
                   bg-zinc-900 px-4 py-3 text-sm font-bold text-white hover:bg-zinc-800
                   dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                  >
                    Send message
                  </button>

                  <p className="mt-3 text-xs text-zinc-500 dark:text-white/50">
                    By submitting, you consent to being contacted back regarding your message.
                  </p>
                </form>
              </div>
            </div>


            <footer className="mt-16 text-center text-xs text-zinc-500 dark:text-white/50">
              © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}
