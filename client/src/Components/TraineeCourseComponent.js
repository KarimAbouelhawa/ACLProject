import React from "react";
import "../Styles/IndividualTraineeHomeStyles.css";

export default function TraineeCourseComponent(props){

    return(
    <div className = "coursesH">
            <h5>Course Title: {props.CourseName}</h5>
            <h5>Course Progress: {props.Progress}</h5>
            <center><button className ="viewbutton">View Course Details</button></center>
    </div>   
    )
}