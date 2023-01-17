import React from "react";
import "../Styles/AdminHomeStyle.css";
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
function AdminHome() {
    return (
        <div>
            <div className="Header">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
                <a href="/AdminProfile"> <img name="profilePic" src={require("../profile.png")} alt="Logo" width="120" height="70"></img></a>
            </div>

            <div className="LeftPanel">
                <h1 id="text1">
                    <u>Panel</u>
                </h1>

                <Link to="./AdminReportedProblemsPage"><button><h2>Reported Problems</h2></button></Link>
                <Link to="./AdminRefund"><button><h2>Refund</h2></button></Link>
                <Link to="/AdminAddUser"><button><h2>Add User</h2></button></Link>
                <Link to="./AdminCourseRequests"><button><h2>Course Requests</h2></button></Link>
                <Link to="./AdminSetPromotion"><button><h2>Set Promotion</h2></button></Link>

            </div>
        </div>
    );
}
export default AdminHome;
