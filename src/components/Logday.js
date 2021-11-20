import React from "react";

function Logday(props){
    if(props.logDay){
        return (
            <p>Log</p>
        );
    }else{
        return null;
    }
}

export default Logday;