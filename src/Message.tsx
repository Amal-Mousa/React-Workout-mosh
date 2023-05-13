import React from "react";

let count = 0;
const Message = () => {
	count++;
	return (
		<h1>
			Message {count}
		</h1>
	);
};

export default Message;
