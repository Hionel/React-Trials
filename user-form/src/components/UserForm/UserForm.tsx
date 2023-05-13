import React, { ChangeEvent, FormEvent, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import formStyle from "./UserForm.module.css";
import IUser from "../../Interfaces/IUser";

interface IFormProps {
	formSubmission: (userData: IUser) => void;
}

const UserForm = (props: IFormProps) => {
	const [inputUsername, setInputUsername] = useState("");
	const [inputAge, setInputAge] = useState("");
	const submitButton = {
		type: "submit" as "submit",
		text: "Add User" as string,
	};
	const usernameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setInputUsername(event.target.value);
	};
	const ageInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setInputAge(event.target.value);
	};
	const submitUserFormHandler = (event: FormEvent) => {
		event.preventDefault();
		const userObject: IUser = {
			id: Math.random() * 1000,
			username: inputUsername,
			age: Number(inputAge),
		};
		setInputUsername("");
		setInputAge("");

		return props.formSubmission(userObject);
	};
	return (
		<Card>
			<form
				onSubmit={submitUserFormHandler}
				className={`${formStyle.formContainer} flexColumn`}
			>
				<div className={`${formStyle.inputContainer} flexColumn`}>
					<label>Username</label>
					<input
						type="text"
						placeholder="Insert the username"
						value={inputUsername}
						onChange={usernameInputHandler}
					/>
				</div>
				<div className={`${formStyle.inputContainer} flexColumn`}>
					<label>Age</label>
					<input
						type="number"
						placeholder="Insert user's age"
						value={inputAge}
						onChange={ageInputHandler}
					/>
				</div>
				<div className={`${formStyle.inputContainer}`}>
					<Button type={submitButton.type} text={submitButton.text} />
				</div>
			</form>
		</Card>
	);
};

export default UserForm;
