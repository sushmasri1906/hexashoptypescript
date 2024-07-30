import ProductList from "./ProductList";
import { mens } from "../assets/images/ProductsData";

const Men = () => {
  return (
    <ProductList products={mens} title="Men's Products" />
  );
};

export default Men;
