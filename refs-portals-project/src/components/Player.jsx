import { useState, useRef } from "react";

export default function Player() {
	const userNameInput = useRef();
	const [userName, setUserName] = useState(null);

	const setUserNameHandler = () => {
		const newUserName = userNameInput.current.value;
		setUserName(newUserName);
		userNameInput.current.value = "";
	};

	return (
		<section id="player">
			<h2>Welcome {userName ?? "unknown entity"}</h2>
			<p>
				<input ref={userNameInput} type="text" />
				<button onClick={setUserNameHandler}>Set Name</button>
			</p>
		</section>
	);
}
