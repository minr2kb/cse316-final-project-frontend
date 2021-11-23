import React, { useState } from "react";
import '../css/logday.css';

function Logday(props){

    const incrementDate = (dateInput,increment)=> {
        const dateFormatTotime = new Date(dateInput);
        const increasedDate = new Date(dateFormatTotime.getTime() +(increment *86400000));
        const month = increasedDate.getMonth()+1;
        const date = month +"/"+increasedDate.getDate()+"/"+increasedDate.getFullYear();
        props.setDate(date);
    }

    if(props.logDay){
        return (
            <form className="logForm">
                    <div className="topDiv">

                        <img className="arrowL" src = "./arrowL.png"
                           onClick = {()=>incrementDate(props.date,-1)}
                        />
                        <div className = "date">{props.date}</div>
                        <img className="arrowR" src = "./arrowR.png"
                            onClick = {()=>incrementDate(props.date,1)}
                        />

                    </div>

                    {
                    props.question.map((q)=>{
                        if(q.type==="boolean"){
                            return <div className="middle">
                            <div className = "in">{q.content}</div>
                            <div className = "radioDiv">
                            <input type="radio" className = "true" name = "bool"></input>
                            <label for="true">True</label>
                            <input type="radio" className="false" name = "bool"></input>
                            <label for="false">False</label>                       
                            </div>
                        </div>
                        }
                        if(q.type==="text"){
                            return <div className="middle">
                                        <div className = "in">{q.content}</div>
                                        <input></input>
                                    </div> 
                        }
                        if(q.type==="number"){
                            return <div className="middle">
                                        <div className = "in">{q.content}</div>
                                        <input type="number"></input>
                                    </div>
                        }
                        if(q.type==="multipleChoice"){
                            return <div className="middle">
                                        <div className = "in">{q.content}</div>
                
                                        <input type="radio" className = "choose" name="name"></input>
                                        <label for="true" className = "choose2">{q.choices[0]}</label>
                                        <br/>
                                        <input type="radio" className = "choose" name="name"></input>
                                        <label for="true" className = "choose2">{q.choices[1]}</label>
                                        <br/>
                                        <input type="radio" className = "choose" name="name"></input>
                                        <label for="true" className = "choose2">{q.choices[2]}</label>
                                     </div>
                        }
                    })
                    }

                    

                    <div className="down">
                        <button className="submit">Submit</button>
                    </div>

            </form>
        );
    }else{
        return null;
    }
}

export default Logday;