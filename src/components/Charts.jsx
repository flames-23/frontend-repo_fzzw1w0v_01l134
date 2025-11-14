import { useEffect, useRef } from 'react'

function LineChart() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // simple bespoke sparkline
    const w = canvas.width
    const h = canvas.height
    const points = 40
    const vals = Array.from({ length: points }, (_, i) => Math.sin(i / 3) * 20 + 40 + (Math.random() * 10 - 5))

    ctx.clearRect(0, 0, w, h)
    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, 'rgba(99,102,241,0.35)')
    grad.addColorStop(1, 'rgba(168,85,247,0.0)')

    ctx.beginPath()
    ctx.moveTo(0, h)
    vals.forEach((v, i) => {
      const x = (i / (points - 1)) * w
      const y = h - (v / 100) * h
      ctx.lineTo(x, y)
    })
    ctx.lineTo(w, h)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()

    ctx.beginPath()
    vals.forEach((v, i) => {
      const x = (i / (points - 1)) * w
      const y = h - (v / 100) * h
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.strokeStyle = '#6366f1'
    ctx.lineWidth = 2
    ctx.stroke()
  }, [])

  return <canvas ref={ref} width={600} height={180} className="w-full h-44" />
}

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Revenue</h3>
          <div className="text-sm text-gray-500">Last 30 days</div>
        </div>
        <LineChart />
      </div>
      <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Summary</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center justify-between"><span className="text-gray-600">New Customers</span><span className="font-medium">+312</span></li>
          <li className="flex items-center justify-between"><span className="text-gray-600">Refunds</span><span className="font-medium">-24</span></li>
          <li className="flex items-center justify-between"><span className="text-gray-600">Net Profit</span><span className="font-medium">$12,340</span></li>
          <li className="flex items-center justify-between"><span className="text-gray-600">ARPU</span><span className="font-medium">$18.2</span></li>
        </ul>
      </div>
    </div>
  )
}
