import React, { useState } from "react";
import "./Styles/IndividualTraineeProfileStyle.css";

function WebsitePolicy() {
    return(
        <div>
            <div className="Header">
            <a href="/IndividualTraineeHome">
                <img src={require("./ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
            </a>   
            </div>
        <div>
            <center>
                <u><h1 >Website Policy:</h1></u>
            </center>
            <form>
                <u><h3>Introduction:</h3></u>
                <p>This policy outlines the rules and guidelines for using KATAYA. By accessing or using the Website, you agree to be bound by the terms and conditions set forth in this policy. If you do not agree to these terms, you are not authorized to use the Website.
                </p>    
                <u><h3>User Privacy:</h3></u>
                <p>KATAYA respects the privacy of its users and is committed to protecting their personal information. We do not collect or share personal information without the user's consent.
                </p> 
                <u><h3>Cookies:</h3></u>
                <p>The Website uses cookies to enhance the user's experience. Cookies are small text files that are stored on the user's device when they visit a website. They allow the website to remember the user's preferences and actions. By using the Website, the user consents to the use of cookies.
                </p>
                <u><h3>Terms of Use:</h3></u>
                <p>The Website is intended for personal and non-commercial use. Users are prohibited from using the Website for any unlawful or unauthorized purpose. The Website may contain links to other websites, but KATAYA is not responsible for the content or practices of those websites.
                </p>
                <u><h3>Changes to the Policy:</h3></u>
                <p>KATAYA reserves the right to change this policy at any time. Any changes will be posted on the Website.
                </p>
                <u><h3>Contact Us:</h3></u>
                <p>If you have any questions or concerns about this policy, please contact us at <u>KATAYA@KATAYA.com/19991.</u>
                </p>
            </form>
        </div>
        </div>
    );
}
export default WebsitePolicy;