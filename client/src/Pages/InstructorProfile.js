import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import "../Styles/IndividualTraineeProfileStyle.css";
import InstructorCourseComponent from "../Components/InstructorCourseComponent";
import { Link } from "react-router-dom";
import axios from "axios";

function InstructorProfile() {
    const [courses, setCourses] = React.useState([]);
    const [cookies, removeCookie] = useCookies(["user"]);
    const [formData, setFormData] = useState([]);

    React.useEffect(() => {
        async function getCourses() {
            const url =
                "http://localhost:8000/instructor/" +
                cookies.user.Username +
                "/courses";
            const res = await axios.post(url);
            const courses = res.data;
            const courseComponents = courses.map(course => (
                <InstructorCourseComponent {...course} />
            ));

            setCourses(courseComponents);
        }
        getCourses();
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const searchResult = await axios.post(
                `http://localhost:8000/instructor/${cookies.user.Username}/courses`,
                formData
            );
            const courses = searchResult.data;
            const courseComponents = courses.map(course => (
                <InstructorCourseComponent {...course} />
            ));
            setCourses(courseComponents);
        } catch (error) {
            console.log("error");
        }
    }

    return (
        <div>
            <div className="Header">
                <img
                    src={require("../ACL_Logo.png")}
                    alt="Logo"
                    width="315"
                    height="100"
                ></img>
                <Link to="/" className="logout">
                    <button
                        className="signout"
                        onClick={() => {
                            removeCookie("user", { path: "/" });
                        }}
                    >
                        Sign Out
                    </button>
                </Link>
                <Link to="/IndividualTraineeChangePassword">
                    <button className="changepassword">Change Password</button>
                </Link>
            </div>
            <div>
                <center>
                    <div id="profileContainer">
                        <br></br>
                        <img
                            name="profilePic"
                            src={require("../profile.png")}
                            alt="Logo"
                            width="250"
                            height="250"
                        ></img>
                        <h1>{cookies.user.Username}</h1>
                        <h2>{cookies.user.Email}</h2>
                        <h2>{cookies.user.Biography}</h2>
                        <Link to="/InstructorEdit">
                            <button className="paymentdetails">
                                Change Biography/Email
                            </button>
                        </Link>
                        <br></br>
                    </div>
                    <div>
                        <h1>My Courses:</h1>
                    </div>
                    <div id="Search">
                        <form onSubmit={handleSubmit}>
                            <input
                                id="searchboxes"
                                placeholder="Title"
                                type="text"
                                name="Title"
                                value={formData.Title}
                                onChange={handleChange}
                            />
                            <input
                                id="searchboxes"
                                placeholder="Subject"
                                type="text"
                                name="Subject"
                                value={formData.Subject}
                                onChange={handleChange}
                            />
                            <input
                                id="searchboxes"
                                placeholder="Price"
                                type="number"
                                name="Price"
                                value={formData.Price}
                                onChange={handleChange}
                            />
                            <center>
                                <button
                                    className="searchbutton"
                                    formAction="post"
                                >
                                    Search
                                </button>
                            </center>
                        </form>
                    </div>
                </center>
                <div className="courses">
                    <center>{courses}</center>
                </div>
                <br />
                <div>
                    <center>
                        <Link to="/createCourse">
                            <button>Create Course</button>
                        </Link>
                    </center>
                </div>
                <br />
            </div>
        </div>
    );
}
export default InstructorProfile;
