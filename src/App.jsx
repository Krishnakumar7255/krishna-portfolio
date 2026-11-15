import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Navbar from "./Container/Navbar";
import Hero from "./Container/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar/>
     
     <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>



    </BrowserRouter>
  )
}

export default App
