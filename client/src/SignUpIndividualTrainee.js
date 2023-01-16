import React, { useState } from "react";
import axios from "axios";

    
function SignUpIndividualTrainee() {

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
console.log(formData)
async function handleSubmit(e){
    e.preventDefault();
    if(formData.companyrefund && formData.paymentpolicy && formData.websitepolicy){
        try {
            const userData = await axios.post(
                "http://localhost:8000/user/create",
                formData
            );

        } catch (error) {

        }
    }
}
    return (
        <div>
            <h1>Sign Up as an Individual Trainee</h1>
            <form onSubmit={handleSubmit}>
            <h5>First Name:</h5>
                <input
                    type="text"
                    name="FirstName"
                    placeholder="firstname"
                    onChange={handleChange}
                    value={formData.FirstName}
                />
                <h5>Last Name:</h5>
                <input
                    type="text"
                    name="LastName"
                    placeholder="lastname"
                    onChange={handleChange}
                    value={formData.LastName}
                />
                <h5>Gender:</h5>
                <input
                    type="radio"
                    id= "male"
                    name="Gender"
                    value= "Male"
                    checked = {formData.Gender === "Male"}
                    onChange={handleChange}
                />
                  <label htmlFor="male">Male</label><br></br>
                <input
                    type="radio"
                    id= "female"
                    name="Gender"
                    value= "Female"
                    checked = {formData.Gender === "Female"}
                    onChange={handleChange}
                />
                  <label htmlFor="female">Female</label><br></br>


               
                <h5>Email:</h5>
                <input
                    type="text"
                    name="Email"
                    placeholder="email"
                    onChange={handleChange}
                    value={formData.Email}
                />
                <h5>Username:</h5>
                <input
                    type="text"
                    name="Username"
                    placeholder="username"
                    onChange={handleChange}
                    value={formData.Username}
                />
                <h5>Password:</h5>
                <input
                    type="password"
                    name="Password"
                    placeholder="password"
                    onChange={handleChange}
                    value={formData.Password}
                />
                   <h5>Choose your Country:</h5>
 <select id="country" name="Country" onChange={handleChange} value={formData.Country}>
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
                </label><br></br>
                <input
                    type="checkbox"
                    name="companyrefund"
                    placeholder="Company Refund"
                    checked={formData.companyrefund}
                    onChange={handleChange}
                />
                <label htmlFor="companyrefund">
                    <a href="./CompanyRefundPolicy" target="_blank" rel="noopener noreferrer">Company Refund Policy</a>
                </label><br></br>

                <input
                    type="checkbox"
                    name="paymentpolicy"
                    placeholder="Payment Policy"
                    checked={formData.paymentpolicy}
                    onChange={handleChange}
                />
                <label htmlFor="paymentpolicy">
                    <a href="./paymentPolicy" target="_blank" rel="noopener noreferrer">Payment Policy</a>
                </label><br></br>
    
                <button name="signUp">Sign Up</button>
            </form>
        </div>
    );
}
export default SignUpIndividualTrainee;

