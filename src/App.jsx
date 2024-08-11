import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';


function App() {


  return (
    <>
    <Router>

     <Navbar/>
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/signUp" element={<SignUp />} />
     </Routes>
    </Router>
    </>
  )
}

export default App
