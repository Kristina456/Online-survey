import React from "react";
import RatingQuestion from "./questions/RatingQuestion";
import TextQuestion from "./questions/TextQuestion";

export default function SurvayForm({ survay }) {
	const showQuestions = () => {
		return survay.data.attributes.questions.map((q) => {
			switch (q.questionType) {
				case "text":
					return <TextQuestion key={q.questionId} question={q} />;

				case "rating":
					return <RatingQuestion />;
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
				<button>Submit</button>
			</form>
		</div>
	);
}
