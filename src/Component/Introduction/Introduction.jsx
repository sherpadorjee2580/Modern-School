import React from "react";
import "./style/Introduction.css";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction__container">
        <div className="introduction__txt">
          <motion.p
            className="introduction__txt-title"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            Introduction
          </motion.p>
          <motion.p
            className="introduction__txt-desc"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            It is the aim of saraswati School to provide K-12 education that
            every student deserves. We, at saraswati School, appreciate
            diversity and realize that each student is different and should be
            treated as an unique individual. saraswati, The Best School in
            Kathmandu Valley has a constant endeavor to help each student
            realize his/her full potential and discover new horizons in
            learning. We are delivering continuous quality education as The Best
            School in Balaju area by bringing out the best in our students so
            that they can rise to the top ever empowered by a belief in
            unlimited human potential. At saraswati School, creativity is
            nurtured, with learners being treated as just learners, imbued with
            a passion for knowledge and discovery, and not as rote machines. In
            terms of overall academic orientation, we place a pronounced
            emphasis on Science, Technology, English/Engineering, Arts, and
            Mathematics (STEAM), along with other domains critical to overall
            academic achievement and sustained academic excellence.
          </motion.p>
        </div>
        <motion.div
          className="introduction__boxContainer"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <div className="introduction__boxContainer-student">
            🎓 500+ Students
          </div>
          <div className="introduction__boxContainer-excellence">
            🤝 100% Excellence
          </div>
          <div className="introduction__boxContainer-service">
            🕑 24hrs Service
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
