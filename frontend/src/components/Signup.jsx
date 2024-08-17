import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("signup successfully!");
                }
                localStorage.setItem("Users",JSON.stringify(res.data))
            })
            .catch((err) => {
                if(err.response){
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };
    return (
        <>
            <div className="flex h-screen items-center justify-center" >
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            {/* Name */}
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder="enter your full name"
                                    className="w-80 px-3 py-1 boeder rounded-md outline-none"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {/* error when filed is requird */}
                                {errors.password && <span className="text-red-600 text-sm">This field is required!</span>}
                            </div>
                            {/* email */}
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
                                <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-900 duration-300 cursor-pointer">signup</button>
                                <p>have register?
                                    <button className="underline text-green-700"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        login
                                    </button>
                                    <Login />
                                </p>{" "}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup;
