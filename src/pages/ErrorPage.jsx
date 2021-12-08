import React from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import "./ErrorPage.scss";

export default function ErrorPage() {
	const location = useLocation();
	const navigate = useNavigate();

	const buttonText = "Return home";

	const showErrors = () => {
		location.state.errors.map((q) => {
			return (
				<div>
					{q.title && <h1>{q.title}</h1>}
					<div>
						<div>{q.source && <strong>{q.source.pointer}</strong>}</div>
						<p>{q.detail}</p>
					</div>
				</div>
			);
		});
	};

	const returnHome = () => {
		navigate("/");
	};

	const showUnexpectedError = () => {
		return (
			<div>
				<h1>Unexpected error happend</h1>
			</div>
		);
	};

	return (
		<Card>
			<div className="error-page">
				<div>{location.state && showErrors()}</div>
				<div>{!location.state && showUnexpectedError()}</div>
				<div className="error-page__btn">
					<Button onClick={returnHome} value={buttonText} />
				</div>
			</div>
		</Card>
	);
}
