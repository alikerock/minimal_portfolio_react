import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioList from "./pages/PortfolioList";
import PortfolioSingle from "./pages/PortfolioSingle";
import data from "./data.json";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home 컴포넌트 */}
        <Route path="/" element={<Home />} />

        {/* PortfolioList 컴포넌트 */}
        <Route path="/portfolio" element={<PortfolioList data={data} />} />
        <Route path="/portfolio/:id" element={<PortfolioSingle data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
