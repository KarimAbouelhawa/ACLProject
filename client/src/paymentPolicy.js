import React, { useState } from "react";
import "./Styles/IndividualTraineeProfileStyle.css";

function PaymentPolicy() {
    return(
        <div>
            <div className="Header">
                <a href="/IndividualTraineeHome">
                    <img src={require("./ACL_Logo.png")} alt="Logo" width="315" height="100"></img>
                </a>   
             </div>
            <div>
                <center>
                    <u><h1 >Payment Policy:</h1></u>
                </center>
                <form>
                    <u><h3>Introduction:</h3></u>
                    <p>This policy outlines the rules and guidelines for making payments on KATAYA. By using the Website to make a payment, you agree to be bound by the terms and conditions set forth in this policy.
                    </p>
                    <u><h3>Payment Methods:</h3></u>
                    <p>The Website accepts the following payment methods: credit card & PayPal.
                    </p>
                    <u><h3>Payment Processing:</h3></u>
                    <p>Payments will be processed in a secure manner, using Authenticator. We take the security of your personal and financial information very seriously and use state-of-the-art encryption to protect your data.
                    </p>
                    <u><h3>Refunds and Returns:</h3></u>
                    <p>If you are not satisfied with your purchase, you may request a refund <u>within 30 days of the purchase date.</u> To request a refund, please contact us at <u>KATAYA@KATAYA.com/19991.</u>. Refunds will be issued to the original payment method.
                    </p>
                    <u><h3>Changes to the Policy:</h3></u>
                    <p>KATAYA reserves the right to change this policy at any time. Any changes will be posted on the Website.
                    </p>
                    <u><h3>Contact Us:</h3></u>
                    <p>If you have any questions or concerns about this policy, please contact us at <u>KATAYA@KATAYA.com/19991.</u>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default PaymentPolicy;