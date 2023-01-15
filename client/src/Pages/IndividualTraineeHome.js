import React from "react";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import CourseComponent from "../Components/CourseComponent";
import "../Styles/IndividualTraineeHomeStyles.css";

function IndividualTraineeHome() {
    const [courses, setCourses] = React.useState([]);
    const [cookies, setCookie] = useCookies(["user"]);

    React.useEffect(() => {
        async function getCourses() {
            const res = await axios.get("http://localhost:8000/course/");
            const courses = res.data;
            const courseComponents = courses.map(course => (
                <CourseComponent {...course} />
            ));
            setCourses(courseComponents);
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

                <img
                    src={require("../profile.png")}
                    alt="Logo"
                    width="120"
                    height="70"
                ></img>
            </div>

            <div className="LeftPanel">
                <h1 id="text1">
                    <u>Search</u>
                </h1>
                <h4 className="searchTitles">By Subject:</h4>
                <input type="text" name="SearchBarSubject" size="40" />
                <h4 className="searchTitles">By Title:</h4>
                <input type="text" name="SearchBarTitle" size="40" />
                <h4 className="searchTitles">By Instructor:</h4>
                <input type="text" name="SearchBarInstructor" size="40" />
                <h4 class="searchTitles">By Rating:</h4>
                <input type="text" name="SearchBarRating" size="40" />
                <h4 className="searchTitles">By Price:</h4>
                <input type="text" name="SearchBarInstructor" size="40" />
            </div>
            <div className="MiddlePanel">
                <h1>Popular Courses: </h1>
                {courses}
                <h1>My Courses: </h1>
            </div>
        </div>
    );
}
export default IndividualTraineeHome;
