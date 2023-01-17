import React from "react";
import "../Styles/AdminSetPromotion.css";
import axios from "axios";
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
import AdminCoursesComponent from "../Components/AdminCoursesComponent";

function AdminSetPromotion() {
    const [courses, setCourses] = React.useState([]);

    React.useEffect(() => {
        async function getCourses() {
            const res = await axios.get("http://localhost:8000/course/");
            const courses = res.data;
            const adminCoursesComponent = courses.map(course => (
                <AdminCoursesComponent {...course} />
            ));
            setCourses(adminCoursesComponent);
        }
        getCourses();
    }, []);



    return (
        <div>
            <div className="Header">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
                <a href="/AdminProfile"> <img name="profilePic" src={require("../profile.png")} alt="Logo" width="120" height="70"></img></a>
            </div>

            <div className="middlePanel">

                {courses}

            </div>

        </div>
    );
}
export default AdminSetPromotion;
