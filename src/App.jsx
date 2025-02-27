import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default App;
