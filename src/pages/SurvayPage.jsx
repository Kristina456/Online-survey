import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/card/Card";
import SurvayForm from "../components/SurvayForm";
import { v4 as uuidv4 } from "uuid";

export default function SurvayPage() {
	const navigate = useNavigate();
	const [survay, setSurvay] = useState(null);

	useEffect(() => {
		fetch("/api/v1/survey").then((response) => {
			if (response.status === 200) {
				response.json().then((json) => setSurvay(() => json));
			} else {
				response.json().then((json) => navigate("/error", { state: json }));
			}
		});
	}, [navigate]);

	const publishAnswers = (survay, answers) => {
		fetch(`/api/v1/survey/${survay.data.id}/answers`, {
			method: "POST",
			handlers: { "Content-Type": "application/json" },
			body: JSON.stringify(mapToSurvayAnswersRequestBody(survay, answers)),
		}).then((response) => {
			if (response.status === 201) {
				response.json().then((json) => navigate("/success", { state: json }));
			} else {
				response.json().then((json) => navigate("/error", { state: json }));
			}
		});
	};

	const mapToSurvayAnswersRequestBody = (survay, answers) => {
		return {
			data: {
				type: "surveyAnswers",
				id: uuidv4(),
				attributes: {
					answers: answers,
				},
				relationships: {
					survay: {
						data: {
							type: survay.data.type,
							id: survay.data.id,
						},
					},
				},
			},
		};
	};

	const loading = () => {
		return (
			<div>
				<h1>Loading, please wait!</h1>
				<p>Refresh the page if necessary.</p>
			</div>
		);
	};

	return (
		<Card>
			{survay ? (
				<SurvayForm survay={survay} publishAnswers={publishAnswers} />
			) : (
				<div>{loading()}</div>
			)}
		</Card>
	);
}
