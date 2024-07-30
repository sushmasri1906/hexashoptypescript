import { useRecoilValue, useResetRecoilState } from "recoil";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { userInfoState, cartItems, wishlistItems, isLoggedInState, isRegisteredState } from "../Store/atoms";
import { toast } from "react-toastify";

const Profile = () => {
  const userInfo = useRecoilValue(userInfoState);
  const cart = useRecoilValue(cartItems);
  const wishlist = useRecoilValue(wishlistItems);
  const resetIsLoggedIn = useResetRecoilState(isLoggedInState);
  const resetIsRegistered = useResetRecoilState(isRegisteredState);
  const navigate = useNavigate(); // Use useNavigate to get navigation function

  const handleLogout = () => {
    resetIsLoggedIn();
    resetIsRegistered();
    toast.success("Logged out successfully.");
    navigate("/"); // Navigate to the home page after logout
    // Optionally, clear any other user-related data from Recoil or local storage
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center mb-6">
          <FaUser className="text-6xl text-orange-500 mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-800">{userInfo.email}</h1>
          {/* You can display other user information here */}
        </div>
        <div className="flex justify-center mb-6 space-x-4">
          <Link
            to="/wishlist"
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            <FaHeart className="text-xl mr-2" />
            Wishlist ({wishlist.length})
          </Link>
          <Link
            to="/cart"
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            <FaShoppingCart className="text-xl mr-2" />
            Cart ({cart.length})
          </Link>
        </div>
        <div className="text-center mb-6">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
        <div className="text-center">
          <Link
            to="/editProfile"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
