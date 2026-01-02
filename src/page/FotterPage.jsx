import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../page/FotterPage.css";

function FotterPage() {
  return (
    <footer className="fotter-page">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="profile-name">Candri Panjaitan</h3>
          <p>SMAN 2 Siborong borong</p>
          <div className="social-icons">
            <a
              href="https://github.com/candriofficial"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/candri-panjaitan-8338143a2"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Skill</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>

        <div className="footer-section">
          <h3>Learn</h3>
          <p>Backend Developer</p>
        </div>

        <div className="footer-section">
          <h3>Tools</h3>
          <p>VS Code</p>
          <p>Chrome</p>
        </div>
      </div>

      <div className="footer-bottom">
        <b>© 2024 Candri Panjaitan</b>
      </div>
    </footer>
  );
}

export default FotterPage;
