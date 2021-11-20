import React from "react";

function Edit(props){
    if(props.edit){
        return (
            <p>Edit</p>
        );
    }else{
        return null;
    }
}

export default Edit;