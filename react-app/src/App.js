import "./App.css"
import { useState, useReducer } from "react"

function App() {
  // const [checked, setChecked] = useState(false)
  const [checked, setChecked] = useReducer((checked) => !checked, false)

  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        // onChange={() => setChecked((checked) => !checked)}
        onChange={setChecked}
      />
      <label>{checked ? "Checked" : "not checked"} </label>
    </div>
  )
}

export default App
