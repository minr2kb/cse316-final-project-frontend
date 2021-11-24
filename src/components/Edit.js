import React from "react";
import "../css/edit.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Edit(props) {
	const { question, setQuestion } = props;

	return (
		<form className="editForm">
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					paddingLeft: "5px",
					paddingRight: "5px",
					paddingTop: "10px",
					paddingBottom: "10px",
				}}
			>
				<h3 style={{ fontWeight: 900 }}>Edit Questions</h3>

				<AddCircleOutlineIcon fontSize="medium" />
			</div>

			{question.map((q, idx) => (
				<div key={`edit${idx}`}>
					<div className="middle">
						<input
							value={q?.questionText}
							className="question-input"
						/>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<select className="select" value={q.questionType}>
								<option value="number">number</option>
								<option value="text">text</option>
								<option value="boolean">boolean</option>
								<option value="multiple">
									multiple choice
								</option>
							</select>
							<DeleteOutlineIcon
								className="delete"
								// fontSize="small"
								onClick={() => {
									setQuestion(
										question.filter(
											item => item._id !== q._id
										)
									);
								}}
							/>
						</div>
						{q.questionType === "multiple" &&
							[...Array(3)].map((n, idx) => (
								<div
									style={{
										fontWeight: 400,
										marginBottom: "15px",
										marginTop: "15px",
										fontSize: "medium",
									}}
								>
									<input
										// id={`${q._id}multiple${idx}`}
										type="radio"
										name={q._id}
									/>

									<input className="smallInput"></input>
								</div>
							))}
					</div>
				</div>
			))}
			<div className="down">
				<button className="save">Save</button>
			</div>
		</form>
	);
}

export default Edit;
