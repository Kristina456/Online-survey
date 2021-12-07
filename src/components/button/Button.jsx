import React from "react";
import "./Button.scss";

export default function Button({ value, onClick }) {
	return (
		<button className="btn" onClick={onClick}>
			<div>{value}</div>
		</button>
	);
}
