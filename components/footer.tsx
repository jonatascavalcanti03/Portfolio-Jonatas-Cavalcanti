import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-mono text-xl font-bold tracking-tight text-foreground"
            >
              {"<JC />"}
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Desenvolvedor Front-End criando interfaces acessiveis e responsivas.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#sobre"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Sobre
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#projetos"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Projetos
            </a>
            <a
              href="#experiencia"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Experiencia
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contato
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jonatascavalcanti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/jonatascavalcanti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:jonatascavalcanti03@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-border" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            {`\u00A9 ${currentYear} Jonatas Cavalcanti. Feito com`}
            <Heart className="inline h-3 w-3 text-accent" />
            {"e muito codigo."}
          </p>
          <a
            href="#"
            aria-label="Voltar ao topo"
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Voltar ao topo
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
