import { useState } from "react";
import "../Home/Home.css";
// import home from "../Home/home.png";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    let link = document.createElement("a");
    link.href =
      "https://gdoc.io/uploads/University-Student-Resume-Template-web1.jpg";
    setTimeout(() => {
      link.click();
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <div className="home">
        <div className="box1">
          <div className="content">
            <h4>Hello !</h4>
            <h2>I'm Sumit Kumar.</h2>
            <h1>Frontend Web Developer</h1>
            <p>
              It is a long established fact that a render will die distructed by
              this readable content of a page when looking at its layout.
            </p>
            <button className="btn btn-primary">Hire Me</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="btn btn-warning"
              onClick={handleDownload}
              disabled={isLoading}
            >
              {isLoading ? "Downloading ......" : "Download Resume"}
            </button>
          </div>
        </div>
        <div className="box2"></div>
      </div>
    </>
  );
};
export default Home;
