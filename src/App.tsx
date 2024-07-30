import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@splidejs/react-splide/css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from "./Components/Navbar";
import MiniNavbar from "./Components/MiniNavbar";
import Home from "./Components/Home/Home";

import Kids from "./Components/Kids";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Footer from "./Components/Footer";
import Wishlist from "./Components/Wishlist/WishList";
import Cart from "./Components/Cart/Cart";
import TopRated from "./Components/Home/TopRated";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
import CheckoutPage from "./Components/CheckoutPage";
import AllProducts from "./Components/AllProducts";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<MiniNavbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/kids" element={<Kids />} />
					<Route path="/mens" element={<Men />} />
					<Route path="/women" element={<Women />} />
					<Route path="/tr" element={<TopRated />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/kids" element={<Kids/>} />
					<Route path="/login" element={<Login/>}/>
					<Route path="/register" element={<Register/>}/>
					<Route path="/profile" element={<Profile/>} />
					<Route path="/editProfile" element={<EditProfile/>}/>
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/checkout/:id" element={<CheckoutPage />} />
					<Route path="/all" element={<AllProducts/>} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
