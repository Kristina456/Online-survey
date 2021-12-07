import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import { MockSurvay500 } from "../mocks/MockSurvay500";
import "./ErrorPage.scss";

export default function ErrorPage() {
	const navigate = useNavigate();
	const buttonText = "Return home";

	const error = MockSurvay500;
	const showErrors = () => {
		return error.errors.map((q) => {
			return (
				<div>
					<h1>{q.title}</h1>
					<p>{q.detail}</p>
				</div>
			);
		});
	};

	const returnHome = () => {
		navigate("/");
	};

	return (
		<Card>
			<div className="error-page">
				<div>{showErrors()}</div>
				<div className="error-page__btn">
					<Button onClick={returnHome} value={buttonText} />
				</div>
			</div>
		</Card>
	);
}
