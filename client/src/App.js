import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [auth, setAuth] = useState("");

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const userData = await axios.post(
            "http://localhost:4000/login",
            formData
        );
        const authentication = await axios.get("http://localhost:4000/posts", {
            headers: { Authorization: `BEARER ${userData.data.accessToken}` },
        });
        setAuth(authentication.data);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button formAction="post">Login</button>
            </form>

            <h1>{auth}</h1>
        </div>
    );
}

export default App;
