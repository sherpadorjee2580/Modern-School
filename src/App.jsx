import React from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import Enroll from "./Pages/Enroll/Enroll";
import Admin from "./Pages/Admin/Admin";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/guest" element={<GuestLogin />} /> */}
      </Routes>
    </>
  );
};

export default App;
