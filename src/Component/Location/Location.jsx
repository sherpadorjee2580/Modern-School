import React from "react";
import { FaMapMarkedAlt, FaPhone, FaMailBulk } from "react-icons/fa";
import "./style/Location.css";
import { motion } from "framer-motion";

const Location = () => {
  const location = [
    {
      icon: <FaMapMarkedAlt />,
      location: "Jiri, Dolakha, Bagmati Province, Nepal",
    },
    { icon: <FaPhone />, location: "+977-49-440234" },
    { icon: <FaMailBulk />, location: "info@saraswatischool.edu.np" },
  ];
  return (
    <div className="location">
      <div className="location__container">
        <motion.div
          className="location__title"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <p>Our Serene Location</p>
          <span>
            Nestled in the picturesque valley of Jiri, Dolakha, offering an
            ideal environment for learning.
          </span>
        </motion.div>
        <div className="location__row">
          <motion.div
            className="location__left"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: false }}
          >
            Hello
          </motion.div>
          <motion.div
            className="location__right"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="location__right-title">Where Learning Meets Nature</p>
            <p className="location__right-desc">
              Saraswati School is strategically located in the breathtakingly
              beautiful Jiri valley, often known as the 'Switzerland of Nepal'.
              This serene and pollution-free environment provides an exceptional
              backdrop for our students' growth and development, away from the
              hustle and bustle of city life. The natural surroundings encourage
              outdoor activities and a deeper connection with the environment.
            </p>
            <div className="location__right-middle">
              {location.map((item) => (
                <div key={item} className="locationInfo">
                  <p className="locationInfo-icon"> {item.icon} </p>
                  <p className="locationInfo-txt"> {item.location} </p>
                </div>
              ))}
            </div>
            <button className="location__right-button"> Get Direction </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;
