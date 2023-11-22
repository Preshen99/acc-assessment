import logo from './logo.svg';
import './App.css';
import Navbar from './Views/Navbar/Navbar';
import Header from './Views/Header/Header';
import Body from './Views/Body/Body';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Header></Header>

      <Body></Body>
    </div>
  );
}

export default App;
