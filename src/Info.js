import React from 'react-router-dom';
import InfoCSS from './Info.module.css';

function Info() {
  return (
    <div className={InfoCSS.mainContainer}>
      <div className={InfoCSS.secondaryContainer}>
        <div className={InfoCSS.subContainer}>
          <span className={InfoCSS.title}>How it works</span>
          <div className={InfoCSS.list}>
            <li>We find the 500 top posts from the past year for a subreddit.</li>
            <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
            <li>See immediately when to submit your reddit post.</li>
          </div>
        </div>
        <div className={InfoCSS.subContainer}>
          <span className={InfoCSS.title}>About</span>
          <div>
            <div>
              This app was created during a course on profy.dev with the goal to implement a
            </div>
            <div>
              pixel-perfect real-world application
              with professional workflows and tools like Kanban,
            </div>
            <div>
              ClickUp, Figma, Github, pull requests
              and code reviews. Click here for more information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
