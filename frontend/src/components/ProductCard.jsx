import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-72 font-sans flex flex-col items-center drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className=" border-4 border-brown rounded-3xl w-full">
          <img src={product.image} alt={product.title} className="h-80" />
        </div>
        <div className="flex flex-col items-center text-center mt-3 gap-3">
          <h1 className="text-2xl md:text-3xl">{product.title}</h1>
          <p className="text-xl md:text-2xl font-bold">
            {product.price} {product.money}
          </p>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    money: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
