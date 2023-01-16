import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import "../Styles/IndividualTraineeProfileStyle.css";
import { Link } from "react-router-dom";

function IndividualTraineePayment() {
    const [formData, setFormData] = React.useState({
        CardName: "", CardNumber: "", CardCVV: "",
    })
    const [cookies, setCookie] = useCookies(["user"]);

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
        const username = cookies.user.Username;
        console.log(username)
        const backend = 'http://localhost:8000/user/' + username +'/addCardDetails';
        console.log(backend)

            try {
                const userData = await axios.put(
                    backend,
                    formData
                );
                console.log("data sent successfully!")
    
            } catch (error) {
                
            }
        
    
    }

    return(
        <div>
        <div className="Header">
        <a href="/IndividualTraineeHome">
                <img src={require("../ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
        </a>   
                <Link to="/IndividualTraineeProfile">
                    <button class = "changepassword">Cancel</button>
                </Link>


        </div>
        <div>
        <center>
            <br></br>
            <div id="loginContainer">
                <h2>Payment Details</h2><br></br>

                <form onSubmit={handleSubmit}>
                <div className="inputDetails">
                <h4>Card Holder's Name: </h4>
                <input
                    type="text"
                    name="CardName"
                    placeholder="name on card"
                    onChange={handleChange}
                    value={formData.CardName}
                />
                </div>
                <div className="inputDetails">
                <h4>Card Number: </h4>
                <input
                    type="text"
                    name="CardNumber"
                    placeholder="number on card"
                    onChange={handleChange}
                    value={formData.CardNumber}
                />
                </div>
                <div className="inputDetails">
                <h4>CVV: </h4>
                <input
                    type="text"
                    name="CardCVV"
                    placeholder="last 3 digits of the card's back"
                    onChange={handleChange}
                    value={formData.CardCVV}
                />
                </div>
                <br></br>
                <button class = "changepassword" formAction="post">Save</button>
                </form>
                
            </div>
        </center>
        </div>
    </div>
    );
}

export default IndividualTraineePayment;