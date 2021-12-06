import React, { useState } from "react";
import Button from "./button/Button";
import RatingQuestion from "./questions/RatingQuestion";
import TextQuestion from "./questions/TextQuestion";

export default function SurvayForm({ survay }) {
	const [answers, setAnswers] = useState([]);

	const buttonText = "Submit";

	const addAnswer = (answer) => {
		setAnswers((current) => {
			const cleaned = current.filter(
				(item) => item.questionId !== answer.questionId
			);
			return [...cleaned, answer];
		});
	};

	const showQuestions = () => {
		return survay.data.attributes.questions.map((q) => {
			switch (q.questionType) {
				case "text":
					return (
						<TextQuestion
							key={q.questionId}
							question={q}
							onAnswer={addAnswer}
						/>
					);

				case "rating":
					return (
						<RatingQuestion
							key={q.questionId}
							question={q}
							onAnswer={addAnswer}
						/>
					);
				default:
					throw Error(`Question Type ${q.questionType} not supported`);
			}
		});
	};

	return (
		<div>
			<div>{survay.data.attributes.title}</div>
			<div
				dangerouslySetInnerHTML={{ __html: survay.data.attributes.description }}
			></div>
			<form>
				{showQuestions()}
				<Button value={buttonText} />
			</form>
		</div>
	);
}
