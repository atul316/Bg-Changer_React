import { useState } from "react"

function App() {
  const [color, setColor] = useState("#002244")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
     <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 top-12">
      <div className="flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-slate-400 rounded-3xl">
        <button onClick={() => setColor("black")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "black"}}>Black</button>
        
        <button onClick={() => setColor("white")}
        className="px-4 py-1 text-black rounded-full shadow-xl outline-none" style={{backgroundColor: "white"}}>White</button>
        
        <button onClick={() => setColor("red")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "red"}}>Red</button>
        
        <button onClick={() => setColor("pink")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "pink"}}>Pink</button>
        
        <button onClick={() => setColor("green")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "green"}}>Green</button>
        
        <button onClick={() => setColor("blue")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "blue"}}>Blue</button>
        
        <button onClick={() => setColor("purple")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "purple"}}>Purple</button>
        
        <button onClick={() => setColor("olive")}
        className="px-4 py-1 text-white rounded-full shadow-xl outline-none" style={{backgroundColor: "olive"}}>Olive</button>
      </div>
     </div>
    </>
  )
}

export default App
