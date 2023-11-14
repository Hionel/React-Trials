import {
	calculateInvestmentResults,
	formatter,
} from "../../util/investment.js";

const Results = ({ investmentDataObject }) => {
	const tableData = calculateInvestmentResults(investmentDataObject);

	const initialInvestment =
		tableData[0].valueEndOfYear -
		tableData[0].interest -
		tableData[0].annualInvestment;

	console.log(tableData);
	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest /Year</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{tableData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;

					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
