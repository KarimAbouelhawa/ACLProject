import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/CreateCourse.css";
import { Cookies, useCookies } from "react-cookie";
import SubtitleFormComponent from "../Components/SubtitleFormComponent";

function CourseExercise() {
    const navigate = useNavigate();
    const cookies = useCookies(["user"]);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        Subtitles: [],
        Exercise: [],
    });
    const [subtitleComponents, setSubtitleComponents] = React.useState([]);
    const [subtitleData, setSubtitleData] = React.useState([]);
    const [subtitleNumber, setSubtitleNumber] = useState(1);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function addSubtitle() {
        const currentSubtitles = [...subtitleComponents];
        currentSubtitles.push(
            <SubtitleFormComponent
                key={subtitleNumber}
                number={subtitleNumber}
                changeData={newData =>
                    changeSubtitleData(subtitleNumber, newData)
                }
            />
        );
        setSubtitleComponents(currentSubtitles);
        setSubtitleNumber(subtitleNumber + 1);
    }

    function changeSubtitleData(subtitleNumber, thisSubtitleData) {
        const currentSubtitleData = [...subtitleData];
        currentSubtitleData[subtitleNumber - 1] = thisSubtitleData;
        setSubtitleData(currentSubtitleData);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        formData.Instructor = cookies[0].user.Username;
        formData.Hours = 0;
        formData.Rating = 0;
        for (let i = 0; i < subtitleData.length; i++) {
            formData.Subtitles.push(subtitleData[i]);
            formData.Hours = formData.Hours + subtitleData[i].Length;
        }
        const newForm = formData;
        newForm.Exercise.push(formData.ExerciseQuestion);
        newForm.Exercise.push(formData.ExerciseAnswer1);
        newForm.Exercise.push(formData.ExerciseAnswer2);
        newForm.Exercise.push(formData.ExerciseAnswer3);
        newForm.Exercise.push(formData.ExerciseAnswer4);
        newForm.Exercise.push(formData.CorrectAnswer);
        setFormData(newForm);
        console.log(formData.Exercise);
        if (formData.AgreementContract) {
            try {
                const userData = await axios.post(
                    "http://localhost:8000/course/create",
                    formData
                );
                console.log("data sent successfully.");
                navigate("/InstructorProfile");
            } catch (error) {
                setErrorMessage("Incomplete Data");
            }
        } else {
            setErrorMessage("You must agree on the contract");
        }
    }

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
