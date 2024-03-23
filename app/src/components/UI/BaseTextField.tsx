import { ChangeEvent, useState } from "react";
import { ITextFieldProps } from "../../interfaces/IBaseProps";
import TextField from "@mui/material/TextField";

const BaseTextField: React.FC<ITextFieldProps> = ({
	id,
	label,
	type,
	helperText,
	exportValue,
}) => {
	const [value, setValue] = useState("");
	const handleInput = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const inputValue = event.target.value;
		const inputId = event.target.id;
		setValue(inputValue);
		exportValue(inputValue, inputId);
	};
	return (
		<TextField
			id={id}
			label={label}
			type={type}
			value={value}
			onChange={(event) => handleInput(event)}
			helperText={helperText}
		/>
	);
};

export default BaseTextField;
