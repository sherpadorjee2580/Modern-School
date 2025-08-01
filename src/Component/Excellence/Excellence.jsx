import React from "react";
import "./style/Excellence.css";
import { FaRocket } from "react-icons/fa";

const Excellence = () => {
  const rowItems = [
    { icon: <FaRocket />, title: "Games", desc: "Hello My name is Dorji" },
    { icon: <FaRocket />, title: "Stduies", desc: "Hello My name is Sherpa" },
    { icon: <FaRocket />, title: "Scholar", desc: "Hello My name is Dorji" },
    { icon: <FaRocket />, title: "Scholar", desc: "Hello My name is Dorji" },
    { icon: <FaRocket />, title: "Scholar", desc: "Hello My name is Dorji" },
    { icon: <FaRocket />, title: "Scholar", desc: "Hello My name is Dorji" },
  ];
  return (
    <div className="excellence">
      <div className="excellence__container">
        <p className="excellence__title">Academic Excellence</p>
        <div className="excellence__row">
          {rowItems.map((item) => (
            <div key={item} className="excellence__col">
              <div className="excellence__col-icon">{item.icon}</div>
              <div className="excellence__col-title"> {item.title} </div>
              <div className="excellence__col-desc"> {item.desc} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excellence;
