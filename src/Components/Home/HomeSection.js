import React from "react";
import "./HomeSection.css";

// Social Links
import HomeSocial from "./HomeSocial.js";

// Image
import LadyImage from "../../img/Wilson.jpg";
import Smiley from "../../img/smiley_1.svg";
import LadyBgPath from "../../img/lady_bgpath.svg";
import medal from "../../img/medal.svg";

function HomeSection() {
  return (
    <section className="home section bd_grid" id="home">
      <div className="circle circleOne"></div>
      <div className="circle circleTwo"></div>
      <div className="circle circleThree"></div>
      <div className="home_data">
        <h1 className="home_title">
          Hi, I'am <br /> <span>Wilson Nswagiro</span> <br /> Web Developer
        </h1>

        <a href="./#" className="button">
          Contact
        </a>
      </div>

      <div className="homeSocial">
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>

      <div className="home_img">
        <img src={LadyImage} alt="" className="profileImg" />
        <img src={LadyBgPath} alt="" className="profileBg" />

        <img src={Smiley} alt="" className="smiley" />

        <div className="box box1">
          <div className="imageBox">
            <img src={Smiley} alt="" />
          </div>
          <div className="ContentBox">
            <h2>UI/UX</h2>
            <p>Certificate in UI/UX Design</p>
          </div>
        </div>

        <div className="box box2">
          <div className="imageBox">
            <img src={medal} alt="" />
          </div>
          <div className="ContentBox">
            <h2>Awards</h2>
            <p>Certificate in Computer Science.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
