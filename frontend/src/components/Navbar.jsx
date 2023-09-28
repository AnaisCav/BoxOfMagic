import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import expressAPI from "../services/expressAPI";

import loupe from "../assets/images/icones/loupe.png";
import panier from "../assets/images/icones/panier.png";

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
    <div className="h-20 md:h-36 bg-blueSerd flex justify-between items-center px-6 md:px-10 xl:px-16 drop-shadow-xl">
      <Link to="/">
        <h1 className=" font-mono text-brown text-2xl md:text-4xl lg:text-5xl">
          Welcome, Wizard !
        </h1>
      </Link>
      <div className="flex gap-3 md:gap-8 xl:gap-14 p">
        <button
          type="button"
          onClick={() => setInputIsVisible(!inputIsVisible)}
        >
          <img src={loupe} alt="Loupe" className="h-7 md:h-9 lg:h-11" />
        </button>
        <div
          className={inputIsVisible ? "flex dropdown-content z-50" : "hidden"}
        >
          <div className="dropdown-end">
            <input
              tabIndex={0}
              value={value}
              type="text"
              placeholder="Chercher un article"
              className="dropdown-end menu menu-sm rounded-full w-80 pl-4 text-xl placeholder:text-brown focus:outline-none focus:ring-0"
              onChange={(e) => setValue(e.target.value)}
            />
            <ul className="dropdown-end absolute">
              {value &&
                products
                  .filter((product) =>
                    product.title.toLowerCase().includes(value.toLowerCase())
                  )
                  .map(
                    (product, i) =>
                      i < 10 && (
                        <li
                          className="dropdown-end bg-blueSerd text-brown text-xl p-2 w-80"
                          key={product.id}
                        >
                          <a
                            href={`/product/${product.id}`}
                            className="block lg:text-center lg:text-lg z-50"
                          >
                            {product.title}
                          </a>
                        </li>
                      )
                  )}
            </ul>
          </div>
        </div>

        <Link to="/basket">
          <img src={panier} alt="Panier" className="h-7 md:h-9 lg:h-11" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
