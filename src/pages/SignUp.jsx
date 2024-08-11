import { useState } from "react";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="xl:min-w-fit px-10 min-h-fit rounded-3xl">
        <h1 className="text-center text-3xl font-bold mt-2 mb-2">
          {" "}
          Create an account{" "}
        </h1>
        <hr />
        <div className="flex justify-center mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            
              <div className="flex flex-row gap-4">

                <div className="flex flex-col">
                <input
                  type="email"
                  id=""
                  className="py-3 p-5 rounded-md bg-zinc-50  md:w-[300px] w-[100px] outline-indigo-400 mt-5 "
                  placeholder="Enter email"
                  {...register("userEmail", {
                    required: "*This field is required",
                  })}
                  />
                {errors?.userEmail && (
                  <small className="text-xs text-red-600">
                    {" "}
                    {errors.userEmail.message}{" "}
                  </small>
                )}
                </div>
                
                <div className="flex flex-col">

                <input
                  type="number"
                  id=""
                  className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[300px] w-[100px] outline-indigo-400 mt-5"
                  placeholder="phone number"
                  {...register("userPhno", {
                    required: "*This field is required",
                  })}
                  />
                {errors?.userPhno && (
                  <small className="text-xs text-red-600">
                    {" "}
                    {errors.userPhno.message}{" "}
                  </small>
                )}
                </div>
              </div>

              <div className="flex gap-4">
                <div className=" rounded-md p-4  md:w-[300px] w-[100px] mx-auto mt-4">
                  <div className="flex gap-6">
                    <label className="flex bg-gray-100 text-gray-700 rounded-md w-1/2 px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                      <input type="radio" name="Country" />
                      <i class="pl-2">Male</i>
                    </label>

                    <label className="flex bg-gray-100 text-gray-700 rounded-md  w-1/2 px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                      <input type="radio" name="Country" />
                      <i class="pl-2">Female</i>
                    </label>
                  </div>
                </div>

                 <div className="flex flex-col">

                <input
                  type="date"
                  id=""
                  className="py-3 p-5 rounded-md bg-zinc-50 md:w-[300px] w-[100px] h-fit outline-indigo-400 mt-8"
                  placeholder="Date of Birth"
                  {...register("userDob", {
                    required: "*This field is required",
                  })}
                  />

                {errors?.userDob && (
                  <small className="text-xs text-red-600">
                    {" "}
                    {errors.userDob.message}{" "}
                  </small>
                )}
                </div>
              </div>

                  <div className="flex flex-col">

              <input
                type="number"
                id=""
                className="py-3 p-5 rounded-md bg-zinc-50 w-full outline-indigo-400 mt-5 "
                placeholder="Adhaar Number"
                {...register("userAdhaar", {
                  required: "*This field is required",
                })}
                />
              {errors?.userAdhaar && (
                <small className="text-xs text-red-600">
                  {" "}
                  {errors.userAdhaar.message}{" "}
                </small>
              )}
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col"> 

                <input
                  type="text"
                  id=""
                  className="py-3 p-5 rounded-md h-fit bg-zinc-50  md:w-[300px] w-[100px] outline-indigo-400 mt-8"
                  placeholder="username"
                  {...register("username", {
                    required: "*This field is required",
                  })}
                  />
                {errors?.username && (
                  <small className="text-xs text-red-600">
                    {" "}
                    {errors.username.message}{" "}
                  </small>
                )}
                </div>

                <div className="relative  md:w-[300px] w-[100px] mt-8">
                  <select 
                    className=" py-3 p-5 rounded-md  bg-zinc-50 w-64 outline-indigo-400 "
                    value={selectedOption}
                    onChange={handleSelect}
                    {...register("userRoll", {required:"This is required"})}
                    
                  
                  >
                    
                  
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    <option value="Institute">Institute</option>
                  </select>
                </div>
              </div>
             
             

            <div>
              <button
                type="submit"
                className="py-3 bg-indigo-400 text-white w-full mt-6  rounded-md font-bold"
              >
                Sign Up
              </button>
            </div>

            <p className="text-sm font-light text-black  mt-4">
              Already have an account?
              <a
                className="font-medium text-blue-600 hover:underline ml-3 dark:text-blue-500"
                href="/login"
              >
                Sign in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
