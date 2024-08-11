import { Link } from "react-router-dom";
import { FontChange } from "./FontChange";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";


export const Navbar = ({openLoginModal, setOpenLoginModal}) => {
  return (
    <>
      <nav className="bg-gray-800 text-white py-3 px-4 flex left-0 w-full z-50 fixed">
        <LanguageToggle />
        <ThemeToggle />
        <FontChange />
      </nav>

      <div>
        <div className="fixed  left-0 w-full z-1 mt-16 bg-white border-b backdrop-blur-lg bg-opacity-80">
          <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-1 items-stretch justify-start">
                <a className="flex flex-shrink-0 items-center" href="#">
                
                </a>
              </div>
              <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                <button
                 onClick={() => setOpenLoginModal(true)}
                  className="text-gray-800 bg-green-400 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm"
                >
                  Login
                </button>
                <Link to={"/signUp"}
                  className="text-gray-800 bg-green-400 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                  href="#"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
