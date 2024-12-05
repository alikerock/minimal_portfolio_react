import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PortfolioList = ({ data }) => {
  return (
    <div>
      <Header />
      <section>
        <h2>Portfolio List</h2>
        <div className="portfolio-list">
          {data.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.images.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <a href={`/portfolio/${index}`}>View Details</a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioList;
