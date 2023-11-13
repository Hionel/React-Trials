import Player from "../Player/Player";

const PlayersContainer = ({ active, onChangeName }) => {
	return (
		<ul id="players" className="highlight-player">
			<Player
				initialName="Player 1"
				symbol="X"
				isActive={active === "X"}
				onChange={onChangeName}
			/>
			<Player
				initialName="Player 2"
				symbol="O"
				isActive={active === "O"}
				onChange={onChangeName}
			/>
		</ul>
	);
};

export default PlayersContainer;
