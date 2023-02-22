import React from "react";
import "./Css/Contact.css";
import Conbaner from "./img/Contact/lol.png";
import media1 from "./img/Social media/fACEBOOK.png";
import media2 from "./img/Social media/GOOGLE.png";
import media3 from "./img/Social media/TIW.png";
import media4 from "./img/Social media/youtube.png";
import message from "./img/Contact/cont/message.png";
import call from "./img/Contact/cont/call.png";
import mail from "./img/Contact/cont/mail.png";
import live from "./img/Contact/cont/live.png";
import MapComp from "./components/MapComp";
import SimpleMap from "./components/SimpleMap";

const ContactUs = () => {
  return (
        <div className="lols">
      <div className="doos">
        <div className="lefts">
          <img src={Conbaner} alt />
          <div className="social-media">
            <img src={media1} alt = 'media' />
            <img src={media2} alt = 'media' />
            <img src={media3} alt = 'media' />
            <img src={media4} alt = 'media' />
          </div>
        </div>
        <div className="right">
          <div className style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15%', color: '#03C7C6'}}>
            <h3>Contact With Us </h3>
          </div>
          <div className style={{width: '100%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div className="Service">
              <img src={message} alt />
              <div className="list">
                <h5>Chat with Coustmer Service</h5>
                <p>Monday-Sunday : 10:00am - 07:00pm</p>
              </div>
            </div>
            <div className="Service">
              <img src={call} alt />
              <div className="list">
                <h5>Call Us</h5>
                <p>Monday-Sunday : 10:00am - 07:00pm</p>
              </div>
            </div>
            <div className="Service">
              <img src={mail} alt />
              <div className="list">
                <h5>Email Us</h5>
                <p>24 x 7 Available</p>
              </div>
            </div>
            <div className="Service">
              <img src={live} alt />
              <div className="list">
                <h5>Live Chat</h5>
                <p>Monday-Sunday : 10:00am - 07:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default ContactUs;
