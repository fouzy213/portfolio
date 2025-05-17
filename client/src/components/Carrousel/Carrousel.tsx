import "./Carrousel.css";
import aft_descri from "../../../public/aft_descri.png";
import pageAcueil1 from "../../../public/page accueil 2.png";
import pageAcueil2 from "../../../public/page accueil 3.png";
import projet_1 from "../../../public/projet 1.png";
import projet_2 from "../../../public/projet 2.png";
import projet_3 from "../../../public/projet 3.png";
import serchbar from "../../../public/resultat serchbar.png";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={projet_1} alt="projet_1" />
        </div>
        <div className="embla__slide">
          <img src={projet_2} alt="projet_2" />
          <img src={aft_descri} alt="projet_2" />
          <img src={serchbar} alt="projet_2" />
        </div>
        <div className="embla__slide">
          <img src={projet_3} alt="projet_3" />
          <img src={pageAcueil1} alt="projet_3" />
          <img src={pageAcueil2} alt="projet_3" />
        </div>
      </div>
    </div>
  );
}
