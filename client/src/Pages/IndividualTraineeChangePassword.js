import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import "../Styles/IndividualTraineeProfileStyle.css";
import { Link } from "react-router-dom";

function IndividualTraineeChangePassword() {
    const [cookies, setCookie] = useCookies(["user"]);
    const [formData, setFormData] = React.useState({
        Password: "", Username: cookies.user.Username, ConfirmPassword: ""
    })
    

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(formData)

    async function handleSubmit(e){
        e.preventDefault();
        const backend = 'http://localhost:8000/user/changePass';
        if(formData.Password == formData.ConfirmPassword){
            try {
                const userData = await axios.post(
                    backend,
                    formData
                );
                console.log("data sent successfully!")
    
            } catch (error) {
                
            }
        }
    
    }

    return(
    <div>
        <div className="Header">
        <a href="/IndividualTraineeHome">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
        </a>   
                <Link to="/IndividualTraineeProfile">
                    <button class = "cancel">Cancel</button>
                </Link>


        </div>
        <div>
        <center>
            <br></br>
            <div id="paymentContainer">
                <h2>Change Password</h2><br></br>
                <form onSubmit={handleSubmit}>
                <div className="inputDetails">
                <h4>New Password:  </h4>
                <input id="paymentinputs"
                    type="password"
                    name="Password"
                    placeholder="new password"
                    onChange={handleChange}
                    value={formData.Password}
                />
                </div>
                <div className="inputDetails">
                <h4>Confirm Password:  </h4>
                <input id ="paymentinputs"
                    type="password"
                    name="ConfirmPassword"
                    placeholder="confirm password"
                    onChange={handleChange}
                    value={formData.ConfirmPassword}
                />
                </div>
                <br></br>
                <button className="changepassword" formAction="post">Save</button>
                </form>
                
            </div>
        </center>
    </div>
    </div>
    );
}

export default IndividualTraineeChangePassword;