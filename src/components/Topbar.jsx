import { Search, Bell, User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="h-16 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-20">
      <div className="h-full px-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 grid place-items-center rounded-xl hover:bg-gray-100 transition">
            <Bell size={18} />
          </button>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  )
}
