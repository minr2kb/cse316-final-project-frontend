import React from "react";
import "../css/navbar.css";

function Navbar(props) {
	return (
		<div className="navbar">
			<h1 className="title">Day Logger</h1>
			<div className="links">
				<h3 onClick={props.logDayButton}>Log Day</h3>
				<h3 onClick={props.editButton}>Edit Questions</h3>
				<h3 onClick={props.viewButton}>View Data</h3>
			</div>
			<img
				className="profileImage"
				src="/profile.png"
				alt={"profile"}
				onClick={props.profileButton}
			/>
		</div>
	);
}

export default Navbar;
