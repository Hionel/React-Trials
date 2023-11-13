const Log = (props) => {
	const { logListInfo } = props;
	return (
		<ol id="log">
			{logListInfo.map((data) => {
				return (
					<li key={`${data.square.row}${data.square.col}`}>
						{data.player} placed on square {data.square.row},{data.square.col}
					</li>
				);
			})}
		</ol>
	);
};
export default Log;
