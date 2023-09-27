import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import Comments from "../components/Comments";

function DetailledProduct() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    expressAPI
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-12 md:mx-16 lg:mx-40 xl:mx-56">
      {product && (
        <div className="flex flex-col">
          <h1 className="text-center text-2xl md:text-3xl mx-16 md:mx-0">
            {product.title}
          </h1>

          {product.house === "" && (
            <div className="border-brown border-b-2 mt-6" />
          )}
          {product.house === "Griffondor" && (
            <div className="border-redGrif border-b-2 mt-6" />
          )}
          {product.house === "Serpentard" && (
            <div className="border-greenSer border-b-2 mt-6" />
          )}
          {product.house === "Serdaigle" && (
            <div className="border-blueSerd border-b-2 mt-6" />
          )}
          {product.house === "Poufsouffle" && (
            <div className="border-yellowPouff border-b-2 mt-6" />
          )}

          <div className="flex items-center flex-col md:flex-row">
            <img
              src={product.image}
              alt={product.title}
              className="h-[30rem]"
            />
            <div className="md:ml-16 flex flex-col gap-8 text-xl md:text-2xl w-full items-start">
              <div className="flex flex-row md:flex-col gap-8 items-center md:items-start">
                <div className="flex gap-2">
                  <p className="font-bold">Prix : </p>
                  <p>
                    {product.price} {product.money}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-bold">Quantité : </p>
                  <input
                    type="number"
                    name=""
                    min={0}
                    maxLength={3}
                    placeholder="00"
                    className="placeholder:text-base-content w-12"
                  />
                </div>
              </div>
              {product.house === "Griffondor" && (
                <button
                  type="button"
                  className="bg-redGrif btn --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-redGrif text-almostWhite"
                >
                  Ajouter au panier
                </button>
              )}
              {product.house === "Serpentard" && (
                <button
                  type="button"
                  className=" bg-greenSerp btn text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-greenSerp"
                >
                  Ajouter au panier
                </button>
              )}
              {product.house === "Serdaigle" && (
                <button
                  type="button"
                  className=" bg-blueSerd btn text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-blueSerd"
                >
                  Ajouter au panier
                </button>
              )}
              {product.house === "Poufsouffle" && (
                <button
                  type="button"
                  className=" bg-yellowPouff btn --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-yellowPouff"
                >
                  Ajouter au panier
                </button>
              )}
              {product.house === "" && (
                <button
                  type="button"
                  className="bg-brown btn text-almostBlack --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown"
                >
                  Ajouter au panier
                </button>
              )}
            </div>
          </div>
          <div className="text-xl md:text-2xl mx-16 mb-12">
            <p>{product.description}</p>
          </div>

          {product.house === "" && (
            <div className="border-brown border-b-2 mt-6" />
          )}
          {product.house === "Griffondor" && (
            <div className="border-redGrif border-b-2 mt-6" />
          )}
          {product.house === "Serpentard" && (
            <div className="border-greenSer border-b-2 mt-6" />
          )}
          {product.house === "Serdaigle" && (
            <div className="border-blueSerd border-b-2 mt-6" />
          )}
          {product.house === "Poufsouffle" && (
            <div className="border-yellowPouff border-b-2 mt-6" />
          )}

          <div className="text-xl md:text-2xl mx-16 mb-12">
            <Comments />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailledProduct;
