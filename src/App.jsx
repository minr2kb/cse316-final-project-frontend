import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logday from "./components/Logday";
import View from "./components/View";
import Edit from "./components/Edit";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { getUserAPI } from "./api/client";

function App() {
	// States

	const [user, setUser] = useState(null);
	const [currentPage, setCurrentPage] = useState("login");
	const [profilePic, setProfilePic] = useState("");
	const [date, setDate] = useState("");

	//current date format

	const getToday = () => {
		let day = new Date();
		let year = day.getFullYear();
		let month = day.getMonth() + 1;
		let d = day.getDate();
		return month + "/" + d + "/" + year;
	};

	//fetch
	const getUser = async () => {
		getUserAPI().then(res => {
			console.log(res);
			setUser(res);
			setProfilePic(res?.image || "/profile.png");
		});
	};

	useEffect(() => {
		getUser();
		setDate(getToday());
	}, []);

	//return
	console.log(user);

	return (
		<div>
			{user && (
				<Navbar
					profilePic={profilePic}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}

			<div style={{ display: "flex", justifyContent: "center" }}>
				<div className="main">
					{currentPage === "logday" && (
						<Logday
							date={date}
							setDate={setDate}
							getToday={getToday}
						/>
					)}
					{currentPage === "profile" && (
						<Profile
							profilePic={profilePic}
							setProfilePic={setProfilePic}
							user={user}
							setUser={setUser}
							setCurrentPage={setCurrentPage}
						/>
					)}
					{currentPage === "edit" && <Edit />}
					{currentPage === "view" && (
						<View currentPage={currentPage} />
					)}
					{currentPage === "login" && (
						<Login
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					)}
					{currentPage === "signup" && (
						<Signup
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
