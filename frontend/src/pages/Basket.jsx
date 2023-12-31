import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import ModalFinaliseOrder from "../components/ModalFinaliseOrder";

function Basket() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const localProducts = JSON.parse(localStorage.getItem("localProducts")) || [];

  useEffect(() => {
    expressAPI
      .get(`/products`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        const data = res.data;

        const filteredProducts = data.filter((item) =>
          localProducts.some((product) => product.id === item.id)
        );

        const updatedProducts = filteredProducts.map((item) => {
          const product = localProducts.find((p) => p.id === item.id);
          const totalPrice = product ? product.quantity * item.price : 0;
          return { ...item, totalPrice };
        });

        const totalSum = updatedProducts.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );

        setProducts(updatedProducts);
        setTotal(totalSum);
      })
      .catch((err) => console.error(err));
  }, []);

  const openModal = () => {
    document.getElementById("finaliseModal").showModal();
  };

  const quantity =
    JSON.parse(localStorage.getItem("localProducts.quantity")) || [];

  return (
    <div className="min-h-screen lg:min-h-0 xl:min-h-screen mt-12 lg:my-16 md:mx-16 lg:mx-40 xl:mx-56 2xl:mx-80">
      <h1 className="text-center text-2xl md:text-3xl xl:text-5xl mx-16 md:mx-0">
        Panier
      </h1>
      <div className="border-brown border-b-2 mt-6 xl:mt-10 mx-4 md:mx-0" />
      <div>
        {products && localProducts.length > 0 ? (
          <div className="flex flex-col ">
            <ul>
              {products.map((product) => (
                <>
                  <li
                    key={product.id}
                    className="w-full font-sans flex flex-col md:flex-row items-center mt-16 md:my-16"
                  >
                    <div className="border-4 border-brown rounded-3xl">
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="h-80"
                          src={product.image}
                          alt={product.title}
                        />
                      </Link>
                    </div>
                    <div className="text-xl lg:text-3xl flex flex-col gap-8 md:gap-16 mt-8 md:mt-0 md:ml-16">
                      <p>{product.title}</p>
                      <p>Quantité : {quantity}</p>
                      <p>
                        Prix : {product.totalPrice.toFixed(2)} {product.money}
                      </p>
                    </div>
                  </li>
                  <div className="border-brown border-b-2 mt-6 mx-4 md:mx-0" />
                </>
              ))}
              <div className="flex justify-center font-bold md:justify-end text-xl md:text-2xl xl:text-3xl my-16">
                <p>Total commande : {total.toFixed(2)} Gallions</p>
              </div>
              <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between mb-4 md:mb-10">
                <button
                  type="button"
                  className="bg-brown btn mx-4 md:mx-0 xl:text-lg border-0 md:w-56 lg:w-80 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown"
                  onClick={() => navigate("/")}
                >
                  Continuer achat
                </button>
                <button
                  type="button"
                  className="bg-brown btn mx-4 md:mx-0 xl:text-lg border-0 md:w-56 lg:w-80 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown"
                  onClick={openModal}
                >
                  Finaliser votre commande
                </button>
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <h1 className="lg:text-4xl text-center mt-16 h-56 lg:h-16">
              Votre panier est vide
            </h1>
            <div className="flex w-full justify-center mt-16">
              <button
                type="button"
                className="bg-brown btn mx-4 md:mx-0 xl:text-lg border-0 md:w-56 lg:w-80 text-almostWhite --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown"
                onClick={() => navigate("/")}
              >
                Retour à l'acceuil
              </button>
            </div>
          </div>
        )}
      </div>
      <ModalFinaliseOrder />
    </div>
  );
}

export default Basket;
