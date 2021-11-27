import "../css/signup.css";
import "../css/login.css";
function Signup(props){

    const signupButton = ()=>{
        //temporary: to be changed 
        props.setCurrentPage("logday");
    }
    const signupClose = ()=>{
        props.setCurrentPage("login");
    }

    return (

            <div className="signHtml">
                <div className = "tit" style={{float:'left'}}><b>Sign Up</b></div>
                <img className="cross" src="close.png" onClick={signupClose} alt=""></img>
                <div className="sdiv">
                    <div className="signinInputs">
                         <div>Name</div>
                        <input className="loginEmail" 
                            //onChange={}
                        ></input>
                        <div>Email</div>
                        <input 
                            className="loginEmail" 
                            //onChange={}
                        ></input>
                        <div >Password</div>
                        <input 
                            className = "loginEmail" 
                            //onChange={}
                        ></input>
                        <p className="error">{props.error}</p>
                    </div>

                    <br style={{size:'10px'}}/>

                    <div className="signinButtons">
                        <button className="signupButton" 
                        onClick={signupButton}
                        >Sign Up</button>
                    </div>
                </div>
            </div>
        ); 
}

export default Signup;
