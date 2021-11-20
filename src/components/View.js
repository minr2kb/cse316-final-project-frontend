import React from "react";

function View(props){
    if(props.view){
        return (
            <p>View</p>
        );
    }else{
        return null;
    }
}

export default View;