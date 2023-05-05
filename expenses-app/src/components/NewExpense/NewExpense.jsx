import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
	const [formVisibilityState, setFormVisibilityState] = useState(false);
	const onFormSubmit = (formData) => {
		const newExpanseData = { ...formData, id: Math.random().toString() };
		props.addNewExpense(newExpanseData);
		setFormVisibilityState(false);
	};
	const openForm = () => {
		setFormVisibilityState(true);
	};
	const cancelForm = () => {
		setFormVisibilityState(false);
	};
	let formAreaContent = <button onClick={openForm}>Create New Expense</button>;
	if (formVisibilityState) {
		formAreaContent = (
			<ExpenseForm
				saveExpenseForm={onFormSubmit}
				closeExpenseForm={cancelForm}
			/>
		);
	}
	return <div className="new-expense">{formAreaContent}</div>;
};

export default NewExpense;
