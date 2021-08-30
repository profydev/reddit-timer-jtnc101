import React from 'react';
import { Link } from 'react-router-dom';
import sign from './images/sign.svg';
import FooterCSS from './Footer.module.css';

function Footer() {
  return (
    <footer className={FooterCSS.container}>
      <a href="https://profy.dev/employers" className={FooterCSS.links}>profy.dev</a>
      <Link to="/"><img src={sign} alt="sign" /></Link>
      <Link to="/terms" className={FooterCSS.links}>Terms & Pricing</Link>
    </footer>
  );
}

export default Footer;
