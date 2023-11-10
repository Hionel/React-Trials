import { useState } from "react";
import Section from "../Section/Section.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import { EXAMPLES } from "../../data.js";

const Examples = () => {
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
		<Section title="Examples" id="examples">
			<Tabs
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === "components"}
							onClick={() => handleClickEvent("components")}
						>
							Component
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onClick={() => handleClickEvent("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onClick={() => handleClickEvent("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onClick={() => handleClickEvent("state")}
						>
							State
						</TabButton>
					</>
				}
			>
				{tabContent}
			</Tabs>
		</Section>
	);
};

export default Examples;
