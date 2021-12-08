import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/card/Card";
import SurvayForm from "../components/SurvayForm";
import { getSurvay, sendSurvayAnswers } from "../services/SurvayApiService";

export default function SurvayPage({ error = 0 }) {
	const navigate = useNavigate();

	const [survay, setSurvay] = useState(null);

	useEffect(() => {
		getSurvay(error).then((response) => {
			if (response.status === 200) {
				response.json().then((json) => setSurvay(() => json));
			} else {
				response.json().then((json) => navigate("/error", { state: json }));
			}
		});
	}, []);

	const publishAnswers = (survay, answers) => {
		sendSurvayAnswers(survay, answers, error).then((response) => {
			if (response.status === 201) {
				response.json().then((json) => navigate("/success", { state: json }));
			} else {
				response.json().then((json) => navigate("/error", { state: json }));
			}
		});
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
