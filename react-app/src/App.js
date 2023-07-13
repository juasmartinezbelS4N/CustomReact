import "./App.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <Link to="/">Hom</Link>
      <Link to="/about"> Aboot</Link>
      <Link to="/contact"> Contas</Link>
      <h1>My Website</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <Link to="/">Hom</Link>
      <Link to="/about"> Aboot</Link>
      <Link to="/contact"> Contas</Link>
      <h1>About us</h1>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <Link to="/">Hom</Link>
      <Link to="/about"> Aboot</Link>
      <Link to="/contact"> Contas</Link>
      <h1>Contact Us</h1>
    </div>
  )
}

function App() {
  return <Home />
}

export { App, About, Contact }
