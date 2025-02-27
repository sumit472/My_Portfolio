import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <h1>
          <i>Portfolio</i>
        </h1>
        <div className="nav-options">
          <ul>
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/skill"}>Skill</Link>
            </li>
            <li>
              {" "}
              <Link to={"/project"}>Project</Link>
            </li>{" "}
            <li>
              <Link to={"/contact"}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
