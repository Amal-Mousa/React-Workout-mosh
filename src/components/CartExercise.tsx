import React, {useState} from "react";

const CartExercise = () => {
	const [product, setProduct] = useState({
		discount: 0.1,
		items: [
			{id: 1, title: "item1", quantity: 1},
			{id: 2, title: "item2", quantity: 1}
		]
	});

	const handleProduct = () => {
		setProduct({
			...product,
			items: product.items.map(
				item => (item.id === 1 ? {...item, quantity: item.quantity + 1} : item)
			)
		});
	};

	return (
		<div>
			{product.items.map(item => item.quantity)}
			<button onClick={handleProduct}>Click here</button>
		</div>
	);
};

export default CartExercise;
