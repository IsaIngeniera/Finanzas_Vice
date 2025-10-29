"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Plus, Download } from "lucide-react"

export default function RetosConProposito() {
  const [searchTerm, setSearchTerm] = useState("")

  const retos = [
    {
      estado: "Realizado",
      nombre: "Café con Propósito",
      descripcion:
        "Invita a un compañero a tomar café y conoce 3 cosas nuevas sobre él. El objetivo es fortalecer los lazos entre equipos y crear conexiones más profundas.",
      fecha: "15 Enero 2025",
      participantes: ["Ana García", "Carlos Ruiz", "María López", "Luis Pérez", "Laura Díaz"],
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      estado: "En Proceso",
      nombre: "Ayuda en Acción",
      descripcion:
        "Dedica 2 horas a ayudar en un proyecto social de tu comunidad. Puede ser en comedores comunitarios, enseñanza a niños, o limpieza de espacios públicos.",
      fecha: "En curso (Finaliza: 29 Enero)",
      participantes: ["Pedro Sánchez", "Sofia Ramírez", "Jorge Torres", "Carmen Flores"],
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      estado: "Realizado",
      nombre: "Mentoriza a Alguien",
      descripcion:
        "Comparte tus conocimientos con alguien que lo necesite durante 1 mes. Ayúdalo a desarrollar habilidades profesionales o personales que puedan cambiar su vida.",
      fecha: "10 Enero 2025",
      participantes: ["Roberto Méndez", "Elena Castro", "Miguel Ángel"],
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      estado: "Planificado",
      nombre: "Donación de Tiempo",
      descripcion:
        "Dedica 4 horas semanales a enseñar una habilidad a otros. Puede ser cocina, idiomas, tecnología, arte, música, o cualquier talento que tengas para compartir.",
      fecha: "Inicia: 25 Enero 2025",
      participantes: ["Roberto Méndez", "Elena Castro"],
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
  ]

  const filteredRetos = retos.filter(
    (reto) =>
      reto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reto.participantes.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const stats = {
    total: retos.length,
    realizados: retos.filter((r) => r.estado === "Realizado").length,
    enProceso: retos.filter((r) => r.estado === "En Proceso").length,
    planificados: retos.filter((r) => r.estado === "Planificado").length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-pink-100 to-purple-100 border-none">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">⭐</span>
            <h1 className="text-4xl font-bold text-foreground">Retos con Propósito</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Mantendremos la diversión de los Retos Flash, pero ahora estarán conectados a nuestros pilares:
            <strong> Conectar, Servir y Cambiar Vidas</strong> (También tendremos retos graciosos).
          </p>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300">
            <div className="text-3xl font-bold text-purple-900">{stats.total}</div>
            <div className="text-sm text-purple-700 font-medium">Total de Retos</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-100 to-green-200 border-green-300">
            <div className="text-3xl font-bold text-green-900">{stats.realizados}</div>
            <div className="text-sm text-green-700 font-medium">Realizados</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300">
            <div className="text-3xl font-bold text-yellow-900">{stats.enProceso}</div>
            <div className="text-sm text-yellow-700 font-medium">En Proceso</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300">
            <div className="text-3xl font-bold text-blue-900">{stats.planificados}</div>
            <div className="text-sm text-blue-700 font-medium">Planificados</div>
          </Card>
        </div>

        {/* Controls */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar retos por nombre, descripción, participantes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Reto
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </Card>

        {/* Retos List */}
        <div className="space-y-4">
          {filteredRetos.map((reto, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border-2 ${reto.color}`}>
                    {reto.estado === "Realizado" && "✅ "}
                    {reto.estado === "En Proceso" && "🔄 "}
                    {reto.estado === "Planificado" && "📅 "}
                    {reto.estado}
                  </span>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{reto.nombre}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reto.descripcion}</p>
                  <div className="text-sm font-medium text-primary">{reto.fecha}</div>
                  <div className="flex flex-wrap gap-2">
                    {reto.participantes.map((participante, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {participante}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
