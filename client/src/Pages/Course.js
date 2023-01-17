import React, { useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function Course() {
    const params = useParams();
    const [course, setCourse] = useState({});

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
            </div>
        ));

    return (
        <div className="page">
            <div className="video">
                <ReactPlayer url={course.PreviewURL} />
            </div>

            <div className="Details">
                <h3>Title: {course.Title}</h3>
                <h3>Summary: {course.Summary}</h3>
                <h3>Instructor: {course.Instructor}</h3>
                <h3>Rating: {course.Rating}</h3>
                <h3>Price: {course.Price}</h3>
            </div>
            <div className="outline">
                <h3>Outline:</h3>
                <div style={{ width: "20rem" }}>{allTitles}</div>
            </div>
        </div>
    );
}
export default Course;
