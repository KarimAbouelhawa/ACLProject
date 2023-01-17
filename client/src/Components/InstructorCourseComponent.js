import React from "react";

export default function InstructorCourseComponent(props) {

    return (
        <div className="coursesH">
            <h2>Course Title: {props.Title}</h2>
            <h5>Rating: {props.Rating}</h5>
            <h5>Subject: {props.Subject}</h5>
            <h5>Price: {props.Price}</h5>
        </div>
    )
}