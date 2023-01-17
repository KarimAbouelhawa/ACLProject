import React from "react";
import "../Styles/IndividualTraineeHomeStyles.css";
import { Link } from "react-router-dom";

export default function TraineeCourseComponent(props){

    return(
    <div className = "coursesH">
            <h5>Course Title: {props.CourseName}</h5>
            <h5>Course Progress: {props.Progress}</h5>
            {props.Progress<=50 &&
            <Link to={`../Course/${props.CourseName}`}>
                <center><button className ="viewbutton">Refund</button></center>
            </Link>
            }
            <Link to={`../Course/${props.CourseName}`}>
                <center><button className ="viewbutton">View Course Details</button></center>
            </Link>
    </div>   
    )
}