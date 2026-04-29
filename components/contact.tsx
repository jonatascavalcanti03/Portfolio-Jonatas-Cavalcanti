"use client"

import { useRef } from "react"
import { SectionHeader } from "./about"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const bgY1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const bgY2 = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="contato" ref={containerRef} className="relative px-6 py-24 overflow-hidden">
      {/* Parallax background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" 
        />
        <motion.div 
          style={{ y: bgY2 }}
          className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-accent/5 blur-3xl" 
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Contato" subtitle="Fale comigo" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              Estou disponivel para oportunidades como Desenvolvedor Front-End
              Junior, com conhecimentos em React, Next.js e TypeScript. Se voce tem
              um projeto interessante ou uma vaga aberta, entre em contato!
            </p>

            <div className="flex flex-col gap-4">
              {[
                { 
                  href: "mailto:jonatascavalcanti03@gmail.com", 
                  icon: Mail, 
                  label: "Email", 
                  value: "jonatascavalcanti03@gmail.com",
                  color: "primary"
                },
                { 
                  href: "tel:+5561982419285", 
                  icon: Phone, 
                  label: "Telefone", 
                  value: "(61) 98241-9285",
                  color: "accent"
                },
                { 
                  href: "#", 
                  icon: MapPin, 
                  label: "Localizacao", 
                  value: "Brasilia - DF, Brasil",
                  color: "primary",
                  isStatic: true
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-${contact.color}/30 hover:shadow-lg hover:shadow-${contact.color}/5 ${contact.isStatic ? 'cursor-default' : ''}`}
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${contact.color}/10 text-${contact.color} transition-colors group-hover:bg-${contact.color} group-hover:text-${contact.color}-foreground`}
                  >
                    <contact.icon className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              {[
                { href: "https://github.com/jonatascavalcanti03", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/jonatascavalcanti", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:jonatascavalcanti03@gmail.com", icon: Send, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="rounded-xl border border-border bg-card p-8"
          >
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
              {[
                { id: "name", label: "Nome", placeholder: "Seu nome", type: "text" },
                { id: "subject", label: "Assunto", placeholder: "Assunto da mensagem", type: "text" },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <label
                    htmlFor={field.id}
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
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
              </motion.div>
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="h-4 w-4" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
