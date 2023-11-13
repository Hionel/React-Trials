const GameBoard = ({ onSelectBlock, board }) => {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectBlock(rowIndex, colIndex)}
									disabled={playSymbol !== null}
								>
									{playSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard;
