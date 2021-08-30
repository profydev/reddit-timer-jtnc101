import React from 'react';
import { Link } from 'react-router-dom';
import HeroCSS from './Hero.module.css';
import table from './images/table.png';

function Hero() {
  const defaultSearch = 'javascript';

  return (
    <div className={HeroCSS.container}>
      <span className={HeroCSS.title}>No reactions to your reddit posts?</span>
      <span className={HeroCSS.subtitle}>
        Great timing, great results! Find the best time to post on your subreddit.
      </span>
      <Link to={`/search?value=${defaultSearch}`}><button type="button" className={HeroCSS.showMeButton}><span>SHOW ME THE BEST TIME</span></button></Link>
      <span className={HeroCSS.searchText}>r/javascript</span>
      <Link to={`/search?value=${defaultSearch}`}><img src={table} alt="table" className={HeroCSS.tableImage} /></Link>
    </div>
  );
}

export default Hero;
