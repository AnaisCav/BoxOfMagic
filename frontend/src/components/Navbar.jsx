import { Link } from "react-router-dom";

import loupe from "../assets/images/icones/loupe.png";
import panier from "../assets/images/icones/panier.png";

function Navbar() {
  return (
    <div className=" h-20 md:h-36 bg-blueSerd flex justify-between items-center px-6 md:px-10 xl:px-16">
      <Link to="/">
        <h1 className=" font-mono text-brown text-2xl md:text-4xl lg:text-5xl">
          Welcome, Wizard !
        </h1>
      </Link>
      <div className="flex gap-3 md:gap-8 xl:gap-14 pb-2">
        <img src={loupe} alt="Loupe" className="h-7 md:h-9 lg:h-11" />
        <Link to="/basket">
          <img src={panier} alt="Panier" className="h-7 md:h-9 lg:h-11" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
