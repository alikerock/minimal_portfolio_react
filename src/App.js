import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioList from "./pages/PortfolioList";
import PortfolioSingle from "./pages/PortfolioSingle";
//import data from "./data.json";
import supabase from "./supabase";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      // 'portfolio' 테이블에서 모든 데이터를 가져옴
      let { data, error } = await supabase.from("portfolio").select("*");
      console.log(data, error);
      if (error) {
        console.error("Error fetching data:", error);
        console.log(error);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={projects}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/portfolio" element={<PortfolioList data={projects} />} />
        <Route path="/portfolio/:id" element={<PortfolioSingle data={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
