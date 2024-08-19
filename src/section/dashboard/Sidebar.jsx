import React, { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import { getRole } from "@/utils/localstorageUtils";

export const Sidebar = ({ activeSection, setActiveSection }) => {
  const [role, setRole] = useState(null);
  const [sidebarOptions, setSidebarOptions] = useState(null);

  useEffect(() => {
    const userRole = getRole();
    setRole(userRole);
  }, []);

  const studentSidebarOptions = [
    {
      icon: <MdOutlineDashboard color="blue" size={24} />,
      label: "Dashboard",
      value: "dashboard",
    },
    {
      icon: <CiCreditCard1 color="blue" size={24} />,
      label: "Schemes & Eligibility",
    },
    {
      icon: <TfiCup color="blue" size={20} />,
      label: "Apply Scholarship",
      value: "apply",
    },
    {
      icon: <CiCreditCard1 color="blue" size={24} />,
      label: "View/Renew Application",
    },
    {
      icon: <CiCreditCard1 color="blue" size={28} />,
      label: "View Change Category Request",
    },
    {
      icon: <CiCreditCard1 color="blue" size={24} />,
      label: "Apply Freeship Card",
    },
    {
      icon: <IoIosNotificationsOutline color="blue" size={24} />,
      label: "Notifications",
    },
    {
      icon: <RiLockPasswordLine color="blue" size={24} />,
      label: "Change Password",
    },
  ];

  const adminSidebarOptions = [
    {
      icon: <MdOutlineDashboard color="blue" size={24} />,
      label: "Dashboard",
      value: "dashboard",
    },
    {
      icon: <CiCreditCard1 color="blue" size={24} />,
      label: "View Plans",
      value: "viewplans",
    },
    {
      icon: <CiCreditCard1 color="blue" size={24} />,
      label: "Create Plans",
      value: "create_plans",
    },
    {
      icon: <CiCreditCard1 color="blue" size={24} />,
      label: "Delete Plans",
      value: "deleteplans",
    },
  ];

  // const sidebarOptions = role === "admin" ? adminSidebarOptions : studentSidebarOptions;

  useEffect(() => {
    switch (role) {
      case "admin":
        setSidebarOptions(adminSidebarOptions);
        break;
      case "STUDENT":
        setSidebarOptions(studentSidebarOptions);
        break;
      default:
        setSidebarOptions(studentSidebarOptions);
    }
  }, [role]);

  return (
    <div className="w-72 m-4 shadow-xl bg-white sticky left-0 top-0">
      <div className="h-36 bg-blue-400 rounded-lg"></div>
      <div className="rounded-full w-36 h-36 bg-white flex justify-center items-center border-white mt-[-5rem] m-auto">
        <img src="logo-1.webp" alt="" className="w-32 h-32 rounded-full" />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-3 mb-4 bg-white">
        <h2 className="text-xl font-bold">Albert Einstein</h2>
        <p className="text-blue-400 text-md">Unique ID : 1234567</p>
        <p className="text-sm">Last Login: 12/2/2024 10:30AM</p>
      </div>
      <hr />
      <div className="p-4 mt-4 bg-white">
        {sidebarOptions?.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveSection(item?.value)}
            className={`flex gap-3 items-center hover:bg-gray-100 h-10 p-4 hover:rounded-lg mb-3 ${
              activeSection === item.value && "bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
