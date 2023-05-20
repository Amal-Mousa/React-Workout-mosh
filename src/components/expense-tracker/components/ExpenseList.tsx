import React from "react";

interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}
interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({expenses, onDelete}: Props) => {
	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Category</th>
					<th>.</th>
				</tr>
			</thead>
			<tbody>
				{expenses.map(expense =>
					<tr key={expense.id}>
						<td>
							{expense.description}
						</td>
						<td>
							{expense.amount}
						</td>
						<td>
							{expense.category}
						</td>
						<td>
							<button
								className="btn btn-danger-outlined"
								onClick={() => onDelete(expense.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				)}
			</tbody>
			<tfoot>
				<tr>
					<th>Total:</th>
					<th colSpan={3}>
						{expenses.reduce((acc, expenses) => acc + expenses.amount, 0)}
					</th>
				</tr>
			</tfoot>
		</table>
	);
};

export default ExpenseList;
