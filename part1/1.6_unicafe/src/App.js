import React, { useState } from "react";

const Button = ({ text, handler }) => (
	<button onClick={handler}>{text}</button>
);

const StatisticLine = ({ text, num, afterText }) => (
	<tr>
		<td>{text}</td>
		<td>
			{num}
			{afterText}
		</td>
	</tr>
);

const Statistics = ({ nums }) => {
	const { good, neutral, bad } = nums;

	if (good === 0 && neutral === 0 && bad === 0)
		return <p>No feedback given</p>;

	const getAvgRating = () => {
		return (good - bad) / (good + bad + neutral);
	};

	const getPositiveRating = () => {
		return (good / (good + bad + neutral)) * 100;
	};

	return (
		<table>
			<tbody>
				<StatisticLine text="good" num={good} />
				<StatisticLine text="neutral" num={neutral} />
				<StatisticLine text="bad" num={bad} />
				<StatisticLine text="average" num={getAvgRating()} />
				<StatisticLine
					text="positive"
					num={getPositiveRating()}
					afterText="%"
				/>
			</tbody>
		</table>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" handler={() => setGood(good + 1)} />
			<Button
				text="neutral"
				handler={() => setNeutral(neutral + 1)}
			/>
			<Button text="bad" handler={() => setBad(bad + 1)} />
			<h1>statistics</h1>
			<Statistics nums={{ good: good, neutral: neutral, bad: bad }} />
		</div>
	);
};

export default App;
