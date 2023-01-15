//import "./index.css";
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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {/* <Link to="./InstructorProfile"><button formAction="post">Login</button>
                </Link>
                <div>
                    {auth ? (
                        <Link to="./GuestPage"><button>Continue as guest</button></Link>
                    ) : (
                        <LoginButton onClick={this.handleLoginClick} />
                    )}
                </div> */}
                {/* //<Link to="./Login"><button>Login</button> </Link> */}
                <button formAction="post">Login</button>
                <Link to="./GuestPage">
                    <button>Continue as guest</button>
                </Link>
                <Link to="./SignUp">
                    <button>Sign up</button>
                </Link>
            </form>

            <h1>{auth}</h1>
        </div>
    );
}

export default Login;
