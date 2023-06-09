import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import img from '../image/abimg2.png';
import Back from '../common/Back';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_znzbb3a',
        'template_9f6m5o9',
        form.current,
        '4JJ0xb8PB7G1_QkIz'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Tell Us your Query?" cover={img} />
        <div className="container">
          <form className="shadow" ref={form} onSubmit={sendEmail}>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input type="text" name="from_name" placeholder="Name" />
              <input type="email" name="from_email" placeholder="Email" />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" cols="30" rows="10"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
