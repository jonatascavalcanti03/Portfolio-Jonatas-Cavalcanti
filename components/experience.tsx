import { SectionHeader } from "./about"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experiencia" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Experiencia" subtitle="Minha trajetoria" />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          {/* Experience Item 1 */}
          <div className="relative mb-12 md:ml-auto md:w-1/2 md:pl-12">
            <div className="hidden md:block absolute -left-[5px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-[-6px]" />
            <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <Briefcase className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  Atual
                </span>
              </div>
              <h3 className="mb-1 font-mono text-lg font-bold text-foreground">
                Operador de Loja 2
              </h3>
              <p className="mb-3 text-sm font-medium text-primary">
                Rede Pao de Acucar
              </p>
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>8+ anos de experiencia</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Atendimento ao cliente e suporte, com foco em resolucao agil de problemas e trabalho em equipe
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Desenvolvimento das soft skills essenciais para ambientes colaborativos e dinamicos
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Responsavel por organizacao e controle de estoque, garantindo eficiencia operacional
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 - Education */}
          <div className="relative mb-12 md:w-1/2 md:pr-12 md:text-right">
            <div className="hidden md:block absolute right-[-6px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <div className="mb-3 flex items-center gap-2 text-primary md:justify-end">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  Em andamento
                </span>
              </div>
              <h3 className="mb-1 font-mono text-lg font-bold text-foreground">
                Analise e Desenvolvimento de Sistemas
              </h3>
              <p className="mb-3 text-sm font-medium text-accent">
                UDF - Centro Universitario
              </p>
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground md:justify-end">
                <Calendar className="h-3 w-3" />
                <span>{"3 semestre | Previsao: 2027"}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Disciplinas: Aplicacoes para Internet, Programacao Web, Banco de Dados, Programacao Orientada a Objetos, Engenharia de Software
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
