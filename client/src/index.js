import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";

import SignUp from "./SignUpIndividualTrainee";
import PaymentPolicy from "./paymentPolicy";
import WebsitePolicy from "./WebsitePolicy";
import CompanyRefundPolicy from "./CompanyRefundPolicy";
import "./Styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import IndividualTraineeHome from "./Pages/IndividualTraineeHome";
import IndividualTraineeProfile from "./Pages/IndividualTraineeProfile";
import IndividualTraineePayment from "./Pages/IndividualTraineePayment";
import IndividualTraineeChangePassword from "./Pages/IndividualTraineeChangePassword";
import Course from "./Pages/Course";
import AdminHome from "./Pages/AdminHome";
import AdminAddUser from "./Pages/AdminAddUser";
import AdminSetPromotion from "./Pages/AdminSetPromotion";
//import history from "./history"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route
                    path="/IndividualTraineeHome"
                    element={<IndividualTraineeHome />}
                />
                <Route path="/paymentPolicy" element={<PaymentPolicy />} />
                <Route path="/WebsitePolicy" element={<WebsitePolicy />} />
                <Route
                    path="/CompanyRefundPolicy"
                    element={<CompanyRefundPolicy />}
                />
                <Route
                    path="/IndividualTraineeProfile"
                    element={<IndividualTraineeProfile />}
                />
                <Route
                    path="/IndividualTraineePayment"
                    element={<IndividualTraineePayment />}
                />
                <Route
                    path="/IndividualTraineeChangePassword"
                    element={<IndividualTraineeChangePassword />}
                />
            </Routes>
        </Router>
    </CookiesProvider>
);
