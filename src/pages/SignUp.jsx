export const SignUp = () => {
  return (
    <>


  <div  className ="xl:w-[700px] px-10 h-[400px] rounded-3xl xl:shadow-xl">
    <h1  className ="text-center text-3xl font-bold mt-2 mb-2"> Create an account </h1>
    <hr/>
    <div  className ="flex justify-center mt-10">
      <form action="">
        <input type="text" name="" id=""   className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400 mt-5 "  placeholder="your full name"/>
        <br></br>
        <input type="text" name="" id=""  className ="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400 mt-5" placeholder="username"/>
        <br></br>
        <input type="text" name="" id=""  className ="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400 mt-5" placeholder=" password"/>
       <div>

        <button type="submit"  className ="py-3 bg-indigo-400 text-white md:w-[500px] w-[300px] mt-6  rounded-md font-bold">Sign Up</button>
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
