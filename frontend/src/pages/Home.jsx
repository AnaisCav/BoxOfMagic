import { useEffect, useState } from "react";

import expressAPI from "../services/expressAPI";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    expressAPI
      .get(`/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap gap-12 justify-center my-20">
        {products &&
          products
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
}
