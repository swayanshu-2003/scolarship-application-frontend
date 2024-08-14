import axios from "axios";
import { useForm } from "react-hook-form"
import { setToken } from "../../utils/localstorageUtils";

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data)
        console.log(response)
        if (response.status === 200) {
            setToken(response.data.token)
        }
    }



    return (

        <>

            <div className="xl:w-[700px] px-10 h-[350px] rounded-3xl  ">
                <h1 className="text-center text-3xl font-bold mt-2 mb-2">Login</h1>
                <hr />
                <div className="flex justify-center mt-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">

                            <input
                                {...register("email", { required: "This field is required" })}
                                type="text"

                                id="email"
                                className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
                                placeholder="Enter your username"
                            />
                            {errors?.email && <small className="text-xs text-red-600"> {errors.email.message} </small>}
                            <br /><br />

                            <input
                                {...register("pwd", { required: "This field is required" })}
                                type="password"

                                id="password"
                                className="py-3 p-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
                                placeholder="Enter your password"
                            />
                            {errors?.pwd && <small className="text-xs text-red-600"> {errors.pwd.message} </small>}
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
