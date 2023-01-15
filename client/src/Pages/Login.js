import "../Styles/index.css";
import React, { useState } from "react";
import axios from "axios";
import history from '../history'
import { Link } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({ Username: "", Password: "" });
    const [auth, setAuth] = useState("");

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userData = await axios.post(
                "http://localhost:8000/user/login",
                formData
            );
            const authentication = await axios.get(
                "http://localhost:8000/user/posts",
                {
                    headers: {
                        Authorization: `BEARER ${userData.data.accessToken}`,
                    },
                }
            );
            console.log(authentication.data);
            setAuth(authentication.data);
        } catch (error) {
            console.log("User Not found");
        }
    }

    return (
        <div id="loginContainer">
            
            <center>
            <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
            <h1>Login</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                /><br></br>
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                /><br></br>
                <Link to="./Login"><button>Login</button></Link><br></br>
                <Link to="./GuestPage"><button>Continue as guest</button></Link><br></br>
                <Link to="./SignUp"><button>Sign up</button></Link><br></br>
                <a href="">Forgotten password?</a>
            </form>
            </div>
            </center>

            <h1>{auth}</h1>
        </div>
    );
}

export default Login;
