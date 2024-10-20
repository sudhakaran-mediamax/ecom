import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import Breadcrumbs from "./components/breadcrumb/Breadcrumbs";
import SingleProduct from "./components/shop/SingleProduct";
import Cart from "./components/cart/Cart";
import Home from "./components/Home";
import Account from "./components/account/Account";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productname" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
