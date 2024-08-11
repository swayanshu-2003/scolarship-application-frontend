import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from './components/login/Login';
import { SignUp } from './pages/SignUp';
import Home from './pages/Home/Home';


function App() {

  const [openLoginModal,setOpenLoginModal] = useState(false)

   

  return (
    <>
    <Router>

     <Navbar  openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} />
     <Routes>
      <Route path='/' element={<Home openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} />}/>
     <Route path="/login" element={<Login />} />
     <Route path="/signUp" element={<SignUp />} />
     </Routes>
    </Router>
    </>
  )
}

export default App
