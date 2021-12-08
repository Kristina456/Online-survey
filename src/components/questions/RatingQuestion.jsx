import React from "react";
import { RadioButton } from "./components";
import "./RatingQuestion.scss";

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
			radioInputs.push(<RadioButton key={i} value={i} required={required} />);
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
		<div onChange={onChange} className="rating-questions">
			<div className="rating-questions__label">{label}</div>
			<div className="rating-questions__radio">{showQuestions()} </div>
		</div>
	);
}
