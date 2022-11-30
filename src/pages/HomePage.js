import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Fade from "react-reveal/Fade";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Fade bottom>
        <About />
        <Pricing />
        <Contact />
      </Fade>
      <Footer />
    </>
  );
}
