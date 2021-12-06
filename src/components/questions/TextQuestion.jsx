import React from "react";

export default function RatingQuestion({ question }) {
	const { label, id, required } = question;

	const onChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<div>
			<label htmlFor="question">{label}</label>
			<input
				type="text"
				name="question"
				id={id}
				required={required}
				onChange={onChange}
			/>
		</div>
	);
}
