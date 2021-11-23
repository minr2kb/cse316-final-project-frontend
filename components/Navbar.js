import React from "react";
import '../css/navbar.css';

function Navebar(props){

    return (
    <div className="navbar">
        <h1 className="title">Day Logger</h1>
        <div className="links">
        <h3 onClick = {props.logDayButton}>Log Day</h3>
        <h3 onClick = {props.editButton}>Edit Questions</h3>
        <h3 onClick = {props.viewButton}>View Data</h3>
        </div>
        <img className="profileImage" src = "/profile.png" onClick = {props.profileButton}>
            </img> 
    </div>
    )
    
}

export default Navebar;