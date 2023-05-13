import React from "react";

interface Props {
	cartItems: number;
}

const Navbar = ({cartItems}: Props) => {
	return (
		<div>
			<ul>
				<li>
					Cart: {cartItems}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
