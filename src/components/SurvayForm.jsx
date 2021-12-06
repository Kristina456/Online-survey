import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./button/Button";
import RatingQuestion from "./questions/RatingQuestion";
import TextQuestion from "./questions/TextQuestion";
import "./SurvayForm.scss";

export default function SurvayForm({ survay }) {
	const [answers, setAnswers] = useState([]);
	const navigate = useNavigate();

	const buttonText = "Submit";

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/success", { state: answers });
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
				{showQuestions()}
				<Button value={buttonText} />
			</form>
		</div>
	);
}
