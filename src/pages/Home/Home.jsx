import { Login } from '../../components/login/Login'
import { CustomDialog } from '../../components/Dialog/Dialog'
import React, { useState } from 'react'
import { SignUp } from '../SignUp'
import { Button } from '@/components/ui/button'

const Home = ({ openLoginModal, setOpenLoginModal, openSignUpModal, setOpenSignUpModal }) => {




  const renderModals = (
    <CustomDialog open={openLoginModal} setOpen={setOpenLoginModal} className={`w-max`} child={<Login />} />
  )
  const renderSignUpModals = (
    <CustomDialog open={openSignUpModal} setOpen={setOpenSignUpModal} child={<SignUp />} />
  )
  return (
    <div className='w-full'>
      {renderModals}
      {renderSignUpModals}
    </div>
  )
}

export default Home