import React from "react";
import ReactDOM from "react-dom/client";

import SignUp from "./SignUpIndividualTrainee"
import PaymentPolicy from "./paymentPolicy"
import WebsitePolicy from "./WebsitePolicy"
import CompanyRefundPolicy from "./CompanyRefundPolicy"
import "./Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login";
//import SignUp from "./Pages/SignUp";
import IndividualTraineeHome from "./Pages/IndividualTraineeHome";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/IndividualTraineeHome" element={<IndividualTraineeHome />} />
        <Route path="/paymentPolicy" element={<PaymentPolicy />}/>
        <Route path="/WebsitePolicy" element={<WebsitePolicy />}/>
        <Route path="/CompanyRefundPolicy" element={<CompanyRefundPolicy />}/>
    </Routes>
</Router>);
