import About from "../../components/About/About";
import Landing from "../../components/Landing/Landing";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Portfolio from "./../../components/Portfolio/Portfolio";
import Blog from "./../../components/Blog/Blog";
import Testimonials from "./../../components/Testimonials/Testimonials";
import Contact from "./../../components/Contact/Contact";
import Projects from "./../../components/Projects/Projects";
import Footer from "./../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Testimonials />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
