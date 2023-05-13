import React from "react";
import IButton from "../../../Interfaces/IButton";
import style from "./Button.module.css";

const Button = (props: IButton) => {
	return (
		<button type={props.type} className={style.buttonStyle}>
			{props.text}
		</button>
	);
};

export default Button;
