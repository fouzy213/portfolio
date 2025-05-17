import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "././components/Navbar/Navbar";
import ScrollToTop from "./util/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Toujours actif sur chaque route */}
      <NavBar /> {/* Barre de navigation visible partout */}
      <Outlet /> {/* Contenu de chaque page selon la route */}
    </>
  );
}
