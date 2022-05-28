import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Services from './components/Pages/Services/Services';
import Purchase from './components/Pages/Purchase/Purchase';
import About from './components/Pages/About/About';
import SignUp from './components/Pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import Parts from './components/Pages/Parts'
import RequireAuth from './components/Pages/Login/RequireAuth';
import Blogs from './components/Pages/Blogs/Blogs';
import Portfolio from './components/Pages/MyProfile/Portfolio';




function App() {

  return (
    <div class='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/order/:id' element={<Parts></Parts>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

