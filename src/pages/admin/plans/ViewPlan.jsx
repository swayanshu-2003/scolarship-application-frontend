import axiosInstance from "@/utils/api";
import React, { useEffect, useState } from "react";

const ViewPlan = () => {
  const [fetchApi, setFetchApi] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/admin/plan");
      setFetchApi(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 ">
      {fetchApi.length > 0 ? (
        fetchApi.map((item, index) => <PlanCard key={index} item={item} />)
      ) : (
        <p>No plans available.</p>
      )}
    </div>
  );
};

export default ViewPlan;

export const PlanCard = ({ item }) => {
  return (
    <div className="col-span-1">
      <div className=" px-3 py-3 flex ">
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          {/* <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.plan_name}</div>
            <p className="text-gray-700 text-base">{item.description}
            </p>
          </div>
          <div className=" flex gap-2 px-6 py-4">
            <div className="space-y-1 items-center">
              <p className="text-xs text-zinc-400 italic"> Eligibility </p>
              <span className="inline-block border-yellow-400 border-2 bg-yellow-50 rounded-lg px-3 py-0.5 text-xs font-semibold text-yellow-500 mr-2">
                {item.eligibility_amt}
              </span>
            </div>

            <div className="space-y-1 items-center">
              <p className="text-xs text-zinc-400 italic"> Type </p>
              <span className="inline-block bg-green-50 border-green-400 border-2 rounded-lg px-3 py-0.5 text-xs font-semibold text-green-500 mr-2">
                {" "}
                {item.type}
              </span>
            </div>

            <div className="space-y-1 items-center">
              <p className="text-xs text-zinc-400 italic"> Start Date </p>
              <span className="inline-block bg-orange-50 border-orange-400 border-2 rounded-lg px-3 py-0.5 text-xs font-semibold text-orange-500">
                {item.plan_start_date}
              </span>
            </div>

            <div className="space-y-1 items-center">
              <p className="text-xs text-zinc-400 italic"> End Date </p>
              <span className="inline-block bg-purple-50 border-purple-400 border-2 rounded-lg px-3 py-0.5 text-xs font-semibold text-purple-500">
                {item.plan_end_date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
