import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import axios from "axios";
import { setToken, setUser } from "@/utils/localstorageUtils";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";

export const SignUp = ({setOpen, setOpenLoginModal}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
       setIsLoading(true)
    const payload = {
      ...data,
    }
    console.log(payload);
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, payload)
    console.log(response);
    if(response?.status === 201){
      // setUser(response?.data?.user)
      // setRole(response?.data?.role)
      // setToken(response?.data?.token)
      navigate("/dashboard")
       setIsLoading(false)
       setOpenLoginModal(true)
       setOpen(false)
    }
  };

  return (
    <div className="xl:min-w-fit px-10 min-h-fit rounded-3xl">
      <h1 className="text-center text-3xl font-bold mt-2 mb-2">
        Create an account
      </h1>
      <hr />
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="email"
                className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
                placeholder="Enter email"
                {...register("userEmail", {
                  required: "*This field is required",
                })}
              />
              {errors.userEmail && (
                <small className="text-xs text-red-600">
                  {errors.userEmail.message}
                </small>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="number"
                className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
                placeholder="Phone number"
                {...register("userPhno", {
                  required: "*This field is required",
                })}
              />
              {errors.userPhno && (
                <small className="text-xs text-red-600">
                  {errors.userPhno.message}
                </small>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <div className="flex gap-4">
                  <label className="flex items-center bg-gray-100 text-gray-700 rounded-md px-3 py-2 hover:bg-indigo-300 cursor-pointer">
                    <input
                      type="radio"
                      value="male"
                      {...register("userGender", { required: "*This field is required" })}
                    />
                    <span className="pl-2">Male</span>
                  </label>

                  <label className="flex items-center bg-gray-100 text-gray-700 rounded-md px-3 py-2 hover:bg-indigo-300 cursor-pointer">
                    <input
                      type="radio"
                      value="female"
                      {...register("userGender", { required: "*This field is required" })}
                    />
                    <span className="pl-2">Female</span>
                  </label>
                </div>
                {errors.userGender && (
                  <small className="text-xs text-red-600">
                    {errors.userGender.message}
                  </small>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="date"
                  className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
                  placeholder="Date of Birth"
                  {...register("userDob", {
                    required: "*This field is required",
                  })}
                />
                {errors.userDob && (
                  <small className="text-xs text-red-600">
                    {errors.userDob.message}
                  </small>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="number"
                className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
                placeholder="Aadhaar Number"
                {...register("userAdhaar", {
                  required: "*This field is required",
                })}
              />
              {errors.userAdhaar && (
                <small className="text-xs text-red-600">
                  {errors.userAdhaar.message}
                </small>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
                  placeholder="Username"
                  {...register("userName", {
                    required: "*This field is required",
                  })}
                />
                {errors.userName && (
                  <small className="text-xs text-red-600">
                    {errors.userName.message}
                  </small>
                )}
              </div>

              <div className="flex flex-col">
                <select
                  className="py-3 p-5 rounded-md bg-zinc-50 outline-indigo-400"
                  {...register("roleName", { required: "*This field is required" })}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="STUDENT">Student</option>
                  <option value="INSTITUTE">Institute</option>
                </select>
                {errors.roleName && (
                  <small className="text-xs text-red-600">
                    {errors.roleName.message}
                  </small>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="py-3 bg-indigo-400 text-white w-full mt-6 rounded-md font-bold"
              >
                 {isLoading?<ClockLoader color="#fcfcfc" size={28}  /> : "Sign Up" }   
              </button>
            </div>

            <p className="text-sm font-light text-black mt-4">
              Already have an account?
              <a
                className="font-medium text-blue-600 hover:underline ml-3"
                href="/login"
              >
                Sign in here
              </a>
            </p>
          </div >
        </form>
      </div>
    </div>

  );
};
