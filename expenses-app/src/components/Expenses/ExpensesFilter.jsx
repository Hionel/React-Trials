import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
	const onChangeDate = (event) => {
		props.onChangeFilter(event.target.value);
	};
	const headingText = "Filter by year";
	return (
		<section className="filter__container">
			<h3 className="filter__header">{headingText}</h3>
			<select
				className="filter__options"
				value={props.selected}
				onChange={onChangeDate}
			>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option>
				<option value="2022">2022</option>
				<option value="2023">2023</option>
			</select>
		</section>
	);
};

export default ExpensesFilter;
