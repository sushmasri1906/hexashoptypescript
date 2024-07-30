import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartItems } from "../../Store/atoms";
import CartItem from "./CartItem";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useRecoilState(cartItems);
  const navigate = useNavigate();

  useEffect(()=>{
    calculateQuantity()
    calculateTotal()
  },[items])

  const increaseQuantity = (id: any) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity ? item.quantity + 1 : 2 } : item
      )
    );
  };

  const decreaseQuantity = (id: any) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item?.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: any) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    let total = 0
    items.map((item)=>total +=  item.quantity ? item.price *item.quantity : item.price *1)
    return total
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  const calculateQuantity = ()=>{
    let total = 0
    items.forEach((item) => {
      total += item.quantity ? item.quantity : 1;
    });
    return total
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-orange-500">
          My Shopping Cart
        </h1>
      </header>
      <div className="p-4 flex flex-col items-center">
        {items.length === 0 ? (
          <div className="flex flex-col items-center mt-20">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-lg text-gray-600">Add some items to your cart.</p>
          </div>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="p-4 bg-white shadow-lg rounded-lg m-4 w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Total Items:</span>
            <span className="text-lg font-semibold">{calculateQuantity()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Total Price:</span>
            <span className="text-lg font-semibold">${calculateTotal().toFixed(2)}</span>
          </div>
          <button 
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300"
            onClick={handleProceedToCheckout} // Handle click to navigate
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
