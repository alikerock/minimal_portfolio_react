import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioList from "./components/PortfolioList";
import PortfolioSingle from "./components/PortfolioSingle";
import data from "./data.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioList data={data} />} />
        <Route path="/portfolio/:id" element={<PortfolioSingle data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
