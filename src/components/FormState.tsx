import React, {useState} from "react";

const FormState = () => {
	const [person, setPerson] = useState({
		name: "",
		age: ""
	});

	return (
		<form className="p-3" onSubmit={e => e.preventDefault()}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					onChange={e =>
						setPerson({
							...person,
							name: e.target.value
						})}
					id="name"
					type="text"
					className="form-control"
					value={person.name}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="num" className="form-label">
					Age
				</label>
				<input
					onChange={e =>
						setPerson({
							...person,
							age: e.target.value
						})}
					id="num"
					type="number"
					className="form-control"
					value={person.age}
				/>
			</div>
			<button className="btn btn-danger" onClick={() => console.log(person)}>
				Submit
			</button>
		</form>
	);
};

export default FormState;
