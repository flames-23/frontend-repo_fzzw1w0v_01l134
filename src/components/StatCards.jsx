import { ArrowUpRight, ArrowDownRight, Wallet, Users2, ShoppingBag } from 'lucide-react'

const Card = ({ title, value, change, rising, icon }) => (
  <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-1">{value}</h3>
      </div>
      <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
        {icon}
      </div>
    </div>
    <div className={`mt-4 inline-flex items-center gap-1 text-sm ${rising ? 'text-emerald-600' : 'text-rose-600'}`}>
      {rising ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      <span className="font-medium">{change}</span>
      <span className="text-gray-500">this month</span>
    </div>
  </div>
)

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card title="Total Balance" value="$128,920" change="+12.4%" rising icon={<Wallet size={18} />} />
      <Card title="Active Users" value="8,342" change="+3.1%" rising icon={<Users2 size={18} />} />
      <Card title="New Orders" value="1,204" change="-1.8%" icon={<ShoppingBag size={18} />} />
      <Card title="Spend Rate" value="$4,210" change="+0.7%" rising icon={<Wallet size={18} />} />
    </div>
  )
}
