import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from '../Categories';

const schema = z.object({
	description: z
		.string()
		.min(3, {message: "Description should be at least 3 characters"})
		.max(50),
	amount: z.number({invalid_type_error: "Amount is required"}).min(.01).max(100_000),
	category: z.enum(categories)
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
	const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
		resolver: zodResolver(schema)
	});

	return (
		<form className="p-3" onSubmit={handleSubmit(data => console.log(data))}>
			<div className="mb-3">
				<label htmlFor="desc" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					id="desc"
					name="desc"
					type="text"
					className="form-control"
				/>
				{errors.description &&
					<p className="text-danger">
						{errors.description.message}
					</p>}
			</div>

			<div className="mb-3">
				<label className="form-label" htmlFor="amount">
					Amount
				</label>
				<input
					{...register("amount")}
					name="amount"
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount &&
					<p className="text-danger">
						{errors.amount.message}
					</p>}
			</div>

			<div className="mb-3">
				<label htmlFor="cat" className="form-label">
					Category
				</label>
				<select
					{...register("category")}
					id="cat"
					className="form-select"
					name="cat"	
				>
					{categories.map(category =>
				<option key={category} value={category}>
					{category}
				</option>
			)}
				</select>
				{errors.category &&
					<p className="text-danger">
						{errors.category.message}
					</p>}
			</div>

			<button className="btn btn-dark">Submit</button>
		</form>
	);
};

export default ExpenseTracker;
