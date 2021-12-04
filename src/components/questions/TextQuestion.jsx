import React from "react";

export default function RatingQuestion() {
	return (
		<div>
			<label htmlFor="question">Some Question</label>
			<input type="text" name="question" required />
		</div>
	);
}
