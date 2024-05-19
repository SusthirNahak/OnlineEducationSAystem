import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col left">
        <h3>Send Us a Message <img src={message_icon} alt="" /></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, rerum sint? Dolorem itaque, eveniet vero atque, iusto illum qui aliquam debitis beatae asperiores modi consectetur facere tenetur! Quaerat, impedit cupiditate?</p>
        <ul>
             <li><img src={mail_icon} alt="" />ap@onlineeducationportal.com</li>
             <li><img src={phone_icon} alt="" />+91 8989765456</li>
             <li><img src={location_icon} alt="" />Plot Number 857,Andheri East,Mumbai</li>
        </ul>
        </div>
        <div className="contact-col">
            <form >
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Mobile Number' required/>
                <label htmlFor="">Enter Message</label>
                <textarea rows="4" name='message' placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Here</button>
            </form>
        </div>
    </div>
  )
}

export default Contact