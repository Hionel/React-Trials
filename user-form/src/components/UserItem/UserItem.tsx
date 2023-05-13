import React from "react";
import itemStyle from "./UserItem.module.css";
import IUser from "../../Interfaces/IUser";

interface IUserProps {
	userData: IUser;
}

const UserItem = (props: IUserProps) => {
	const { username, age } = props.userData;
	return <li className={itemStyle.listItem}>{`${username} (${age})`}</li>;
};

export default UserItem;
