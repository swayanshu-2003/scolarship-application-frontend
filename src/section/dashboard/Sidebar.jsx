import { MdOutlineDashboard } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";


export const Sidebar = () => {
    return(
        <>
         <div className="w-72  m-4 shadow-xl bg-white">
        <div className="h-36 bg-blue-400 "></div>
             <div className="rounded-full w-36 h-36 bg-white flex justify-center items-center border-white mt-[-5rem] m-auto">
                <img src="logo-1.webp" alt="" className="w-32 h-32 rounded-full "  />
             </div>

        <div className=" flex flex-col justify-center items-center gap-2 py-3 mb-4 bg-white">
          <h2 className="text-xl font-bold">Albert Einstein</h2>
          <p className="text-blue-400 text-md">Unique ID : 1234567</p>
          <p className="text-sm">Last Login: 12/2/2024  10:30AM </p>
        </div>
        <hr />
        <div className="p-4 mt-4 bg-white">
          <div className="flex gap-3 items-center mb-3">
            <MdOutlineDashboard color="blue" size={24} />
            <a href="#">Dashboard</a>
          </div>
          <div className="flex gap-3 items-center mb-3 ">
          <CiCreditCard1 color="blue" size={24}/>
          <a href="#">Schemes & Eligibility</a>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <TfiCup color="blue" size={20} />
            <a href="#">Apply Scholarship</a>
          </div>
          <div className="flex gap-3 items-center mb-3">
          <CiCreditCard1 color="blue" size={24}/>
          <a href="#">View/Renew Application </a>
          </div>
          <div className="flex gap-3 items-center mb-3">
          <CiCreditCard1 color="blue" size={24}/>
          <a href="#">View Change Category Request</a>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <CiCreditCard1 color="blue"size={24} />
            <a href="#">Apply Freeship Card</a>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <IoIosNotificationsOutline color="blue" size={24}/>
            <a href="#">Notifications</a>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <RiLockPasswordLine color="blue" size={24}/>
            <a href="#">Change Password</a>
          </div>
        </div>
      </div>
        </>
    )
}