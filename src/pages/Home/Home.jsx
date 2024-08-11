import { Login } from '../../components/login/Login'
import Dialog from '../../components/ui/Dialog'
import React, { useState } from 'react'
import { SignUp } from '../SignUp'

const Home = ({ openLoginModal, setOpenLoginModal, openSignUpModal, setOpenSignUpModal }) => {




  const renderModals = (
    <Dialog open={openLoginModal} setOpen={setOpenLoginModal} child={<Login />} />
  )
  const renderSignUpModals = (
    <Dialog open={openSignUpModal} setOpen={setOpenSignUpModal} child={<SignUp />} />
  )
  return (
    <div className='w-full'>
      {renderModals}
      {renderSignUpModals}
    </div>
  )
}

export default Home