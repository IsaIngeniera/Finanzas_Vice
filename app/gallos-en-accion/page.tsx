import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function GallosEnAccion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-none">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">⭐</span>
            <h1 className="text-4xl font-bold text-foreground">Gallos en Acción</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Revolucionaremos el plan padrino integrando a los 'Gallos' desde el inicio. Cada 'Pollo' tendrá una red de
            apoyo completa, no solo un padrino.
          </p>
          <p className="text-base text-muted-foreground mt-2">
            <strong>Roles establecidos (Adivina quién).</strong>
          </p>
        </Card>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/gallos-en-accion/roles">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300">
              <div className="text-center">
                <div className="text-5xl mb-4">👥</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Roles</h2>
                <p className="text-blue-700">Conoce los roles: Gallo, Padrino y Pollo</p>
              </div>
            </Card>
          </Link>

          <Link href="/gallos-en-accion/gallos">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300">
              <div className="text-center">
                <div className="text-5xl mb-4">🐓</div>
                <h2 className="text-2xl font-bold text-purple-900 mb-2">Gallos</h2>
                <p className="text-purple-700">Directorio de Gallos Partners</p>
              </div>
            </Card>
          </Link>

          <Link href="/gallos-en-accion/padrinos">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-pink-100 to-pink-200 border-pink-300">
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h2 className="text-2xl font-bold text-pink-900 mb-2">Padrinos</h2>
                <p className="text-pink-700">Directorio de Padrinos Partners</p>
              </div>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/gallos-en-accion/pollos">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300">
              <div className="text-center">
                <div className="text-5xl mb-4">🐣</div>
                <h2 className="text-2xl font-bold text-yellow-900 mb-2">Pollos</h2>
                <p className="text-yellow-700">Directorio de Pollos Partners</p>
              </div>
            </Card>
          </Link>

          <Card className="p-8 bg-gradient-to-br from-green-100 to-green-200 border-green-300">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h2 className="text-2xl font-bold text-green-900 mb-2">Estadísticas</h2>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="text-3xl font-bold text-green-900">12</div>
                  <div className="text-sm text-green-700">Gallos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-900">25</div>
                  <div className="text-sm text-green-700">Padrinos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-900">30</div>
                  <div className="text-sm text-green-700">Pollos</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
