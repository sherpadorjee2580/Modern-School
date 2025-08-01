import "./style/AboutPage.css";

import Home from "../../Component/Home/Home";
import AboutUS from "../../Component/AboutUs/AboutUs";
import Team from "../../Component/Team/Team";
import Location from "../../Component/Location/Location";
import Footer from "../../Component/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPage__container">
        <Home />
        <AboutUS />
        <Team />
        <Location />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
