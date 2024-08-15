import { FaUserGraduate } from "react-icons/fa";
import { TbGenderBigender } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";

import { useEffect, useState } from "react";
import { getUser } from "@/utils/localstorageUtils";




export const UserProfile = () => {

  const [userData, setUserData] = useState(null);
  const [user , setUser] = useState(null);



  useEffect(() => {
    const fetchUser = async () => {
        try {
            const data = await getUser();
            setUser(JSON.parse(data));
            console.log(user)

            const parsedData = JSON.parse(data)

            const userDetails = [
              {
              icon :  <FaUserGraduate color="orange" size={28} />,
              label : "Name",
              value : parsedData?.userName,
             },
              {
              icon :  <TbGenderBigender color="orange" size={28} />,
              label : "Gender",
              value : parsedData?.userGender,
             },
              {
              icon :   <SlCalender  color="orange" size={28}/>,
              label : "Date of Birth",
              value : parsedData?.userDob,
             },
              {
              icon :  <MdEmail color="orange" size={28}/>,
              label : "Email",
              value : parsedData?.userEmail,
             },
              {
              icon :  <FaPhoneAlt color="orange" size={24}/>,
              label : "Phone Number",
              value : parsedData?.userPhno,
             },
              {
              icon :  <CiCreditCard1 color="orange" size={28}/>,
              label : "Adhaar Number",
              value : parsedData?.userAdhaar,
             },
            
          ]
          setUserData(userDetails)
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    fetchUser();
}, []);

 
  return (
    <>
      <div className="border shadow-xl bg-white w-[70rem] p-4 mx-auto ml-[20rem] mt-[-43rem] flex flex-col items-start">
        <h1 className="text-xl text-blue-400 mb-4">Profile Details</h1>

        <div className="grid grid-cols-3  w-full gap-6">

          {userData !== null && userData.map((item, index)=> 
          <div key={index} className="flex items-center gap-3">
            {item.icon}
            <div>
              <p className="text-gray-600 text-md">{item.label}</p>
              <p className="text-gray-600 text-lg font-bold">{item.value}</p>
            </div>
          </div>
        )}
          
          
        </div>


        
      </div>
    </>
  );
};
