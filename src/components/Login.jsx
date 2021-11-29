import "../css/login.css";
function Login(props) {
	const { currentPage, setCurrentPage, error } = props;

	const signupButton = () => {
		setCurrentPage("signup");
	};

	const loginButton = () => {
		//temporary: to be changed
		setCurrentPage("logday");
	};

	return (
		<div className="login-layout">
			<div className="board">
				<div className="loginHead">
					<h2 style={{ margin: 0, color: "white" }}>Log Day</h2>
				</div>

				<div className="loginHtml">
					<div className="loginInputs">
						<div>Email</div>
						<input
							className="login-input"
							//onChange={}
						/>
						<div>Password</div>
						<input
							className="login-input"
							//onChange={}
						/>
						<div className="error">{error}</div>
					</div>
					<div className="loginButtons">
						<button className="login-button" onClick={loginButton}>
							Log In
						</button>
						<hr style={{ width: "inherit" }} />
						<button
							className="creatnewaccountButton"
							onClick={signupButton}
						>
							Create New Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
