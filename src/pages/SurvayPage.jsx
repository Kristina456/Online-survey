import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Card from "../components/card/Card";
import SurvayForm from "../components/SurvayForm";

export default function SurvayPage() {
	const [survay, setSurvay] = useState(null);

	useEffect(() => {
		fetch("/api/v1/survey").then((response) => {
			if (response.status === 200) {
				response.json().then((json) => setSurvay(() => json));
			}
		});
	}, []);

	return (
		<div>
			<Card>{survay && <SurvayForm survay={survay} />}</Card>
		</div>
	);
}
