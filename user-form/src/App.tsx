import React, { ReactElement, useState } from "react";
import appStyle from "./App.module.css";

import IUser from "./Interfaces/IUser";

import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
	const [usersList, setUsersList] = useState<IUser[]>([]);
	const [errorContent, setErrorContent] = useState<ReactElement>(<></>);
	const formSubmissionHandler = (userData: IUser) => {
		const usernameRegex = new RegExp(/^[A-Za-z]+$/);
		if (userData.username === "" && userData.age === 0) {
			const errorMsg = "Username and age must be filled!";
			return errorHandling(true, errorMsg);
		}
		if (userData.username === "") {
			const errorMsg = "Please enter a valid username";
			return errorHandling(true, errorMsg);
		}
		if (userData.age === 0) {
			const errorMsg = "Please enter a valid age";
			return errorHandling(true, errorMsg);
		}
		if (!usernameRegex.test(userData.username)) {
			console.log(usernameRegex.test(userData.username));
			const errorMsg = `Please enter the correct format for username (only characters)`;
			return errorHandling(true, errorMsg);
		}
		if (userData.age < 18 || userData.age > 65) {
			const errorMsg = "Please enter a valid age (between 18 and 65 years old)";
			return errorHandling(true, errorMsg);
		} else {
			errorHandling(false);
			return setUsersList((prev) => {
				return [...prev, userData];
			});
		}
	};
	const errorHandling = (state: boolean, msg?: string) => {
		if (state) {
			return setErrorContent(
				<ErrorModal errorDescription={msg} openModal={errorHandling} />
			);
		}
		return setErrorContent(<></>);
	};

	return (
		<main className={appStyle.mainContainer}>
			{errorContent}
			<section className={`${appStyle.formContainer} flexColumn`}>
				<UserForm formSubmission={formSubmissionHandler} />
			</section>
			<section className={`${appStyle.listContainer} flexColumn`}>
				<UserList list={usersList} />
			</section>
		</main>
	);
}

export default App;
