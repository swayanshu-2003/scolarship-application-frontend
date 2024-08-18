import { useState } from "react";
import { useForm } from "react-hook-form";

export const Step1Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  return (
    <>
     <div className="flex flex-col w-80 m-auto mt-6 ">
        <h1 className="text-xl m-auto mb-4">Select your Plan</h1>
        <select
          className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
          {...register("planName", { required: "*This field is required" })}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="PLAN1">Plan1</option>
          <option value="PLAN2">Plan2</option>
          <option value="PLAN3">Plan3</option>
          <option value="PLAN4">Plan4</option>
        </select>
        {errors?.planName && (
          <small className="text-xs text-red-600">
            {errors.planName.message}
          </small>
        )}
      </div>

     

    </>
  );
};




