import React, {useState} from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
const LoginForm = ({setLoggedIn}) => {

    const [formData,setFormData] = useState({
        email:"",password:""
    });

    const [showPassword,setShowPassword] = useState(false);

    let navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev,[event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        navigate("/dashboard");
        toast.success("Logged In");
        setLoggedIn(true);

        console.log("final data printing in login")
        console.log(formData);

    }

    return (
       <form onSubmit={submitHandler} className={"flex flex-col text-richblack-25"}>

           <label>
               <p className={"text-richblack-25 mt-4 "}>Email Address <sup className={"text-red-400"}>*</sup></p>

               <input
                   className={"w-full rounded-lg px-2 py-3 bg-[#161d29] mt-2 text-[16px]"}
               required
               type={"email"}
               name={"email"}
               value={formData.email}
               placeholder={"Enter Email Address"}
               onChange={changeHandler}
               />

           </label>

           <label className={"relative"}>
               <p className={"text-richblack-25 mt-4 "}>Password <sup className={"text-red-400"}>*</sup></p>

               <input
                   className={"w-full rounded-lg px-3 py-3 bg-[#161d29] mt-2 text-[16xpx]"}
                   required
                   type={showPassword ? ("text") : ("password")}
                   name={"password"}
                   value={formData.password}
                   placeholder={"Enter Password"}
                   onChange={changeHandler}
               />
                   <span
                       className={"absolute right-3 bottom-3 "}
                       onClick={() => setShowPassword((prev) => !prev)}>
                   {
                       showPassword ? (<AiOutlineEyeInvisible size={"1.5rem"}/>) : (<AiOutlineEye size={"1.5rem"}/>)
                   }
                    </span>

           </label>



           <Link to={"#"} className={"text-blue-100 text-sm ml-auto"}>Forgot Password</Link>

           <button className={"bg-yellow-50 text-black py-2 font-semibold rounded-lg mt-10"}>
               Sign In
           </button>

       </form>
    );
};

export default LoginForm;