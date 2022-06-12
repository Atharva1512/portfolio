import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Footer from './Components/footer/Footer';
import Projects from "./Components/projects/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import Layer from './Layer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layer/>}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
