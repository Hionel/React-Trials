import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });
	const titleInputHanlder = ($event) => {
		setEnteredTitle($event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: $event.target.value,
		// });
	};
	const amountInputHandler = ($event) => {
		setEnteredAmount($event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: $event.target.value,
		// });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: $event.target.value };
		// });
	};
	const dateInputHandler = ($event) => {
		setEnteredDate($event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: $event.target.value,
		// });
	};
	const expenseFormSubmissionHandler = ($event) => {
		$event.preventDefault();
		const expenseDataObject = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.saveExpenseForm(expenseDataObject);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const cancelForm = () => {
		props.closeExpenseForm();
	};
	return (
		<form onSubmit={expenseFormSubmissionHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleInputHanlder}
						value={enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountInputHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2024-01-01"
						value={enteredDate}
						onChange={dateInputHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={cancelForm}>
					Cancel
				</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
