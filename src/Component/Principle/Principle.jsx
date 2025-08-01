import React from "react";
import "./style/Principle.css";

const Principle = () => {
  const option = [
    {
      icon: "🎊",
      title: "Our Mission",
      desc: "To provide holistic education that fosters intellectual curiosity, critical thinking, and a lifelong love for learning, preparing students for a dynamic future.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      desc: "To be a leading educational institution that inspires excellence, cultivates compassion, and empowers every student to achieve their full potential as global citizens.",
    },
    {
      icon: "🤝",
      title: "Our Values",
      desc: "Integrity, Respect, Empathy, Innovation, and Community — the core principles guiding our interactions and educational approach every day.",
    },
  ];
  return (
    <div className="principle">
      <div className="principle__container">
        <div className="principle__txt">
          <p className="principle__txt-title">Our Guiding Principle</p>
          <p className="principle__txt-desc">
            Saraswati School is built upon a foundation of core values that
            shape every aspect of our educational journey.
          </p>
        </div>
        <div className="principle__row">
          {option.map((item) => (
            <div key={item} className="principle__col">
              <div className="principle__col-icon"> {item.icon} </div>
              <p className="principle__col-title"> {item.title} </p>
              <p className="principle__col-desc"> {item.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principle;
