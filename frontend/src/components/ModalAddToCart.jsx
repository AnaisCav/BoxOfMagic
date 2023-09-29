import PropTypes from "prop-types";

function ModalAddToCart({ product, quantityToAdd }) {
  const addToCart = (qty) => {
    const localProducts =
      JSON.parse(localStorage.getItem("localProducts")) || [];

    const productIndex = localProducts.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      localProducts[productIndex].quantity = +qty;
    } else {
      localProducts.push({ id: product.id, quantity: qty });
    }
    localStorage.setItem("localProducts", JSON.stringify(localProducts));
    document.getElementById("addToCart").close();
  };

  return (
    <dialog id="addToCart" className="modal">
      <div className="modal-box text-center text-brown flex flex-col gap-6">
        <h1 className="font-mono text-3xl">Merci</h1>
        <p className="text-2xl">Cet article a bien été ajouté à ton panier !</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={() => addToCart(quantityToAdd)}>
          Fermer
        </button>
      </form>
    </dialog>
  );
}

ModalAddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  quantityToAdd: PropTypes.number.isRequired,
};

export default ModalAddToCart;
