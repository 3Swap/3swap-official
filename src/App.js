import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import RoadMap from './Components/RoadMap';
import SocialMedia from './Components/SocialMedia';
import Team from './Components/Team';
import Tokenomics from './Components/Tokenomics';
import Why from './Components/Why';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      {/* <About />
      <Tokenomics />
      <RoadMap />
      <Why />
      <SocialMedia />
      <Team />
      <Footer/> */}
    </div>
  );
}

export default App;
