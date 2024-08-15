import { UserProfile } from "@/section/dashboard/UserProfile";
import { Sidebar } from "../../section/dashboard/Sidebar";
import { useNavigate } from "react-router-dom";
import { getToken } from "@/utils/localstorageUtils";
import { useEffect } from "react";



export const Dashboard = () => {
const navigate = useNavigate();

  useEffect(()=> {
    if(getToken() === false){
      navigate("/")
    }
  },[])

  return (
    <>
    <div className="bg-gray-100 ">
        <Sidebar/>
        <UserProfile/>
    </div>
     
    </>
  );
};
