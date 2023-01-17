import React from "react";
import { Link } from "react-router-dom";

export default function CourseComponent(props) {
    return (
        <div className="coursesH">
            <h2>Course Title: {props.Title}</h2>
            <h5>Instructor: {props.Instructor}</h5>
            <h5>Rating: {props.Rating}</h5>
            <h5>Subject: {props.Subject}</h5>
            <h5>Price: {props.Price}</h5>
            <center>
                <Link to={`../Course/${props.Title}`}>
                    <button>View Course Details</button>
                </Link>
            </center>
        </div>
    );
}
