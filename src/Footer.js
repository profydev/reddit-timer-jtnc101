import React from 'react';
import sign from './images/sign.svg';
import FooterCSS from './Footer.module.css';

function Footer() {
  return (
    <footer className={FooterCSS.container}>
      <span>prof.dev</span>
      <img src={sign} alt="sign" />
      <span>Terms & Pricing</span>
    </footer>
  );
}

export default Footer;
