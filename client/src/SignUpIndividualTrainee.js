import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/IndividualTraineeHomeStyles.css";


function SignUpIndividualTrainee() {

    const navigate = useNavigate();
const [formData, setFormData] = React.useState({
    FirstName: "", LastName: "", Email: "", Password: "", Username: "", Country: "", Gender: "", Type:"Individual", companyrefund: false, websitepolicy: false, paymentpolicy: false
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

async function handleSubmit(e){
    e.preventDefault();
    console.log("data sent.")
    if(formData.companyrefund && formData.paymentpolicy && formData.websitepolicy){
        try {
            const userData = await axios.post(
                "http://localhost:8000/user/create",
                formData
                
            );
            console.log("data sent successfully.")
            navigate("/");
        } catch (error) {

        }
    }
    return (
        <div id="paymentContainer">
            <div>
            <center>
                 <img
                    src={require("./ACL_Logo.png")}
                    alt="Logo"
                    width="315"
                    height="100"
                ></img>
                <u><h1>Sign Up as an Individual Trainee</h1></u>
            </center>    
            <br></br>
            <form onSubmit={handleSubmit}>

            <h4>First Name:</h4>
>
                <input
                    type="text"
                    name="FirstName"
                    placeholder="firstname"
                    onChange={handleChange}
                    value={formData.FirstName}
                />
            <h4>Last Name:</h4>
                <input
                    type="text"
                    name="LastName"
                    placeholder="lastname"
                    onChange={handleChange}
                    value={formData.LastName}
                />
            <h4>Gender:</h4>
                <input
                    type="radio"
                    id="male"
                    name="Gender"
                    value="Male"
                    checked={formData.Gender === "Male"}
                    onChange={handleChange}
                />

                <label htmlFor="male">Male</label>  

                <input
                    type="radio"
                    id="female"
                    name="Gender"
                    value="Female"
                    checked={formData.Gender === "Female"}
                    onChange={handleChange}
                />

                <label htmlFor="female">Female</label>


            <h4>Email:</h4>
                <input
                    type="text"
                    name="Email"
                    placeholder="email"
                    onChange={handleChange}
                    value={formData.Email}
                />
            <h4>Username:</h4>
                <input
                    type="text"
                    name="Username"
                    placeholder="username"
                    onChange={handleChange}
                    value={formData.Username}
                />
            <h4>Password:</h4>
                <input
                    type="password"
                    name="Password"
                    placeholder="password"
                    onChange={handleChange}
                    value={formData.Password}
                />

            <h4>Choose your Country:</h4>
                <select id="country" name="Country" onChange={handleChange} value={formData.Country}>
                    <option>--select your country--</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Egypt">Egypt</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Niger">Niger</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Russia">Russia</option>
                    <option value="Saudi Arabia<">Saudi Arabia</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                </select>

            <h4>Policy Agreements:</h4>

                <input
                    type="checkbox"
                    name="websitepolicy"
                    placeholder="Website Policy"
                    checked={formData.websitepolicy}
                    onChange={handleChange}
                />
                <label htmlFor="websitepolicy">
                    <a href="./WebsitePolicy" target="_blank" rel="noopener noreferrer">Website Policy</a>
                </label><br/>

                <input
                    type="checkbox"
                    name="companyrefund"
                    placeholder="Company Refund"
                    checked={formData.companyrefund}
                    onChange={handleChange}
                />
                <label htmlFor="companyrefund">
                    <a href="./CompanyRefundPolicy" target="_blank" rel="noopener noreferrer">Company Refund Policy</a>
                </label><br/>

                <input
                    type="checkbox"
                    name="paymentpolicy"
                    placeholder="Payment Policy"
                    checked={formData.paymentpolicy}
                    onChange={handleChange}
                />
                <label htmlFor="paymentpolicy">
                    <a href="./paymentPolicy" target="_blank" rel="noopener noreferrer">Payment Policy</a>

                </label><br/>
                <br/>
                <br/>
                <center>
                        <button className="searchbutton">Sign Up</button>
                </center>
                <Link to ="/">
                <center>
                        <button className="cancelbutton">Back</button>
                </center>
                </Link>

            </form>
        </div>
    </div>
    );
}
export default SignUpIndividualTrainee;

