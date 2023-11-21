import logo from './logo.svg';
import './App.css';
import Navbar from './Views/Navbar/Navbar';
import Header from './Views/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Header></Header>

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
