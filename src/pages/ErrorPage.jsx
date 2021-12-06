import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { MockSurvay500 } from "../mocks/MockSurvay500";

export default function ErrorPage() {
	const navigate = useNavigate();
	const buttonText = "Return home";

	const error = MockSurvay500;
	const showErrors = () => {
		return error.errors.map((q) => {
			return (
				<div>
					<div>{q.title}</div>
					<div>{q.detail}</div>
				</div>
			);
		});
	};

	const returnHome = () => {
		navigate("/");
	};

	return (
		<Card>
			<div>{showErrors()}</div>
			<Button onClick={returnHome} value={buttonText} />
		</Card>
	);
}
