import React from "react";
import './Footer.css';
import Instagram from './pictures/instagram.png';
import TikTok from './pictures/tik-tok.png';
import Email from './pictures/mail.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h2 className="footer-logo">YOKA</h2>
                <p className="footer-contact">Contact Us</p>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/yokateaofficial/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" className="icon" />
                    </a>
                    <a href="https://www.tiktok.com/@yokaseattle" target="_blank" rel="noopener noreferrer">
                        <img src={TikTok} alt="TikTok" className="icon" />
                    </a>
                    <a href="mailto:info@yoka.tea">
                        <img src={Email} alt="Email" className="icon" />
                    </a>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-signup-text">
                    Sign up to be the first to know about exclusive promos, discounts, events, etc
                </p>
                <form className="footer-form">
                    <input type="email" placeholder="email address" className="email-input" />
                    <button type="submit" className="submit-button">→</button>
                </form>
                <p className="footer-address">1101 34th Ave, Seattle, WA 98122</p>
            </div>
        </footer>
    );
};

export default Footer;
