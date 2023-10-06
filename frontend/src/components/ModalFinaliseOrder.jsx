import { useNavigate } from "react-router-dom";

import hibou from "../../public/images/icones/hedwige.png";

function ModalFinaliseOrder() {
  const navigate = useNavigate();

  const closeModal = () => {
    localStorage.removeItem("localProducts");
    navigate("/");
    window.scrollTo(0, 0);
    document.getElementById("finaliseModal").close();
  };

  return (
    <dialog id="finaliseModal" className="modal">
      <div className="modal-box text-center text-brown flex flex-col gap-6 items-center">
        <h1 className="font-mono text-3xl">Merci pour ta commande</h1>
        <p className="text-2xl">Tu devrais la recevoir sous 48h par hibou !</p>
        <img src={hibou} alt="" className="w-56 md:w-64 xl:w-96" />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={closeModal}>
          Fermer
        </button>
      </form>
    </dialog>
  );
}

export default ModalFinaliseOrder;
