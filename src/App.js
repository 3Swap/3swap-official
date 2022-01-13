import { Route, Routes } from 'react-router-dom';
import './App.css';
import Swap from './Components/Swap';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/demo" element={<Swap />}></Route>
      </Routes>
    </div>
  );
}

export default App;
