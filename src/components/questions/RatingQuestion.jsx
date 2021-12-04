import React from "react";

export default function RatingQuestion() {
	return (
		<div>
			<div>
				<input type="radio" name="number-radio-input" value="1" />
				<label>1</label>
			</div>
			<div>
				<input type="radio" name="number-radio-input" value="2" />
				<label>2</label>
			</div>
			<div>
				<input type="radio" name="number-radio-input" value="3" />
				<label>3</label>
			</div>
			<div>
				<input type="radio" name="number-radio-input" value="4" />
				<label>4</label>
			</div>
			<div>
				<input type="radio" name="number-radio-input" value="5" />
				<label>5</label>
			</div>
		</div>
	);
}
