import { toast } from "@/components/ui/use-toast";
import axiosInstance from "@/utils/api";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ClockLoader } from "react-spinners";

const CreatePlan = () => {

    const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const scholarshipTypeOptions = [
    {
      label: "Pre Matric",
      value: "pre-matric",
    },
    {
      label: "Post Matric",
      value: "post-matric",
    },
    {
      label: "Post Graduate",
      value: "post-graduate",
    },
    {
      label: "PHD",
      value: "phd",
    },
  ];
  toast({
    description: "✅ Plan created successfully."
})
 
   const onSubmit = async(data) => {
            setIsLoading(true)
           const response = await axiosInstance.post("/admin/plan",data) 
           console.log(data)
           console.log(response)
           if(response.status === 200){
            reset()
            toast({
                title : "✅ Plan created successfully."
            })
           }
            setIsLoading(false)  
   }
  return (
    <>
      <div className=" w-full bg-white p-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 w-full  gap-4 justify-center items-center  ">
          <h1 className="text-3xl mb-8">Create Plan</h1>
          <div className="flex flex-col gap-1 items-start mb-4">
            <h2>Plan Name : </h2>
            <input
              type="text"
              className="p-1 rounded-md border-2 w-[35rem]  outline-none h-10"
              {...register("plan_name", {
                required: "*This field is required",
              })}
            />
            {errors.plan_name && (
              <small className="text-xs text-red-600">
                {errors.plan_name.message}
              </small>
            )}
          </div>

          <div className="flex flex-col gap-1 items-start mb-4">
            <h1>Description :</h1>
            <textarea className="w-[35rem] rounded-md py-3 p-5 border-2  " />
          </div>
          <div className="flex gap-1 w-[35rem] items-center">
            <div className="flex flex-col gap-1  w-1/2">
              <h1>Eligibility :</h1>
              <input
                type="number"
                className="p-1 rounded-md border-2 w-full  outline-none h-10"
                {...register("eligibility_amt", {
                  required: "*This field is required",
                })}
              />
              {errors.eligibility_amt && (
                <small className="text-xs text-red-600">
                  {errors.eligibility_amt.message}
                </small>
              )}
            </div>

            <div className=" flex flex-col gap-1  w-1/2">
              <h2>Type :</h2>
              <select
                {...register("type", { required: "*This field is required" })}
                className="w-full border-2 p-1  rounded-md h-10"
              >
                {scholarshipTypeOptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.type && (
                <small className="text-xs text-red-600">
                  {errors.type.message}
                </small>
              )}
            </div>
          </div>

          <div className="flex gap-1 w-[35rem] ">
            <div className="flex flex-col gap-1 items-start w-1/2">
              <h2>Start Date:</h2>
              <input
                type="date"
                className="p-1 rounded-md  border-2 w-full outline-none h-10 "
                placeholder="plan start date"
                {...register("plan_start_date", {
                  required: "*This field is required",
                })}
              />
              {errors.plan_start_date && (
                <small className="text-xs text-red-600">
                  {errors.plan_start_date.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-1 w-1/2 items-start mb-4">
              <h2>End Date:</h2>
              <input
                type="date"
                className="p-1 rounded-md border-2 w-full outline-none h-10"
                placeholder="plan end date"
                {...register("plan_end_date", {
                  required: "*This field is required",
                })}
              />
              {errors.plan_end_date && (
                <small className="text-xs text-red-600">
                  {errors.plan_end_date.message}
                </small>
              )}
            </div>
          </div>
          <div className="w-[35rem] flex justify-end">
            <button  className="bg-blue-400 py-2 px-3 hover:bg-blue-500 text-white rounded-md">
            {isLoading?<ClockLoader color="#fcfcfc" size={28}  /> : "Create" }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePlan;
