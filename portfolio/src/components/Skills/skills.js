import React from 'react';
import './skills.css';
// import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">I am a skilled and passionate web Designer
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quam accusantium iure rerum magnam consectetur molestiae eligendi obcaecati itaque corporis nihil facere modi ratione minus optio, repellat aperiam voluptate quasi?</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>this is demo text</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>this is demo text </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>this is demo text </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
