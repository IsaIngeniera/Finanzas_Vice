"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp } from "lucide-react"

export default function SemaforoCalculadora() {
  const [presupuesto, setPresupuesto] = useState({
    total: "",
    disponible: "",
    reestructurable: "",
    inamovible: "",
  })

  const [calculado, setCalculado] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const calcular = () => {
    setCalculado(true)
  }

  const total = Number.parseFloat(presupuesto.total) || 0
  const disponible = Number.parseFloat(presupuesto.disponible) || 0
  const reestructurable = Number.parseFloat(presupuesto.reestructurable) || 0
  const inamovible = Number.parseFloat(presupuesto.inamovible) || 0

  const porcentajeDisponible = total > 0 ? ((disponible / total) * 100).toFixed(1) : "0"
  const porcentajeReestructurable = total > 0 ? ((reestructurable / total) * 100).toFixed(1) : "0"
  const porcentajeInamovible = total > 0 ? ((inamovible / total) * 100).toFixed(1) : "0"

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="p-8 mb-8 bg-gradient-to-r from-yellow-100 to-pink-100 border-none">
          <div className="flex items-center gap-4 mb-4">
            <Calculator className="w-10 h-10 text-pink-600" />
            <h1 className="text-4xl font-bold text-foreground">Semáforo Financiero + Calculadora</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Herramienta visual y práctica para hacer seguimiento al uso del presupuesto en cada comité.
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculadora */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Calculadora de Presupuesto
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Presupuesto Total del Comité</Label>
                <Input
                  type="number"
                  placeholder="Ej: 100000"
                  value={presupuesto.total}
                  onChange={(e) => setPresupuesto({ ...presupuesto, total: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Presupuesto Disponible (Verde)</Label>
                <Input
                  type="number"
                  placeholder="Ej: 30000"
                  value={presupuesto.disponible}
                  onChange={(e) => setPresupuesto({ ...presupuesto, disponible: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Presupuesto Reestructurable (Amarillo)</Label>
                <Input
                  type="number"
                  placeholder="Ej: 40000"
                  value={presupuesto.reestructurable}
                  onChange={(e) => setPresupuesto({ ...presupuesto, reestructurable: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Presupuesto Inamovible (Rojo)</Label>
                <Input
                  type="number"
                  placeholder="Ej: 30000"
                  value={presupuesto.inamovible}
                  onChange={(e) => setPresupuesto({ ...presupuesto, inamovible: e.target.value })}
                />
              </div>
              <Button
                onClick={calcular}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Calcular y Actualizar
              </Button>
            </div>
          </Card>

          {/* Semáforo */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">📊 Semáforo de Presupuesto</h2>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-xl border-l-4 border-green-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-green-900">✅ Presupuesto Disponible</span>
                  <span className="text-2xl font-bold text-green-700">
                    {calculado ? formatCurrency(disponible) : "$0"}
                  </span>
                </div>
                <p className="text-sm text-green-700">Recursos libres para asignar según necesidades</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl border-l-4 border-yellow-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-yellow-900">⚠️ Presupuesto Reestructurable</span>
                  <span className="text-2xl font-bold text-yellow-700">
                    {calculado ? formatCurrency(reestructurable) : "$0"}
                  </span>
                </div>
                <p className="text-sm text-yellow-700">Rubros que se pueden ajustar o reasignar</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-red-100 to-red-200 rounded-xl border-l-4 border-red-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-red-900">🔒 Presupuesto Inamovible</span>
                  <span className="text-2xl font-bold text-red-700">
                    {calculado ? formatCurrency(inamovible) : "$0"}
                  </span>
                </div>
                <p className="text-sm text-red-700">Gastos fijos y compromisos adquiridos</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-400 rounded"></div>
                <span className="text-sm">Verde: Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-sm">Amarillo: Flexible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-400 rounded"></div>
                <span className="text-sm">Rojo: Fijo</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Resumen */}
        {calculado && (
          <Card className="p-8 mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">📈 Resumen General del Presupuesto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl text-center">
                <h3 className="text-sm font-semibold text-green-700 uppercase mb-2">Disponible</h3>
                <div className="text-4xl font-bold text-green-900 mb-2">{formatCurrency(disponible)}</div>
                <div className="text-sm text-green-700">{porcentajeDisponible}% del total</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl text-center">
                <h3 className="text-sm font-semibold text-yellow-700 uppercase mb-2">Reestructurable</h3>
                <div className="text-4xl font-bold text-yellow-900 mb-2">{formatCurrency(reestructurable)}</div>
                <div className="text-sm text-yellow-700">{porcentajeReestructurable}% del total</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl text-center">
                <h3 className="text-sm font-semibold text-red-700 uppercase mb-2">Inamovible</h3>
                <div className="text-4xl font-bold text-red-900 mb-2">{formatCurrency(inamovible)}</div>
                <div className="text-sm text-red-700">{porcentajeInamovible}% del total</div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
