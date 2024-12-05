import React from "react";
import { useParams } from "react-router-dom";

const PortfolioSingle = ({ data }) => {
  const { id } = useParams();
  const item = data[id];

  if (!item) return <p>Item not found</p>;

  return (
    <div className="portfolio-single">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <div className="review">
        <p>{item.review.content}</p>
        <small>- {item.review.writer}</small>
      </div>
      <div className="images">
        <img src={item.images.description1} alt={`${item.title}`} />
        <img src={item.images.description2} alt={`${item.title}`} />
      </div>
    </div>
  );
};

export default PortfolioSingle;
