import React from "react";
import "../css/navbar.css";

function Navbar(props) {
	const {
		logDayButton,
		viewButton,
		editButton,
		profileButton,
		logDay,
		edit,
		view,
	} = props;

	const titleStyle = {
		color: "#66bfbf",
		textDecoration: "underline",
	};

	return (
		<div className="navbar">
			<h2 className="title">Day Logger</h2>
			<div className="links">
				<h4 onClick={logDayButton} className="link">
					<div style={logDay ? titleStyle : {}}>Log Day</div>
				</h4>
				<h4 onClick={editButton} className="link">
					<div style={edit ? titleStyle : {}}>Edit Questions</div>
				</h4>
				<h4 onClick={viewButton} className="link">
					<div style={view ? titleStyle : {}}>View Data</div>
				</h4>
			</div>
			<img
				className="profileImage"
				src="/profile.png"
				alt={"profile"}
				onClick={profileButton}
			/>
		</div>
	);
}

export default Navbar;
