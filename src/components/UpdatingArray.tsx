// import React, {useState} from "react";

// const UpdatingArray = () => {
// 	const [cat, setCat] = useState(["Sport", "Casual"]);

// 	const handleCat = () => {
// 		// setCat([...cat, "categorized"]); // add category
// 		// setCat(cat.filter(cat=>cat === "Sport")) //remove category
// 		// setCat(cat.map(cat => (cat === "Sport" ? "categorized" : cat))); //update category
// 	};

// 	return (
// 		<div>
// 			<p>
// 				{cat}
// 			</p>
// 			<button onClick={handleCat}>Click Here</button>
// 		</div>
// 	);
// };

// export default UpdatingArray;

import React, {useState} from "react";
import produce from "immer";

const UpdatingNestedArray = () => {
	const [bugs, setBugs] = useState([
		{id: 1, title: "hi", fixed: true},
		{id: 2, title: "hello", fixed: false}
	]);

	const handleBugs = () => {
		setBugs(
			produce(draft => {
				const bug = draft.find(bug => bug.id === 1);
				if (bug) bug.fixed = false;
			})
		);
	};
	return (
		<div>
			{bugs.map(bug =>
				<p key={bug.id}>
					{bug.title} {bug.fixed ? "Fixed" : "new"}
				</p>
			)}
			<button onClick={handleBugs}>Click here</button>
		</div>
	);
};

export default UpdatingNestedArray;
