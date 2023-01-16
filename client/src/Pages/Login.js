import "../Styles/index.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
    const [formData, setFormData] = useState({ Username: "", Password: "" });
    const [auth, setAuth] = useState("");
    const [cookies, setCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (formData.Username === "" || formData.Password === "") {
            console.log("Fields are required");
            return;
        }
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
            setCookie("user", userData.data, { path: "/" });
            setAuth(authentication.data);
            navigate("/IndividualTraineeHome");
        } catch (error) {
            console.log("User Not found");
        }
    }

    return (
        <div id="loginContainer">
            <center>
                <img
                    src={require("../ACL_Logo.png")}
                    alt="Logo"
                    width="315"
                    height="100"
                ></img>
                <h1>Login</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Username"
                            placeholder="Username"
                            value={formData.Username}
                            onChange={handleChange}
                        />
                        <br></br>
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            value={formData.Password}
                            onChange={handleChange}
                        />
                        <button formAction="post">Login</button>
                        <Link to="./GuestPage">
                            <button>Continue as guest</button>
                        </Link>
                        <Link to="./SignUp">
                            <button>Sign up</button>
                        </Link>
                        <a href="">Forgotten password?</a>
                    </form>
                </div>
            </center>

            <h1>{auth}</h1>
        </div>
    );
}

export default Login;
