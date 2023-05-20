import React, {useEffect, useState} from "react";

const ProductList = ({category}: {category: string}) => {
	const [product, setProduct] = useState<string[]>([]);

	useEffect(
		() => {
			setProduct(["Amal", "Ayat"]);
			console.log("fetched product list", category);
		},
		[category]
	);

	return <div />;
};

export default ProductList;
