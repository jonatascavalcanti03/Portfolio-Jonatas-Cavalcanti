import { SectionHeader } from "./about"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader title="Contato" subtitle="Fale comigo" />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Estou disponivel para oportunidades como Desenvolvedor Front-End
              Junior. Se voce tem um projeto interessante ou uma vaga aberta,
              entre em contato!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:jonatascavalcanti03@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    jonatascavalcanti03@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+5561982419285"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Telefone
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    (61) 98241-9285
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Localizacao
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {"Brasilia - DF, Brasil"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/jonatascavalcanti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/jonatascavalcanti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:jonatascavalcanti03@gmail.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-2 font-mono text-lg font-bold text-foreground">
              Vamos conversar?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Preencha o formulario abaixo e entrarei em contato o mais rapido
              possivel.
            </p>
            <form
              action={`mailto:jonatascavalcanti03@gmail.com`}
              method="GET"
              className="flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Assunto da mensagem"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="body"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="body"
                  name="body"
                  required
                  rows={4}
                  placeholder="Sua mensagem..."
                  className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="h-4 w-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
