import React from "react";
import "./AboutSection.css";

import ModelMan from "../../img/wilson3.jfif";

function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="circle about_circleOne"></div>
      <div className="circle about_circleThree"></div>

      <h2 className="section_title">About</h2>

      <div className="about_container bd_grid">
        <div className="about_text_section">
          <h2 className="about_subtitle">
            Client's always get exceptional work <br />
            <span>from me</span>
          </h2>
          <p>
            I am a person, responsible with their 
            work during working hours. Finish various 
            technical and higher studies at large universities. 
            I have several years of experience and achievements 
            in the labor field.
          </p>
        </div>

        <div className="about_image">
          <img src={ModelMan} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
