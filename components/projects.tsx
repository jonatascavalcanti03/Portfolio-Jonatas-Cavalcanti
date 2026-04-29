import { SectionHeader } from "./about"
import { ExternalLink, Github, FolderOpen, Code2 } from "lucide-react"

const projects = [
  {
    title: "DevJobs - SaaS Imersivo",
    description:
      "Plataforma SaaS completa para vagas de emprego na area de tecnologia. Interface moderna com dashboard, sistema de busca avancado e experiencia imersiva.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jonatascavalcanti03/DevJobs-SaaS-Imersivo",
    live: "#",
    number: "01",
    featured: true,
  },
  {
    title: "TechFlow",
    description:
      "Aplicacao web moderna com foco em fluxo de trabalho e produtividade. Design limpo e funcionalidades intuitivas para gestao de tarefas.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jonatascavalcanti03/TechFlow",
    live: "#",
    number: "02",
    featured: true,
  },
  {
    title: "Brecho de Luxo",
    description:
      "E-commerce elegante para brecho de roupas de luxo. Interface sofisticada com catalogo de produtos, carrinho de compras e design responsivo.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/jonatascavalcanti03/Brech-de-Luxo",
    live: "#",
    number: "03",
    featured: false,
  },
  {
    title: "Controle Financeiro",
    description:
      "Aplicacao completa para controle financeiro pessoal com graficos, categorias de gastos, relatorios e funcionalidades CRUD.",
    techs: ["JavaScript", "HTML5", "CSS3", "Charts"],
    github: "https://github.com/jonatascavalcanti03/-projeto-financeiro",
    live: "#",
    number: "04",
    featured: false,
  },
  {
    title: "Escola Aquarela",
    description:
      "Landing page institucional para escola infantil com menus interativos, sliders e tecnicas de SEO. Design responsivo e acessivel.",
    techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/jonatascavalcanti03/Aquarela",
    live: "#",
    number: "05",
    featured: false,
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

        {/* Featured Projects */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Card top accent with gradient */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/80 to-accent transition-all group-hover:h-2" />

                <div className="p-6">
                  {/* Featured badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-xs font-medium text-accent">
                      Projeto Destaque
                    </span>
                  </div>

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
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary hover:text-accent"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

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
                        className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary transition-colors group-hover:border-primary/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary hover:text-accent"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

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

          {/* Coming soon card */}
          <article className="group flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-8 text-center transition-all duration-300 hover:border-primary/30 hover:bg-card/80 lg:col-span-3 sm:col-span-2">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
              <Code2 className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-mono text-lg font-semibold text-foreground">
              Mais projetos em breve
            </h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Estou constantemente aprendendo e construindo novos projetos. Fique
              de olho neste espaco para novas atualizacoes!
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
