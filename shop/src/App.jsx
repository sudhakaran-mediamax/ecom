import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import Breadcrumbs from "./components/breadcrumb/Breadcrumbs";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
