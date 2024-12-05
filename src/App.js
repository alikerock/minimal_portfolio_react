import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioList from "./pages/PortfolioList";
import PortfolioSingle from "./pages/PortfolioSingle";
import data from "./data.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/portfolio" element={<PortfolioList data={data} />} />
        <Route path="/portfolio/:id" element={<PortfolioSingle data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
