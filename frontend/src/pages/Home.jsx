import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import expressAPI from "../services/expressAPI";
import ProductCard from "../components/ProductCard";

import arrow from "../assets/images/icones/arrow.png";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [prixCroissant, setPrixCroissant] = useState(false);
  const [prixDecroissant, setPrixDecroissant] = useState(false);
  const [za, setZa] = useState(false);
  const [sortedHouse, setSortedHouse] = useState(false);
  const [sortedCategory, setSortedCategory] = useState(false);
  const [filteredHouse, setFilteredHouse] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    expressAPI
      .get(`/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleHouse = (e) => {
    setFilteredHouse(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const resetFilters = () => {
    setFilteredHouse(null);
    setCategory(null);
    setZa(false);
    setPrixCroissant(false);
    setPrixDecroissant(false);
    setSortedCategory(false);
    setSortedHouse(false);
  };

  return (
    <div id="home" className="flex flex-col lg:flex-row ">
      <div className=" top-0 lg:right-0 md:grid md:grid-cols-2 lg:flex lg:flex-col lg:gap-y-16 lg:w-1/5 px-4 py-8 lg:py-20 lg:pr-4  bg-blueSerd text-brown">
        <div>
          <p className="font-bold mb-4 lg:text-2xl">Trier par :</p>
          <div className="grid grid-cols-2 lg:flex lg:flex-col lg:gap-4 lg:text-xl">
            <div className="grid grid-cols-[100px_75px] lg:grid-cols-2">
              <label htmlFor="houses">Maisons</label>
              <input
                type="checkbox"
                className="h-[14px]"
                value={sortedHouse}
                onChange={() => setSortedHouse(!sortedHouse)}
              />
            </div>
            <div className="grid grid-cols-[100px_75px] lg:grid-cols-2">
              <label htmlFor="categories">Catégories</label>
              <input
                type="checkbox"
                className="h-[14px]"
                value={sortedCategory}
                onChange={() => setSortedCategory(!sortedCategory)}
              />
            </div>
            <div className="grid grid-cols-[100px_75px] lg:grid-cols-2">
              <label htmlFor="prixCroissant">Prix croissant</label>
              <input
                type="checkbox"
                className="h-[14px] "
                value={prixCroissant}
                onChange={() => setPrixCroissant(!prixCroissant)}
              />
            </div>
            <div className="grid grid-cols-[100px_75px] lg:grid-cols-2">
              <label htmlFor="prixDecroissant">Prix décroissant</label>
              <input
                type="checkbox"
                className="h-[14px]"
                value={prixDecroissant}
                onChange={() => setPrixDecroissant(!prixDecroissant)}
              />
            </div>
            <div className="grid grid-cols-[100px_75px] lg:grid-cols-2">
              <label htmlFor="za">Z-A</label>
              <input
                type="checkbox"
                className="h-[14px]"
                value={za}
                onChange={() => setZa(!za)}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold mb-4 mt-4 md:mt-0 lg:text-2xl">Filtres :</p>
          <div className="flex flex-row lg:flex-col lg:gap-y-6 justify-between items-center lg:items-start lg:text-xl">
            <select onChange={handleHouse} className="lg:w-full md:pl-2">
              <option value="">Choississez votre maison</option>
              <option value="Griffondor">Griffondor</option>
              <option value="Serpentard">Serpentard</option>
              <option value="Serdaigle">Serdaigle</option>
              <option value="Poufsouffle">Poufsouffle</option>
            </select>
            <select onChange={handleCategory} className="lg:w-full md:pl-2">
              <option value="">Choississez la catégorie</option>
              <option value="Accessoires">Accessoires</option>
              <option value="Baguette">Baguettes</option>
              <option value="Bijoux">Bijoux</option>
              <option value="Vêtements">Vêtements</option>
              <option value="Bonbons">Sucreries</option>
            </select>
          </div>
        </div>
        <div className="w-full col-span-2 flex mt-6 justify-center">
          <button
            type="button"
            onClick={resetFilters}
            className="bg-brown btn border-0 text-almostBlack --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-brown w-full md:w-auto lg:w-full lg:text-xl"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 justify-center lg:w-4/5 mt-8 mb-20 lg:my-20">
        {products &&
          products
            .filter(
              (product) =>
                filteredHouse === null || product.house === filteredHouse
            )
            .filter(
              (product) => category === null || product.category === category
            )
            .sort((a, b) => a.title.localeCompare(b.title))
            .sort((a, b) => za && b.title.localeCompare(a.title))
            .sort((a, b) => prixCroissant && a.price - b.price)
            .sort((a, b) => prixDecroissant && b.price - a.price)
            .sort((a, b) => sortedHouse && a.house.localeCompare(b.house))
            .sort(
              (a, b) => sortedCategory && a.category.localeCompare(b.category)
            )
            .map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
      </div>
      <Link
        to="home"
        offset={-150}
        duration={500}
        spy
        smooth
        className="cursor-pointer"
      >
        <img src={arrow} alt="" className="fixed bottom-4 right-4 h-16" />
      </Link>
    </div>
  );
}
