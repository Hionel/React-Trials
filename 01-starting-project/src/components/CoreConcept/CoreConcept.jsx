const CoreConcept = (props) => {
	return (
		<li>
			<img src={props.image} alt="alt text" />
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</li>
	);
};

export default CoreConcept;
