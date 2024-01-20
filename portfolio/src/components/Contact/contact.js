import React, { useRef } from 'react';
import './contact.css';
import Adobe from'../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Walmart from '../../assets/walmart.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubleIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rvwzlz4', 'template_4kvn8ac', form.current, 'qRdLBYvZII2Q0lhZFkWPS')
          .then((result) => {
              console.log(result.text);

              e.target.reset();
              alert('Email sent !');

          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
   <section id ="contactPage">
    <div id="clients">
    <h1 className="contactPageTitle">My Clients</h1>

    <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis, aliquam cumque aut facere aspernatur provident aliquid earum est, saepe suscipit expedita soluta similique id. Nisi dolorum laborum error quibusdam!</p>
    <div className="clientImgs">
        <img src={Adobe} alt="Adobe" className="clientImg" />
        <img src={Microsoft} alt="Microsoft" className="clientImg" />
        <img src={Facebook} alt="Facebook" className="clientImg" />
        <img src={Walmart} alt="Walmart" className="clientImg" />
    </div>
    </div>
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea  className = 'msg' name="Message"  rows="5"  placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                <img src={TwitterIcon} alt="TwitterIcon" className="link" />
                <img src={YoutubleIcon} alt="YoutubleIcon" className="link" />
            </div>
            
        </form>
    </div>
   </section>
  )
}

export default Contact
