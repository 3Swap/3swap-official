import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Tokenomics from './Components/Tokenomics';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Tokenomics/>
    </div>
  );
}

export default App;
