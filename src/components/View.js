import React from "react";
import { LineChart, Line,BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import '../css/view.css';
import { useEffect, useState, useCallback } from 'react';

function View(props) {

	useEffect(
		()=>{
		  props.question.forEach(function(q){
			if(q.questionType==="multiple" && !dataForMultiple.includes(q)){
				var response1=0;
				var response2=0;
				var response3=0;
				
				for(const r of q.responses){
					if(r===1){response1++}
					if(r===2){response2++}
					if(r===3){response3++}
				}

				const newQ = {
					name: q.questionText,
					response1:response1,
					response2:response2,
					response3:response3,
				};
				dataForMultiple.push(newQ);
				console.log(dataForMultiple);
			}
			if(q.questionType==="bool" && !dataForBool.includes(q)){
				dataForBool.push(q);
			}
			if(q.questionType==="number" && !dataForNumber.includes(q)){
				dataForNumber.push(q);
			}
		  });
		},[props.question,props.view]
	  );

	const dataForMultiple = [
		{
			name:" ",
			response1:2,
			response2:3,
			response3:4
		},
		{
			name:" ",
			response1:2,
			response2:3,
			response3:4
		}
	];

	  const dataForBool = [
		{
			name: 'Question 1',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		  },
		  {
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		  }
		];

	  const dataForNumber = [
		{
		  name: 'Page A',
		  uv: 4000,
		  pv: 2400,
		  amt: 2400,
		}
	  ];

	return  (
		<div className="rechart">
			<div className= "bar">
				<p>Bar graph</p>
				<div width="100%" height="100%">
					<BarChart width={500} height={300} data={dataForMultiple} margin={{
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

			<div className= "line">
				<div width="100%" height="100%">
					<p>Line graph</p>
					<LineChart width={500} height={300} data={dataForNumber} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
						{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        			</LineChart>
      			</div>
			</div>	

		</div>
		
	  );
}

export default View;
