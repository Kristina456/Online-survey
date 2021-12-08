import React, { useState } from "react";
import { Button } from "./button";
import { RatingQuestion, TextQuestion } from "./questions";
import "./SurvayForm.scss";

export default function SurvayForm({ survay, publishAnswers }) {
	const [answers, setAnswers] = useState([]);

	const buttonText = "Submit";

	const handleSubmit = (e) => {
		e.preventDefault();
		publishAnswers(survay, answers);
	};

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
		<div className="survay-form">
			<h1 className="survay-form__title">{survay.data.attributes.title}</h1>
			<div
				className="survay-form__description"
				dangerouslySetInnerHTML={{ __html: survay.data.attributes.description }}
			></div>
			<form className="survay-form__form" onSubmit={handleSubmit}>
				{survay && showQuestions()}
				<div className="survay-form__btn">
					<Button value={buttonText} />
				</div>
			</form>
		</div>
	);
}
