import { ReactNode } from "react";

export interface IBaseProps {
	children?: ReactNode;
	additionalClasses?: string;
}

export interface ITextFieldProps {
	id: string;
	label: string;
	type: string;
	helperText: string;
	exportValue?: any;
}
