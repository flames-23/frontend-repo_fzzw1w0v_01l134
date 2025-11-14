import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 border border-gray-200/60">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 pointer-events-none p-8 sm:p-12">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/80 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-gray-700">Live financial overview</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Modern Fintech Dashboard
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            A glassmorphic, 3D-animated experience inspired by Vision UI. Manage balances, track KPIs, and visualize activity with a clean, minimal interface.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />
    </section>
  )
}
