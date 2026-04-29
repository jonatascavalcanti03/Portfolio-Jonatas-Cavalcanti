"use client"

import { useRef } from "react"
import { GraduationCap, User, Target } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="sobre" ref={containerRef} className="relative px-6 py-24 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Sobre Mim" subtitle="Quem sou eu" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <InfoCard
            icon={<User className="h-6 w-6" />}
            title="Resumo"
            description="Desenvolvedor Front-End com solida base em HTML, CSS, JavaScript, React e Next.js. Apos 8 anos como Operador de Loja na rede Pao de Acucar, decidi seguir minha paixao pela tecnologia, aplicando habilidades como proatividade, disciplina e trabalho em equipe no desenvolvimento de solucoes web modernas."
            delay={0}
          />
          <InfoCard
            icon={<GraduationCap className="h-6 w-6" />}
            title="Formacao"
            description="Cursando Analise e Desenvolvimento de Sistemas na UDF (3 semestre), com previsao de conclusao em 2027. Disciplinas relevantes: Aplicacoes para Internet, Programacao Web, Banco de Dados e Engenharia de Software."
            delay={0.15}
          />
          <InfoCard
            icon={<Target className="h-6 w-6" />}
            title="Objetivo"
            description="Busco oportunidade como Desenvolvedor Front-End Junior, onde possa aplicar meus conhecimentos em React, Next.js e TypeScript para criar interfaces modernas, acessiveis e com excelente experiencia do usuario. Comprometido com aprendizado continuo e melhores praticas."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-16 text-center">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono text-3xl font-bold text-foreground sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-4 h-1 rounded-full bg-accent" 
      />
    </div>
  )
}

function InfoCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <motion.div 
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
      >
        {icon}
      </motion.div>
      <h3 className="mb-3 font-mono text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  )
}

export { SectionHeader }
