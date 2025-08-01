import React from "react";
import "./style/Team.css";
import { motion } from "framer-motion";

const Team = () => {
  const teacher = [
    { image: "dorji.jpg", name: "Dorji Sherpa", post: "Principal" },
    { image: "dipesh.jpg", name: "Dipesh Dhaka;", post: "HOD" },
    { image: "tshering.jpg", name: "Tshering Lama", post: "HOD" },
    { image: "indra2.jpg", name: "Indra Yonjan", post: "HOD" },
    { image: "krinjal1.jpg", name: "Krinjal KC", post: "HOD" },
  ];
  return (
    <div className="team">
      <div className="team__container">
        <motion.div
          className="team__title"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <p>Meet Our Dedicated Team</p>
          <span>
            Passionate educators and supportive staff committed to shaping young
            minds.
          </span>
        </motion.div>
        <motion.div
          className="team__row"
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          {teacher.map((item) => (
            <div key={item} className="team__col">
              <div
                className="team__col-img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="team__col-txt">
                <div className="team__col-name">{item.name}</div>
                <div className="team__col-post">{item.post}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
