import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logday from "./components/Logday";
import View from "./components/View";
import Edit from "./components/Edit";
import Profile from "./components/Profile";

function App() {
	// States

	//user
	const [user, setUser] = useState(false);

	//navBar display states
	const [logDay, setLogDay] = useState(true);
	const [view, setView] = useState(false);
	const [edit, setEdit] = useState(false);
	const [profile, setProfile] = useState(false);

	//error state
	const [error, setError] = useState("");

	//profile pic
	const [profilePic, setProfilePic] = useState("/profile.png");

	//date
	const [date, setDate] = useState(getToday());

	//question list
	const [question, setQuestion] = useState([
		{
			_id: 0,
			createdDate: "",
			questionType: "text",
			questionText: "What is your name?",
			responses: {},
		},
		{
			_id: 1,
			createdDate: "",
			questionType: "number",
			questionText: "How old are you?",
			responses: {},
		},
		{
			_id: 2,
			createdDate: "",
			questionType: "boolean",
			questionText: "Did you do your assignments?",
			responses: {},
		},
		{
			_id: 3,
			createdDate: "",
			questionType: "multiple",
			questionText: "What is your favorite color?",
			multipleChoice: ["Red", "Green", "Blue"],
			responses: {},
		},
	]);

	//Button fun

	//navBar click fun
	const logDayButton = () => {
		setLogDay(true);
		setView(false);
		setEdit(false);
		setProfile(false);
	};
	const viewButton = () => {
		setView(true);
		setLogDay(false);
		setEdit(false);
		setProfile(false);
	};
	const editButton = () => {
		setEdit(true);
		setLogDay(false);
		setView(false);
		setProfile(false);
	};
	const profileButton = () => {
		setProfile(true);
		setLogDay(false);
		setView(false);
		setEdit(false);
	};

	//delete button in edit page

	//edit question button
	const editQuestion = (question, id) => {
		const questions = question.map(q => {
			if (q.createdDate === id) {
				return question;
			}
			return q;
		});
		setQuestion(question);
	};

	//add button in edit page
	const add = () => {
		const n = {
			createdDate: "",
			questionType: "text",
			questionText: "",
			responses: "",
		};
		setQuestion([n, ...question]);
	};

	// API

	// profile image input
	const uploadImageToCloudinaryAPIMethod = formData => {
		const cloudName = "";
		return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
			method: "POST",
			body: formData,
		})
			.then(checkStatus)
			.then(parseJSON);
	};

	//helpers

	function checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			setError(response.statusMessage);
		}
	}

	function parseJSON(response) {
		return response.json();
	}

	//current date format

	function getToday() {
		let day = new Date();
		let year = day.getFullYear();
		let month = day.getMonth() + 1;
		let d = day.getDate();
		return month + "/" + d + "/" + year;
	}

	//return

	return (
		<div>
			<Navbar
				logDayButton={logDayButton}
				viewButton={viewButton}
				editButton={editButton}
				profileButton={profileButton}
				logDay={logDay}
				edit={edit}
				view={view}
			/>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div className="main">
					{logDay && (
						<Logday
							date={date}
							setDate={setDate}
							question={question}
							setQuestion={setQuestion}
							getToday={getToday}
						/>
					)}
					{profile && (
						<Profile
							profilePic={profilePic}
							setProfilePic={setProfilePic}
						/>
					)}
					{edit && (
						<Edit
							question={question}
							// editQuestion={editQuestion}
							setQuestion={setQuestion}
						/>
					)}
					{view && <View view={view} />}
				</div>
			</div>
		</div>
	);
}

export default App;
