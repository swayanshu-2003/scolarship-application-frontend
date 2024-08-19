import { Sidebar } from "../../section/dashboard/Sidebar";
import { useNavigate } from "react-router-dom";
import { getToken } from "@/utils/localstorageUtils";
import { useEffect, useState } from "react";
import { UserProfile } from "@/section/dashboard/UserProfile";
import { ApplcationScholarshipForm } from "@/components/forms/Applicatiion form/ApplicationScholarshipForm";
import CreatePlan from "../admin/plans/CreatePlan";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    if (getToken() === false) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-100 p-4 flex gap-6 items-start">
      <div className="w-1/5 sticky left-0 top-24">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="w-4/5 flex flex-col min-h-screen  mt-4 px-4">
        {activeSection === "dashboard" && <UserProfile />}
        {activeSection === "apply" && <ApplcationScholarshipForm />}
        {activeSection === "create_plans" && <CreatePlan />}
        
      </div>
    </div>
  );
};
