import { useSetRecoilState } from 'recoil';
import { cartItems, productType } from '../../Store/atoms';
import img1 from "../../../src/assets/images/TR1.png";
import img2 from "../../assets/images/TR2.jpg";
import img3 from "../../assets/images/TR3.jpg";
import img4 from "../../assets/images/TR4.jpg";
import img5 from "../../assets/images/TR5.jpg";

// interface productType {
  
//     id: string | number;
//     name: string
//     color: string
//     rating: string | number
//     price: string | number
//     imageUrl: string
// }

const products : productType[] = [
  {
    id: 1,
    name: 'Women Ethnic',
    
    price: 50.00,
    imageUrl: img1,
    quantity: 0,
    rating: 5,

  },
  {
    id: 2,
    name: 'Women Western',

    price: 30.00,
    imageUrl: img2,
    rating : 4.7,
    quantity: 0
  },
  {
    id: 3,
    name: 'Goggles',
    price: 25.00,
    imageUrl: img3,
    rating : 4.7,
    quantity: 0
  },
  {
    id: 4,
    name: 'Printed T-Shirt',
    price: 35.00,
    imageUrl: img4,
    rating: 4.4,
    quantity: 0
  },
  {
    id: 5,
    name: 'Fashion T-Shirt',
    price: 40.00,
    imageUrl: img5,
    rating: 4.5,
    quantity: 0
  },
];
const colors = ['white','red','brown','yellow','pink']

const TopRated: React.FC = () => {
  const setCart = useSetRecoilState(cartItems);

  const handleAddToCart = (product: Omit<productType, 'quantity'>) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If it exists, update the quantity
        return prevCart.map((item) =>
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <p className="text-sm text-orange-300">Top Selling Products for you</p>
        <h1 className="text-3xl font-bold">Top Rated Products</h1>
        <p className="text-xs text-gray-400">Discover our top-rated products loved by our customers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product,index) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="h-64 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{colors[index]}</p>
              <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-yellow-400 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
                <span className="text-gray-700">{product.rating}</span>
              </div>
              <div className="flex justify-center mt-4">
                <button onClick={() => handleAddToCart(product)} className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
