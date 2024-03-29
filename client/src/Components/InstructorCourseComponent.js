import React from "react";
import { Link } from "react-router-dom";
export default function InstructorCourseComponent(props) {
    return (
        <div className="coursesH">
            <h2>
                Course Title:
                <br /> {props.Title}
            </h2>
            <h5>Rating: {props.Rating}</h5>
            <h5>Subject: {props.Subject}</h5>
            <Link to={`../Course/${props.Title}`}>
                <h5>Price: {props.Price}</h5>
                </Link>
        </div>
    );
}
