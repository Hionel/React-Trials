import React, { FormEvent, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import formStyle from "./UserForm.module.css";
import IUser from "../../Interfaces/IUser";

interface IFormProps {
	formSubmission: (userData: IUser) => void;
}

const UserForm = (props: IFormProps) => {
	const usernameInputRef = useRef<HTMLInputElement>(null);
	const ageInputRef = useRef<HTMLInputElement>(null);
	const submitButton = {
		type: "submit" as "submit",
		text: "Add User" as string,
	};

	const submitUserFormHandler = (event: FormEvent) => {
		event.preventDefault();

		const userObject: IUser = {
			id: Math.random() * 1000,
			username: usernameInputRef.current?.value!,
			age: Number(ageInputRef.current?.value),
		};
		usernameInputRef.current!.value = "";
		ageInputRef.current!.value = "";
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
						ref={usernameInputRef}
					/>
				</div>
				<div className={`${formStyle.inputContainer} flexColumn`}>
					<label>Age</label>
					<input
						type="number"
						placeholder="Insert user's age"
						ref={ageInputRef}
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
