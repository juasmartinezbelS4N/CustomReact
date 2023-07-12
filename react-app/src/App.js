import "./App.css"
import { useState, useEffect } from "react"

function GithubUser({name, location, company, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{company}</p>
      <img src={avatar} height={150} alt="Sebastian logo"/>
    </div>
  )
}

function App() {
  // Initial state, recuerda que esto es el initial state
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/juasmartinezbelS4N")
      .then((response) => response.json())
      .then(setData) // (data) => {setData(data)}
  }, []) //Se triggea por nada

  if (data) {
    return <GithubUser name={data.name} location={data.location}
      company={data.company}
      avatar={data.avatar_url} />
  }
  return <div className="App">Data</div>
}

export default App
