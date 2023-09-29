function ModalAddToCart() {
  const closeModal = () => {
    document.getElementById("addToCart").close();
  };

  return (
    <dialog id="addToCart" className="modal">
      <div className="modal-box text-center text-brown flex flex-col gap-6">
        <h1 className="font-mono text-3xl">Merci</h1>
        <p className="text-2xl">Cet article a bien été ajouté à ton panier !</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={closeModal}>
          Fermer
        </button>
      </form>
    </dialog>
  );
}

export default ModalAddToCart;
