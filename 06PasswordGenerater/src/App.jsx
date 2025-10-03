import { useEffect , useRef , useCallback , useState } from 'react'

function App() {
  const passRef = useRef(null);
  const [password , setPassword] = useState("");
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [symAllowed , setSymAllowed] = useState(false);

  const genpass = useCallback( ()=> {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMasdfghjklqwertyuiopzxcvbnm";
    let pass = "";
    if(numAllowed) str += "0123456789";
    if(symAllowed) str += "!@#$%^&*()_-=+/*{}[]':;<>,`~"
    for (let i = 0; i < length; i++) pass += str[Math.floor(Math.random()* str.length)];
    setPassword(pass);
  } , [length , numAllowed , symAllowed]);

  useEffect(() => {
    genpass()
  } , [length , numAllowed , symAllowed]);

  const copyToClip = function(){
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className="bg-gray-900 min-h-screen w-screen p-10 flex items-center justify-center">
        {/* Main card */}
        <div className="bg-amber-500 rounded-2xl p-6 w-full max-w-md space-y-4 ">
          
          {/* Input + Copy button */}
          <div className="flex items-center gap-2">
            <input 
              type="text"
              className="flex-1 p-2 rounded-md outline-3 cursor-text"
              placeholder="Generated password"
              value={password}
              readOnly
              ref={passRef}
            />
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800" onClick={() => copyToClip()}>
              COPY
            </button>
          </div>

          {/* Length slider */}
          <div className="flex items-center justify-between">
            <label className="text-black font-semibold">Length: {length}</label>
            <input type="range" min="6" max="50" className="w-2/3" value={length} onChange={(e)=> setLength(e.target.value)}/>
          </div>

          {/* Options */}
          <div className="flex items-center gap-4">
            <input type="checkbox" id="numbers" value={numAllowed} onClick={() => setNumAllowed(!numAllowed)}/>
            <label htmlFor="numbers" className="text-black font-medium">Numbers</label>

            <input type="checkbox" id="symbols" value={symAllowed} onClick={() => setSymAllowed(!symAllowed)}/>
            <label htmlFor="symbols" className="text-black font-medium">Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
