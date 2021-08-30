import React from 'react';
import HeroCSS from './Hero.module.css';

function Hero() {
  return (
    <div className={HeroCSS.container}>
      <span className={HeroCSS.title}>No reactions to your reddit posts?</span>
      <span className={HeroCSS.subtitle}>
        Great timing, great results! Find the best time to post on your subreddit.
      </span>
    </div>
  );
}

export default Hero;
