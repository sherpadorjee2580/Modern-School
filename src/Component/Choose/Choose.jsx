import React from "react";
import "./style/Choose.css";

const Choose = () => {
  const whyChoose = [
    {
      icon: "📖",
      title: "Comprehensive Curriculum",
      desc: "Rigorous academic programs from Nursery to Class 10, designed to challenge and inspire.",
    },
    {
      icon: "👥",
      title: "Experienced Faculty",
      desc: "Dedicated and passionate educators committed to student success and well-being.",
    },
    {
      icon: "🎖️",
      title: "Holistic Development",
      desc: "Emphasis on extracurricular activities, sports, and arts for all-round growth.",
    },
    {
      icon: "🏠",
      title: "Supportive Environment",
      desc: "A nurturing and inclusive community where every student feels safe and valued.",
    },
    {
      icon: "🎓",
      title: "Future-Ready Skills",
      desc: "Focus on critical thinking, problem-solving, and digital literacy for future readiness.",
    },
    {
      icon: "🌐",
      title: "Global Perspective",
      desc: "Fostering an understanding of diverse cultures and global issues.",
    },
  ];
  return (
    <div className="choose">
      <div className="choose__container">
        <div className="choose__left">
          <div className="choose__txt">
            <p className="choose__txt-title">Why Choose Saraswati School?</p>
            <p className="choose__txt-desc">
              We believe in nurturing every child's potential. Our commitment to
              excellence, holistic development, and a supportive community sets
              us apart.
            </p>
          </div>
          <div className="choose__row">
            {whyChoose.map((item) => (
              <div key={item} className="choose__col">
                <div className="choose__col-left">
                  <p className="choose__col-icon"> {item.icon} </p>
                </div>
                <div className="choose__col-right">
                  <p className="choose__col-title"> {item.title} </p>
                  <p className="choose__col-desc"> {item.desc} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="choose__right">
          <img src="school.jpg" alt="" className="img-fluid" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Choose;
