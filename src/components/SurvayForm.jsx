import React from "react";
import RatingQuestion from "./questions/RatingQuestion";
import TextQuestion from "./questions/TextQuestion";

export default function SurvayForm({ survay }) {
	return (
		<div>
			<div>{survay.data.attributes.title}</div>
			<div
				dangerouslySetInnerHTML={{ __html: survay.data.attributes.description }}
			></div>
			<form>
				<TextQuestion />
				<RatingQuestion />
			</form>
		</div>
	);
}
