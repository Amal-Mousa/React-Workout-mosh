import React from "react";
import {useForm} from "react-hook-form";

const ReactHookForm = () => {
	const {register, handleSubmit, formState:{errors}} = useForm();
	// const onSubmit = data => {};
	return (
		<form className="p-3" onSubmit={handleSubmit(data => console.log(data))}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					{...register("name", {required: true, minLength: 3})}
					id="name"
					type="text"
					className="form-control"
				/>
        {errors.name?.type === 'required' && <p className="text-danger">The name field id required</p>}
        {errors.name?.type === 'minLength' && <p className="text-danger">The name must be longer than 3 characters</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="num" className="form-label">
					Age
				</label>
				<input
					{...register("num")}
					id="num"
					type="number"
					className="form-control"
        />
        
			</div>
			<button className="btn btn-danger">Submit</button>
		</form>
	);
};

export default ReactHookForm;
