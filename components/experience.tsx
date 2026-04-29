"use client"

import { useRef } from "react"
import { SectionHeader } from "./about"
import { Briefcase, Calendar } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])

  return (
    <section id="experiencia" ref={containerRef} className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Experiencia" subtitle="Minha trajetoria" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Animated Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border/30 md:left-1/2 md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary/50"
            />
          </div>

          {/* Experience Item 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 md:ml-auto md:w-1/2 md:pl-12"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:block absolute -left-[5px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-[-6px]" 
            />
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
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
                {[
                  "Atendimento ao cliente e suporte, com foco em resolucao agil de problemas e trabalho em equipe",
                  "Desenvolvimento das soft skills essenciais para ambientes colaborativos e dinamicos",
                  "Responsavel por organizacao e controle de estoque, garantindo eficiencia operacional"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Experience Item 2 - Education */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12 md:w-1/2 md:pr-12 md:text-right"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="hidden md:block absolute right-[-6px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-background" 
            />
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
