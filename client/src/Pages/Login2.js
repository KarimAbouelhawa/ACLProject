import React from "react";
import { useNavigate } from "react-router-dom";

function Login2() {
    const navigate = useNavigate();
    return (
        <div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button
                onClick={() => {
                    navigate.push("/SignUp");
                }}
            >
                Login
            </button>
        </div>
    );
}
export default Login2;