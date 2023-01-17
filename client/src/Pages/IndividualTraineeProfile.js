import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import "../Styles/IndividualTraineeProfileStyle.css";
import CourseComponent from "../Components/CourseComponent";
import TraineeCourseComponent from "../Components/TraineeCourseComponent";
import { Link } from "react-router-dom";
import axios from "axios";


function IndividualTraineeProfile() {
    const [courses, setCourses] = React.useState([]);
    const [cookies, setCookie] = useCookies(["user"]);

    console.log(cookies.user.Username)

    React.useEffect(() => {
        async function getCourses() {
            const res = await axios.get("http://localhost:8000/user/" + cookies.user.Username + "/userCourses");
            const courses = res.data;
            const courseComponents = courses.map(course => (
                <TraineeCourseComponent {...course} />
            ));

            setCourses(courseComponents);
        }
        getCourses();
    }, []);

    return(
    <div>
        <div className="Header">
        <a href="/IndividualTraineeHome">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
        </a>        
                <Link to="/" className= "logout">
                    <button className ="signout">Sign Out</button>
                </Link>
                <Link to="/IndividualTraineeChangePassword">
                    <button className = "changepassword">Change Password</button>
                </Link>


            </div>
        <div>
            <center>
                <div id="profileContainer">
                    <br></br>
                    <img name = "profilePic" src={require("../profileBlack.png")} alt="Logo" width="250" height="250"></img>
                    <h1>{cookies.user.Username}</h1>
                    <Link to="/IndividualTraineePayment">
                        <button className = "paymentdetails">Payment Details</button>
                    </Link>
                    <h3>My Wallet:</h3>
                    <h2>0</h2>
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
export default IndividualTraineeProfile;