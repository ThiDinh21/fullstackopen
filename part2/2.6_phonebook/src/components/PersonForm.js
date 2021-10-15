import React from "react";

const FormInput = ({ text, value, onChange }) => {
	return (
		<div>
			{text}:
			<input value={value} onChange={onChange} />
		</div>
	);
};

const PersonForm = ({
	onSubmit,
	name,
	number,
	onChangeName,
	onChangeNumber,
}) => {
	return (
		<form onSubmit={onSubmit}>
			<div>
				<FormInput text="name" value={name} onChange={onChangeName} />
				<FormInput
					text="number"
					value={number}
					onChange={onChangeNumber}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
