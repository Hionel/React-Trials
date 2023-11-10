import "./TabButton.module.css";

const TabButton = (props) => {
	const { children, isSelected, ...attributes } = props;
	return (
		<li>
			<button className={isSelected ? "active" : undefined} {...attributes}>
				{children}
			</button>
		</li>
	);
};

export default TabButton;
