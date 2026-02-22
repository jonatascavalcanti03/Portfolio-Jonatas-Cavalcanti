import { SectionHeader } from "./about"
import { Award, ExternalLink } from "lucide-react"

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

export function Certifications() {
  return (
    <section id="certificacoes" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Certificacoes" subtitle="Minhas conquistas" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-semibold leading-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mb-1 font-mono text-xs text-primary">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
                {cert.code && (
                  <p className="mt-2 flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    {cert.code}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
