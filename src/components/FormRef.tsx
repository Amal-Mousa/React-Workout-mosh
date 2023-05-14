import React, {FormEvent, useRef} from "react";

const Form = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const data = {
		name: "",
		age: 0
	};

	// event: FormEvent; we assign it to FromEvent bcz react dont know event type
	const handleSubmission = (event: FormEvent) => {
		event.preventDefault();
		if (nameRef.current) {
			data.name = nameRef.current.value;
		}
		if (ageRef.current) {
			data.age = parseInt(ageRef.current.value);
		};
		console.log(data);
	}

		return (
			<form className=" p-3" onSubmit={handleSubmission}>
				{/* div.mb-2>label.form-label+input.form-control */}
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input ref={nameRef} id="name" type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="number" className="form-label">
						Age
					</label>
					<input ref={ageRef} id="number" type="number" className="form-control" />
				</div>
				<button className="btn btn-primary " type="submit">
					Submit
				</button>
			</form>
		);
	};

export default Form;
