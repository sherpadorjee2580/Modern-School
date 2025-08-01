import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaAngleDown,
  FaArrowDown,
  FaLock,
  FaHamburger,
  FaCross,
} from "react-icons/fa";
import "./style/Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();

  const navOption = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Contact Us", path: "/contact" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isSideBar, setIsSideBar] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  });
  const handleSideBar = () => {
    if (isSideBar) {
      setIsSideBar(false);
      setIsSideBarOpen(false);
    } else {
      setIsSideBar(true);
      setIsSideBarOpen(true);
    }
  };

  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleLoginClick = () => {
    setShowLoginOptions((prev) => !prev);
  };

  return (
    <nav className={`nav ${isMobile ? "isMobile" : ""}`}>
      {isMobile ? (
        <div className="nav__sideBar" onClick={handleSideBar}>
          <div className="nav__lineContainer">
            <div className={`line1 ${isSideBarOpen ? "close" : "open"}`}></div>
            <div className={`line2 ${isSideBarOpen ? "close" : "open"}`}></div>
          </div>

          {isSideBarOpen && (
            <>
              <div className="nav__sideBar-container">
                <div className="nav__sideBar-option">
                  <div className="nav__sideBar-title">Welcome</div>
                  <div className="nav__sideBar-row">
                    {navOption.map((item) => (
                      <li key={item.label}>
                        <Link className="nav__link" to={item.path}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="nav__container">
          <div className="nav__left">
            <Link className="nav__link" to="/">
              <p>SARASWATI</p>
            </Link>
          </div>
          <div className="nav__middle">
            <ul className="nav__optionContainer">
              {navOption.map((item) => (
                <li className="nav__option" key={item.label}>
                  <Link className="nav__link" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            <div className="nav__login" onClick={handleLoginClick}>
              <FaLock />
              <p>Login</p>
              <FaAngleDown />
              {showLoginOptions && (
                <div className="nav__login-dropdown">
                  <Link to="/login/admin" className="nav__login-option">
                    Admin
                  </Link>
                  <Link to="/login/student" className="nav__login-option">
                    Student
                  </Link>
                  <Link to="/login/guest" className="nav__login-option">
                    Guest
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
