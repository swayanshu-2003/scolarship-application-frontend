import { useForm } from "react-hook-form"

export const Login = () => {
  
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
    console.log(data);    
    }

    

    return(

        <>

                <div className="xl:w-[700px] px-10 h-[350px] rounded-3xl  ">
                    <h1 className="text-center text-3xl font-bold mt-2 mb-2">Login</h1>
                    <hr />
                    <div className="flex justify-center mt-10">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col">

                            <input 
                            {...register("username", {required: "This field is required"})}
                            type="text" 
                            
                            id="email" 
                            className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400" 
                            placeholder="Enter your username" 
                            />
                            {errors?.username && <small className="text-xs text-red-600"> {errors.username.message} </small>}
                            <br /><br />
                            
                            <input 
                            {...register("password",{required: "This field is required"})}
                            type="password" 
                            
                            id="password" 
                            className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400" 
                            placeholder="Enter your password" 
                            />
                            {errors?.password && <small className="text-xs text-red-600"> {errors.password.message} </small>}
                            </div>
                            <div className="flex justify-end mt-3 mb-4">
                                <a href="#" className="text-blue-700">Forgot password</a>
                            </div>
                            <button 
                                type="submit" 
                                className="py-3 bg-indigo-400 text-white w-full rounded-md font-bold"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
          
        </>
    )
}
