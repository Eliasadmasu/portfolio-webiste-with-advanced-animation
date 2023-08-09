import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hello! I'm a passionate web developer with a keen interest in
            creating visually appealing and interactive websites.
          </p>
          <p>
            As a web developer, I have honed my skills in front-end technologies
            such as HTML, CSS, and JavaScript. I specialize in creating
            responsive and user-friendly interfaces that provide an exceptional
            user experience.
          </p>
          <p>
            Learning is an essential part of my journey as a web developer. The
            fast-paced nature of this industry keeps me motivated to keep
            exploring and expanding my knowledge base.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#E4D00A" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4E28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color=" #F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#228B22" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
