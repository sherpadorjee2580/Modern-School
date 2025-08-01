import React from "react";
import "./style/AboutUs.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="aboutUs__container">
          <div className="aboutUs__left">
            <motion.img
              src="school.jpg"
              alt=""
              width={500}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: false }}
            />
          </div>
          <div className="aboutUs__right">
            <motion.div
              className="aboutUs__right-txt"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              <p className="aboutUs__right-title">Our Humble Beginnings</p>
              <p className="aboutUs__right-first">
                A rich legacy of nurturing young minds since 2000, committed to
                holistic education.
              </p>
              <p className="aboutUs__right-second">
                Founded in the year 2000, Saraswati School began with a vision
                to provide quality education rooted in traditional values within
                the tranquil setting of Jiri, Dolakha. Over two decades, we have
                grown from a small community initiative into a vibrant
                educational institution, cherishing every student's unique
                potential. Our journey has been defined by a steadfast
                dedication to academic excellence, character building, and
                community engagement.
              </p>
              <p className="aboutUs__right-third">
                We believe in fostering an environment where curiosity thrives,
                creativity blossoms, and students are empowered to become
                responsible global citizens. Our curriculum is designed to blend
                rigorous academics with a rich array of extracurricular
                activities, ensuring a well-rounded development for every child.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
