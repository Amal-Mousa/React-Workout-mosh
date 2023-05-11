import React, {useState} from "react";

interface Props{
	items: string[];
	heading: string;
	// passing function via props
	onSelectedItems:(items:string) => void;
};

const ListGroup = ({items, heading, onSelectedItems}:Props) => {

	const [selectedIndex, setsSelectedIndex] = useState(-1);

	return ( //! these parentheses necessary to make JSX markup into multiple lines
		<>
			<h1>{heading}</h1>
			<ul className="list-group">
				{items.length === 0 && <p>Items Not Found</p>}
				{items.map((item, index) => {
					return (
						<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
							key={item}
							onClick={() => {
								setsSelectedIndex(index);
								onSelectedItems(item);
							}}>{item}
						</li>
					)
				})}
			</ul>
		</>
	);
}

export default ListGroup;
