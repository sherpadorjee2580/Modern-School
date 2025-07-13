import React from "react";
import { FaArrowRight } from "react-icons/fa";
import './style/Vision.css'
const Vision = () => {
  return (
    <div className="vision">
      <div className="vision__container">
        <div className="vision__text">
          <p className="vision__text-title">Our Vision for Education</p>
          <p className="vision__text-desc">
            At Modern School, we believe in fostering an environment where
            curiosity thrives, talents are honed, and every student is empowered
            to achieve their full potential. Our approach integrates rigorous
            academics with character development and community engagement.
          </p>
          <a className="vision__text-read">
            Read Our Full Story
            <FaArrowRight className="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vision;
