import "../css/login.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function Signup(props) {
	const { setCurrentPage, error } = props;

	const signupButton = () => {
		//temporary: to be changed
		setCurrentPage("logday");
	};
	const signupClose = () => {
		setCurrentPage("login");
	};

	return (
		<div className="login-layout">
			<div className="board">
				<div className="loginHtml">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: "20px",
						}}
					>
						<h3 style={{ margin: 0 }}>Sign Up</h3>
						<CloseOutlinedIcon onClick={signupClose} />
					</div>
					<div className="sdiv">
						<div className="loginInputs">
							<div>Name</div>
							<input
								className="login-input"
								//onChange={}
							/>
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

						<br style={{ size: "10px" }} />

						<div className="signup-buttons">
							<button
								className="login-button"
								onClick={signupButton}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
