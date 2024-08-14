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
    <>
    <div className='w-full'>
      {renderModals}
      {renderSignUpModals}
    </div>
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        ></div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Company Info */}
            <div className="w-full ml-10 md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
                Empowering <strong className='text-yellow-400'>Dreams</strong>
                <br />
                Enabling <strong className='text-yellow-400'>Success</strong>
                
              </h1>
              <p className="text-xl mb-8 text-gray-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perferendis, ea iure nesciunt minima debitis, odit aut quae voluptatibus in eos exercitationem totam culpa porro commodi animi sequi incidunt, dicta repellendus modi nemo recusandae vero voluptatem.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                >
                  Check Scholarship Eligibility
                </a>
               
              </div>
            </div>         
          </div>
        </div>
      </section>
    </main>
    
    </>

  )
}

export default Home