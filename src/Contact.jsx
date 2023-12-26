import logo from './logo.svg';
import './App.css';
import './Sam.css';
import Sidebar from './Components/Sidebar';


function Contact() {
    return ( 
        <div className="Contact">
            <Sidebar/>
            <div className='app contact'>
                <h1 className='heading-c'>
                    Contact Us:
                </h1>
                <a className="phone-c" href="tel:+918303996674">
                    Team Lead: +91 8303996674
                </a>
                <a className="phone-c" href="tel:+919161086557">
                    Content Manager: +91 8429978871
                </a>
                <a className="mail-c" href="mailto:cogro.recoders@gmail.com">
                    work@cogro.com
                </a>
            </div>
        </div>
     );
}

export default Contact;
