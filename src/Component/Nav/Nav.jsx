import React from "react";
import { FaAngleDown, FaArrowDown, FaLock, FaHamburger } from "react-icons/fa";
import "./style/Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const navOption = [
    "Home",
    "About Us",
    "Academics",
    "Admissions",
    "Contact Us",
  ];
  const [isMobile, setIsMobile] = useState(false);
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
  return (
    <nav className={`nav ${isMobile ? "isMobile" : ""}`}>
      {isMobile ? (
        <FaHamburger />
      ) : (
        <div className="nav__container">
          <div className="nav__left">
            <p>Saraswati</p>
          </div>
          <div className="nav__middle">
            <ul className="nav__optionContainer">
              {navOption.map((item) => (
                <li className="nav__option" key={item}>
                  {" "}
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            <div className="nav__login">
              <FaLock />
              <p>Login</p>
              <FaAngleDown />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
