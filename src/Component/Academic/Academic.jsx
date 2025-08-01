import React from "react";
import "./style/Academic.css";
import { useNavigate } from "react-router-dom";

const Academic = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/enroll");
  };

  const courses = [
    {
      name: "Pre-school",
      desc: "Saraswati's Early Childhood Program ",
      bgimg: "preschool.jpg",
    },
    {
      name: "Primary school",
      desc: "Saraswati's Early Childhood Program ",
      bgimg: "primary.jpg",
    },
    {
      name: "Secondary school",
      desc: "Saraswati's Early Childhood Program ",
      bgimg: "secondary.jpg",
    },
  ];
  return (
    <div className="academic">
      <div className="academic__container">
        <div className="academic__title">
          <p>Academic Courses</p>
          <span>Browse our courses</span>
        </div>
        <div className="academic__row">
          {courses.map((item) => (
            <div
              key={item}
              className="academic__col"
              style={{ backgroundImage: `url(${item.bgimg})` }}
            >
              <div className="academic__col-txt">
                <p className="academic__col-txt-title"> {item.name} </p>
                <p className="academic__col-txt-desc"> {item.desc} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="academic__enroll">
          <button onClick={handleNavigate} className="academic__enroll-btn">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Academic;
