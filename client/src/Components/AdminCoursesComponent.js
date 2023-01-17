import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
export default function AdminCoursesComponent(props) {

    //const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        Title: props.Title
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

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const userData = await axios.put(
                "http://localhost:8000/course/coursesDiscount",
                formData
            );
            console.log("data sent successfully.")
        }
        catch (error) {

        }
    }

    return (
        <div className="coursesH">
            <h2>Course Title: {props.Title}</h2>
            <h5>Instructor: {props.Instructor}</h5>
            <h5>Price: {props.Price}</h5>
            <h5>Discount: {props.Discount}</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    <h5>Discount Amount:</h5>
                    <input type="text" name="discountAmount" onChange={handleChange} value={formData.Discount} /></label>
                <button formAction="post"> Add discount </button>
            </form>
        </div>
    )
}