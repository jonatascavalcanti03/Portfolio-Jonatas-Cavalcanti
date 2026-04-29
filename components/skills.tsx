"use client"

import { useRef } from "react"
import { SectionHeader } from "./about"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const skills = [
  {
    category: "Linguagens",
    color: "primary" as const,
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 75 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    category: "Frameworks / Bibliotecas",
    color: "accent" as const,
    items: [
      { name: "React.js", level: 70 },
      { name: "Next.js", level: 65 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap 5", level: 75 },
    ],
  },
  {
    category: "Ferramentas",
    color: "primary" as const,
    items: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Chrome DevTools", level: 75 },
      { name: "Vercel", level: 70 },
    ],
  },
  {
    category: "Metodologias",
    color: "accent" as const,
    items: [
      { name: "Mobile-First", level: 85 },
      { name: "Responsive Design", level: 85 },
      { name: "SEO", level: 60 },
      { name: "Acessibilidade (WCAG)", level: 55 },
    ],
  },
]

function AnimatedBar({ level, color, delay }: { level: number; color: "primary" | "accent"; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="h-2 overflow-hidden rounded-full bg-secondary">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        className={`h-full rounded-full ${
          color === "primary" ? "bg-primary" : "bg-accent"
        }`}
      />
    </div>
  )
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section id="skills" ref={containerRef} className="relative px-6 py-24 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Competencias" subtitle="Minhas habilidades" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIndex * 0.15 + 0.2 }}
                className={`mb-6 font-mono text-lg font-semibold ${
                  group.color === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {group.category}
              </motion.h3>
              <div className="flex flex-col gap-5">
                {group.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: groupIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <AnimatedBar 
                      level={skill.level} 
                      color={group.color} 
                      delay={groupIndex * 0.1 + skillIndex * 0.1 + 0.3}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
