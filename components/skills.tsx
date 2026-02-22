"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./about"

const skills = [
  {
    category: "Linguagens",
    color: "primary" as const,
    items: [
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 80 },
      { name: "JavaScript (ES6+)", level: 70 },
    ],
  },
  {
    category: "Frameworks / Bibliotecas",
    color: "accent" as const,
    items: [
      { name: "React.js", level: 40 },
      { name: "Bootstrap 5", level: 75 },
    ],
  },
  {
    category: "Ferramentas",
    color: "primary" as const,
    items: [
      { name: "Git", level: 65 },
      { name: "GitHub", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "Chrome DevTools", level: 70 },
    ],
  },
  {
    category: "Metodologias",
    color: "accent" as const,
    items: [
      { name: "Mobile-First", level: 75 },
      { name: "Responsive Design", level: 80 },
      { name: "SEO basico", level: 55 },
      { name: "Acessibilidade (WCAG)", level: 50 },
    ],
  },
]

function AnimatedBar({ level, color }: { level: number; color: "primary" | "accent" }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="h-2 overflow-hidden rounded-full bg-secondary">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${
          color === "primary" ? "bg-primary" : "bg-accent"
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader title="Competencias" subtitle="Minhas habilidades" />

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3
                className={`mb-6 font-mono text-lg font-semibold ${
                  group.color === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {group.category}
              </h3>
              <div className="flex flex-col gap-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <AnimatedBar level={skill.level} color={group.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
