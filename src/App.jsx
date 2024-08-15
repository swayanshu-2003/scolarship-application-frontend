import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './components/login/Login';
import { SignUp } from './pages/SignUp';
import Home from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';


function App() {

  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openSignUpModal, setOpenSignUpModal] = useState(false)



  return (
    <>
      <Router>

        <Navbar openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} openSignUpModal={openSignUpModal} setOpenSignUpModal={setOpenSignUpModal} />
        <Routes>
          <Route path='/' element={<Home openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} openSignUpModal={openSignUpModal} setOpenSignUpModal={setOpenSignUpModal} />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signUp" element={<SignUp />} /> */}
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
       
      </Router>
    </>
  )
}

export default App
