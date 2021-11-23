import { PromiseProvider } from "mongoose";
import React from "react";
import '../css/profile.css';

function Profile(props){

    const handleImageSelected = (event) => {
        
        if (event.target.files && event.target.files[0]) {

            const selectedFile = event.target.files[0];

            const formData = new FormData();

            const unsignedUploadPreset = 'ne6rzhzu';
            formData.append('file', selectedFile);
            formData.append('upload_preset', unsignedUploadPreset);

            props.uploadImageToCloudinaryAPIMethod(formData).then((response) => {
                console.log("Upload success");
                props.setProfilePic(response.url);

            });
        }
    }

    const removeImage = ()=>{
        props.setProfilePic("/profile.png");
    }

    if(props.profile){
    return (
            <form className="signForm">
                    <h2 className="editer">Edit Profile</h2>

                    <div className="top">

                        <div className="photo">Profile photo</div>
                        <label className = "profileImage2" htmlFor="neweer">
                        <img className="profileImage" src = {props.profilePic} alt="" onChange={handleImageSelected}></img>
                            <input type="file" id="neweer" name="image" placeholder="Choose" accept="image/" />
                            </label>

                        <label className="chooseNewImage" htmlFor="neweer"> Choose New Image
                        <input type="file" id="neweer" name="image" placeholder="Choose" accept="image/" onChange={handleImageSelected}/>
                        </label>
                        
                        <span className="removeImage" onClick={removeImage} style={{cursor:"pointer"}}>Remove Image</span>
                    </div>

                    <div className="middle">
                        <div className = "in">Name</div>
                        <input></input>
                    </div>
                    <div className="middle">
                        <div className = "in" >Email</div>
                        <input></input>
                    </div>
                    <div className="middle">
                        <div className = "in">Address</div>
                        <input></input>
                        <br/><br/>
                        <input></input>
                    </div>

                    <div className="down">
                        <button className="save">Save</button>
                        <p className="logout">Logout</p>
                    </div>
            </form>
    );}else{
        return null;
    }
}

export default Profile;