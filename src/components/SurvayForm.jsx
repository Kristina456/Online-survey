import React from "react";
import RatingQuestion from "./questions/RatingQuestion";
import TextQuestion from "./questions/TextQuestion";

export default function SurvayForm() {
	return (
		<div>
			<div>Title</div>
			<div>Description</div>
			<form>
				<TextQuestion />
				<RatingQuestion />
			</form>
		</div>
	);
}
