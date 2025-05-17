import BoxesCompetence from "../components/BoxesCompetence/BoxesCompetence";
import { EmblaCarousel } from "../components/Carrousel/Carrousel";
import NavBar from "../components/Navbar/Navbar";
import Profil from "../components/Profil/Profil";

function HomePage() {
  return (
    <>
      <NavBar />
      <Profil />
      <EmblaCarousel />
      <BoxesCompetence />
    </>
  );
}
export default HomePage;
