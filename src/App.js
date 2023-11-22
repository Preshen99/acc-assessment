import './App.css';
import Navbar from './Views/Navbar/Navbar';
import Header from './Views/Header/Header';
import Body from './Views/Body/Body';
import FooterSection from './Views/Footer/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Header></Header>

      <Body></Body>

      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
