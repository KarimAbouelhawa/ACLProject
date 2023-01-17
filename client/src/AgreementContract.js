import React, { useState } from "react";
import "./Styles/IndividualTraineeProfileStyle.css";

function AgreementContract() {
    return (
        <div>
            <div className="Header">
                <a href="/IndividualTraineeHome">
                    <img
                        src={require("./ACL_Logo.png")}
                        alt="Logo"
                        width="315"
                        height="100"
                    ></img>
                </a>
            </div>
            <div>
                <center>
                    <u>
                        <h1>Agreement Contract:</h1>
                    </u>
                </center>
                <form>
                    <p>
                        At KATAYA, we want all of our customers to be completely
                        satisfied with their purchase. If for any reason you are
                        not happy with your purchase, we will gladly issue a
                        refund or exchange the item within{" "}
                        <u>30 days of the purchase date.</u>
                        To request a refund or exchange, please contact us{" "}
                        <u> at KATAYA@KATAYA.com or call us on 19991.</u> Please
                        provide your name, order number, and the reason for the
                        refund or exchange. Refunds will be issued to the
                        original form of payment. If you received the item as a
                        gift and would like to exchange it for a different item,
                        we will issue store credit. Please note that all items
                        must be returned in their original packaging, with all
                        tags attached, and in the same condition as when you
                        received them. We reserve the right to refuse a refund
                        or exchange if the item is not in its original
                        condition.
                        <br></br>
                        Customized or personalized items are non-refundable.
                        <br></br>
                        Please note that shipping and handling fees are
                        non-refundable.
                        <br></br>
                        Please allow <u> 7 business days </u> for us to process
                        your refund or exchange once we receive your returned
                        item. Thank you for choosing KATAYA.
                    </p>
                </form>
            </div>
        </div>
    );
}
export default AgreementContract;
