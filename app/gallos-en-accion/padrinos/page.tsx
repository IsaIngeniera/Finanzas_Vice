import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PadrinosPage() {
  const padrinos = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    nombre: `Partner ${i + 1}`,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/gallos-en-accion" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Gallos en Acción
        </Link>

        <Card className="p-8 mb-8 bg-gradient-to-r from-pink-100 to-pink-200 border-pink-300">
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-4">
              <span className="text-5xl">🤝</span>
              <h1 className="text-4xl font-bold text-pink-900">PADRINOS</h1>
              <span className="text-5xl">🤝</span>
            </div>
            <p className="text-lg text-pink-700">Directorio de Padrinos Partners</p>
          </div>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {padrinos.map((padrino) => (
            <Card
              key={padrino.id}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
            >
              <div className="aspect-square bg-pink-200 rounded-xl mb-4 flex items-center justify-center border-4 border-pink-300">
                <span className="text-6xl">🤝</span>
              </div>
              <h3 className="text-center font-bold text-pink-900">{padrino.nombre}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
