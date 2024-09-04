import { FC } from "react";
import { productType } from "../../Store/atoms";

interface propType {
	item: productType;
	onRemove: (id: string | number) => void;
	onAddToCart: (item: productType) => void;
}

const WishlistItem: FC<propType> = ({ item, onRemove, onAddToCart }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-4xl flex items-center">
			<img
				src={item.imageUrl}
				alt={item.name}
				className="w-32 h-32 object-cover rounded-md mr-4"
			/>
			<div className="flex-1">
				<h2 className="text-xl font-bold mb-2">{item.name}</h2>
				<p className="text-gray-700 mb-2">Price: ${item.price.toFixed(2)}</p>
				<div className="flex space-x-2">
					<button
						className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
						onClick={() => onAddToCart(item)}>
						Add to Cart
					</button>
					<button
						className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors duration-300"
						onClick={() => onRemove(item.id)}>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default WishlistItem;
