import React from "react";
import "./style/quickLinks.css";

const QuickLinks = () => {
  const quickLink = [
    {
      icon: "📗",
      title: "Our Classes",
      desc: "Explore our extensive curriculum from Nursery to Class 10",
    },
    {
      icon: "👤",
      title: "Admissions",
      desc: "Learn about our admission process and requirements.",
    },
    {
      icon: "✉️",
      title: "Contact Us",
      desc: "Reach out for inquiries, feedback, or to schedule a visit.",
    },
    {
      icon: "📷",
      title: "School Gallery",
      desc: "View memorable moments from school events and student life.",
    },
  ];
  return (
    <div className="quickLink">
      <div className="quickLink__container">
        <div className="quickLink__txt">
          <p className="quickLink__txt-title">Quick Links to Explore More</p>
          <p className="quickLink__txt-desc">
            Find the information you need quickly and easily
          </p>
        </div>
        <div className="quickLink__row">
          {quickLink.map((item) => (
            <div key={item} className="quickLink__col">
              <p className="quickLink__col-icon"> {item.icon} </p>
              <p className="quickLink__col-title"> {item.title} </p>
              <p className="quickLink__col-desc"> {item.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
