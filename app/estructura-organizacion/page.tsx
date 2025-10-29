"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Building2, Plus, X } from "lucide-react"

export default function EstructuraOrganizacion() {
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nombre: "Assessment",
      color: "from-blue-100 to-blue-200",
      proveedores: [
        {
          proveedor: "Catering Express",
          productos: "Almuerzos, Coffee breaks",
          experiencia: "Excelente servicio",
          contactar: "Sí",
        },
        {
          proveedor: "Audiovisuales Pro",
          productos: "Equipos de sonido",
          experiencia: "Buena calidad",
          contactar: "Quizá",
        },
      ],
    },
    {
      id: 2,
      nombre: "Asambleas",
      color: "from-green-100 to-green-200",
      proveedores: [
        {
          proveedor: "Hotel Centro",
          productos: "Salones, hospedaje",
          experiencia: "Instalaciones modernas",
          contactar: "Sí",
        },
      ],
    },
  ])

  const [showForm, setShowForm] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="p-8 mb-8 bg-gradient-to-r from-blue-100 to-purple-100 border-none">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-foreground">Estructura y Organización</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Organizaré una base de datos de proveedores recomendados para tomar decisiones más inteligentes y
            económicas.
          </p>
          <p className="text-base text-muted-foreground mt-2">
            <strong>Hojas de Excel por evento.</strong>
          </p>
        </Card>

        <div className="space-y-8">
          {eventos.map((evento) => (
            <Card key={evento.id} className="p-6">
              <div className={`p-6 rounded-xl bg-gradient-to-r ${evento.color} mb-6`}>
                <h2 className="text-2xl font-bold text-gray-800">{evento.nombre}</h2>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 px-4 font-semibold">Proveedor</th>
                      <th className="text-left py-3 px-4 font-semibold">Productos</th>
                      <th className="text-left py-3 px-4 font-semibold">Experiencia</th>
                      <th className="text-left py-3 px-4 font-semibold">¿Volver a contactar?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evento.proveedores.map((prov, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{prov.proveedor}</td>
                        <td className="py-3 px-4">{prov.productos}</td>
                        <td className="py-3 px-4">{prov.experiencia}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              prov.contactar === "Sí"
                                ? "bg-green-100 text-green-700"
                                : prov.contactar === "Quizá"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {prov.contactar}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Button
                onClick={() => setShowForm(showForm === evento.id ? null : evento.id)}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                {showForm === evento.id ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                {showForm === evento.id ? "Cancelar" : "Agregar Proveedor"}
              </Button>

              {showForm === evento.id && (
                <Card className="mt-4 p-6 bg-muted/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Proveedor</Label>
                      <Input placeholder="Nombre del proveedor" />
                    </div>
                    <div className="space-y-2">
                      <Label>Productos</Label>
                      <Input placeholder="Productos o servicios" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Experiencia</Label>
                      <Textarea placeholder="Describe la experiencia con este proveedor" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label>¿Volver a contactar?</Label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option value="Sí">Sí</option>
                        <option value="Quizá">Quizá</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500">Guardar</Button>
                    </div>
                  </div>
                </Card>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
