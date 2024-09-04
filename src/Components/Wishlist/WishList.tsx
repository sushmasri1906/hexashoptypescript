import { useRecoilState, useSetRecoilState } from "recoil";
import { wishlistItems, cartItems, productType } from "../../Store/atoms";
import WishlistItem from "./WishlistItem";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
	const [wishlist, setWishlist] = useRecoilState(wishlistItems);
	const setCart = useSetRecoilState(cartItems);
	const navigate = useNavigate();

	const removeItemFromWishlist = (id: string | number) => {
		setWishlist((prevWishlist) =>
			prevWishlist.filter((item) => item.id !== id)
		);
	};

	const addItemToCart = (item: productType) => {
		setCart((prevCart) => {
			const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
			if (itemInCart) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
						: cartItem
				);
			} else {
				// Ensure all required properties are present
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
		navigate("/cart");
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow p-4 mb-4">
				<h1 className="text-3xl font-bold text-center text-orange-500">
					My Wishlist
				</h1>
			</header>
			<div className="p-4 flex flex-col items-center">
				{wishlist.length === 0 ? (
					<div className="flex flex-col items-center mt-20">
						<h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
						<p className="text-lg text-gray-600">
							Add some items to your wishlist.
						</p>
					</div>
				) : (
					wishlist.map((item) => (
						<WishlistItem
							key={item.id}
							item={item}
							onRemove={removeItemFromWishlist}
							onAddToCart={addItemToCart}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Wishlist;
