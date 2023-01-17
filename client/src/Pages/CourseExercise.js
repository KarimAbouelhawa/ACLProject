import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Styles/CreateCourse.css";
import { Cookies, useCookies } from "react-cookie";
import SubtitleFormComponent from "../Components/SubtitleFormComponent";

function CourseExercise() {
    const navigate = useNavigate();
    const params = useParams();
    const cookies = useCookies(["user"]);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({});
    const [exercise, setExercise] = useState([]);

    React.useEffect(() => {
        async function getCourse() {
            const res = await axios.get(
                `http://localhost:8000/course/${params.coursename}`
            );
            setExercise(res.data[0].Exercise);
            console.log(res.data[0].Exercise);
        }
        getCourse();
    }, []);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    async function handleSubmit(e) {}

    return (
        <div id="paymentContainer">
            <div>
                <center>
                    <img
                        src={require("../ACL_Logo.png")}
                        alt="Logo"
                        width="315"
                        height="100"
                    ></img>
                    <u>
                        <h1>Course Exam</h1>
                    </u>
                </center>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                        <button className="searchbutton" formAction="post">
                            Submit
                        </button>
                    </center>
                    <Link to="/InstructorProfile">
                        <center>
                            <button className="cancelbutton">Back</button>
                        </center>
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default CourseExercise;
