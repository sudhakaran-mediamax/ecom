import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../slice/cartSlice";
const carts = [{}];

function Cart() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const { totalItems } = useSelector((state) => state.cart);
  const handleCartAddUpdate = () => {
    dispatch(addToCart(value));
  };

  return (
    <div className="container mx-auto py-20 px-5">
      <h3 className="text-xl lg:text-2xl xl:text-3xl text-center font-semibold">
        Cart
      </h3>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
        {/* PRODUCTS */}
        <div className="w-full lg:w-[70%]">
          <div className="border-b border-black/30 py-8 flex flex-wrap items-center gap-4">
            <Button variant="ghost" className="group">
              <CgClose className="w-4 h-4 transition-transform group-hover:rotate-180 ease-in duration-300" />
            </Button>
            {/* product image */}
            <div className="flex flex-grow md:flex-grow-0 justify-center items-center ">
              <Link to={"/shop"}>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                  className="w-[30vw] md:w-[120px] md:h-[120px]"
                />
              </Link>
            </div>
            {/* product details */}
            <div className="flex flex-col gap-4 lg:gap-0 md:flex-row w-full mt-5 md:mt-0 md:w-[unset] md:flex-grow md:justify-around md:items-center">
              <div className="flex justify-between ">
                <p className="font-medium text-sm md:hidden">Product:</p>
                <Link
                  to={"/shop"}
                  className="text-black/60 text-sm font-normal"
                >
                  Footwear
                </Link>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-sm md:hidden">Price:</p>
                <p className="text-black/60 text-sm font-normal">
                  {"Rs. 1000"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-sm md:hidden">Quantity:</p>
                <Input
                  type="number"
                  variant="number"
                  value={value}
                  max={30}
                  onChange={setValue}
                />
              </div>
              <div className="flex justify-between mt-2">
                <p className="font-semibold text-sm lg:hidden uppercase md:hidden">
                  Subtotal:
                </p>
                <p className="text-black text-sm font-semibold">Rs. 1000</p>
              </div>
            </div>
          </div>
          {/* coupon */}
          <div className="mt-6 lg:mt-3 flex items-center gap-4">
            <p className="font-medium text-sm hidden md:inline-flex">Coupon:</p>
            <div className="relative group w-full lg:w-[30%]">
              <Input placeholder="Apply Coupon" />
              <button className="absolute top-1/2 -translate-y-1/2 right-0 opacity-40 group-hover:opacity-100">
                <IoTicketOutline className="w-5 h-5" />
              </button>
            </div>
            <Button
              className="uppercase text-sm font-bold tracking-wide"
              onClick={handleCartAddUpdate}
            >
              Update Cart
            </Button>
          </div>
        </div>
        {/* BILL */}
        <div className="w-full lg:w-[30%] py-5 lg:p-5">
          <h3 className="text-2xl font-semibold ">Cart Totals</h3>
          <div className="py-5">
            <div className="border-t border-black/10 flex justify-between py-6 lg:py-8">
              <h5>Subtotal:</h5>
              <p className="text-black/60 text-sm font-normal">Rs. 1000</p>
            </div>
            {/* total bill */}
            <div className="border-t border-black/10 flex justify-between py-5">
              <h5>Total:</h5>
              <p className="text-black text-lg font-semibold">Rs. 1000</p>
            </div>
            {/* checkout button */}
            <Button className="w-full mt-3 uppercase text-sm font-semibold">
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
