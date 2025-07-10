import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  const navItems = ["Home", "About", "Academics", "Admissions", "Contact"];
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-container"]}>
        <div className={styles["nav-left"]}>
          <img src="logo.webp" alt="logo.webp" width={100} />
        </div>
        <div className={styles["nav-middle"]}>
          <ul className={styles['nav-listContainer']}>
            {navItems.map((navItems) => (
              <li key={navItems} className={styles['nav-list']}> {navItems} </li>
            ))}
          </ul>
        </div>
        <div className={styles["nav-right"]}></div>
      </div>
    </nav>
  );
};

export default Nav;
