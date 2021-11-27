import "../css/login.css";
function Login(props){

    const signupButton = ()=>{
        props.setCurrentPage("signup");
    }

    const loginButton = ()=>{
        //temporary: to be changed 
        props.setCurrentPage("logday");
    }

    return (
        <div className="board">
            <div className="loginHead" style={{textAlign:'center'}}>
                <h1> CSE316 Final Project</h1>
            </div>

            <div className="loginHtml">
                    <div className="loginInputs">
                        <div>Email</div>
                        <input 
                            className="loginEmail"
                            //onChange={}
                        ></input>
                        <div >Password</div>
                        <input className = "loginPassword"
                                //onChange={}
                            ></input>
                        <p className="error">{props.error}</p>
                    </div>   
                    <div className="loginButtons">
                        <button className="loginButton"
                        onClick={loginButton}
                        >Log In</button>
                        <hr style={{width:'inherit'}}/>
                        <button className="creatnewaccountButton" 
                        onClick={signupButton}
                        >Create New Account</button>
                    </div>
            </div>
        </div>
        ); 
}

export default Login;