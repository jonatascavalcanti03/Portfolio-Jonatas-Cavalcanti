"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const roles = [
  "Desenvolvedor Front-End",
  "React & Next.js Developer",
  "Criador de interfaces modernas",
  "Entusiasta de TypeScript",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Parallax background effects */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" 
        />
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-primary/30"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-accent/40"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[20%] bottom-[30%] h-2 w-2 rounded-full bg-primary/40"
        />
        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[25%] bottom-[25%] h-5 w-5 rounded-full bg-accent/20"
        />
      </div>

      {/* Grid pattern with parallax */}
      <motion.div
        style={{ y: y1, opacity: 0.03 }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Status badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-sm font-medium text-accent">
            Disponivel para oportunidades
          </span>
        </motion.div>

        {/* Name with stagger animation */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block text-balance"
          >
            Jonatas
          </motion.span>
          <br />
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block text-balance text-primary"
          >
            Cavalcanti
          </motion.span>
        </motion.h1>

        {/* Animated Role */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-6 h-8 font-mono text-lg font-medium text-muted-foreground sm:text-xl md:h-10 md:text-2xl"
        >
          <span
            className={`inline-block transition-all duration-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            {roles[roleIndex]}
          </span>
        </motion.p>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Desenvolvendo aplicacoes web modernas com React, Next.js e TypeScript.
          Focado em criar interfaces acessiveis, responsivas e com excelente
          experiencia do usuario.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Entre em Contato
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com/jonatascavalcanti03", label: "GitHub", icon: Github },
            { href: "https://linkedin.com/in/jonatascavalcanti", label: "LinkedIn", icon: Linkedin },
            { href: "mailto:jonatascavalcanti03@gmail.com", label: "Email", icon: Mail },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce animation */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 0.6 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
