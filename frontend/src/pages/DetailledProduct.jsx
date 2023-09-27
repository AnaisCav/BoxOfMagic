import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import expressAPI from "../services/expressAPI";

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
    <div>
      {product && (
        <>
          <p>Detailled product</p>
          <img src={product.image} alt={product.title} />
        </>
      )}
    </div>
  );
}

export default DetailledProduct;
