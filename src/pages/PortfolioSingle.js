import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PortfolioSingle = ({ data }) => {
  const { id } = useParams();
  const item = data[id];

  if (!item) return <p>Item not found</p>;

  return (
    <>
      <Header />
      <main class="content portoflio-single">
          <div class="container">
              <div class="row">
                  <div class="col-md-8 decription">
                      <div class="contents shadow">
                        <img src={item.images.description1} alt={`${item.title}`} />
                        <p>image description 1</p>
                      </div>
                      <div class="contents shadow">
                        <img src={item.images.description2} alt={`${item.title}`} />
                        <p>image description 2</p>
                      </div>
                  </div>
                  <div class="col-md-4 portfolio_info">
                      <div class="contents shadow">
                          <h2>{item.title}</h2>
                          <p>{item.content}</p>
                          <p class="link">
                              <a href="#">Visit site &rarr;</a>
                          </p>
                          <hr class="double"/>
                          <blockquote>
                              <p>{item.review.content}</p>
                              <small>- {item.review.writer}</small>
                          </blockquote>
                          <p class="nav">
                              <a href="#" class="secondary-btn">&larr; Previous Project</a>
                              <a href="#" class="secondary-btn">Next Project &rarr;</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>          
      </main>
      <Footer />
    </>
    
  );
};

export default PortfolioSingle;
