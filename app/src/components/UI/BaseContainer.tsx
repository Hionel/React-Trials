import React from "react";
import { IBaseProps } from "../../interfaces/IBaseProps";

const BaseContainer: React.FC<IBaseProps> = ({
	children,
	additionalClasses = "",
}) => {
	const classNames = !additionalClasses
		? `container`
		: `container ${additionalClasses}`;

	return <main className={classNames}>{children}</main>;
};

export default BaseContainer;
