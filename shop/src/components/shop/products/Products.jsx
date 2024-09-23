import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductThumb from "./ProductThumb";

function Products() {
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default Sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden lg:block">
          <p>Showing Results</p>
        </div>
      </div>
      <div className="py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-10">
        <ProductThumb />
        <ProductThumb />
        <ProductThumb />
        <ProductThumb />
        <ProductThumb />
      </div>
    </div>
  );
}

export default Products;
