import "./App.css"
import { useState, useEffect } from "react"

function App() {
  /**
   * const what = useState('currentState');
   * console.log(what);
   * [currentState, setFunction]
   * */

  const [emotion, setEmotion] = useState("Happy Happy")

  useEffect(
    () => {
      console.log(`I'm ${emotion} right now`)
    },
    [emotion] //This is the dependency array, it's only called when this changes. Empty just once
  )

  const [secondary, setSecondary] = useState("tired")

  useEffect(
    () => {
      console.log(`I'm ${emotion} and very ${secondary} right now`)
    },
    [secondary, emotion] //Funciona como un .start, solo se activa cuando algo cambio
  )

  return (
    <div className="App">
      <h1>My current Emotion is: {emotion} </h1>
      <button onClick={() => setEmotion("Sed")}>I'm sad</button>
      <button onClick={() => setEmotion("Excited")}>I'm Excited</button>
      <h1>My secondary Emotion is: {secondary} </h1>
      <button onClick={() => setSecondary("Grateful")}>I'm Grateful</button>
      <button onClick={() => setSecondary("Awake")}>I'm Awake</button>
    </div>
  )
}

export default App
