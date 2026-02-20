import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Media from "../components/Media";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Experience></Experience>
      <Gallery></Gallery>
      <Media></Media>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
