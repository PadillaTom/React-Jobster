import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Landing, Register, Error } from "./pages";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route
					exact
					path="/React-Jobster"
					element={<Dashboard></Dashboard>}
				></Route>
				<Route path="landing" element={<Landing></Landing>}></Route>
				<Route path="register" element={<Register></Register>}></Route>
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
