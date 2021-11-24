import React from "react";
import "../css/navbar.css";

function Navbar(props) {

	const titleStyle = {
		color:"#66bfbf",
		textDecoration:"underline"
	}

	return (
		<div className="navbar">
			<h1 className="title">Day Logger</h1>
			<div className="links">
				<h3 onClick={props.logDayButton}><div style={(props.logDay)?titleStyle:{}}>Log Day</div></h3>
				<h3 onClick={props.editButton}><div style={(props.edit)?titleStyle:{}}>Edit Questions</div></h3>
				<h3 onClick={props.viewButton}><div style={(props.view)?titleStyle:{}}>View Data</div></h3>
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
