import { FC } from "react";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { cartItems, wishlistItems, isLoggedInState, productType } from "../Store/atoms";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-toastify/dist/ReactToastify.css";

interface propType {
  products : productType[];
  title : string
}

const ProductList:FC<propType> = ({ products, title }) => {
  const setCartItems = useSetRecoilState(cartItems);
  const [wishlist,setWishlist] = useRecoilState(wishlistItems);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  // Function to add product to cart
  const addToCart = (product : any) => {
    console.log(product)
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
  };

  // State to keep track of wishlist items
  // const [wishlist, setWishlist] = useState<productType[]>([]);

  // Function to toggle wishlist status of a product
  // const toggleWishlist = (productId: any) => {
  //   if (wishlist.includes(productId)) {
  //     setWishlist((prevWishlist) => prevWishlist.filter(id => id !== productId));
  //   } else {
  //     setWishlist((prevWishlist) => [...prevWishlist, productId]);
  //   }
  // };

  // Function to add/remove product from wishlist
  const handleAddToWishlist = (product: productType) => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      toast.warn("Please login or register to add items to wishlist.");
      navigate("/login"); // Use navigate to redirect to login page
      return;
    }

    if (wishlist.includes(product)) {
      // setWishlistItems((prev) => prev.filter(item => item.id !== product.id));
      setWishlist((prev) => prev.filter(item => item.id != product.id));
      toast.info(`${product.name} removed from wishlist.`);
    } else {
      // setWishlistItems((prev) => [...prev, product]);
      setWishlist((prev) => [...prev, product]);
      toast.success(`${product.name} added to wishlist!`);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-orange-500">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-80 w-fit mb-4 mx-auto"
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">${product.price}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className={`p-3 border rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${
                    wishlist.includes(product) ? 'border-red-500' : 'border-black'
                  }`}
                >
                  <FaHeart
                    className={`${
                      wishlist.includes(product) ? 'text-red-500' : 'text-black'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



