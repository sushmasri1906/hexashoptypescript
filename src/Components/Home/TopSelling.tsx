import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { cartItems,productType } from '../../Store/atoms'; // Ensure this path is correct

const products = [
  {
    id: 1,
    name: 'Casual Wear',
    imageUrl: 'src/assets/images/TS1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
    price: 49.99,
    quantify : 0
  },
  {
    id: 2,
    name: 'Printed Shirt',
    imageUrl: 'src/assets/images/TS2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 3,
    price: 29.99,
    quantify : 0
  },
  {
    id: 3,
    name: 'Women Shirt',
    imageUrl: 'src/assets/images/TS3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
    price: 39.99,
    quantify : 0
  },
];

const TopSelling = () => {
  const setCart = useSetRecoilState(cartItems);
  const navigate = useNavigate();

  const handleOrderNowClick = (product: Omit<productType, 'quantity'>) => {
    setCart((prevCart: any[]) => {
        // Check if the product already exists in the cart
        const existingProduct = prevCart.find((item: { id: number; }) => item.id === product.id);
  
        if (existingProduct) {
          // If it exists, update the quantity
          return prevCart.map((item: { id: number; quantity: any; }) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
        } else {
          // If it doesn't exist, add it with quantity 1
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
  
      // Optionally, show a notification or perform other actions
      console.log(`${product.name} added to cart`);
    };
  

  navigate('/cart'); // Navigate to the cart page


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-sm text-orange-500">Top Rated Products for you</p>
        <h1 className="text-3xl font-bold">Best Products</h1>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center p-12">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] aos-init aos-animate"
          >
            <div className="h-[100px]">
              <img
                src={product.imageUrl}
                alt=""
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>
            <div className="p-4 text-center">
              <div className="w-full flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className={i < product.rating ? 'text-orange-500' : 'text-gray-300'}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                ))}
              </div>
              <h1 className="text-xl font-bold">{product.name}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
                onClick={() => handleOrderNowClick(product)}
              >
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;

