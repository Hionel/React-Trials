import UserInput from "../UserInput/UserInput";

const Investment = ({ onInvestmentInput, investmentDataValue }) => {
	return (
		<section id="user-input">
			<UserInput
				labelName="INITIAL INVESTMENT"
				inputName="initialInvestment"
				value={investmentDataValue.initialInvestment}
				onInputChange={onInvestmentInput}
			></UserInput>
			<UserInput
				labelName="ANNUAL INVESTMENT"
				inputName="annualInvestment"
				value={investmentDataValue.annualInvestment}
				onInputChange={onInvestmentInput}
			></UserInput>
			<UserInput
				labelName="EXPECTED RETURN"
				inputName="expectedReturn"
				value={investmentDataValue.expectedReturn}
				onInputChange={onInvestmentInput}
			></UserInput>
			<UserInput
				labelName="DURATION"
				inputName="duration"
				value={investmentDataValue.duration}
				onInputChange={onInvestmentInput}
			></UserInput>
		</section>
	);
};

export default Investment;
