// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logoImg from '../assets/images/logobranco.png';

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-content">
       </div>
      <img src={logoImg} alt="Logo" className="footer-logo" />
      <p>&copy; 2024 Pague bem$. <br></br>João.Luiz.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">X</a>
      </div>
    </footer>
  );
}

export default Footer;
