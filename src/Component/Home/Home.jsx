import React from "react";
import "./style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__imageContainer">
          <img src="hero.webp" alt="" />
        </div>
        <div className="home__textContainer">
          <p className="home__textContainer-title">
            Nurturing Tomorrow's Leader Today
          </p>
          <p className="home__textContainer-desc">
            A vibrant community dedicated to academic excellence holistic
            development, and a brighter future for every student.
          </p>
          <div className="home__textContainer-btnContainer">
            <button className="home__textContainer-apply">Apply Now</button>
            <button className="home__textContainer-learn">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
