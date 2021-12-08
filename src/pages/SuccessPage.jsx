import React from "react";
import { useLocation } from "react-router";
import { Card } from "../components/card";
import "./SuccessPage.scss";

export default function SuccessPAge() {
	const location = useLocation();

	const answers = () => {
		if (location.state) {
			return location.state.data.attributes.answers.map((q) => (
				<div key={q.questionId}>
					<span className="success__answers--question">
						{q.questionId.toUpperCase()}
					</span>
					<span className="success__answers--answer">{q.answer} </span>
				</div>
			));
		}
	};

	return (
		<Card>
			{location.state ? (
				<div className="success">
					<h1>Thank you for paticipating in a survay</h1>
					<p>Your answers are:</p>
					<div>{answers()}</div>
				</div>
			) : (
				<div>Something went wrong please try again. </div>
			)}
		</Card>
	);
}
