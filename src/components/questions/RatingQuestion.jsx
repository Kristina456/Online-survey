import React from "react";
import Question from "./components/Question";

export default function RatingQuestion({ question, onAnswer }) {
	const {
		required,
		label,
		attributes: { min, max },
		questionId,
	} = question;

	const showQuestions = () => {
		const radioInputs = [];
		for (let i = min; i <= max; i++) {
			radioInputs.push(<Question key={i} value={i} required={required} />);
		}
		return radioInputs;
	};

	const onChange = (e) => {
		onAnswer({
			questionId: questionId,
			answer: Number(e.target.value),
		});
	};

	return (
		<div onChange={onChange}>
			<div>{label}</div>
			{showQuestions()}
		</div>
	);
}
