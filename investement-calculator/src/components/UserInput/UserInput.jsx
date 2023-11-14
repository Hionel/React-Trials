const UserInput = ({ inputName, labelName, value, onInputChange }) => {
	return (
		<div className="input-group">
			<p>
				<label>{labelName}</label>
				<input
					type="number"
					name={inputName}
					value={value}
					onChange={(e) => onInputChange(inputName, Number(e.target.value))}
					required
				/>
			</p>
		</div>
	);
};

export default UserInput;
