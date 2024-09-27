import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductThumb from "./ProductThumb";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch product data only once when the component mounts
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default Sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Price: Low to High</SelectItem>
              <SelectItem value="high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden lg:block">
          <p>Showing {products.length} Results</p>
        </div>
      </div>
      <div className="py-12 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 2xl:grid-cols-4 md:gap-12 gap-10">
        {products.map((product, index) => {
          return <ProductThumb product={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Products;
