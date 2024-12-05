import React from "react";
import { Link } from "react-router-dom";

const PortfolioList = ({ data }) => {
  return (
    <div className="portfolio-list">
      {data.map((item, index) => (
        <div key={index} className="portfolio-item">
          <img src={item.images.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <Link to={`/portfolio/${index}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
