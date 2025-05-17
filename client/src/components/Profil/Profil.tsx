import profilPicture from "../../../public/profil.png";
import "./profil.css";
function Profil() {
  return (
    <>
      <div className="main_profil">
        <div className="profil">
          <h1>Chikouche Fouzy</h1>
          <h1 className="description_dev ">FullStack Web Developer</h1>

          <p className="para_pro">
            Full Stack Web Developer in Career Transition, Passionate About Tech
            and Code I primarily work with JavaScript, React, Node.js, Express
            and MySQL. Always eager to learn new skills, I’m self-teaching Java
            and Angular to broaden my expertise. Curious, motivated, and
            committed to continuous learning, I build modern and functional web
            applications — Welcome to my portfolio.
          </p>
        </div>

        <div className="logo_profilContainer">
          <img className="logo_profil" src={profilPicture} alt="logo_profil" />
        </div>
      </div>
    </>
  );
}

export default Profil;
