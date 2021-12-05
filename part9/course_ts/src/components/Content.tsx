import React from "react";
import CoursePart from "../types/CoursePart";
import { NormalPart, ProjectPart, SpecialPart, SubmissionPart } from "./Part";

const Content = ({ part }: { part: CoursePart }) => {
	const assertNever = (x: never): never => {
		throw new Error(
			`Unhandled discriminated union member: ${JSON.stringify(x)}`
		);
	};

	switch (part.type) {
		case "normal":
			return <NormalPart part={part} />;
		case "groupProject":
			return <ProjectPart part={part} />;
		case "submission":
			return <SubmissionPart part={part} />;
		case "special":
			return <SpecialPart part={part} />;
		default:
			return assertNever(part);
	}
};

export default Content;
