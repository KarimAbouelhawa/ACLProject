import React from "react";

export default function CourseComponent(props){

    return(
        <div className="courses">
            <h4>Course Title: {props.Title}</h4>
            <h5>Instructor: {props.Instructor}</h5>
            <h5>Rating: {props.Rating}</h5>
            <h5>Subject: {props.Subject}</h5>
            <h5>Price: {props.Price}</h5>
        </div>
    )
}