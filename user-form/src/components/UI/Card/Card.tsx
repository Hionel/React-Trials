import React, { ReactNode } from "react";
import cardStyle from "./Card.module.css";

interface ICardProps {
	children: ReactNode;
}
const Card = (props: ICardProps) => {
	return (
		<section className={`${cardStyle.cardContainer}`}>{props.children}</section>
	);
};

export default Card;
