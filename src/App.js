import React from "react";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Languages from "./components/Languages/Languages";
import Navigation from "./components/navigation/Navigation";
import Process from "./components/Process/Process";
import Progress from "./components/Progress/Progress";
import Projects from "./components/Projects/Projects";
import Summery from "./components/Summery/Summery";
import Theme from "./components/Theme/Theme";

const App = () => {
  return (
    <>
      <Theme />
      <Progress />
      <div className="container">
        <Navigation />
        <Home />
        <Summery />
        <Languages />
        <Process />
        <Projects />
        <Career />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
