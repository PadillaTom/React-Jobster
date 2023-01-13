import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
	return (
		<Wrapper className="full-page">
			<div>
				<img src={img} alt="Not Found" />
				<h3>Page Not Found!</h3>
				<p>Please go back to the Homepage.</p>
				<Link to="/">Back to Homepage</Link>
			</div>
		</Wrapper>
	);
};

export default Error;
