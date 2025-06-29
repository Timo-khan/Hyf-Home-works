import React, { useState } from "react";

export const Form = () => {
	const [name, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Form submitted!` + " " + name);
    setName('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h2>Form</h2>
				<label>Name:</label>
				<br />
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
