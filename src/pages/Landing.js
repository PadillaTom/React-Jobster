import React from "react";
import { Link } from "react-router-dom";

import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
	return (
		<Wrapper>
			{/* Nav */}
			<nav>
				<Logo></Logo>
			</nav>
			{/* Main Page */}
			<div className="container page">
				{/* Info */}
				<div className="info">
					<h1>
						Job <span>Tracking</span> App!
					</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ipsa
						corrupti perspiciatis, tempore praesentium dolor expedita vitae id
						in iusto, quas voluptates dolorem ea nostrum?
					</p>
					<Link to="/register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				{/* Image */}
				<img src={main} alt="Jobster" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
