import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")
  return (
    <div className="min-h-screen w-screen flex items-center justify-center transition-colors duration-300"
     style={{ backgroundColor: color }}>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-5 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
        <button className="px-5 py-2.5 text-white rounded-xl shadow-md hover:bg-blue-600 hover:scale-105 transition transform duration-200" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="px-5 py-2.5 text-white rounded-xl shadow-md hover:bg-green-600 hover:scale-105 transition transform duration-200" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="px-5 py-2.5 text-white rounded-xl shadow-md hover:bg-red-600 hover:scale-105 transition transform duration-200" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="px-5 py-2.5 text-white rounded-xl shadow-md hover:bg-purple-600 hover:scale-105 transition transform duration-200" onClick={() => setColor("purple")}>
          Purple
        </button>
        <button className="px-5 py-2.5 text-white rounded-xl shadow-md hover:bg-yellow-600 hover:scale-105 transition transform duration-200" onClick={() => setColor("yellow")}>
          Yellow
        </button>
      </div>
    </div>
  )
}

export default App
