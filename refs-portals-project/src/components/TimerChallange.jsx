import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, timeTarget }) => {
	const timer = useRef();
	const dialog = useRef();

	const [timeRemaining, setTimeRemaining] = useState(timeTarget * 1000);
	const timerIsActive = timeRemaining > 0 && timeRemaining < timeTarget * 1000;

	const handleStartChallenge = () => {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
		}, 10);
	};

	const handleStopChallenge = () => {
		dialog.current.open();
		clearInterval(timer.current);
	};

	const handleReset = () => {
		setTimeRemaining(timeTarget * 1000);
	};

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={timeTarget}
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>

			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{timeTarget} second{timeTarget > 1 ? "s" : ""}
				</p>
				<p>
					<button
						onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}
					>
						{timerIsActive ? "Stop" : "Start"} Challange
					</button>
				</p>
				<p className={timerIsActive ? "active" : undefined}>
					{timerIsActive ? "Time is running..." : "Timer inactive"}
				</p>
			</section>
		</>
	);
};

export default TimerChallenge;
