import React from "react";
import Home from "../../Component/Home/Home";
import Vision from "../../Component/Vision/Vision";
import Excellence from "../../Component/Excellence/Excellence";
import Introduction from "../../Component/Introduction/Introduction";
import Principle from "../../Component/Principle/Principle";
import Choose from "../../Component/Choose/Choose";
import SchoolLife from "../../Component/SchoolLife/SchoolLife";
import QuickLinks from "../../Component/QuickLinks/QuickLinks";
import Footer from "../../Component/Footer/Footer";
import Academic from "../../Component/Academic/Academic";

import "./style/HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__container">
        <Home />
        <Introduction />
        <Principle />
        <Choose />
        <Academic />
        <SchoolLife />
        <QuickLinks />
        <Vision />
        <Excellence />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
