import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";

import logo from '../../src/assets/images/ossp-logo.png'
import { Button } from "./ui/button";

export const Navbar = ({ openLoginModal, setOpenLoginModal, setOpenSignUpModal }) => {
  return (
    <>
      <div>
        <div className="fixed  left-0 w-full h-24  z-1 bg-white border-b backdrop-blur-lg bg-opacity-80">
          <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-4 ">
            <div className="relative flex  justify-evenly">
              <div className="flex flex-1 items-stretch justify-start">

                <div className="flex justify-center items-center gap-4">
                  <img src={logo} alt="" className="w-20 h-20 mt-2" />

                  <h className="font-bold text-xl">Odisha State Scholarship Portal</h>
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
                <button
                  onClick={() => setOpenLoginModal(true)}
                  className="text-gray-800 bg-green-400 hover:bg-green-500 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm"
                >
                  Login
                </button>
                <button onClick={() => setOpenSignUpModal(true)}
                  className="text-gray-800 bg-green-400 hover:bg-green-500 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                  href="#"
                >
                  Sign Up
                </button>
                <Button>hello</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
