import { Login } from '../../components/login/Login'
import  Dialog  from '../../components/ui/Dialog'
import React, { useState } from 'react'

const Home = ({openLoginModal, setOpenLoginModal}) => {

    
    
    
    const renderModals = (
        <Dialog open={openLoginModal} setOpen={setOpenLoginModal} child={<Login/>} />
    )
    
    return (
    <div className='w-full'>

    </div>
  )
}

export default Home