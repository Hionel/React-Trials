const Section = ({ title, children, ...attributes }) => {
	return (
		<section {...attributes}>
			<h2>{title}</h2>
			{children}
		</section>
	);
};

export default Section;
