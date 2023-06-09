import React from "react";
import { useHistory } from "react-router-dom";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../image/privacy.png";
import "./privacy.css";

const Privacy = () => {
  const history = useHistory();

  return (
    <>
      <section className="about">
        <Back name="Privacy" title="Privacy-Policy" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Privacy Policy" subtitle="" />

            <h2>Introduction</h2>
            <p>
              At VIPPRAFEST Construction Company, we are committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website and services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when using our Services. This may include your name, email address, postal address, phone number, and other information necessary to provide our services effectively.
            </p>

            <h2>Use of Information</h2>
            <p>
              We use the collected information to understand and meet your needs, deliver requested services, improve our offerings, communicate with you, and comply with legal obligations. Your information will not be shared with third parties without your consent.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. Please note that we have no control over the privacy practices or content of these websites. We encourage you to review the privacy policies of those third parties before providing any personal information.
            </p>

            <h2>Changes to the Privacy Policy</h2>
            <p>
              We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or our data practices, please contact us .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
