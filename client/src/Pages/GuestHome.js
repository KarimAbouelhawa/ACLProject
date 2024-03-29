import React, { useState } from "react";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import "../Styles/IndividualTraineeProfileStyle.css";
import CourseComponent from "../Components/CourseComponent";
import { Link } from "react-router-dom";


function GuestHome() {
    const [title, setTitle] = useState("All Courses");
    const [courses, setCourses] = React.useState([]);
    const [topCourses, setTopCourses] = React.useState([]);
    const [cookies, setCookie] = useCookies(["user"]);
    const [formData, setFormData] = useState({
        Title: "",
        Instructor: "",
        Rating: "",
        Subject: "",
        Price: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const searchResult = await axios.post(
                "http://localhost:8000/course/search/filter",
                formData
            );
            const courses = searchResult.data;
            const courseComponents = courses.map(course => (
                <CourseComponent {...course} />
            ));
            setCourses(courseComponents);
            setTitle("Search Results:");
        } catch (error) {
            console.log("error");
        }
    }

    console.log(cookies.user.Username)

    React.useEffect(() => {
        async function getCourses() {
            const res = await axios.get("http://localhost:8000/course/");
            const courses = res.data;
            const courseComponents = courses.map(course => (
                <CourseComponent {...course} />
            ));
            const resTop = await axios.post(
                "http://localhost:8000/course/search/filter",
                { Rating: 5 }
            );
            const topCourses = resTop.data;
            const topCourseComponents = topCourses.map(course => (
                <CourseComponent {...course} />
            ));

            setCourses(courseComponents);
            setTopCourses(topCourseComponents);
        }
        getCourses();
    }, []);

    return (
        <div className="Page">
            <div className="Header">
                <img
                    src={require("../ACL_Logo.png")}
                    alt="Logo"
                    width="315"
                    height="100"
                ></img>
                <Link to="../SignUp">
                <button className="topbutton">Sign Up</button>
                </Link>
                <Link to="../">
                <button className="searchbutton">Login</button>
                </Link>
           </div>

            <div className="LeftPanel">
                <form onSubmit={handleSubmit} className="traineeForm">
                    <h1 id="text1">
                        <u>Search</u>
                    </h1>
                    <h4 className="searchTitles">Title:</h4>
                    <input className="searchboxes"
                        type="text"
                        name="Title"
                        value={formData.Title}
                        onChange={handleChange}
                    />
                    <h4 className="searchTitles">Instructor:</h4>
                    <input className="searchboxes"
                        type="text"
                        name="Instructor"
                        value={formData.Instructor}
                        onChange={handleChange}
                    />
                    <h4 class="searchTitles">Rating:</h4>
                    <input className="searchboxes"
                        type="number"
                        name="Rating"
                        value={formData.Rating}
                        onChange={handleChange}
                    />
                    <h4 className="searchTitles">Subject:</h4>
                    <input className="searchboxes"
                        type="text"
                        name="Subject"
                        value={formData.Subject}
                        onChange={handleChange}
                    />
                    <h4 className="searchTitles">Price:</h4>
                    <input className="searchboxes"
                        type="number"
                        name="Price"
                        value={formData.Price}
                        onChange={handleChange}
                    />
                    <br /> <button className ="searchbutton" formAction="post">Search</button>
                </form>
            </div>

            <div id="middle">
                <h1>{title}</h1>
                <div className="MiddlePanel">{courses}</div>
                <h1>Most Popular Courses:</h1>
                <div className="MiddlePanel">{topCourses}</div>
            </div>
        </div>
    );
}
export default GuestHome;