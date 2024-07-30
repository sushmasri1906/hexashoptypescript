import ProductList from "./ProductList";
import { kids } from "../assets/images/ProductsData";

const Kids = () => {
  return (
    <ProductList products={kids} title="Kids' Products" />
  );
};

export default Kids;

