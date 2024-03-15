import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

const Navbar = (props) => {

    let loggedIn = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div className={"flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4"}>
            <Link to={"/"} >
                <img src={logo} alt="Logo" width={160} height={32} loading={"lazy"}/>
            </Link>

            <nav>
                <ul className={"flex text-richblack-25 gap-x-6 "}>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>

                    <li>
                        <Link to={"/"}>About</Link>
                    </li>

                    <li>
                        <Link to={"/"}>Contact</Link>
                    </li>

                </ul>
            </nav>

            {/*Login-Signup-Logout-Dashsboard*/}

            <div className={"flex gap-x-4 ml-3 items-center "}>

                {   !loggedIn &&
                    <Link to={"/login"}>
                        <button className={"bg-richblack-800 text-richblack-25 py-2 px-3 opacity-70 border-[1px] border-gray-700 rounded-md"}>Log in</button>
                    </Link>
                }
                { !loggedIn &&
                    <Link to={"/signup"}>
                        <button className={"bg-richblack-800 text-richblack-25 py-2 px-3 opacity-70 border-[1px] border-gray-700 rounded-md"}>Sign Up</button>
                    </Link>
                }
                {   loggedIn &&
                    <Link to={"/"}>
                        <button className={"bg-richblack-800 text-richblack-25 py-2 px-3 opacity-70 border-[1px] border-gray-700 rounded-md"}
                            onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged Out");
                        }}>Logout</button>
                    </Link>
                }
                {   loggedIn &&
                    <Link to={"/dashboard"}>
                        <button className={"bg-richblack-800 text-richblack-25 py-2 px-3 opacity-70 border-[1px] border-gray-700 rounded-md"}>Dashboard</button>
                    </Link>
                }
            </div>



        </div>
    );
};

export default Navbar;