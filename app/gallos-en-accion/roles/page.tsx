import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RolesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/gallos-en-accion" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Gallos en Acción
        </Link>

        <Card className="p-12 bg-gradient-to-br from-blue-100 to-purple-100 border-none">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4" style={{ letterSpacing: "0.1em" }}>
              ROLES
            </h1>
            <div className="flex justify-center gap-8 mb-8">
              <span className="text-6xl">⭐</span>
              <span className="text-6xl">⭐</span>
              <span className="text-6xl">⭐</span>
            </div>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-purple-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🐓</span>
                <h2 className="text-3xl font-bold text-purple-900">1. Gallo</h2>
              </div>
              <div className="h-32 bg-purple-50 rounded-lg border-2 border-dashed border-purple-300 flex items-center justify-center">
                <p className="text-purple-400 italic">Espacio para descripción del rol</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-pink-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🤝</span>
                <h2 className="text-3xl font-bold text-pink-900">2. Padrino</h2>
              </div>
              <div className="h-32 bg-pink-50 rounded-lg border-2 border-dashed border-pink-300 flex items-center justify-center">
                <p className="text-pink-400 italic">Espacio para descripción del rol</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-yellow-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🐣</span>
                <h2 className="text-3xl font-bold text-yellow-900">3. Pollo</h2>
              </div>
              <div className="h-32 bg-yellow-50 rounded-lg border-2 border-dashed border-yellow-300 flex items-center justify-center">
                <p className="text-yellow-600 italic">Espacio para descripción del rol</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
