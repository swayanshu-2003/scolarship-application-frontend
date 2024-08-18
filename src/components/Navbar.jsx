import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CustomDialog } from "../components/Dialog/Dialog";
import { Login } from "./login/Login";
import { SignUp } from "@/pages/SignUp";
import { useState } from "react";

export const Navbar = ({
  openLoginModal,
  setOpenLoginModal,
  openSignUpModal,
  setOpenSignUpModal,
}) => {
  const [openLogoutModal, setOpenLogoutModal] = useState();
  const renderModals = (
    <CustomDialog
      open={openLoginModal}
      setOpen={setOpenLoginModal}
      className={`w-max`}
      child={<Login setOpen={setOpenLoginModal} />}
    />
  );
  const renderSignUpModals = (
    <CustomDialog
      open={openSignUpModal}
      setOpen={setOpenSignUpModal}
      child={
        <SignUp
          setOpen={setOpenSignUpModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      }
    />
  );

  const renderLogoutModals = (
    <CustomDialog
      open={openLogoutModal}
      setOpen={setOpenLogoutModal}
      child={
        <ConfirmLogout
          setOpen={setOpenLogoutModal}
          
        />
      }
    />
  )

  return (
    <>
      <div className="w-full">
        {renderModals}
        {renderSignUpModals}
        {renderLogoutModals}
      </div>
      <div>
        <div className="sticky top-0  left-0  w-full   z-10 bg-white border-b backdrop-blur-lg bg-opacity-80">
          <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-4 ">
            <div className="relative flex  justify-evenly">
              <div className="flex flex-1 items-stretch justify-start">
                <div className="flex justify-center items-center gap-4">
                  <img
                    src="logo-1.webp"
                    alt=""
                    className="w-20 h-20 mt-2 mb-2 rounded-full"
                  />

                  <h1 className="font-bold text-xl"> Scholarship Portal</h1>
                </div>
              </div>

              <nav className="flex gap-6 justify-center items-center mr-4">
                <Link to={"/about"}>About</Link>
                <Link to={"/schemes"}>Schemes</Link>
                <Link to={"/apply"}>How to Apply</Link>
                <Link to={"/faqs"}>FAQs</Link>
                <Link to={"/contact"}>Contact Us</Link>
              </nav>

              <div className="flex justify-center align-middle mr-3">
                <button className="rounded-full hover:bg-blue-500 p-2 h-fit mt-6 hover:text-white">
                  <CiSearch size={28} />
                </button>
              </div>

              <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                {localStorage.getItem("token") ? (
                   <button
                   onClick={() => setOpenLogoutModal(true)}
                   className="text-gray-800 bg-red-400 hover:bg-red-500 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                   href="#"
                 >
                   Logout
                 </button>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenLoginModal(true)}
                      className="text-gray-800 bg-green-400 hover:bg-green-500 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setOpenSignUpModal(true)}
                      className="text-gray-800 bg-green-400 hover:bg-green-500 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                      href="#"
                    >
                      Sign Up
                    </button>
                  </>
                 
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ConfirmLogout = ({setOpen}) => {

  const navigate = useNavigate();
 const handleLogoutButton = () => {
       localStorage.clear();
       navigate("/")
       setOpen(false)
 }
 const handleCancelButton = () => {
  navigate("/dashboard")
  setOpen(false)
 }

  return (
    <>
      <div>
        <h1 className="text-xl">Are you sure you want to logout?</h1>
        <div className="flex gap-4 mt-4 justify-end ">
        <button
         onClick={handleLogoutButton}
         className="px-4 py-2 bg-blue-400 rounded-md"
         >Confirm</button>
        <button onClick={handleCancelButton} className="px-4 py-2 bg-orange-400 rounded-md">Cancel</button>
         </div>
      </div>
    </>
  );
};
