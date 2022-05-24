import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';
import Services from './components/Pages/Services/Services';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
