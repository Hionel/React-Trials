import React from "react";
import IBaseProps from "../../interfaces/IBaseProps";

const BaseCard: React.FC<IBaseProps> = ({
	children,
	additionalClasses = "",
}) => {
	const defaultClass = "card";
	const classNames = !additionalClasses
		? `${defaultClass}`
		: `${defaultClass} ${additionalClasses}`;

	return <div className={classNames}>{children}</div>;
};

export default BaseCard;
