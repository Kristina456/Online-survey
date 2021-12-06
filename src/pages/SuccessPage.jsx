import React from "react";
import { useLocation } from "react-router";

export default function SuccessPAge() {
	const location = useLocation();

	const answers = () => {
		if (location.state) {
			return location.state.map((q) => (
				<div>
					<span>{q.questionId.toUpperCase()}: </span>
					<span>{q.answer} </span>
				</div>
			));
		}
	};

	return (
		<div>
			{location.state ? (
				<div>
					<div>Thank you for paticipating in a survay</div>
					<div>Your answers are:</div>
					<div>{answers()}</div>
				</div>
			) : (
				<div>Something went wrong please try again. </div>
			)}
		</div>
	);
}
