import React from "react";
import "../css/logday.css";

function Logday(props) {
	const incrementDate = (dateInput, increment) => {
		const dateFormatTotime = new Date(dateInput);
		const increasedDate = new Date(
			dateFormatTotime.getTime() + increment * 86400000
		);
		const month = increasedDate.getMonth() + 1;
		const date =
			month +
			"/" +
			increasedDate.getDate() +
			"/" +
			increasedDate.getFullYear();
		props.setDate(date);
	};
	const questionRendering = q => {
		switch (q.questionType) {
			case "boolean":
				return (
					<div className="middle">
						<div className="in">{q?.questionText}</div>
						<div className="radioDiv">
							<input
								type="radio"
								className="true"
								name="bool"
							></input>
							<label htmlFor="true">True</label>
							<input
								type="radio"
								className="false"
								name="bool"
							></input>
							<label htmlFor="false">False</label>
						</div>
					</div>
				);

			case "text":
				return (
					<div className="middle">
						<div className="in">{q?.questionText}</div>
						<input
							value={q.response}
						></input>
					</div>
				);

			case "number":
				return (
					<div className="middle">
						<div className="in">{q?.questionText}</div>
						<input type="number"></input>
					</div>
				);

			case "multipleChoice":
				return (
					<div className="middle">
						<div className="in">{q?.questionText}</div>

						<input
							type="radio"
							className="choose"
							name="name"
						></input>
						<label htmlFor="true" className="choose2">
							{q?.multipleChoice[0]}
						</label>
						<br />
						<br />
						<input
							type="radio"
							className="choose"
							name="name"
						></input>
						<label htmlFor="true" className="choose2">
							{q?.multipleChoice[1]}
						</label>
						<br />
						<br />
						<input
							type="radio"
							className="choose"
							name="name"
						></input>
						<label htmlFor="true" className="choose2">
							{q?.multipleChoice[2]}
						</label>
					</div>
				);
			default:
				<></>;
		}
	};

	return (
		<form className="logForm">
			<div className="topDiv">
				<img
					className="arrowL"
					src="./arrowL.png"
					alt={"arrowL"}
					onClick={() => incrementDate(props.date, -1)}
				/>
				<div className="date">{props.date}</div>
				<img
					className="arrowR"
					src="./arrowR.png"
					alt={"arrowR"}
					onClick={() => incrementDate(props.date, 1)}
				/>
			</div>

			{props?.question.map((q, idx) => (
				<div key={`logday${idx}`}>{questionRendering(q)}</div>
			))}

			<div className="down">
				<button className="submit">Submit</button>
			</div>
		</form>
	);
}

export default Logday;
