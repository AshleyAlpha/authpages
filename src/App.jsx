import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm'
import SignUpForm from './components/signUpForm';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signUpForm" element={<SignUpForm />} />
      </Routes>
      </BrowserRouter>
    
   </div>
  )
}

export default App
