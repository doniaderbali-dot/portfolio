import React, { useState } from 'react';
import './contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "928aae66-ffbb-4151-b9f3-070934a78b3d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <div id='contact' className='contact'>

            <div className='contact-title'>
                <h1>Mettiti in contatto</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">

                <div className="contact-left">
                    <div className="contact-details">
                        <h1>Facciamo due chiacchiere</h1>
                        <p>Attualmente sono disponibile per nuovi progetti. Sentiti libero di inviarmi un messaggio in qualsiasi momento.</p>

                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>doniaderbali99@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+39 351 5510798</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Bologna, IT</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label>Nome</label>
                    <input type="text" name="name" placeholder="Enter your name" required />

                    <label>mail</label>
                    <input type="email" name="email" placeholder="Enter your email" required />

                    <label>Messaggio</label>
                    <textarea name="message" rows="8" placeholder="Write your message here" required />

                    <button type="submit" className="contact-submit">Submit</button>

                    {result && <p className="form-result">{result}</p>}
                </form>

            </div>
        </div>
    );
};

export default Contact;
