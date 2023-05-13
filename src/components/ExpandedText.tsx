import React, {ReactNode, useState} from "react";

interface Props {
	children: string;
	maxLength?: number;
}

const ExpandedText = ({children, maxLength = 100}: Props) => {
	const [isExpanded, setExpanded] = useState(false);

	const handleExpanded = () => {};

	const text = children.substring(0, maxLength);

	if (children.length <= maxLength)
		<p>
			{children}
		</p>;

	return (
		<div>
			{isExpanded
				? <p>
						{children}
					</p>
				: <p>
						{text}...
					</p>}
			<button onClick={() => setExpanded(!isExpanded)}>
				{isExpanded ? "less" : "more"}
			</button>
		</div>
	);
};

export default ExpandedText;
