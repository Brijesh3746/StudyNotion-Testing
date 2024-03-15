import React, {useContext} from 'react';
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frame from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc";
import {AppContext} from "../Context/Context";

const Template = ({title,desc1,desc2,formtype,image,setLoggedIn}) => {

    const{white,setWhite} = useContext(AppContext);

    function clickDataHandler(){
        console.log("hello");
        setWhite(!white);
        console.log(white);
    }

    return (
        <div className={"flex w-11/12 max-w-[1160px]  justify-between items-center mx-auto px-2 py-12 gap-x-12 gap-y-0"}>

            <div className={"w-11/12 max-w-[450px]"}>
                <h2
                className={"text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"}
                >{title}</h2>
                <p className={"text-[1.125rem] leading-[1.625rem] mt-4"}>
                    <span className={"text-richblack-100  "}>{desc1}</span>
                    <br/>
                    <span className={"text-blue-100 italic"}>{desc2}</span>
                </p>


                {formtype === "signup"?(<SignupForm setLoggedIn={setLoggedIn}/>):(<LoginForm setLoggedIn={setLoggedIn}/>)}


                <div className={"flex w-full items-center my-4 gap-x-2"}>
                    <div className={" bg-richblack-700 w-full h-[1px]"}></div>
                    <p className={"text-richblack-700 font-medium leading-[1.375]"}>OR</p>
                    <div className={" bg-richblack-700 w-full h-[1px]"}></div>
                </div>

                <button onClick={clickDataHandler} className={"w-full text-richblack-100 flex font-semibold border rounded-md border-richblack-700 py-2 justify-center items-center gap-x-2"}>
                    <FcGoogle size={"24px"}/>Sign in with Google
                </button>

            </div>

            <div className={"w-11/12 max-w-[450px] relative  "}>
                <img  loading={"lazy"} src={frame} alt="frame"/>
                <img className={"absolute -top-4 right-4 "} src={image} alt="frame"/>
            </div>



        </div>
    );
};

export default Template;