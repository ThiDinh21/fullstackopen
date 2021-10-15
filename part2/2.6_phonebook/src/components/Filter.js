import React from "react";

const Filter = ({ searchTerm, onChange }) => {
	return (
		<div>
			Filter: <input value={searchTerm} onChange={onChange} />
		</div>
	);
};

export default Filter;
