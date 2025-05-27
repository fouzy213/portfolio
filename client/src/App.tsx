import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from "././components/Navbar/Navbar";
import ScrollToTop from "./util/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Toujours actif sur chaque route */}
      <NavBar /> {/* Barre de navigation visible partout */}
      <Outlet /> {/* Contenu de chaque page selon la route */}
      <ToastContainer position="bottom-right" autoClose={5000} />
    </>
  );
}
