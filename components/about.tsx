import { GraduationCap, User, Target } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Sobre Mim" subtitle="Quem sou eu" />

        <div className="grid gap-8 md:grid-cols-3">
          <InfoCard
            icon={<User className="h-6 w-6" />}
            title="Resumo"
            description="Desenvolvedor Front-End com solida base em HTML, CSS, JavaScript, React e Next.js. Apos 8 anos como Operador de Loja na rede Pao de Acucar, decidi seguir minha paixao pela tecnologia, aplicando habilidades como proatividade, disciplina e trabalho em equipe no desenvolvimento de solucoes web modernas."
          />
          <InfoCard
            icon={<GraduationCap className="h-6 w-6" />}
            title="Formacao"
            description="Cursando Analise e Desenvolvimento de Sistemas na UDF (3 semestre), com previsao de conclusao em 2027. Disciplinas relevantes: Aplicacoes para Internet, Programacao Web, Banco de Dados e Engenharia de Software."
          />
          <InfoCard
            icon={<Target className="h-6 w-6" />}
            title="Objetivo"
            description="Busco oportunidade como Desenvolvedor Front-End Junior, onde possa aplicar meus conhecimentos em React, Next.js e TypeScript para criar interfaces modernas, acessiveis e com excelente experiencia do usuario. Comprometido com aprendizado continuo e melhores praticas."
          />
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">
        {subtitle}
      </p>
      <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  )
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-3 font-mono text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export { SectionHeader }
