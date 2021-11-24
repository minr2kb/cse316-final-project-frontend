import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import './App.css';
import Navebar from './components/Navbar';
import Logday from './components/Logday';
import View from './components/View';
import Edit from './components/Edit';
import Profile from './components/Profile';
import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom';

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
    const [date, setDate] = useState("11/11/2021");

    //question list
    const [question, setQuestion] = useState(user.question || [
      {type:"boolean",content:"life is hard"},
      {type:"text",content:"what is your name?"},
      {type:"boolean",content:"life is cool"},
      {type:"number", content:"how old are you?"},
      {type:"multipleChoice", content:"where are you from?", choices:["S.Korea", "China", "Japan"]}
    ]);

  //Button fun

    //navBar click fun
  const logDayButton = ()=>{
    setLogDay(true);
    setView(false);
    setEdit(false);
    setProfile(false);
  }
  const viewButton = ()=>{
    setView(true);
    setLogDay(false);
    setEdit(false);
    setProfile(false);
  }
  const editButton = ()=>{
    setEdit(true);
    setLogDay(false);
    setView(false);
    setProfile(false);
  }
  const profileButton = ()=>{
    setProfile(true);
    setLogDay(false);
    setView(false);
    setEdit(false);
  }


  // API

    // profile image input
  const uploadImageToCloudinaryAPIMethod = (formData) => {
    const cloudName = '';
    return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
        method: 'POST',
        body: formData,
    }).then(checkStatus)
        .then(parseJSON);
  }

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

//return

  return (
    <div className="App">
      <Navebar
      logDayButton = {logDayButton}
      viewButton = {viewButton}
      editButton = {editButton}
      profileButton = {profileButton}
      />
      <Logday
      logDay = {logDay}
      date = {date}
      setDate = {setDate}
      question = {question}
      />
      <Profile
      profile = {profile}
      profilePic = {profilePic}
      setProfilePic = {setProfilePic}
      />
      <Edit
      edit = {edit}
      question = {question}
      setQuestion = {setQuestion}
      />
      <View
      view = {view}
      />
    </div>
  );
}

export default App;