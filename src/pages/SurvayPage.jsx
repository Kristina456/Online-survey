import React from "react";
import Card from "../components/card/Card";
import SurvayForm from "../components/SurvayForm";
import { MockSurvay200 } from "../mocks/MockSurvay200";

export default function SurvayPage() {
	const survay = MockSurvay200;

	return (
		<div>
			<Card>
				<SurvayForm survay={survay} />
			</Card>
		</div>
	);
}
