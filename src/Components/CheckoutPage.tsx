import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItems } from "../Store/atoms";
import { FaArrowLeft } from 'react-icons/fa';

const CheckoutPage = () => {
  const items = useRecoilValue(cartItems);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    // Implement your order placement logic here
    console.log("Order placed!");
    // Optionally, you can navigate back to the shopping page after placing the order
    navigate('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Checkout Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center mb-4">
          <Link to="/" className="flex items-center text-orange-500 hover:text-orange-600">
            <FaArrowLeft className="mr-2" />
            Back to Shopping
          </Link>
        </div>

        <h1 className="text-3xl font-semibold mb-4">Checkout</h1>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.map((item) => (
            <div className="flex justify-between mb-4" key={item.id}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">${calculateTotal()}</p>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="rounded-md p-3 outline-none border border-gray-300" />
            <input type="text" placeholder="Last Name" className="rounded-md p-3 outline-none border border-gray-300" />
            <input type="email" placeholder="Email Address" className="rounded-md p-3 outline-none border border-gray-300 col-span-2" />
            <input type="text" placeholder="Address" className="rounded-md p-3 outline-none border border-gray-300 col-span-2" />
            <input type="text" placeholder="City" className="rounded-md p-3 outline-none border border-gray-300" />
            <input type="text" placeholder="Postal Code" className="rounded-md p-3 outline-none border border-gray-300" />
            <select className="rounded-md p-3 outline-none border border-gray-300 col-span-2">
              <option value="" disabled defaultChecked>Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </form>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Card Number" className="rounded-md p-3 outline-none border border-gray-300 col-span-2" />
            <input type="text" placeholder="Cardholder Name" className="rounded-md p-3 outline-none border border-gray-300" />
            <input type="text" placeholder="MM/YY" className="rounded-md p-3 outline-none border border-gray-300" />
            <input type="text" placeholder="CVC" className="rounded-md p-3 outline-none border border-gray-300" />
          </form>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-end">
          <button
            className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

