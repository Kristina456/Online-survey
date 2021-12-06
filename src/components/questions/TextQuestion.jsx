import React from "react";

export default function RatingQuestion({ question, onAnswer }) {
	const { label, id, required, questionId } = question;

	const onChange = (e) => {
		onAnswer({
			questionId: questionId,
			answer: e.target.value,
		});
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
