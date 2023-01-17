import React, { useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/CourseStyle.css";
import { Cookies, useCookies } from "react-cookie";

function LessonPage() {
    const params = useParams();
    const [course, setCourse] = useState({});
    const [subtitle, setSubtitle] = useState({});
    const [cookies, setCookie] = useCookies(["user"]);
    const [hasCourse, setHasCourse] = useState(false)

    const thisCourse = course.Title;

    const [formData, setFormData] = React.useState({
    TotalRatings: "", Title: course.Title,
    })

    const [formData2, setFormData2] = React.useState({
        Problem: "", Title: course.Title,
})



function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    console.log(formData)
}

function handleChange2(event){
    const {name, value, type, checked} = event.target
    setFormData2(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    console.log(formData2)
}

async function handleSubmit(e){
    e.preventDefault();
    console.log(course.Title)
    formData.Title = course.Title;
        try {
            await axios.put(
                "http://localhost:8000/course/rateCourse",
                formData
            );
            console.log("data sent successfully.")
            console.log(formData)
        } catch (error) {

        }
}

async function handleSubmit2(e){
    e.preventDefault();
    formData2.Title = course.Title;
        try {
            await axios.put(
                "http://localhost:8000/course/reportProblem",
                formData2
            );
            console.log("data sent successfully.")
            console.log(formData2)
        } catch (error) {

        }
}

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

            for (let i = 0; i < res.data[0].Subtitles.length; i++){
                if(params.subtitlename === res.data[0].Subtitles[i].Name){
                    setSubtitle(res.data[0].Subtitles[i])
                    console.log(res.data[0].Subtitles[i])
                }
            }
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
                {hasCourse && <center><button className="lessonbuttons">View Lesson</button></center>}
            </div>
        ));

    return (
        <div>
        <div className="Header">
            <a href="/IndividualTraineeHome">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
            </a>  

         <form onSubmit={handleSubmit2}>
            <label for="bugs">Report a bug::</label>
                <select id="cars" name="Problem" onChange={handleChange2} value={formData2.Problem}>
                    <option>--select a bug--</option>
                    <option value="technical">Technical</option>
                    <option value="financial">Financial</option>
                    <option value="other">Other</option>
                </select>
            <button class = "cancel">Report</button>
         </form>


         <a href="javascript:history.back()">
                    <button  class = "cancel">Back</button>
         </a>
        </div>

        <div id ="lessonBox">

            <div className="Details">
                <u><h2>Title: {course.Title}</h2></u>
                <h3>Instructor: {course.Instructor}</h3>
                <h3>Summary: {course.Summary}</h3>
                <h3>Rating: {course.Rating}</h3>
                <h3>Price: {course.Price}</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label for="course">Rate Course:</label>
                        <select id="rateC" name="TotalRatings" onChange={handleChange} value={formData.TotalRatings}>
                            <option>-- select a rating out of 5 --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    <button>Submit Rating</button>
                </form>

                <br></br>

                <form>
                    <label for="instructor">Rate Instructor:</label>
                        <select id="rateI" name="rateI">
                            <option>-- select a rating out of 5 --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    <button>Submit Rating</button>
                </form>
            </div>
        </div>

            <br></br>

            <u><center><h2 >{subtitle.Name}</h2></center></u>

            <div id="videoBox">
                <div className="video">
                    <ReactPlayer url={subtitle.Link} />
                </div>
            </div>

            <div>
                <center>
                    <u><h2>Notes:</h2></u>
                </center>
                
                <center>
                    <form>
                        <textarea name="message" rows="20" cols="170"></textarea>
                        <br></br>
                    </form>
                    <button>Download PDF</button>
                </center>
            </div>
        </div>
    );
}
export default LessonPage;
