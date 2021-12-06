import React from "react";

export default function RatingQuestion({ question }) {
	const { label, id, required } = question;
	return (
		<div>
			<label htmlFor="question">{label}</label>
			<input type="text" name="question" id={id} required={required} />
		</div>
	);
}
