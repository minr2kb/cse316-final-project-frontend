import React from "react";
import { useState, useEffect} from "react";
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
	const [date, setDate] = useState(today());

	//question list
	const [question, setQuestion] = useState(
		[
			{ createdDate:"",questionType: "boolean", questionText: "life is hard", responses:"" },
			{ createdDate:"",questionType: "text", questionText: "what is your name?", responses:"Kim John" },
			{ createdDate:"",questionType: "boolean", questionText: "life is cool", responses:""  },
			{ createdDate:"",questionType: "multipleChoice",questionText: "where are you from?",multipleChoice:["Japan", "Korea", "China"], responses:"" },
		]
	);

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
	const deleteButton = (date)=>{
		setQuestion(
			question.filter((q)=>q.createdDate !== date)
		);
	}

	//add button in edit page
	const add = ()=>{
		const n = { 
			createdDate:"",
			questionType: "text", 
			questionText: "", 
			responses:"" };
		  setQuestion([n,...question]);
	}

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

    function today() {
		let day = new Date();
		let year = day.getFullYear();
		let month = day.getMonth() + 1;
		let d = day.getDate();
		return month + "/" + d + "/" + year;
  
	};

	//return

	return (
		<div className="App">
			<Navbar
				logDayButton={logDayButton}
				viewButton={viewButton}
				editButton={editButton}
				profileButton={profileButton}
				logDay={logDay}
				edit={edit}
				view={view}
			/>
			{logDay && (
				<Logday
					logDay={logDay}
					date={date}
					setDate={setDate}
					question={question}
				/>
			)}
			{profile && (
				<Profile
					profile={profile}
					profilePic={profilePic}
					setProfilePic={setProfilePic}
				/>
			)}
			{edit && (
				<Edit 
					edit={edit} 
					question={question} 
					deleteButton = {deleteButton}
				/>
			)}
			{view && <View view={view} />}
		</div>
	);
}

export default App;
