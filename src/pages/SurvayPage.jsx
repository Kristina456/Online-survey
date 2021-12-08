import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/card/Card";
import SurvayForm from "../components/SurvayForm";

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
	}, []);

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
			{survay ? <SurvayForm survay={survay} /> : <div>{loading()}</div>}
		</Card>
	);
}
