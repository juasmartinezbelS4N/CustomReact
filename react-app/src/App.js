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
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/juasmartinezbelS4N")
      .then((response) => response.json())
      .then(setData)
      .then(()=>setLoading(false))
      .catch(setError) //(error) => {setError(error)}
  }, [])

  if(loading) return <h1>Loading</h1>
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if(!data) return null

  if (data) {
    return <GithubUser name={data.name} location={data.location}
      company={data.company}
      avatar={data.avatar_url} />
  }
  return <div className="App">Data</div>
}

export default App
