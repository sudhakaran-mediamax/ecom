import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import Breadcrumbs from "./components/breadcrumb/Breadcrumbs";
import SingleProduct from "./components/shop/SingleProduct";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productname" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
