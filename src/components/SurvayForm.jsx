import React from "react";
import Button from "./button/Button";
import RatingQuestion from "./questions/RatingQuestion";
import TextQuestion from "./questions/TextQuestion";

export default function SurvayForm({ survay }) {
	const buttonText = "Submit";

	const showQuestions = () => {
		return survay.data.attributes.questions.map((q) => {
			switch (q.questionType) {
				case "text":
					return <TextQuestion key={q.questionId} question={q} />;

				case "rating":
					return <RatingQuestion key={q.questionId} question={q} />;
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
