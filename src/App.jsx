import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Hero3D from './components/Hero3D'
import StatCards from './components/StatCards'
import Charts from './components/Charts'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-10">
          <Topbar />
          <main className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
            <Hero3D />
            <StatCards />
            <Charts />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
