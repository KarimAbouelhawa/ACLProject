import React, { useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/CourseStyle.css";
import { Cookies, useCookies } from "react-cookie";


function Course() {
    const params = useParams();
    const [course, setCourse] = useState({});
    const [cookies, setCookie] = useCookies(["user"]);
    const [hasCourse, setHasCourse] = useState(false)

    const thisCourse = course.Title;
    React.useEffect(() => {
        async function checkCourses(){
        
            const res = await axios.get("http://localhost:8000/user/" + cookies.user.Username + "/userCourses");
            let found = res.data.filter(course => (course.CourseName === thisCourse));
            setHasCourse(found.length > 0)
        }
        checkCourses()
    })

    React.useEffect(() => {
        async function getCourse() {
            const res = await axios.get(
                `http://localhost:8000/course/${params.coursename}`
            );
            setCourse(res.data[0]);
        }
        getCourse();
    }, []);

    const allTitles =
        course.Subtitles &&
        course.Subtitles.map(subtitle => (
            <div
                style={{
                    backgroundColor: "pink",
                    borderRadius: "10px",
                    padding: "1px 5px",
                    margin: "5px",
                }}
            >
                <p>
                    <strong>Title: </strong>
                    {subtitle.Name}
                </p>
                <p>
                    <strong>Length: </strong>
                    {subtitle.Hours}
                </p>
                {hasCourse && 
                <center>
                    <Link to={`./${subtitle.Name}`}>
                        <button className="lessonbuttons">View Lesson</button>
                    </Link>
                </center>}
            </div>
        ));

    return (
        <div>
        <div className="Header">
        <a href="/IndividualTraineeHome">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
        </a>  

        <a href="javascript:history.back()">
                    <button  class = "cancel">Back</button>
        </a>
        </div>
        <div className="page">

            <div className="Details">
                <center>
                <u><h2>Title: {course.Title}</h2></u>
                <h3>Instructor: {course.Instructor}</h3>
                <h3>Summary: {course.Summary}</h3>
                <h3>Rating: {course.Rating}</h3>
                <h3>Price: {course.Price}</h3>
                </center>
            </div>
            <br></br>
            <u><h2 id="previewTitle">Course Preview:</h2></u>
            <div id="videoBox">
                <div className="video">
                    <ReactPlayer url={course.PreviewURL} />
                </div>
                <div className="outline">
                    <u><h2>Outline:</h2></u>
                    <div style={{ width: "20rem" }}>{allTitles}</div>
                </div>
            </div>
            <br></br>
            {!hasCourse && <div>    
                <center>
                    <button className="paybuttons">Register Using Wallet</button>
                        <Link to="/PaymentRedirect">
                         <button className="paybuttons">Register Using Card</button>
                        </Link>
                </center>
            </div>}
        </div>
        </div>
    );
}
export default Course;
