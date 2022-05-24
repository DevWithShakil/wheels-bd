import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Services from './components/Pages/Services/Services';
import Purchase from './components/Pages/Purchase/Purchase';
import About from './components/Pages/About/About';


function App() {
  return (
    <div class='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="services" element={<Services />} />
        <Route path="purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
