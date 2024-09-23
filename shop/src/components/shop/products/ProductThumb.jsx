import React from "react";
import productImg from "../../../assets/product-1.jpg";
import { Link } from "react-router-dom";
function ProductThumb() {
  return (
    <Link
      className="group hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-500 "
      to={"/"}
    >
      <div className="">
        <img src={productImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="group-hover:pl-5 transition-all duration-500 my-3">
        <h6 className="text-sm">Abra -Printed Canvas</h6>
        <p className="">$162.36</p>
      </div>
    </Link>
  );
}

export default ProductThumb;
