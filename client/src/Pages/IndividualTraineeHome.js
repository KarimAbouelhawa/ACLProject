import React, { useState } from "react";
import "../Styles/IndividualTraineeHomeStyles.css";

function IndividualTraineeHome() {
    return(

        <div class = "Page">
            <div class = "Header">
            <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
            
            <img src={require("../profile.png")} alt="Logo" width="120" height="70"></img>
            </div>

            <div class  = "LeftPanel">
                <h1 id = "text1"><u>Search</u></h1>
                <h4 class = "searchTitles">By Subject:</h4>
                 <input
                    type="text"
                    name="SearchBarSubject"
                    size="40"
                />
                <h4 class = "searchTitles">By Title:</h4>
                <input
                    type="text"
                    name="SearchBarTitle"
                    size="40"
                />
                <h4 class = "searchTitles">By Instructor:</h4>
                <input
                    type="text"
                    name="SearchBarInstructor"
                    size="40"
                />
                <h4 class = "searchTitles">By Rating:</h4>
                <input
                    type="text"
                    name="SearchBarRating"
                    size="40"
                />
                <h4 class = "searchTitles">By Price:</h4>
                <input
                    type="text"
                    name="SearchBarInstructor"
                    size="40"
                />
            </div>
            <div class = "MiddlePanel">
                <h1>Popular Courses: </h1>
                <h1>My Courses: </h1>
            </div>
        </div>
    );
}
export default IndividualTraineeHome;