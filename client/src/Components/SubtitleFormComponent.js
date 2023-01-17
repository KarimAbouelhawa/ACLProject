import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SubtitleFormComponent.css";

export default function CourseComponent(props) {
    const [formData, setFormData] = React.useState({
        Title: "",
        Length: "",
        Link: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    React.useEffect(() => {
        props.changeData(formData);
    }, [formData]);

    return (
        <div>
            <center>
                <h2>Subtitle {props.number}</h2>
            </center>
            <div className="subtitle">
                <h4>Title:</h4>
                <input
                    type="text"
                    name="Title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={formData.Price}
                />
                <h4>Length:</h4>
                <input
                    type="number"
                    name="Length"
                    placeholder="Length"
                    onChange={handleChange}
                    value={formData.Length}
                />
                <h4>Video Link:</h4>
                <input
                    type="text"
                    name="Link"
                    placeholder="Link"
                    onChange={handleChange}
                    value={formData.Link}
                />
            </div>
        </div>
    );
}
