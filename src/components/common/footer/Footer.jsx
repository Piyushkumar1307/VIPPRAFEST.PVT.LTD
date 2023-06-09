import React, { useState } from 'react';
import { footer } from '../../data/Data';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './footer.css';
import vfLogo from '../../image/vfb.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubscribe = () => {
    // EmailJS configuration
    const serviceId = 'service_znzbb3a';
    const templateId = 'template_9f6m5o9';
    const userId = '4JJ0xb8PB7G1_QkIz';

    // Prepare the email data
    const emailData = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset the input fields
        setEmail('');
        setName('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleLinkClick = (link) => {
    history.push(link);
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={vfLogo} alt="" />
              <h2>Tell Us your Query?</h2>
              <p>
                "Stay Informed! Get exclusive updates, latest project offers,
                delivered right to
                your inbox every month."
              </p>

              <div className="input flex">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="text"
                  name="from_email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box" key={val.title}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index} onClick={() => handleLinkClick(items.link)}>
                    {items.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
          2023{' '}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <span style={{ color: '#ffffff' }}>VIPPRAFEST</span>
          </a>
          . By{' '}
          <a href="https://tretacompany.com" target="_blank" rel="noopener noreferrer">
            <span style={{ color: '#ffffff' }}>Treta Company</span>
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
