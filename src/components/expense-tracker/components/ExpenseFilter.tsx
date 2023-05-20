import React from "react";
import {categories} from "../Categories";

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
	return (
		<select
			className="form-select mb-5 mt-2"
			onChange={e => onSelectCategory(e.target.value)}
		>
			{categories.map(category =>
				<option key={category} value={category}>
					{category}
				</option>
			)}
		</select>
	);
};

export default ExpenseFilter;
