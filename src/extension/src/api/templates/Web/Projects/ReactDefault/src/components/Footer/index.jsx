﻿import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>wts.ReactDefault</h5>
            <p className={styles.description}>
              Project Acorn was made by a group of interns in the Microsoft
              Garage Internship Program.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a
                  className={styles.footerlink}
                  href="https://github.com/Microsoft/WebTemplateStudio"
                >
                  Github Page
                </a>
              </li>
              <li>
                <a
                  className={styles.footerlink}
                  href="https://github.com/Microsoft/WebTemplateStudio/tree/dev/docs"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className={styles.footerlink}
                  href="https://www.microsoft.com/en-us/garage/"
                >
                  Microsoft Garage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}