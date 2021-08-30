import React from 'react';
import HeroCSS from './Hero.module.css';

function Hero() {
  return (
    <div className={HeroCSS.container}>
      <span className={HeroCSS.title}>No reactions to your reddit posts?</span>
      <span className={HeroCSS.subtitle}>
        Great timing, great results! Find the best time to post on your subreddit.
      </span>
      <button type="button" className={HeroCSS.showMeButton}><span>SHOW ME THE BEST TIME</span></button>
      <span className={HeroCSS.searchText}>r/javascript</span>
    </div>
  );
}

export default Hero;
