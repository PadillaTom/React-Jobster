import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Landing, Register, Error } from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/React-Jobster" element={<Dashboard></Dashboard>}></Route>
				<Route
					path="/React-Jobster/landing"
					element={<Landing></Landing>}
				></Route>
				<Route
					path="/React-Jobster/register"
					element={<Register></Register>}
				></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
