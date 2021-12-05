import React from "react";

const Total = ({ exCount }: { exCount: number[] }) => {
	return (
		<p>
			Number of exercises{" "}
			{exCount.reduce((carry, part) => carry + part, 0)}
		</p>
	);
};

export default Total;
