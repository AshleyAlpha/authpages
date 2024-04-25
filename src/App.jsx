import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/pages/loginForm';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Home from './components/pages/home';
import Layout from './components/pages/layout';
function App() {
  

  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="signUpForm" element={<SignUpForm/>}/>
    <Route path="/layout" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
      </Routes>
      </BrowserRouter>
    
   </div>
  )
}

export default App
