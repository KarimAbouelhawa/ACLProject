import React, { useState } from "react";
import axios from "axios";
import "../Styles/AdminHomeStyle.css";
function AdminAddUser() {

    const [formData, setFormData] = React.useState({
        FirstName: "", LastName: "", Type: "", Email: "", Password: "", Username: "", Country: "", Gender: ""
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(formData)
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userData = await axios.post(
                "http://localhost:8000/user/create",
                formData
            );

        } catch (error) {

        }
    }
    return (
        <div>
            <h1>Add new user</h1>
            <form onSubmit={handleSubmit}>
                <h5>First Name:</h5>
                <input
                    type="text"
                    name="FirstName"
                    placeholder="first name"
                    onChange={handleChange}
                    value={formData.FirstName}
                />
                <h5>Last Name:</h5>
                <input
                    type="text"
                    name="LastName"
                    placeholder="last name"
                    onChange={handleChange}
                    value={formData.LastName}
                />
                <h5>Gender:</h5>

                <input
                    type="radio"
                    id="male"
                    name="Gender"
                    value="Male"
                    checked={formData.Gender === "Male"}
                    onChange={handleChange}
                />
                <label htmlFor="male">Male</label><br></br>
                <input
                    type="radio"
                    id="female"
                    name="Gender"
                    value="Female"
                    checked={formData.Gender === "Female"}
                    onChange={handleChange}
                />
                <label htmlFor="female">Female</label><br></br>

                <h5>Choose Type</h5>
                <select id="userType" name="Type" onChange={handleChange} value={formData.Type}>
                    <option>--choose user type--</option>
                    <option value="Admin">Administrator</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Corporate">Corporate Trainee</option>
                </select>

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

                <button>Create user</button>
            </form>
        </div>
    );
}
export default AdminAddUser;

