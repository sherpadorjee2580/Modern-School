import React from "react";
import "./style/SchoolLife.css";

const SchoolLife = () => {
  const gallery = [
    { src: "school.jpg" },
    { src: "school.jpg" },
    { src: "school.jpg" },
    { src: "school.jpg" },
    { src: "school.jpg" },
    { src: "school.jpg" },
    { src: "school.jpg" },
    { src: "school.jpg" },
  ];
  return (
    <div className="schoolLife">
      <div className="schoolLife__container">
        <div className="schoolLife__txt">
          <p className="schoolLife__txt-title">Our Vibrant School Life</p>
          <p className="schoolLife__txt-desc">
            A glimpse into the joyous moments and enriching activities that
            define Saraswati School.
          </p>
        </div>
        <div className="schoolLife__galleryContainer">
          {gallery.map((item) => (
            <img src={item.src} width={300} alt="" />
          ))}
        </div>
        <button className="schoolLife__view">View All Gallery 📷</button>
      </div>
    </div>
  );
};

export default SchoolLife;
