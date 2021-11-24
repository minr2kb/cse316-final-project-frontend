import React from "react";
import "../css/edit.css";

function Edit(props) {
	const questionRendering = q => {
		switch (q?.questionType) {
			case "boolean":
				return (
					<div className="middle">
						<input
							defaultValue={q?.questionText}
							contentEditable="true"
						></input>
						<select className="select">
							<option value="1">boolean</option>
							<option value="2">text</option>
							<option value="3">number</option>
							<option value="4">multiple choice</option>
						</select>
						<img
							className="delete"
							alt="delete"
							src="./delete.png"
							// onClick = {props.deleteButton(q.createdDate)}
						/>
					</div>
				);

			case "text":
				return (
					<div className="middle">
						<input
							defaultValue={q?.questionText}
							contentEditable="true"
						></input>
						<select className="select">
							<option value="1">text</option>
							<option value="2">boolean</option>
							<option value="3">number</option>
							<option value="4">multiple choice</option>
						</select>
						<img
							className="delete"
							alt="delete"
							src="./delete.png"
							// onClick = {props.deleteButton(q.createdDate)}
						/>
					</div>
				);

			case "number":
				return (
					<div className="middle">
						<input
							defaultValue={q?.questionText}
							contentEditable="true"
						></input>
						<select className="select">
							<option value="1">number</option>
							<option value="2">text</option>
							<option value="3">boolean</option>
							<option value="4">multiple choice</option>
						</select>
						<img
							className="delete"
							alt="delete"
							src="./delete.png"
							// onClick = {props.deleteButton(q.createdDate)}
						/>
					</div>
				);

			case "multipleChoice":
				return (
					<div className="middle">
						<input defaultValue={q.questionText} contentEditable="true"></input>
						<select className="select">
							<option value="1">multiple choice</option>
							<option value="2">text</option>
							<option value="3">boolean</option>
							<option value="4">number</option>
						</select>
						<img
							className="delete"
							alt="delete"
							src="./delete.png"
							onClick = {props.deleteButton(q?.createdDate)}
						/>
						<div className="qList">
							<ul>
								<li>
									<input className="smallInput"></input>
								</li>
								<li>
									<input className="smallInput"></input>
								</li>
								<li>
									<input className="smallInput"></input>
								</li>
							</ul>
						</div>
					</div>
				);
			default:
				<></>;
		}
	};

	return (
		<form className="editForm">
			<div className="editQuestions2">
				<h2 className="editQuestions">Edit Questions</h2>
			</div>
			<img className="addImage" alt="addImage" src="./add.png" />

			{props?.question.map((q, idx) => (
				<div key={`edit${idx}`}>{questionRendering(q)}</div>
			))}
			<div className="down">
				<button className="save">Save</button>
			</div>
		</form>
	);
}

export default Edit;
