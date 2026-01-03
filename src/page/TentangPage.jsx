import React from "react";
import "../page/TentangPage.css";
import Remove from "../assets/remove.png";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";

function TentangPage() {
  return (
    <section className="tentang-page">
      <div className="tentang-container">
        <div className="tentang-text">
          <h2 className="tentang-title">
            Hello, I'm <span>Candri Panjaitan</span>
          </h2>

          <p className="tentang-subtitle">Aspiring Fullstack Developer</p>

          <p className="tentang-desc">
            Saya adalah seorang <b>Frontend Developer</b> yang fokus
            mengembangkan antarmuka web yang bersih dan responsif. Saat ini saya
            sedang memperdalam ekosistem <b>React</b> dan mulai melangkah ke{" "}
            <b>Backend Development</b> untuk memahami bagaimana data dikelola di
            balik layar.
          </p>

          <div className="tentang-skill">
            <h3 className="skill-title">Skill</h3>
            <div className="skill-list">
              <div className="skill-item html">
                <FaHtml5 />
                <span>HTML</span>
              </div>

              <div className="skill-item css">
                <FaCss3Alt />
                <span>CSS</span>
              </div>

              <div className="skill-item js">
                <FaJs />
                <span>JavaScript</span>
              </div>

              <div className="skill-item react">
                <FaReact />
                <span>React (learn)</span>
              </div>
            </div>
          </div>

          <div className="tentang-learning">
            <h3 className="learning-title">Sedang Dipelajari</h3>
            <div className="learning-list">
              <div className="learning-item react">
                <FaReact />
                <span>React</span>
              </div>

              <div className="learning-item node">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="learning-item database">
                <FaDatabase />
                <span>Database</span>
              </div>

              <div className="learning-item python">
                <FaPython />
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tentang-image">
          <img src={Remove} alt="Candri Panjaitan" />
        </div>
      </div>
    </section>
  );
}

export default TentangPage;
