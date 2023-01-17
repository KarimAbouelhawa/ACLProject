import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import "../Styles/IndividualTraineeProfileStyle.css";
import InstructorCourseComponent from "../Components/InstructorCourseComponent";
import { Link } from "react-router-dom";
import axios from "axios";

function InstructorProfile() {
    const [courses, setCourses] = React.useState([]);
    const [cookies, setCookie] = useCookies(["user"]);

    console.log(cookies.user.Username)

    React.useEffect(() => {
        async function getCourses() {
            const url = "http://localhost:8000/instructor/" + cookies.user.Username + "/courses";
            const res = await axios.get(url);
            console.log(url);
            const courses = res.data;
            const courseComponents = courses.map(course => (
                <InstructorCourseComponent {...course} />
            ));

            setCourses(courseComponents);
        }
        getCourses();
    }, []);

    return (
        <div>
            <div className="Header">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
                <Link to="/" className="logout">
                    <button className="signout">Sign Out</button>
                </Link>
                <Link to="/IndividualTraineeChangePassword">
                    <button className="changepassword">Change Password</button>
                </Link>
            </div>
            <div>
                <center>
                    <div id="profileContainer">
                        <br></br>
                        <img name="profilePic" src={require("../profile.png")} alt="Logo" width="250" height="250"></img>
                        <h1>{cookies.user.Username}</h1>
                        <h2>{cookies.user.Email}</h2>
                        <h2>{cookies.user.Biography}</h2>
                        <Link to="/InstructorEdit">
                            <button className="paymentdetails">Change Biography/Email</button>
                        </Link>
                        <br></br>
                    </div>
                    <div>
                        <h1>My Courses:</h1>
                    </div>
                </center>
                <div>

                    {courses}

                </div>
            </div>
        </div>
    );
}
export default InstructorProfile;