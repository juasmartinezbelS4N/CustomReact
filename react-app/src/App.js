import "./App.css"
import { useRef } from "react"
// useRef alcanza un elemento impuesto y usa su valor

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = '';
    hexColor.current.value = '';
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text"
          ref={txtTitle}
          placeholder="Color title..." />
        <input ref={hexColor} type="color" />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default App
