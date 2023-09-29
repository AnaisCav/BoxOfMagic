import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import Comments from "../components/Comments";
import ModalAddToCart from "../components/ModalAddToCart";

function DetailledProduct() {
  const [product, setProduct] = useState(null);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    expressAPI
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  const openModal = () => document.getElementById("addToCart").showModal();

  return (
    <div className="my-12 md:mx-16 lg:mx-40 xl:mx-56 2xl:mx-80">
      {product && (
        <div className="flex flex-col">
          <h1 className="text-center text-2xl md:text-3xl xl:text-5xl mx-16 md:mx-0">
            {product.title}
          </h1>

          {product.house === "" && (
            <div className="border-brown border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Griffondor" && (
            <div className="border-lightRedGrif border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Serpentard" && (
            <div className="border-lightGreenSerp border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Serdaigle" && (
            <div className="border-lightBlueSerd border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Poufsouffle" && (
            <div className="border-yellowPouff border-b-2 mt-6 mx-4 md:mx-0" />
          )}

          <div className="flex items-center flex-col md:flex-row">
            <img
              src={product.image}
              alt={product.title}
              className="h-[30rem]"
            />
            <div className="lg:ml-16 xl:ml-32 flex flex-col gap-8 text-xl md:text-2xl w-full items-start">
              <div className="flex flex-row md:flex-col gap-8 justify-center md:justify-normal md:items-start w-full">
                <div className="flex gap-2 items-center">
                  <p className="font-bold">Prix : </p>
                  <p>
                    {product.price} {product.money}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <label htmlFor="quantity" className="font-bold">
                    Quantité :
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={quantityToAdd}
                    className="px-2 w-16"
                    onChange={(e) => setQuantityToAdd(e.target.value)}
                  >
                    {Array.from({ length: 5 }, (_, i) => {
                      const value = i + 1;

                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex justify-center w-full xl:justify-start mb-12">
                {product.house === "Griffondor" && (
                  <button
                    type="button"
                    onClick={openModal}
                    className="bg-redGrif btn border-0 --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-redGrif text-almostWhite"
                  >
                    Ajouter au panier
                  </button>
                )}
                {product.house === "Serpentard" && (
                  <button
                    type="button"
                    onClick={openModal}
                    className=" bg-greenSerp btn border-0 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-greenSerp"
                  >
                    Ajouter au panier
                  </button>
                )}
                {product.house === "Serdaigle" && (
                  <button
                    type="button"
                    onClick={openModal}
                    className=" bg-blueSerd btn border-0 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-blueSerd"
                  >
                    Ajouter au panier
                  </button>
                )}
                {product.house === "Poufsouffle" && (
                  <button
                    type="button"
                    onClick={openModal}
                    className=" bg-yellowPouff btn border-0 --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-yellowPouff"
                  >
                    Ajouter au panier
                  </button>
                )}
                {product.house === "" && (
                  <button
                    type="button"
                    onClick={openModal}
                    className="bg-brown btn border-0 text-almostBlack --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown"
                  >
                    Ajouter au panier
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="text-xl md:text-2xl mx-5 text-justify md:mx-0 mb-12">
            <p>{product.description}</p>
          </div>

          {product.house === "" && (
            <div className="border-brown border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Griffondor" && (
            <div className="border-lightRedGrif border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Serpentard" && (
            <div className="border-lightGreenSerp border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Serdaigle" && (
            <div className="border-lightBlueSerd border-b-2 mt-6 mx-4 md:mx-0" />
          )}
          {product.house === "Poufsouffle" && (
            <div className="border-yellowPouff border-b-2 mt-6 mx-4 md:mx-0" />
          )}

          <div className="text-xl md:text-2xl mx-5 md:mx-0 mb-12">
            <Comments product={product} />
          </div>
        </div>
      )}
      <ModalAddToCart product={product} quantityToAdd={quantityToAdd} />
    </div>
  );
}

export default DetailledProduct;
