import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/IndividualTraineeHomeStyles.css";
import { Cookies, useCookies } from "react-cookie";
import SubtitleFormComponent from "../Components/SubtitleFormComponent";

function SignUpIndividualTrainee() {
    const navigate = useNavigate();
    const cookies = useCookies(["user"]);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = React.useState({ Subtitles: [] });
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
                        <h1>Create Course</h1>
                    </u>
                </center>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <h4>Course Title: </h4>
                    <input
                        type="text"
                        name="Title"
                        placeholder="Title"
                        onChange={handleChange}
                        value={formData.Title}
                    />
                    <h4>Subtitles:</h4>
                    <div>{subtitleComponents}</div>
                    <button type="button" onClick={addSubtitle}>
                        Add Subtitle
                    </button>
                    <h4>Price: </h4>
                    <input
                        type="number"
                        name="Price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={formData.Price}
                    />

                    <h4>Summary:</h4>
                    <input
                        type="text"
                        name="Summary"
                        placeholder="Summary"
                        onChange={handleChange}
                        value={formData.Summary}
                    />
                    <h4>Subject:</h4>
                    <input
                        type="text"
                        name="Subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        value={formData.Subject}
                    />
                    <h4>Preview Link:</h4>
                    <input
                        type="text"
                        name="PreviewLink"
                        placeholder="Link"
                        onChange={handleChange}
                        value={formData.PreviewLink}
                    />
                    <h4>Agreement Contract:</h4>

                    <input
                        type="checkbox"
                        name="AgreementContract"
                        placeholder="Agreement Contract"
                        checked={formData.AgreementContract}
                        onChange={handleChange}
                    />
                    <label htmlFor="websitepolicy">
                        <a
                            href="./WebsitePolicy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Website Policy
                        </a>
                    </label>
                    <br />
                    <br />
                    <br />
                    <br />
                    <center>
                        <div>{errorMessage}</div>
                        <br />
                        <button className="searchbutton" formAction="post">
                            Create Course
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
export default SignUpIndividualTrainee;
