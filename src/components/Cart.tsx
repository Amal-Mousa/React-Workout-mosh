import React from "react";

interface Props {
	cartItems: string[];
	onClear: () => void;
}

const Cart = ({cartItems, onClear}: Props) => {
	return (
		<div>
			{cartItems.map(item =>
				<p key={item}>
					{item}
				</p>
			)}
			<button onClick={onClear}>Clear</button>
		</div>
	);
};

export default Cart;
