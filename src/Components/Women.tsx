import ProductList from "./ProductList";
import { women } from "../assets/images/ProductsData";

const Women = () => {
  return (
    <ProductList products={women} title="Women's Products" />
  );
};

export default Women;

