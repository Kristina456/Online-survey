import React from "react";
import "./Question.scss";

export default function Question({ value, required }) {
	return (
		<span className="radio-btn">
			<label className="radio-btn__label">
				<input
					className="radio-btn__input"
					type="radio"
					name="number-radio-input"
					value={value}
					required={required}
				/>
				<span className="radio-btn__style-input"></span>
				<span className="radio-btn__value">{value}</span>
			</label>
		</span>
	);
}
