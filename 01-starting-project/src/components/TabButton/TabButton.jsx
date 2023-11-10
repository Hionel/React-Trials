import "./TabButton.module.css";

const TabButton = (props) => {
	const { children, onClickEvent, isSelected } = props;
	return (
		<li>
			<button
				className={isSelected ? "active" : undefined}
				onClick={onClickEvent}
			>
				{children}
			</button>
		</li>
	);
};

export default TabButton;
