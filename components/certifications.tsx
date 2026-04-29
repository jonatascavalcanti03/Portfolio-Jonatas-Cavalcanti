"use client"

import { useRef } from "react"
import { SectionHeader } from "./about"
import { Award, ExternalLink } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const certifications = [
  {
    title: "Descubra a Arte do Prompting",
    issuer: "Google",
    date: "Out/2025",
    code: "OQBDI4HMCLFL",
  },
  {
    title: "Network Technician Career Path",
    issuer: "Cisco",
    date: "Set/2025",
  },
  {
    title: "Networking Academy Learn-A-Thon 2025",
    issuer: "Cisco",
    date: "Set/2025",
  },
  {
    title: "Maximizar a Produtividade com Ferramentas de IA",
    issuer: "ULSA",
    date: "Set/2025",
    code: "BR0GJ0HDGUSL",
  },
  {
    title: "Introducao a Inteligencia Artificial",
    issuer: "Google",
    date: "Set/2025",
    code: "JKFAJ94MGB7P",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco",
    date: "Set/2025",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="certificacoes" ref={containerRef} className="relative px-6 py-24 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Certificacoes" subtitle="Minhas conquistas" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
              >
                <Award className="h-5 w-5" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-semibold leading-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mb-1 font-mono text-xs text-primary">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
                {cert.code && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="mt-2 flex items-center gap-1 font-mono text-xs text-muted-foreground"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {cert.code}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
