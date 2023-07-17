import "./App.css";
import MiComponenenteNuevo from "./components/MiComponenenteNuevo";
import MiComponente from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">Ingreso Club</h1>
      </div>

      <div className="container">
        <div className="row">
          <MiComponenenteNuevo/>
        </div>
      </div>
    </div>
  );
}

export default App;