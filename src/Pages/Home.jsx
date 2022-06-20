import React from "react";
import { About, Footer, Header, Skills, Work, Technology } from "../container";
import { Navbar } from "../components";

const Home = () => {
  return (
    <div className={"app"}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Technology />
      <Footer />
    </div>
  );
};

export default Home;
