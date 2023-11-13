import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChange }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	let playerNameDisplay = <span className="player-name">{playerName}</span>;
	let buttonText = "Edit";

	const editButtonHandler = () => {
		setIsEditing((buttonState) => !buttonState);
		if (isEditing) {
			onChange(symbol, playerName);
		}
	};

	const changeNameHandlder = (e) => {
		const newName = e.target.value;
		setPlayerName(newName);
	};

	if (isEditing) {
		playerNameDisplay = (
			<input
				type="text"
				value={playerName}
				onChange={(e) => changeNameHandlder(e)}
				required
			/>
		);
		buttonText = "Save";
	}
	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{playerNameDisplay}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={editButtonHandler}>{buttonText}</button>
		</li>
	);
};

export default Player;
