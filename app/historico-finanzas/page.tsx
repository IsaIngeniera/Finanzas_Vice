"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react"

export default function HistoricoFinanzas() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-01-15", category: "Ingreso", description: "Cuota Partners", amount: 500000 },
    { id: 2, date: "2025-01-10", category: "Eventos", description: "Assessment", amount: -200000 },
    { id: 3, date: "2025-01-05", category: "Materiales", description: "Papelería", amount: -50000 },
  ])

  const [newTransaction, setNewTransaction] = useState({
    date: new Date().toISOString().split("T")[0],
    category: "Ingreso",
    description: "",
    amount: "",
  })

  const categories = ["Ingreso", "Eventos", "Materiales", "Servicios", "Otros"]

  const totalIngresos = transactions.filter((t) => t.category === "Ingreso").reduce((sum, t) => sum + t.amount, 0)

  const totalGastos = transactions
    .filter((t) => t.category !== "Ingreso")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  const balance = totalIngresos - totalGastos

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const addTransaction = () => {
    if (!newTransaction.description || !newTransaction.amount) return

    const transaction = {
      id: Date.now(),
      ...newTransaction,
      amount: Number.parseFloat(newTransaction.amount),
    }

    setTransactions([transaction, ...transactions])
    setNewTransaction({
      date: new Date().toISOString().split("T")[0],
      category: "Ingreso",
      description: "",
      amount: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="p-8 mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 border-none">
          <div className="flex items-center gap-4 mb-4">
            <DollarSign className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-foreground">Histórico de Finanzas</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Con infografías mensuales, claras y directas, sabrás exactamente en qué se invierte cada peso. ¡Cuentas
            claras, confianza total!
          </p>
        </Card>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-green-100 to-green-200 border-green-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-700">Total Ingresos</span>
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-900">{formatCurrency(totalIngresos)}</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-100 to-red-200 border-red-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-red-700">Total Gastos</span>
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-900">{formatCurrency(totalGastos)}</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-700">Balance</span>
              <PieChart className="w-6 h-6 text-indigo-600" />
            </div>
            <div className={`text-3xl font-bold ${balance >= 0 ? "text-green-900" : "text-red-900"}`}>
              {formatCurrency(balance)}
            </div>
          </Card>
        </div>

        {/* Agregar Transacción */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Agregar Transacción</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Fecha</Label>
              <Input
                type="date"
                value={newTransaction.date}
                onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Categoría</Label>
              <select
                value={newTransaction.category}
                onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Descripción</Label>
              <Input
                placeholder="Descripción"
                value={newTransaction.description}
                onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Monto</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Monto"
                  value={newTransaction.amount}
                  onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                />
                <Button onClick={addTransaction} className="bg-gradient-to-r from-indigo-500 to-purple-500">
                  Agregar
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Transacciones */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Transacciones Recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Fecha</th>
                  <th className="text-left py-3 px-4 font-semibold">Categoría</th>
                  <th className="text-left py-3 px-4 font-semibold">Descripción</th>
                  <th className="text-right py-3 px-4 font-semibold">Monto</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">{new Date(t.date + "T00:00:00").toLocaleDateString("es-CO")}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          t.category === "Ingreso" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {t.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">{t.description}</td>
                    <td
                      className={`py-3 px-4 text-right font-bold ${
                        t.category === "Ingreso" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {t.category === "Ingreso" ? "+" : "-"}
                      {formatCurrency(Math.abs(t.amount))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
