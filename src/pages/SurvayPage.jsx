import React from "react";
import SurvayForm from "../components/SurvayForm";
import { MockSurvay200 } from "../mocks/MockSurvay200";

export default function SurvayPage() {
	const survay = MockSurvay200;

	return (
		<div>
			<SurvayForm survay={survay} />
		</div>
	);
}
