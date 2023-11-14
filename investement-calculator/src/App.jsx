import { useState } from "react";

import Header from "./components/Header/Header";
import Investment from "./components/Investment/Investment";
import Results from "./components/Results/Results.jsx";

const App = () => {
	const [investment, setInvestments] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 500,
		duration: 10,
	});

	const handleInvestmentData = (inputName, value) => {
		setInvestments((prevState) => ({
			...prevState,
			[inputName]: value,
		}));
	};

	const isInputVaild = investment.duration >= 1;

	return (
		<>
			<Header />
			<Investment
				onInvestmentInput={handleInvestmentData}
				investmentDataValue={investment}
			/>
			{isInputVaild && <Results investmentDataObject={investment} />}
			{!isInputVaild && <p className="center">Enter a valid duration data!</p>}
		</>
	);
};

export default App;
