import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/browser";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
worker.start();
