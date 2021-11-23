import React from "react";
import '../css/view.css';

function View(props){
    if(props.view){
        return (
            <p>View data</p>
        );
    }else{
        return null;
    }
}

export default View;