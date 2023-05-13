import React from "react";
import listStyle from "./UserList.module.css";
import Card from "../UI/Card/Card";
import IUser from "../../Interfaces/IUser";
import UserItem from "../UserItem/UserItem";

interface IUserListProps {
	list: IUser[];
}

const UserList = ({ list }: IUserListProps) => {
	const errorText: string = "No users inside the list!";
	let listRender = (
		<div className={listStyle.errorMsg}>{errorText.toLocaleUpperCase()}</div>
	);
	if (list.length > 0) {
		listRender = (
			<ul className={`${listStyle.listContainer} flexColumn`}>
				{list.map((userData: IUser) => {
					return <UserItem key={userData.id} userData={userData} />;
				})}
			</ul>
		);
	}

	return <Card>{listRender}</Card>;
};

export default UserList;
