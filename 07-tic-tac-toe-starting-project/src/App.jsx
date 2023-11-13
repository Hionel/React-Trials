import { useState } from "react";

import Header from "./components/Header/Header";
import PlayersContainer from "./components/PlayersContainer/PlayersContainer";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver.jsx";

import {
	deriveGameBoard,
	deriveActivePlayer,
	deriveWinner,
} from "./utils/utils.js";

const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const App = () => {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState(PLAYERS);

	const gameBoard = deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);
	const activePlayer = deriveActivePlayer(gameTurns);
	const winner = deriveWinner(gameBoard, players);
	const hasDraw = gameTurns.length === 9 && !winner;

	const handlePlayerChange = (rowIndex, columnIndex) => {
		setGameTurns((prevTurn) => {
			const currentPlayer = deriveActivePlayer(prevTurn);
			const updatedTurn = [
				{ square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
				...prevTurn,
			];
			return updatedTurn;
		});
	};

	const handleRematch = () => {
		setGameTurns([]);
	};

	const handlePlayerNameChange = (symbol, newName) => {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	};

	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<PlayersContainer
						active={activePlayer}
						onChangeName={handlePlayerNameChange}
					/>

					{(winner || hasDraw) && (
						<GameOver winner={winner} onRestart={handleRematch} />
					)}

					<GameBoard onSelectBlock={handlePlayerChange} board={gameBoard} />
				</div>

				<Log logListInfo={gameTurns} />
			</main>
		</>
	);
};

export default App;
