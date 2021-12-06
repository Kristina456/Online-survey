import React from "react";
import { useLocation } from "react-router";

export default function SuccessPAge() {
	const location = useLocation();

	const answers = () => {
		return location.state.map((q) => (
			<div>
				<span>{q.questionId.toUpperCase()}: </span>
				<span>{q.answer} </span>
			</div>
		));
	};

	return (
		<div>
			<div>Thank you for paticipating in a survay</div>
			<div>Your answers are:</div>
			<div>{answers()}</div>
		</div>
	);
}
