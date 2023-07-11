import "./App.css"
import { useState } from "react"

function App() {
  /**
   * const what = useState('currentState');
   * console.log(what);
   * [currentState, setFunction]
   * */

  const [emotion, setEmotion] = useState("Happy Happy")

  return (
    <div className="App">
      <h1>My current Emotion is: {emotion} </h1>
      <button onClick={() => setEmotion("Sed")}>
        I'm sad
      </button>
      <button onClick={() => setEmotion("Excited")}>
        I'm Excited
      </button>
    </div>
  )
}

export default App
