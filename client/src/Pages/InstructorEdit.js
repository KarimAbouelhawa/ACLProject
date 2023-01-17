import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import "../Styles/IndividualTraineeProfileStyle.css";
import { Link } from "react-router-dom";

function InstructorEdit() {
    const [formData, setFormData] = React.useState({
        Email: "", Biography: "",
    })
    const [cookies, setCookie] = useCookies(["user"]);

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(formData)

    async function handleSubmit(e) {
        e.preventDefault();
        const username = cookies.user.Username;
        console.log(username)
        const backend = 'http://localhost:8000/user/' + username + '/edit';
        console.log(backend)

        try {
            const userData = await axios.put(
                backend,
                formData
            );
            console.log("data sent successfully!")
            cookies.user.Email = formData.Email;
            cookies.user.Biography = formData.Biography;
            setCookie("user", cookies.user, { path: "/" })

        } catch (error) {

        }


    }

    return (
        <div>
            <div className="Header">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
                <Link to="/InstructorProfile">
                    <button className="changepassword">Cancel</button>
                </Link>


            </div>
            <div>
                <center>
                    <br></br>
                    <div id="loginContainer">
                        <h2>Change Email/Biography</h2><br></br>

                        <form onSubmit={handleSubmit}>
                            <div className="inputDetails">
                                <h4>Email:  </h4>
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    value={formData.Email}
                                />
                            </div>
                            <div className="inputDetails">
                                <h4>Biography:  </h4>
                                <input
                                    type="text"
                                    name="Biography"
                                    placeholder="biography"
                                    onChange={handleChange}
                                    value={formData.Biography}
                                />
                            </div>
                            <br></br>
                            <button formAction="post">Save</button>
                        </form>

                    </div>
                </center>
            </div>
        </div>
    );
}

export default InstructorEdit;