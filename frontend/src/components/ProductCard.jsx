import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-72 font-sans flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        {product.house === "" && (
          <div className=" border-4 border-brown rounded-3xl w-full">
            <img src={product.image} alt={product.title} className="h-80" />
          </div>
        )}
        {product.house === "Griffondor" && (
          <div className=" border-4 border-lightRedGrif rounded-3xl w-full">
            <img src={product.image} alt={product.title} className="h-80" />
          </div>
        )}
        {product.house === "Serpentard" && (
          <div className=" border-4 border-lightGreenSerp rounded-3xl w-full">
            <img src={product.image} alt={product.title} className="h-80" />
          </div>
        )}
        {product.house === "Serdaigle" && (
          <div className=" border-4 border-lightBlueSerd rounded-3xl w-full">
            <img src={product.image} alt={product.title} className="h-80" />
          </div>
        )}
        {product.house === "Poufsouffle" && (
          <div className=" border-4 border-yellowPouff rounded-3xl w-full">
            <img src={product.image} alt={product.title} className="h-80" />
          </div>
        )}
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
    house: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
