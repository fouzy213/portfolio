import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash); //si tu vois un #ma-section tu fait sa
      if (element) {
        //si tu vois un changement d'URL tu me fait le Scroll
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Aucun hash : remonter en haut de la page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
