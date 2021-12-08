import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SuccessPage from "./pages/SuccessPage";
import SurvayPage from "./pages/SurvayPage";

export default function PageRouter() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<SurvayPage />}></Route>
					<Route path="/500" element={<SurvayPage error={500} />}></Route>
					<Route path="/422" element={<SurvayPage error={422} />}></Route>
					<Route path="/success" element={<SuccessPage />}></Route>
					<Route path="/error" element={<ErrorPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}
