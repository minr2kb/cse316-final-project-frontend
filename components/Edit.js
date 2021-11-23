import React from "react";
import '../css/edit.css';

function Edit(props){
    if(props.edit){
        return (
            <form className="editForm">
                    <div className = "editQuestions2"><h2 className="editQuestions">Edit Questions</h2></div>
                    <img className ="addImage" src ="./add.png"/>

                    <div className="middle">
                        <input></input>
                        <select className = "select">
                            <option value="0">Question type</option>
                            <option value="1">number</option>
                            <option value="2">boolean</option>
                            <option value="3">text</option>
                            <option value="4">multiple choice</option>
                        </select>
                        <img className="delete" src = "./delete.png"/>
                    </div>

                    <div className="down">
                        <button className="save">Save</button>
                    </div>
            </form>
        );
    }else{
        return null;
    }
}

export default Edit;