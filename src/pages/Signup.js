import React from 'react';
import Template from "../Components/Template";
import signup from "../assets/signup.png"

const Signup = ({setLoggedIn}) => {
    return (
        <div>
            <Template
                title={"Join the millions learning to code with StudyNotion for free"}
                desc1={"Build skills for today, tomorrow, and beyond."}
                desc2={"Education to future-proof your career."}
                image={signup}
                formtype={"signup"}
                setLoggedIn={setLoggedIn}
            />
        </div>
    );
};

export default Signup;