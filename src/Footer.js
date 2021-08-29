import React from 'react';
import { Link } from 'react-router-dom';
import sign from './images/sign.svg';
import FooterCSS from './Footer.module.css';

function Footer() {
  return (
    <footer className={FooterCSS.container}>
      <span>prof.dev</span>
      <Link to="/"><img src={sign} alt="sign" /></Link>
      <span>Terms & Pricing</span>
    </footer>
  );
}

export default Footer;
