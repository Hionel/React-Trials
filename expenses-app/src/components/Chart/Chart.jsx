import React from "react";
import "./Chart.css";
import ChartBarComponent from "./ChartBar";

const ChartComponent = (props) => {
	const dataPointsValues = props.dataPoints.map((dataPoint) => {
		return dataPoint.value;
	});
	const totalMax = Math.max(...dataPointsValues);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => {
				return (
					<ChartBarComponent
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={totalMax}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
};

export default ChartComponent;
