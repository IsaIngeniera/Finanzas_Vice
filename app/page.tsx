import { Sparkles, Heart, Users, Target } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  const proposals = [
    {
      title: "Retos con Propósito",
      description: "Conectados a nuestros pilares: Conectar, Servir y Cambiar Vidas",
      icon: Target,
      href: "/retos-con-proposito",
      color: "from-pink-200 to-pink-300",
    },
    {
      title: "Gallos en Acción",
      description: "Red de apoyo completa desde el inicio del proyecto",
      icon: Users,
      href: "/gallos-en-accion",
      color: "from-purple-200 to-purple-300",
    },
    {
      title: "Guías de Legado",
      description: "Mentores que acompañan y transmiten experiencia",
      icon: Heart,
      href: "/guias-de-legado",
      color: "from-blue-200 to-blue-300",
    },
    {
      title: "Histórico de Finanzas",
      description: "Transparencia total con infografías claras y directas",
      icon: Sparkles,
      href: "/historico-finanzas",
      color: "from-yellow-200 to-yellow-300",
    },
    {
      title: "Estructura y Organización",
      description: "Base de datos de proveedores para decisiones inteligentes",
      icon: Target,
      href: "/estructura-organizacion",
      color: "from-pink-200 to-purple-300",
    },
    {
      title: "Semáforo + Calculadora",
      description: "Herramienta visual para seguimiento de presupuesto",
      icon: Sparkles,
      href: "/semaforo-calculadora",
      color: "from-blue-200 to-yellow-300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center p-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0fEjJWMtBfuXTsBWONYrkqiyTkI1VT.png"
                  alt="Partners Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h1 className="text-6xl sm:text-8xl font-bold text-foreground tracking-tight">PARTNERS</h1>

            <p className="text-3xl sm:text-4xl font-semibold text-primary">Vicepresidencia 2026</p>

            <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Isabella Ocampo Sánchez
            </p>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-8">
              Comprometida con la excelencia, la transparencia y el crecimiento de nuestra comunidad Partners
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/30 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/30 rounded-full blur-xl" />
      </section>

      {/* Proposals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Mis Propuestas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un plan integral para fortalecer nuestra organización y crear un impacto duradero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proposals.map((proposal) => {
              const Icon = proposal.icon
              return (
                <Link key={proposal.href} href={proposal.href}>
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${proposal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{proposal.title}</h3>
                    <p className="text-muted-foreground">{proposal.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Juntos Construimos el Futuro</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cada propuesta está diseñada para fortalecer nuestra comunidad, crear transparencia y generar un impacto
            positivo duradero.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white rounded-full text-sm font-semibold shadow-md">💫 Conectar</span>
            <span className="px-6 py-3 bg-white rounded-full text-sm font-semibold shadow-md">🤝 Servir</span>
            <span className="px-6 py-3 bg-white rounded-full text-sm font-semibold shadow-md">✨ Cambiar Vidas</span>
          </div>
        </div>
      </section>
    </div>
  )
}
