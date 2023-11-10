import Header from "./components/Header/Header";
import Concepts from "./components/Concepts/Concepts";
import Examples from "./components/Examples/Examples";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Concepts />
				<Examples />
			</main>
		</>
	);
};

export default App;
