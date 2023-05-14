import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, {message: "name must be more than 3 characters "}),
	age: z.number({invalid_type_error: "Age is required field"}).min(18)
});

type FormData = z.infer<typeof schema>; //similar to interface

const ZodValidation = () => {
	const {register, handleSubmit, formState: {errors, isValid}} = useForm<
		FormData
	>({
		resolver: zodResolver(schema)
	});

	return (
		<form className="p-3" onSubmit={handleSubmit(data => console.log(data))}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					{...register("name")}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name &&
					<p className="text-danger">
						{errors.name.message}
					</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					{...register("age", {
						valueAsNumber: true
					})}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age &&
					<p className="text-danger">
						{errors.age.message}
					</p>}
			</div>
			<button disabled={!isValid} className="btn btn-dark">
				Add
			</button>
		</form>
	);
};

export default ZodValidation;
