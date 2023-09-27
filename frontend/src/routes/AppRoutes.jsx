import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailledProduct from "../pages/DetailledProduct";
import Basket from "../pages/Basket";
import NoMatch from "../pages/NoMatch";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<DetailledProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/no-match" element={<NoMatch />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;
