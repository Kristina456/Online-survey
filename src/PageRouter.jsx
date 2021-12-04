import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SuccessPage from "./pages/SuccessPage";
import SurvayPage from "./pages/SurvayPage";

export default function PageRouter() {
	return (
		<div className="App">
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/success">Success</Link>
						</li>
						<li>
							<Link to="/error">Error</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<SurvayPage />}></Route>
					<Route path="/success" element={<SuccessPage />}></Route>
					<Route path="/error" element={<ErrorPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}
