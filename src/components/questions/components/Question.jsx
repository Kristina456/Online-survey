import React from "react";

export default function Question({ value, required }) {
	return (
		<div>
			<input
				type="radio"
				name="number-radio-input"
				value={value}
				required={required}
			/>
			<label>{value}</label>
		</div>
	);
}
