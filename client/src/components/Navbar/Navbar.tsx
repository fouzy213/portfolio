import github from "../../../public/github-sign.png";
import linkedin from "../../../public/linkedin.png";
import "./NavBar.css";
import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="img_logo">
          <a href="https://www.linkedin.com/in/fouzy-chikouche-recherche-alternance/">
            <img className="linkedin" src={linkedin} alt="logo_linkedin" />
          </a>
          <a href="https://github.com/fouzy213">
            <img className="github" src={github} alt="logo_github" />
          </a>
        </div>
        <div className="lien">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/#ma-section">Projects</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
