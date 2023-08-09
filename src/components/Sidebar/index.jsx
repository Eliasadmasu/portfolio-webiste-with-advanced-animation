import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logoElias.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} />
        <img className="sub-logo" src={LogoSubtitle} />
      </Link>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          {/*  */}
          {/* //? U can add ur linkdin here  */}
          <a target="_blank" rel="noreference" href="/linked-in">
            {/*  */}
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          {/*  */}
          {/* //? U can add ur GitHub here  */}
          <a
            target="_blank"
            rel="noreference"
            href="https://github.com/Eliasadmasu"
          >
            {/*  */}
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          {/*  */}
          {/* //? U can add ur instagram here  */}
          <a target="_blank" rel="noreference" href="/Instagram">
            {/*  */}
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
