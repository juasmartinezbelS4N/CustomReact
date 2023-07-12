import "./App.css"
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text"
          onChange = {(event) => setTitle(event.target.value)}
          value = {title}
          placeholder="Color title..." />
        <input onChange = {(event) => setColor(event.target.value)}
          value = {color} type="color" />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default App
