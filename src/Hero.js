import React from 'react';
import HeroCSS from './Hero.module.css';
import table from './images/table.png';

function Hero() {
  return (
    <div className={HeroCSS.container}>
      <span className={HeroCSS.title}>No reactions to your reddit posts?</span>
      <span className={HeroCSS.subtitle}>
        Great timing, great results! Find the best time to post on your subreddit.
      </span>
      <button type="button" className={HeroCSS.showMeButton}><span>SHOW ME THE BEST TIME</span></button>
      <span className={HeroCSS.searchText}>r/javascript</span>
      <img src={table} alt="table" className={HeroCSS.tableImage} />
    </div>
  );
}

export default Hero;
