import "./App.css"
import { useState } from "react"

// This is a custom hook. Always use 'use' as prefix
function useInput(initialValue){
  const [value, setValue] = useState(initialValue);
  return [{value, onChange: e => setValue(e.target.value)}, () => setValue(initialValue)]
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text"
          {...titleProps} // Meterá automaticamente el value y el onChange
          placeholder="Color title..." />
        <input  {...colorProps} type="color" />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default App
