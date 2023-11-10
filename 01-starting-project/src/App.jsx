import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

const App = () => {
	const [selectedTopic, setSelectedTopic] = useState();
	const handleClickEvent = (selectedTab) => {
		setSelectedTopic(selectedTab);
	};
	let tabContent = <p>Please select a topic.</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}
	return (
		<div>
			<Header />

			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept key={conceptItem.title} {...conceptItem} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === "components"}
							onClickEvent={() => handleClickEvent("components")}
						>
							Component
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onClickEvent={() => handleClickEvent("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onClickEvent={() => handleClickEvent("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onClickEvent={() => handleClickEvent("state")}
						>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
};

export default App;
