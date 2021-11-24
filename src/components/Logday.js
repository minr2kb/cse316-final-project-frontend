import React from "react";
import { useState, useEffect } from "react";
import "../css/logday.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function Logday(props) {
	const { date, setDate, question, setQuestion, getToday } = props;

	// const [ans, setAns] = useState([]);

	// const save = function (id, sol, type) {
	// 	console.log(ans);
	// 	var bb = false;
	// 	const an = ans.map(q => {
	// 		if (q.createdDate === id) {
	// 			bb = true;
	// 			return q;
	// 		}
	// 		return q;
	// 	});
	// 	setAns(an);

	// 	const a = {
	// 		createdDate: id,
	// 		questionType: type,
	// 		responses: sol,
	// 	};
	// 	if (!bb) {
	// 		//setAns(ans.filter((a)=>a.createdDate !== id));
	// 		setAns([a, ...ans]);
	// 	}
	// };

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
		setDate(date);
	};

	const questionRendering = q => {
		switch (q.questionType) {
			case "boolean":
				return (
					<>
						<div className="radio-div">
							<input
								type="radio"
								name={q._id}
								id={`${q._id}boolean-t`}
								// onChange={() =>
								// 	save(q.createdDate, "true", "boolean")
								// }
							/>
							<label htmlFor={`${q._id}boolean-t`}>True</label>
							<span style={{ margin: "20px" }}></span>
							<input
								type="radio"
								name={q._id}
								id={`${q._id}boolean-f`}
								// onChange={() =>
								// 	save(q.createdDate, "false", "boolean")
								// }
							/>
							<label htmlFor={`${q._id}boolean-f`}>False</label>
						</div>
					</>
				);

			case "text":
				return (
					<input
						className="text-response-input"
						// value={q.response}

						// onChange={e =>
						// 	save(q.createdDate, e.target.value, "boolean")
						// }
					/>
				);

			case "number":
				return (
					<input
						// value={q.response}
						type="number"
						className="number-response-input"
					/>
				);

			case "multiple":
				return q.multipleChoice.map((choice, idx) => (
					<div
						style={{
							display: "flex",
							alignContent: "center",
							fontWeight: 400,
							marginBottom: "10px",
							marginTop: "10px",
							fontSize: "medium",
						}}
					>
						<input
							id={`${q._id}multiple${idx}`}
							type="radio"
							name={q._id}
						/>
						<label htmlFor={`${q._id}multiple${idx}`}>
							{choice}
						</label>
					</div>
				));
			default:
				<></>;
		}
	};

	return (
		<>
			<div className="top-div">
				<ArrowBackIosOutlinedIcon
					fontSize="smaller"
					onClick={() => incrementDate(date, -1)}
				/>
				<h2>{date}</h2>
				<ArrowForwardIosOutlinedIcon
					fontSize="smaller"
					onClick={() =>
						date === getToday() ? {} : incrementDate(date, 1)
					}
				/>
			</div>

			{question.map((q, idx) => (
				<div className="middle" key={`logday${idx}`}>
					<div className="in">{q.questionText}</div>
					{questionRendering(q)}
				</div>
			))}

			<div className="down">
				<button className="submit">Submit</button>
			</div>
		</>
	);
}

export default Logday;
