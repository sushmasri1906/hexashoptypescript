import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { FC } from "react";
import { productType as CartItemType } from "../../Store/atoms";

interface CartItemProps {
  item: CartItemType;
  increaseQuantity: (id: string | number) => void;
  decreaseQuantity: (id: string |number) => void;
  removeItem: (id: number) => void;
}

const CartItem:FC<CartItemProps>  = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full flex flex-col md:flex-row items-center p-4">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full md:w-1/4 h-48 object-cover md:object-contain"
      />
      <div className="flex flex-col justify-between p-4 w-full md:w-3/4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
          <p className="text-gray-600 mb-4">Price: ${item.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            <button
              className="bg-gray-200 p-2 rounded-l hover:bg-gray-300 transition-colors duration-300"
              onClick={() => decreaseQuantity(item.id)}
            >
              <FaMinus />
            </button>
            <span className="px-4 py-2 bg-gray-100 border">{item.quantity ? item.quantity : 1}</span>
            <button
              className="bg-gray-200 p-2 rounded-r hover:bg-gray-300 transition-colors duration-300"
              onClick={() => increaseQuantity(item.id)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
            onClick={() => removeItem(item.id)}
          >
            <FaTrashAlt className="mr-2" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;


