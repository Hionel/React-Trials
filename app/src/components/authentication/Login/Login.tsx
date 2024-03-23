import { useState } from "react";
import "./Login.module.scss";

import { ITextFieldProps } from "../../../interfaces/IBaseProps";
import { EIds, ILoginObject } from "../../../interfaces/IAuth";

import BaseTextField from "../../UI/BaseTextField";
import Button from "@mui/material/Button";

import VpnKeyIcon from "@mui/icons-material/VpnKey";

const loginTemplate: ITextFieldProps[] = [
	{
		id: EIds.indetifier,
		label: "Username/Email",
		type: "text",
		helperText: "",
	},
	{
		id: EIds.password,
		label: "Password",
		type: "password",
		helperText: "",
	},
];

const Login = () => {
	const [loginData, setLoginData] = useState<ILoginObject>({
		identifierValue: "",
		indentifierType: "",
		password: "",
	});
	// Move this to validation/pipes/transforms
	const typeOfValue = (value: string) => {
		return value.includes("@") ? "email" : "username";
	};

	const handleExportedData = (data: string, id: string) => {
		setLoginData((prevLoginData) => {
			const inputValue =
				id === EIds.indetifier ? data : prevLoginData.identifierValue;
			const valueType =
				id === EIds.indetifier
					? typeOfValue(data)
					: prevLoginData.indentifierType;
			const passwordValue =
				id === EIds.password ? data : prevLoginData.password;

			return {
				...prevLoginData,
				identifierValue: inputValue,
				indentifierType: valueType,
				password: passwordValue,
			};
		});
	};

	const loginDom = loginTemplate.map((templateObject) => (
		<BaseTextField
			id={templateObject.id}
			key={templateObject.id}
			label={templateObject.label}
			type={templateObject.type}
			helperText={templateObject.helperText}
			exportValue={handleExportedData}
		></BaseTextField>
	));

	const handleSubmit = () => {
		console.log(loginData);
	};

	return (
		<div className="form__wrapper flexCentered">
			<h1>Welcome to narnia</h1>
			<form className="form flexCentered">{loginDom}</form>
			<Button
				onClick={handleSubmit}
				variant="contained"
				endIcon={<VpnKeyIcon />}
			>
				Submit
			</Button>
			reset pass register
		</div>
	);
};

export default Login;
