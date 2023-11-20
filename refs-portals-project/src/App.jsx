import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallange.jsx";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="Easy" timeTarget={1}></TimerChallenge>
				<TimerChallenge title="Not Easy" timeTarget={5}></TimerChallenge>
				<TimerChallenge title="Getting tough" timeTarget={10}></TimerChallenge>
				<TimerChallenge title="Godlike" timeTarget={15}></TimerChallenge>
			</div>
		</>
	);
}

export default App;
