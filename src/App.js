import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insert from "./pages/Insert";
import PortfolioList from "./pages/PortfolioList";
import PortfolioSingle from "./pages/PortfolioSingle";
// import data from "./data.json";
import { supabase } from './supabase'
console.log(supabase);

function App() {  
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    async function fetchProjects() {
      const { data: projects, error } = await supabase
        .from("portfolio")
        .select("*")
        .order("created_at", { ascending: false }) // 최신순 정렬
        .limit(3); // 상위 3개만 가져오기
  
      if (error) {
        console.error("데이터 가져오기 실패:", error);
      } else {
        console.log(projects);
        if (projects.length > 0) {
          setProjects(projects);
        }
      }
    }
  
    fetchProjects();
  }, []);

  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={projects}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/insert" element={<Insert />} />

          <Route path="/portfolio" element={<PortfolioList data={projects} />} />
          <Route path="/portfolio/:id" element={<PortfolioSingle data={projects} />} />
        </Routes>
      </Router>
    );

}

export default App;