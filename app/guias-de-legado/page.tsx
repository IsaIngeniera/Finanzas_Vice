"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Heart, Send } from "lucide-react"

export default function GuiasLegado() {
  const [formData, setFormData] = useState({
    nombre: "",
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    pregunta5: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Formulario enviado! Gracias por tu interés en ser Guía de Legado.")
    setFormData({
      nombre: "",
      pregunta1: "",
      pregunta2: "",
      pregunta3: "",
      pregunta4: "",
      pregunta5: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 mb-8 bg-gradient-to-r from-blue-100 to-purple-100 border-none">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="w-10 h-10 text-pink-600" />
            <h1 className="text-4xl font-bold text-foreground">Guías de Legado</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Conviértete en un mentor que acompaña y transmite experiencia a las nuevas generaciones de Partners.
          </p>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Formulario de Aplicación</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre Completo</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pregunta1">¿Por qué te gustaría ser guía de legado?</Label>
              <Textarea
                id="pregunta1"
                value={formData.pregunta1}
                onChange={(e) => setFormData({ ...formData, pregunta1: e.target.value })}
                placeholder="Comparte tu motivación..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pregunta2">¿Qué aprendiste tú del proyecto de pollos cuando lo viviste?</Label>
              <Textarea
                id="pregunta2"
                value={formData.pregunta2}
                onChange={(e) => setFormData({ ...formData, pregunta2: e.target.value })}
                placeholder="Comparte tus aprendizajes..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pregunta3">¿Qué habilidad o fortaleza crees que podrías aportar?</Label>
              <Textarea
                id="pregunta3"
                value={formData.pregunta3}
                onChange={(e) => setFormData({ ...formData, pregunta3: e.target.value })}
                placeholder="Ej: creatividad, organización, comunicación, empatía, etc."
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pregunta4">¿Cuánto tiempo real puedes dedicar al acompañamiento semanal?</Label>
              <Input
                id="pregunta4"
                value={formData.pregunta4}
                onChange={(e) => setFormData({ ...formData, pregunta4: e.target.value })}
                placeholder="Ej: 2-3 horas semanales"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pregunta5">
                Cuéntanos una anécdota o consejo que quisieras transmitirle a los nuevos
              </Label>
              <Textarea
                id="pregunta5"
                value={formData.pregunta5}
                onChange={(e) => setFormData({ ...formData, pregunta5: e.target.value })}
                placeholder="Comparte tu historia..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg py-6"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Aplicación
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
