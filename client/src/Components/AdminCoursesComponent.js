import React from "react";

export default function AdminCoursesComponent(props) {

    return (
        <div className="coursesH">
            <h2>Course Title: {props.Title}</h2>
            <h5>Instructor: {props.Instructor}</h5>
            <h5>Price: {props.Price}</h5>
            <h5>Discount: {props.Discount}</h5>
            <center><button>Set Promotion</button></center>
        </div>
    )
}