import React from "react";

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<Part
					key={part.id}
					part={part.name}
					exercises={part.exercises}
				/>
			))}
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

const Course = ({ course }) => {
	const reducer = (prev, curr) => prev + curr.exercises;
	const total = course.parts.reduce(reducer, 0);

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total total={total} />
		</div>
	);
};

export default Course;
