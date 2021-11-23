import React from "react";
import '../css/edit.css';

function Edit(props){
    if(props.edit){
        return (
            <form className="editForm">
                    <div className = "editQuestions2"><h2 className="editQuestions">Edit Questions</h2></div>
                    <img className ="addImage" src ="./add.png"/>

                    

                    {
                    props.question.map((q)=>{
                        if(q.type=="boolean"){
                            return <div className="middle">
                            <input 
                            value={q.content}
                            contentEditable="true"
                            ></input>
                            <select className = "select">
                                <option value="1">boolean</option>
                                <option value="2">text</option>
                                <option value="3">number</option>
                                <option value="4">multiple choice</option>
                            </select>
                            <img className="delete" src = "./delete.png"/>
                        </div>
                        }
                        if(q.type=="text"){
                            return <div className="middle">
                            <input 
                            value={q.content}
                            contentEditable="true"
                            ></input>
                            <select className = "select">
                                <option value="1">text</option>
                                <option value="2">boolean</option>
                                <option value="3">number</option>
                                <option value="4">multiple choice</option>
                            </select>
                            <img className="delete" src = "./delete.png"/>
                        </div>
                        }
                        if(q.type=="number"){
                            return <div className="middle">
                            <input 
                            value={q.content}
                            contentEditable="true"
                            ></input>
                            <select className = "select">
                                <option value="1">number</option>
                                <option value="2">text</option>
                                <option value="3">boolean</option>
                                <option value="4">multiple choice</option>
                            </select>
                            <img className="delete" src = "./delete.png"/>
                        </div>
                        }
                        if(q.type=="multipleChoice"){
                            return <div className="middle">
                            <input 
                            value={q.content}
                            contentEditable="true"
                            ></input>
                            <select className = "select">
                                <option value="1">multiple choice</option>
                                <option value="2">text</option>
                                <option value="3">boolean</option>
                                <option value="4">number</option>
                            </select>
                            <img className="delete" src = "./delete.png"/>
                            <div className="qList">
                                <ul>
                                    <li><input className="smallInput"></input></li>
                                    <li><input className="smallInput"></input></li>
                                    <li><input className="smallInput"></input></li>
                                </ul>
                            </div>
                        </div>
                        }
                    })
                    }

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