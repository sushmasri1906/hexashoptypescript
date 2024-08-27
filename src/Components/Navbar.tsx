import { useRecoilValue, useResetRecoilState } from "recoil";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
	isLoggedInState,
	isRegisteredState,
	userInfoState,
} from "../Store/atoms";

const Navbar = () => {
	const isLoggedIn = useRecoilValue(isLoggedInState);
	const resetIsLoggedIn = useResetRecoilState(isLoggedInState);
	const resetIsRegistered = useResetRecoilState(isRegisteredState);
	const resetUserInfo = useResetRecoilState(userInfoState);

	const handleLogout = () => {
		resetIsLoggedIn();
		resetIsRegistered();
		resetUserInfo();
	};

	return (
		<nav className="flex items-center justify-between p-4 bg-orange-200 text-gray-800 shadow-md  gap-x-2 sm:gap-x-4">
			<div className="flex items-center gap-x-2 sm:gap-x-4">
				<Link to="/">
					<img src={logo} alt="Logo" className="h-auto max-h-12 w-12" />
				</Link>
				<Link to="/" className="font-bold text-xl">
					Hexashop
				</Link>
			</div>

			<div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
				{/* <div className="relative flex-1">
					<input
						type="text"
						className="pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none shadow-md w-full max-w-xs"
						placeholder="Search..."
					/>
					<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 text-xl bg-orange-200 rounded-full p-1 hover:bg-orange-300 transition-colors duration-300" />
				</div> */}

				<Link to="/wishlist">
					<FaHeart className="text-xl cursor-pointer text-white bg-orange-600 rounded-full p-1 hover:bg-orange-300 transition-colors duration-300" />
				</Link>

				<Link to="/cart">
					<FaShoppingCart className="text-xl cursor-pointer text-white bg-orange-600 rounded-full p-1 hover:bg-orange-300 transition-colors duration-300" />
				</Link>

				{isLoggedIn ? (
					<>
						<button
							onClick={handleLogout}
							className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition-colors duration-300 shadow-md">
							Logout
						</button>
						<Link
							to="/profile"
							className="text-xl text-gray-800 hover:text-orange-600 transition-colors duration-300">
							<FaUser className="text-xl text-orange-600 border-2 border-orange-600 rounded-full p-1 hover:bg-orange-300 transition-colors duration-300" />
						</Link>
					</>
				) : (
					<>
						<Link to="/login">
							<button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition-colors duration-300 shadow-md">
								Login
							</button>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
