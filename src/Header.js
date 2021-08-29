import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import HeaderCSS from './Header.module.css';

function Header() {
  return (
    <div className={HeaderCSS.headerContainer}>
      <img src={logo} alt="logo" />
      <Link className={`${HeaderCSS.search} ${HeaderCSS.headerLinks} `} to="/search">Search</Link>
      <a className={HeaderCSS.headerLinks} href="#how-it-works">How it works</a>
      <a className={HeaderCSS.headerLinks} href="#about">About</a>
    </div>
  );
}

export default Header;
