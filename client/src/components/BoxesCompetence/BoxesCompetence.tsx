import backend from "../../../public/database.png";
import figma from "../../../public/figma.png";
import git from "../../../public/git.png";
import jest from "../../../public/jest.png";
import npm from "../../../public/npm.png";
import projet1 from "../../../public/projet 1.png";
import projet2 from "../../../public/projet 2.png";
import projet3 from "../../../public/projet 3.png";
import agile from "../../../public/scrum.png";
import trello from "../../../public/trello_logo.png";
import frontend from "../../../public/web-design.png";
import ScrollToHash from "../../util/RedirectTohref";

import "./BoxesCompetence.css";
function BoxesCompetence() {
  const techno0 = ["Html", "CSS", "Javascript"];
  const techno = ["React", "Typescript", "CSS"];
  const techno1 = ["Node.js", "Express", "MySql", "MVC"];
  const lastproject = [...techno, ...techno1];

  const other = [figma, trello, npm, git, jest, agile];
  return (
    <>
      <ScrollToHash />
      {/* box1 */}
      <div id="ma-section">
        <h2 className="title_skill">Skill</h2>
      </div>
      <div className="all_boxes">
        <div className="box">
          <h4>Social Networking Platform 'Le Merle Bleu'</h4>
          <img className="img_project0" src={projet1} alt="img_techno" />
          <p className="description">
            I developed a social networking platform using HTML, CSS, and
            JavaScript, inspired by popular platforms like Twitter and Facebook.
            The application allows users to publish posts, comment on other
            users' content, and like posts. This project showcases my skills in
            front-end web development and demonstrates my ability to create
            interactive and user-friendly web applications.
          </p>

          <div className="array_techno">
            {techno0.map((item) => (
              <div className="element_techno" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* //box2// */}
        <div className="box">
          <h4>Movie & TV Show Streaming Website 'AFT CORP' </h4>
          <img className="img_project1" src={projet2} alt="img_techno" />
          <p className="description">
            I developed a front-end streaming site for movies and TV shows using
            React and TypeScript, powered by the TMDB API. Users can browse
            content, view detailed synopses, and save favorites locally. This
            project highlights my skills in API integration, dynamic data
            handling, and building interactive UIs.{" "}
          </p>

          <div className="array_techno">
            {techno.map((item) => (
              <div className="element_techno" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* box3 */}
        <div className="box">
          <h4>Private Jet Booking Platform 'Majestic Wings'</h4>
          <img className="img_project2" src={projet3} alt="img_techno" />
          <p className="description">
            I designed a complete private jet booking platform (React,
            Node.js/Express, MySQL) covering major European airports. It allows
            jet selection, in-flight service customization, flight booking,
            account creation, and confirmation email delivery. This project
            showcases my full-stack development skills and database integration
            expertise.
          </p>
          <div className="techno_github2">
            <div className="array_techno">
              {lastproject.map((item) => (
                <div className="element_techno" key={item}>
                  {item}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="competence">
          {/* box4 */}
          <div className="box">
            <h4>Front End Development</h4>
            <img className="img_front" src={frontend} alt="img_techno" />
            <p className="description">
              During my training, I developed strong front-end skills with HTML,
              CSS, JavaScript, and React. I learned to design accessible,
              dynamic, and high-performance interfaces, focusing on user
              experience and code quality.{" "}
            </p>
          </div>
          {/* box5 */}
          <div className="box">
            <h4>Back end Development</h4>
            <img className="img_back" src={backend} alt="img_techno" />
            <p className="description">
              On the back end, I developed applications using Node.js and
              Express, and worked with MySQL databases. I designed secure REST
              APIs, managed routes and middleware, and implemented CRUD
              operations while following best practices in security and
              server-side code organization.{" "}
            </p>
          </div>
          {/* box6 */}
          <div className="box1">
            <h4>Other</h4>
            <div className="lastbox">
              {other.map((item) => (
                <img
                  className="img_techno"
                  src={item}
                  alt="img_techno"
                  key={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxesCompetence;
