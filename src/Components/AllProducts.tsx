// AllProducts.js
import { mens, women, kids } from "../assets/images/ProductsData";
import ProductList from "./ProductList";

const AllProducts = () => {
  const allProducts = [...mens, ...women, ...kids];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-orange-500">All Products</h1>
      <ProductList products={allProducts} title={"All Products"} />
    </div>
  );
};

export default AllProducts;




