import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./page/HomePage";
import "./App.css";
import FotterPage from "./page/FotterPage";
import TentangPage from "./page/TentangPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/proyek" element={<h1>Proyek</h1>} />
          <Route path="/kontak" element={<h1>Kontak</h1>} />
        </Routes>
      </main>
      <FotterPage />
    </>
  );
}

export default App;
