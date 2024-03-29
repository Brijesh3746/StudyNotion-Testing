import React from 'react';
import Template from "../Components/Template";
import login from "../assets/login.png"

const Login = ({setLoggedIn}) => {
    return (
        <div>
            <Template
                title={"Welcome Back"}
                desc1={"Build skills for today, tomorrow, and beyond."}
                desc2={"Education to future-proof your career."}
                formtype={"login"}
                image={login}
                setLoggedIn={setLoggedIn}

            />
        </div>
    );
};

export default Login;