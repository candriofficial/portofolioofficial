import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
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
            <a href="https://www.tiktok.com/@candritechsystemai?_r=1&_t=ZS-92kXI4vh4U6" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com/candritechsystemai?igsh=Y2l1aXBpNnlxOTg4" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Skill</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React <span>(Learn)</span></p>
        </div>

        <div className="footer-section">
          <h3>Learn</h3>
          <p>Backend Developer</p>
          <p>React</p>
          <p>Python</p>
        </div>

        <div className="footer-section">
          <h3>Tools</h3>
          <p>VS Code</p>
          <p>Chrome</p>
        </div>
      </div>

      <div className="footer-bottom">
        <b>© 2026 Candri Panjaitan</b>
      </div>
    </footer>
  );
}

export default FotterPage;
