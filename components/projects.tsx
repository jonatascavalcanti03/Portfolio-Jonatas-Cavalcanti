import { SectionHeader } from "./about"
import { ExternalLink, Github, FolderOpen, Code2, Rocket, Star, Zap } from "lucide-react"

const featuredProject = {
  title: "DevJobs — Plataforma de Vagas para Programadores",
  description:
    "Plataforma completa de vagas exclusivas para desenvolvedores. Conecta programadores as melhores empresas de tecnologia do Brasil, com busca inteligente, dashboard premium, candidatura em 1 clique, plano PRO via Stripe e painel para recrutadores.",
  techs: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js", "Framer Motion"],
  github: "https://github.com/jonatascavalcanti03/DevJobs-SaaS-Imersivo",
  live: "#",
  highlights: [
    "SaaS completo com monetizacao via Stripe",
    "Autenticacao segura com NextAuth.js",
    "Dashboard Premium para candidatos e recrutadores",
    "97.6% TypeScript — codigo tipado e escalavel",
  ],
}

const projects = [
  {
    title: "TechFlow",
    description:
      "Site de tecnologia com design glass-morphism, cards interativos com animacoes, rolagem suave e modo escuro. Trabalho academico com nota maxima.",
    techs: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    github: "https://github.com/jonatascavalcanti03/TechFlow",
    live: "https://jonatascavalcanti03.github.io/TechFlow/",
    number: "02",
    status: "concluido",
  },
  {
    title: "Controle Financeiro",
    description:
      "Aplicacao web para controle de receitas, despesas e orcamentos mensais com dashboard, filtros por categoria e persistencia de dados. Trabalho academico com nota maxima.",
    techs: ["Python", "Flask", "SQLite", "Bootstrap 5"],
    github: "https://github.com/jonatascavalcanti03/-projeto-financeiro",
    live: "#",
    number: "03",
    status: "concluido",
  },
  {
    title: "Brecho de Luxo",
    description:
      "Ecossistema SaaS para brechos online de luxo com experiencia de alta costura. Inclui checkout com Stripe, inventario atomico anti-double-sell e efeitos 3D.",
    techs: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    github: "https://github.com/jonatascavalcanti03/Brech-de-Luxo",
    live: "#",
    number: "04",
    status: "em desenvolvimento",
  },
  {
    title: "Kiwify Boost",
    description:
      "SaaS para afiliados Kiwify com dashboard de vendas, integracao com Facebook Ads e Google Ads, graficos interativos e exportacao de dados (PDF, PNG, CSV).",
    techs: ["JavaScript", "Node.js", "Express", "Chart.js", "Anime.js"],
    github: "https://github.com/jonatascavalcanti03/kiwify-boost",
    live: "#",
    number: "05",
    status: "em desenvolvimento",
  },
  {
    title: "AutoSound Pro",
    description:
      "Plataforma SaaS de audio automotivo com DSP em tempo real no navegador. Engine com latencia sub-10ms usando AudioWorklets e SharedArrayBuffers.",
    techs: ["Next.js", "TypeScript", "Web Audio API", "Tailwind CSS"],
    github: "https://github.com/jonatascavalcanti03/AutoSound-Pro",
    live: "#",
    number: "06",
    status: "em desenvolvimento",
  },
  {
    title: "Trilha Smart",
    description:
      "Plataforma educacional desenvolvida com Next.js. Projeto em fase inicial com potencial de crescimento e novas funcionalidades planejadas.",
    techs: ["Next.js", "JavaScript", "CSS", "React"],
    github: "https://github.com/jonatascavalcanti03/trilha-smart",
    live: "https://trilha-smart.vercel.app",
    number: "07",
    status: "em desenvolvimento",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader title="Projetos" subtitle="Meu trabalho" />

        {/* ===== FEATURED PROJECT — DevJobs ===== */}
        <article className="group relative mb-10 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/15">
          {/* Top gradient accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-primary to-purple-500" />

          <div className="grid gap-6 p-6 md:grid-cols-5 md:p-8">
            {/* Left content — 3 cols */}
            <div className="md:col-span-3">
              {/* Featured badge */}
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 shadow-sm shadow-primary/10">
                  <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Projeto em Destaque
                  </span>
                </div>
                <span className="font-mono text-4xl font-black text-border/60">01</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-mono text-2xl font-black text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {featuredProject.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {featuredProject.description}
              </p>

              {/* Highlights */}
              <div className="mb-6 grid gap-2 sm:grid-cols-2">
                {featuredProject.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2 rounded-lg border border-border/50 bg-secondary/50 px-3 py-2"
                  >
                    <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-xs leading-snug text-muted-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs font-medium text-primary transition-colors group-hover:border-primary/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side — links + visual accent — 2 cols */}
            <div className="flex flex-col items-center justify-center gap-4 md:col-span-2">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-purple-500/10 shadow-lg shadow-primary/5 transition-all group-hover:scale-105 group-hover:shadow-primary/20">
                <span className="text-5xl">🚀</span>
              </div>

              <div className="flex gap-3">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {featuredProject.live !== "#" && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* ===== OTHER PROJECTS GRID ===== */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Card top accent with gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-accent transition-all group-hover:h-1.5" />

              <div className="p-6">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <FolderOpen className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-3xl font-bold text-border/80 transition-colors group-hover:text-primary/20">
                      {project.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${project.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary hover:text-accent"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Status badge */}
                {project.status === "em desenvolvimento" ? (
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1">
                    <Code2 className="h-3 w-3 text-amber-400" />
                    <span className="text-xs font-medium text-amber-400">
                      Em desenvolvimento
                    </span>
                  </div>
                ) : (
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
                    <Rocket className="h-3 w-3 text-emerald-400" />
                    <span className="text-xs font-medium text-emerald-400">
                      Concluido
                    </span>
                  </div>
                )}

                {/* Content */}
                <h3 className="mb-3 font-mono text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs text-accent transition-colors group-hover:border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
