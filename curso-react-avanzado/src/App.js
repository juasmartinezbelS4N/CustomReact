import './App.css';
import MiBoton from './components/MiBoton';
import MiCheck from './components/MiCheck';
import MiOtroBoton from './components/MiOtroBoton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiBoton />
        <MiOtroBoton/>
        <MiCheck/>
      </header>
    </div>
  );
}

export default App;
