import React, { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const getAvgRating = () => {
		if (good === 0 && neutral === 0 && bad === 0) return 0;
		return (good - bad) / (good + bad + neutral);
	};

	const getPositiveRating = () => {
		if (good === 0 && neutral === 0 && bad === 0) return 0;
		return good / (good + bad + neutral);
	};

	return (
		<div>
			<h1>give feedback</h1>
			<RateButton text="good" handler={() => setGood(good + 1)} />
			<RateButton
				text="neutral"
				handler={() => setNeutral(neutral + 1)}
			/>
			<RateButton text="bad" handler={() => setBad(bad + 1)} />
			<h1>statistics</h1>
			<Statistics text="good" num={good} />
			<Statistics text="neutral" num={neutral} />
			<Statistics text="bad" num={bad} />
			<Statistics text="average" num={getAvgRating()} />
			<Statistics
				text="positive"
				num={getPositiveRating()}
				afterText="%"
			/>
		</div>
	);
};

const RateButton = ({ text, handler }) => (
	<button onClick={handler}>{text}</button>
);

const Statistics = ({ text, num, afterText }) => (
	<p>
		{text} {num} {afterText}
	</p>
);

export default App;
