import "../Styles/index.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
    const [formData, setFormData] = useState({ Username: "", Password: "" });
    const [auth, setAuth] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    React.useEffect(() => {
        removeCookie("user", { path: "/" });
    }, []);

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
            if (userData.data.Type === "Individual") {
                navigate("/IndividualTraineeHome");
            } else if (userData.data.Type === "Instructor") {
                navigate("/InstructorHome");
            } else if (userData.data.Type === "Admin") {
                navigate("/AdminHome");
            }
            console.log(userData.data.Type);
        } catch (error) {
            setAuth("Your Username or Password were incorrect.");
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
                <u>
                    <h1>Login</h1>
                </u>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            id="loginInputs"
                            type="text"
                            name="Username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <br></br>
                        <br></br>

                        <input
                            id="loginInputs"
                            type="password"
                            name="Password"
                            placeholder="Password"
                            value={formData.Password}
                            onChange={handleChange}
                        />
                        <br></br>
                        <br></br>
                        <button className="buttons" formAction="post">
                            Login
                        </button>
                        <br></br>
                        <Link to="./GuestHome">
                            <button className="buttons">
                                Continue as guest
                            </button>
                            <br></br>
                        </Link>
                        <Link to="./SignUp">
                            <button className="buttons">Sign up</button>
                        </Link>
                        <br></br>
                        <br></br>

                        <a href="">Forgotten password?</a>
                    </form>
                </div>
            </center>

            <h1>
                <center>{auth}</center>
            </h1>
        </div>
    );
}

export default Login;
