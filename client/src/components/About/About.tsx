import { Link } from "react-router";
import CvPdf from "../../../public/Fouzy Chikouche (2).pdf";
import Angular from "../../../public/angular.png";
import Express from "../../../public/express_red.png";
import Java from "../../../public/java_red.png";
import Mysql from "../../../public/mysql_red.png";
import NodeJs from "../../../public/node_red.png";
import React from "../../../public/react red.png";
import Typescript from "../../../public/typescript_red.png";
import NavBar from "../Navbar/Navbar";
import "./About.css";
function About() {
  const Imgtechno = [React, Typescript, NodeJs, Express, Mysql, Angular, Java];
  return (
    <>
      <NavBar />
      <div className="About_full">
        <h1 className="title">About</h1>
        <p className="text_about">
          Hello and welcome to my portfolio! My name is Fouzy Chikouche. I am
          currently undergoing a career change and passionately training to
          become a full stack web developer. After working with React and
          Node.js, I am now specializing in Java and Angular development to
          strengthen both my frontend and backend skills in a professional
          environment. Before transitioning into tech, I worked as a
          self-employed fiber optic technician, mainly for SFR. This experience
          taught me discipline, independence, and a strong sense of service
          qualities I now apply to my development projects. I’m curious,
          determined, and constantly evolving. I’m currently looking for an
          apprenticeship or a position where I can continue learning, contribute
          to real-world projects, and grow within a development team. Thank you
          for visiting, and feel free to{" "}
          <Link to="/contact">get in touch!</Link>
        </p>
        <div className="techno">
          {Imgtechno.map((img) => (
            <img
              key={img}
              className="img_techno"
              src={img}
              alt="image_techno"
            />
          ))}
        </div>

        <div className="cv_download">
          <p className="text_cv">
            👋 Thank you for visiting my portfolio! To learn more about my
            background, feel free to check out my resume
          </p>
          <a href={CvPdf} download="CV">
            <button type="button" className="explore-button">
              Download
            </button>{" "}
          </a>
        </div>
      </div>
    </>
  );
}
export default About;
