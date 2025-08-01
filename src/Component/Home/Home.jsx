import React from "react";
import "./style/Home.css";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__imageContainer">
          <img src="hero.webp" alt="" />
        </div>
        <div className="home__textContainer">
          <motion.p
            className="home__textContainer-title"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            viewport={{ once: false }}
          >
            Nurturing Tomorrow's Leader Today
          </motion.p>
          <motion.p
            className="home__textContainer-desc"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
            viewport={{ once: false }}
          >
            A vibrant community dedicated to academic excellence holistic
            development, and a brighter future for every student.
          </motion.p>
          <motion.div
            className="home__textContainer-btnContainer"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeInOut, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <button className="home__textContainer-apply">Apply Now</button>
            <button className="home__textContainer-learn">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
