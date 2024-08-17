import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async data => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("logged in successfully!");
                }
                localStorage.setItem("Users",JSON.stringify(res.data))
            })
            .catch((err) => {
                if(err.response){
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input type="email"
                            placeholder="enter your email"
                            className="w-80 px-3 py-1 boeder rounded-md outline-none"
                            {...register("email", { required: true })}
                        />
                        <br />
                        {/* error when filed is requird */}
                        {errors.password && <span className="text-red-600 text-sm">This field is required!</span>}
                    </div>
                    {/* password */}
                    <div className="mt-4 space-y-2">
                        <span>password</span>
                        <br />
                        <input type="text"
                            placeholder="enter your password"
                            className="w-80 px-3 py-1 boeder rounded-md outline-none"
                            {...register("password", { required: true })}
                        />
                        <br />
                        {/* error when filed is requird */}
                        {errors.password && <span className="text-red-600 text-sm">This field is required!</span>}
                    </div>
                    {/* button */}
                    <div className="flex justify-around mt-4">
                        <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-900 duration-300 cursor-pointer">login</button>
                        <p>not register?
                            <Link to="/signup" className="underline text-green-700">
                            signup
                            </Link>
                        </p>{" "}
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
