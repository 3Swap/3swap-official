import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import RoadMap from './Components/RoadMap';
import Tokenomics from './Components/Tokenomics';
import Why from './Components/Why';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Tokenomics />
      <RoadMap />
      <Why/>
    </div>
  );
}

export default App;
