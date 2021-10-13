import React from "react";

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = (p) => {
	return (
		<div>
			<Part part={p.parts[0].name} exercises={p.parts[0].exercises} />
			<Part part={p.parts[1].name} exercises={p.parts[1].exercises} />
			<Part part={p.parts[2].name} exercises={p.parts[2].exercises} />
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};
	let total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total total={total} />
		</div>
	);
};

export default App;
