import "./App.css"
import Item from "./components/Item"

const elementos = [
  {
    id: 1,
    titulo: "Café",
    definicion:
      "Bebida que se hace por infusión con la semilla tostada y molida del cafeto.",
  },
  {
    id: 1,
    titulo: "Té",
    definicion: "Infusión de las hojas del té.",
  },
  {
    id: 1,
    titulo: "Chocolate",
    definicion:
      "Bebida que se hace de chocolate desleído y cocido en agua o en leche.",
  },
]

function App() {
  const listado = elementos.map((miItem) => (
    <Item titulo={miItem.titulo} definicion={miItem.definicion} />
  ))
  return (
    <div className="App">
      <div className="container">
        <dl>
          {listado}
        </dl>
      </div>
    </div>
  )
}

export default App
