import logo from './logo.svg';
import './App.css';

const [firstCity, ...otherCities] = ["Tokyo", "Bogota", "Paris"];

console.log(firstCity);
console.log(otherCities);

function App({library}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {library}
        </a>
      </header>
    </div>
  );
}

export default App;
