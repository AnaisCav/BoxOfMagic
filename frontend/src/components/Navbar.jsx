import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import expressAPI from "../services/expressAPI";

import loupe from "../assets/images/icones/loupe.png";
import panier from "../assets/images/icones/panier.png";
import sound from "../assets/musics/HedwigsTheme.mp3";

function Navbar() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [inputIsVisible, setInputIsVisible] = useState(false);

  useEffect(() => {
    expressAPI
      .get(`products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-20 md:h-44 bg-blueSerd flex justify-between items-center px-6 md:px-10 xl:px-16 drop-shadow-xl">
      <Link to="/">
        <h1
          className={
            inputIsVisible
              ? "w-28 lg:w-56 xl:w-full font-mono text-brown text-2xl md:text-4xl lg:text-5xl"
              : "font-mono text-brown text-2xl md:text-4xl lg:text-5xl"
          }
        >
          Welcome, Wizard !
        </h1>
      </Link>
      <div className="hidden lg:flex justify-center w-56 xl:w-96">
        <audio src={sound} controls autoPlay className="w-full">
          <track kind="captions" />
          Musique
        </audio>
      </div>
      <div className="flex justify-end gap-3 md:gap-8 xl:gap-14">
        <button
          type="button"
          onClick={() => setInputIsVisible(!inputIsVisible)}
        >
          <img src={loupe} alt="Loupe" className="h-7 md:h-9 lg:h-11" />
        </button>
        <div className={inputIsVisible ? "flex dropdown-content" : "hidden"}>
          <div className="dropdown-end">
            <input
              tabIndex={0}
              value={value}
              type="text"
              placeholder="Chercher un article"
              className="dropdown-end menu menu-sm rounded-full w-28 md:w-52 xl:w-80 md:pl-4 text-xs md:text-xl placeholder:text-brown focus:outline-none focus:ring-0"
              onChange={(e) => setValue(e.target.value)}
            />
            <ul className="dropdown-end absolute">
              {value &&
                products
                  .filter((product) =>
                    product.title.toLowerCase().includes(value.toLowerCase())
                  )
                  .map((product) => (
                    <li
                      className="dropdown-end bg-blueSerd text-brown p-2 w-28 md:w-52 lg:w-80"
                      key={product.id}
                    >
                      <a
                        href={`/product/${product.id}`}
                        className="block lg:text-center lg:text-lg z-50 hover:font-bold"
                      >
                        {product.title}
                      </a>
                    </li>
                  ))}
            </ul>
          </div>
        </div>

        <Link to="/basket">
          <div className="flex items-center h-full">
            <img src={panier} alt="Panier" className="h-7 md:h-9 lg:h-11" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
