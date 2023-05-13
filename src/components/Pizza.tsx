import React, {useState} from "react";

const Pizza = () => {
	const [pizza, setPizza] = useState({
		name: "spicey",
		toppings: ["Mushroom"]
	});

	const handlePizza = () => {
		setPizza({...pizza, toppings: [...pizza.toppings, "Makes"]});
	};

	return (
		<div>
			{pizza.toppings}
			<button onClick={handlePizza}>Click here</button>
		</div>
	);
};

export default Pizza;
