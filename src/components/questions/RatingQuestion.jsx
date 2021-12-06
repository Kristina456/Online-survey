import React from "react";
import Question from "./components/Question";

export default function RatingQuestion({ question }) {
	const {
		required,
		label,
		attributes: { min, max },
	} = question;

	const showQuestions = () => {
		const radioInputs = [];
		for (let i = min; i <= max; i++) {
			radioInputs.push(<Question key={i} value={i} required={required} />);
		}
		return radioInputs;
	};

	const onChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<div onChange={onChange}>
			<div>{label}</div>
			{showQuestions()}
		</div>
	);
}
