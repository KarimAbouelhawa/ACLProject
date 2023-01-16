import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import "../Styles/IndividualTraineeProfileStyle.css";
import CourseComponent from "../Components/CourseComponent";
import { Link } from "react-router-dom";


function IndividualTraineeProfile() {
    const [courses, setCourses] = React.useState([]);
    const [cookies, setCookie] = useCookies(["user"]);

    console.log(cookies.user.Username)

    return(
    <div>
        <div className="Header">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
                <Link to="/" className= "logout">
                    <button className ="signout">Sign Out</button>
                </Link>
                <Link to="/IndividualTraineeChangePassword">
                    <button class = "changepassword">Change Password</button>
                </Link>


            </div>
        <div>
            <center>
                <div id="profileContainer">
                    <br></br>
                    <img name = "profilePic" src={require("../profile.png")} alt="Logo" width="250" height="250"></img>
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