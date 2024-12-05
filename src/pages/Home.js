import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <h2>Welcome to Minimal Portfolio</h2>
        <p>This is the homepage of your portfolio site.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
