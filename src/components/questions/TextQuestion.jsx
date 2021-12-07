import React from "react";
import "./TextQuestion.scss";

export default function RatingQuestion({ question, onAnswer }) {
	const { label, id, required, questionId } = question;

	const onChange = (e) => {
		onAnswer({
			questionId: questionId,
			answer: e.target.value,
		});
	};

	return (
		<div className="text-question">
			<label htmlFor="question">{label}</label>
			<input
				className="text-question__input"
				type="text"
				name="question"
				id={id}
				required={required}
				onChange={onChange}
			/>
		</div>
	);
}
