import React from "react";
import './css/About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row my-5">
          <div>
            <h1>Why I want to work at </h1>
            <img
                id="twilio-img"
              src="https://cdn2.downdetector.com/static/uploads/logo/twilio-logo-red.png"
              alt=""
            />
           
            <ul id="twilio">
                <li>
                I believe in Twilio as a company and the democratization of communication channels.
                </li>
                <li>
                Twilio's vastness of products and their endless uses is impressive and it's something I want to be apart of.
                </li>
                <li>
                I'm intrigued and amazed to see Twilio's prevelance in several popular applications, yet still many unknowingly take advantage of Twilio’s vast options of products.
                </li>
                <li>
                I share professional values with Twilio, notably "No shenanigans", "Draw the owl", and "Empower others".
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;