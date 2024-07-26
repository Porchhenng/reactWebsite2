import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
  
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} height="30%" width="30%" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Student from Cambodia Academy of Digital Technology</h3>
              <p>
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
