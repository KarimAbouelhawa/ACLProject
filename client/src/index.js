import React from "react";
import ReactDOM from "react-dom/client";

import SignUp from "./SignUpIndividualTrainee"
import PaymentPolicy from "./paymentPolicy"
import WebsitePolicy from "./WebsitePolicy"
import CompanyRefundPolicy from "./CompanyRefundPolicy"
import "./Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
//import Page2 from "./page2"
//import Login2 from "./Pages/Login2";
//import history from "./history"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/paymentPolicy" element={<PaymentPolicy />} />
        <Route path="/WebsitePolicy" element={<WebsitePolicy />} />
        <Route path="/CompanyRefundPolicy" element={<CompanyRefundPolicy />} />
    </Routes>
</Router>);
