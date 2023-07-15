import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import MiComponente from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">Tienda Online</h1>
        <p className="lead"> Selecciona un producto </p>
      </div>

      <div className="container">
        <div className="row">
          {
            /*Los Error Boundaries ayudan a mostrar información
            si llega a haber un error*/
          }
          <ErrorBoundary>
            <MiComponente />
            <MiComponente title="Producto 2" />
            <MiComponente title="Producto 3" />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;