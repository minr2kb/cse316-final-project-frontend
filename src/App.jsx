import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logday from "./components/Logday";
import View from "./components/View";
import Edit from "./components/Edit";
import Profile from "./components/Profile";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
	// States

	const [user, setUser] = useState({});
	const [currentPage, setCurrentPage] = useState("login");
	const [error, setError] = useState("place holder for error");
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
		const newUser = {
			_id: 0,
			userName: "Kyungbae Min",
			password: "12345678",
			email: "kbmin1129@gmail.com",
			address1: "Cheongju-si",
			address2: "Bunpyeong-dong",
			image: "",
		};
		setUser(newUser);
		setProfilePic(newUser?.image || "/profile.png");
	};

	useEffect(() => {
		getUser();
		setDate(getToday());
	}, []);

	//return

	return (
		<div>
			<Navbar
				profilePic={profilePic}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
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
					{currentPage === "view" && <View />}
					{currentPage === "login" && (
						<Login 
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							error = {error}
						/>
					)}
					{currentPage === "signup" && (
						<Signup 
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							error = {error}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
