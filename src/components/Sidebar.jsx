import { useState } from 'react'
import { LayoutGrid, BarChart3, Table2, Settings, LogOut, Menu, CreditCard, Activity } from 'lucide-react'

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  const items = [
    { icon: <LayoutGrid size={18} />, label: 'Dashboard' },
    { icon: <Activity size={18} />, label: 'Analytics' },
    { icon: <BarChart3 size={18} />, label: 'Reports' },
    { icon: <Table2 size={18} />, label: 'Projects' },
    { icon: <CreditCard size={18} />, label: 'Billing' },
    { icon: <Settings size={18} />, label: 'Settings' },
  ]

  return (
    <aside className={`h-screen bg-white/80 backdrop-blur-xl border-r border-gray-200/60 ${open ? 'w-64' : 'w-20'} transition-all duration-300 sticky top-0 hidden md:block`}>
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          {open && <span className="font-semibold text-gray-800">VisionX</span>}
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle sidebar">
          <Menu size={18} />
        </button>
      </div>
      <nav className="px-2 pt-4 space-y-1">
        {items.map((item) => (
          <a key={item.label} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition">
            <span className="text-gray-600">{item.icon}</span>
            {open && <span className="text-sm font-medium">{item.label}</span>}
          </a>
        ))}
      </nav>
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <LogOut size={16} />
          {open && <span className="text-sm">Log out</span>}
        </button>
      </div>
    </aside>
  )
}
