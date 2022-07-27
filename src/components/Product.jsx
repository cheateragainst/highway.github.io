import React from "react";
import Book from "./Book";
import Book2 from "./Book2";
import Book3 from "./Book3";
import Book4 from "./Book4";
import Book5 from "./Book5";
import Book6 from "./Book6";
function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Book2 />
        <Book3 />
      </div>

      <div class="product_row d-flex">
        <Book4 />
        <Book5 />
      </div>
      <div class="product_row d-flex">
        <Book6 />
      </div>
    </div>
  );
}

export default Product;
