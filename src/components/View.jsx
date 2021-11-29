import React from "react";
import {
	LineChart,
	Line,
	BarChart,
	Bar,
	PieChart,
	Pie,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Cell,
} from "recharts";
import "../css/view.css";
import { useEffect, useState, useCallback } from "react";

function View() {
	const [questions, setQuestions] = useState([]);
	const getQuestions = async () => {
		// This part is dummy data. I'll change to http fetch function later.
		const newQuestions = [
			{
				_id: 0,
				creator: "",
				createdDate: "",
				questionType: "text",
				questionText: "What is your name?",
				multipleChoice: [],
				createdDate: new Date(),
				responses: { "11/27/2021": "Kyungbae Min" },
			},
			{
				_id: 1,
				creator: "",
				createdDate: "",
				questionType: "number",
				questionText: "How old are you?",
				multipleChoice: [],
				createdDate: new Date(),
				responses: { "11/27/2021": 22 },
			},
			{
				_id: 2,
				creator: "",
				createdDate: "",
				questionType: "boolean",
				questionText: "Did you do your assignments?",
				multipleChoice: [],
				createdDate: new Date(),
				responses: { "11/27/2021": true },
			},
			{
				_id: 3,
				creator: "",
				createdDate: "",
				questionType: "multiple",
				questionText: "What is your favorite color?",
				multipleChoice: ["Red", "Green", "Blue"],
				createdDate: new Date(),
				responses: { "11/27/2021":0},
			},
		];
		setQuestions(newQuestions);
	};

	const dataForMultiple = [
		{
			name: " ",
			response1: 2,
			response2: 3,
			response3: 4,
		},
	];

	const dataForBool = [
		{ name: 'True', value: 400 },
		{ name: 'False', value: 400 },
	];

	const dataForNumber = [
		{
			name: "Question",
			response: [0,2],
			response2:2,
		},
	];

	const COLORS = ['#0088FE', '#FF8042'];
	
	useEffect(() => {
		getQuestions();
	}, []);

	useEffect(() => {
		questions.forEach(q => {
			if (q.questionType === "multiple") {
				var response1 = 0;
				var response2 = 0;
				var response3 = 0;

				for (const r of Object.keys(q.responses)) {
					if (r === 0) {
						response1=89;
					}
					if (r === 1) {
						response2++;
					}
					if (r === 2) {
						response3++;
					}
				}
				
				const newQ = {
					name: q.questionText,
					response1: response1,
					response2: response2,
					response3: response3,
				};

				if(!dataForMultiple.includes(newQ)){
					dataForMultiple.push(newQ);
				};
				console.log(dataForMultiple);
			}
			if (q.questionType === "bool" && !dataForBool.includes(q)) {
				dataForBool.push(q);
			}
			if (q.questionType === "number" && !dataForNumber.includes(q)) {
				dataForNumber.push(q);
			}
		});
	}, [questions]);

	return (
		<div className="viewData">

			<div className="textData">
				<div>What is your name?</div>
				<br/>
				<div className="dateBlock">11/12/2021</div>
				<div className="responseBlock">Kyungbae Min</div>
			</div>

			<div className="bar">
				<p>What is your favorite color?</p>
				<div width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={dataForMultiple}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="response1" fill="#8884d8" />
						<Bar dataKey="response2" fill="#82ca9d" />
						<Bar dataKey="response3" fill="skyblue" />
					</BarChart>
				</div>
			</div>

			<div className="line">
				<div width="100%" height="100%">
					<p>How old are you?</p>
					<LineChart
						width={500}
						height={300}
						data={dataForNumber}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="response"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						
					</LineChart>
				</div>
			</div>

			<div className="pie">
				<div width="100%" height="100%">
					<p>Did you do your assignments?</p>
					<PieChart width={400} height={400}>
						<Pie
							data={dataForBool}
							cx="50%"
							cy="50%"
							labelLine={false}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
						>
							{dataForBool.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend/>
					</PieChart>
				</div>
			</div>
		</div>
	);
}

export default View;
