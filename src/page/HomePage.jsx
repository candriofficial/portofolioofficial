import React from "react";
import { Link } from "react-router-dom";
import "../page/HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <h1>Frontend Developer | Learning Backend</h1>
      <p>Membangun antarmuka web, sambil belajar backend</p>

      <Link to="/proyek" className="btn-proyek">
        Lihat Proyek
      </Link>
    </main>
  );
}

export default HomePage;
