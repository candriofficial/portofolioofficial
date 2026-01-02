import React from "react";
import { Link } from "react-router-dom";
import '../components/navbar.css'

function navbar() {
  return (
    <nav className="navbar">
        <div className="logo"><h1>Candri</h1></div>
      <ul className="navbar-items">
        <Link className="links" to='/'>Beranda</Link>
        <Link className="links" to='/tentang'>Tentang</Link>
        <Link className="links" to='/proyek'>Proyek</Link>
        <Link className="links" to='/kontak'>Kontak</Link>
      </ul>
    </nav>
  );
}

export default navbar;
