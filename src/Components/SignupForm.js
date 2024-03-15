import React, {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SignupForm = ({setLoggedIn}) => {

    const [formData,setFormData] = useState({
        firstName:"",lastName:"",
        email:"",
        password:"",confirmPassword:""
    });

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev,[event.target.name]:event.target.value
            }
        })
    }

    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");

    const navigate = useNavigate();

    function submitHandler(event){
            event.preventDefault();

            if (formData.password !== formData.confirmPassword ){
                toast.error("Password Does Not Match");
                return;
            }

                toast.success("Account Created");



            const finalData = {
                ...formData,accountType
            }

        console.log("final data printing");
        console.log(finalData);

                navigate("/dashboard")
                setLoggedIn(true);
    }


    return (
     <form onSubmit={submitHandler} className={"max-w-[450px]"} >
        <div className={"flex max-w-max bg-[#161d29] rounded-full gap-x-1 py-1 px-1 mt-6"}>
            <button
                className={`${accountType === "student" ? "bg-red-00 text-richblack-5" : "bg-transparent text-richblack-200"} px-5 py-2 rounded-full space-x-4 transition-all duration-200`}
                onClick={(event) => {
                    event.preventDefault();
                    setAccountType("student");
                }}
            >
                Students
            </button>
            <button
                className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"} px-5 py-2 rounded-full space-x-4 transition-all duration-200`}
                onClick={(event) => {
                    event.preventDefault();
                    setAccountType("instructor");
                }}
            >
                Instructor
            </button>
        </div>

         <div className={"max-w-[450px] flex gap-x-5"}>

             <label>
                 <p className={"text-richblack-25 mt-4"}>First Name <sup className={"text-red-400"}>*</sup></p>

                 <input
                 className={"w-full rounded-lg px-2 py-3 bg-[#161d29] mt-1 text-[16px] pr-8 border-b-2 border-richblack-700"}
                 required
                 type="text"
                 name={"firstName"}
                 value={formData.firstName}
                 placeholder={'Enter first Name'}
                 onChange={changeHandler}
                 // className={"outline"}
                 />
             </label>

             <label>
                 <p className={"text-richblack-25  mt-4 "}>Last Name <sup className={"text-red-400"}>*</sup></p>

                 <input
                     className={"max-w-max rounded-lg px-2 py-3 mt-1 bg-[#161d29] text-[16px] border-b-2 border-richblack-700 "}
                     type="text"
                     name={"lastName"}
                     value={formData.lastName}
                     placeholder={'Enter last Name'}
                     onChange={changeHandler}
                     // className={"outline"}
                 />
             </label>

         </div>

         <div>
             <label>
                 <p className={"text-richblack-25  mt-4 "}>Email Address<sup className={"text-red-400"}>*</sup></p>

                 <input
                     className={"w-full rounded-lg px-2 py-3 mt-1 bg-[#161d29]  text-[16px] border-b-2 border-richblack-700 pr-6"}
                     required
                     type="email"
                     name={"email"}
                     value={formData.email}
                     placeholder={'Enter email address'}
                     onChange={changeHandler}
                     // className={"outline"}
                 />
             </label>
         </div>

         <div className={"flex gap-x-5"}>
             <label className={"relative"}>
                 <p className={"text-richblack-25  mt-4 "}>Create Password<sup className={"text-red-400"}>*</sup></p>

                 <input
                     className={"w-full rounded-lg text-richblack-5 px-2 py-3 bg-[#161d29] mt-1 text-[16px] pr-8 border-b-2 border-richblack-700"}
                     required
                     type={showPassword ? ("text") : ("password")}
                     name={"password"}
                     value={formData.password}
                     placeholder={'Enter password'}
                     onChange={changeHandler}
                     // className={"outline"}confirmPassword
                 />
                 <span className={"absolute right-4 bottom-3 text-richblack-100"} onClick={() => setShowPassword((prev) => !prev)}>
                     {showPassword ? (<AiOutlineEyeInvisible size={"1.5rem"}/>) : (<AiOutlineEye size={"1.5rem"}/>)}
                 </span>
             </label>

             <label className={"relative"}>
                 <p className={"text-richblack-25  mt-4 "}>Confirm Password<sup className={"text-red-400"}>*</sup></p>

                 <input
                     className={"w-full rounded-lg text-richblack-5 px-2 py-3 mt-1 bg-[#161d29]  text-[16px] border-b-2 border-richblack-700 pr-6"}
                     required
                     type={showConfirmPassword ? ("text") : ("password")}
                     name={"confirmPassword"}
                     value={formData.confirmPassword}
                     placeholder={'Confirm password'}
                     onChange={changeHandler}
                     // className={"outline"}

                 />

                 <span
                     className={"text-richblack-100 absolute bottom-3 right-4"}
                     onClick={() => setShowConfirmPassword((prev) => !prev)}>
                     {showConfirmPassword ? (<AiOutlineEyeInvisible size={"1.5rem"}/>) : (<AiOutlineEye size={"1.5rem"}/>)}
                 </span>

             </label>
         </div>

         <button className={"bg-yellow-50 w-full text-black py-2 font-semibold rounded-lg mt-10"}>
             Create Account
         </button>



     </form>
    );
};

export default SignupForm;