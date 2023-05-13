// Counter.js
import React, {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	// Simulating a potential issue by updating the state during render
	if (count === 5) {
		setCount(0);
	}

	return (
		<div>
			<p>
				Count: {count}
			</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default Counter;
