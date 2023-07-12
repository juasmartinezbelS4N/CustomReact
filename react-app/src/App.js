import "./App.css"
import { useState, useEffect } from "react"

function App() {
  // Initial state, recuerda que esto es el initial state
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/juasmartinezbelS4N")
      .then((response) => response.json())
      .then(setData) // (data) => {setData(data)}
  }, []) //Se triggea por nada

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }
  return <div className="App">Data</div>
}

export default App
