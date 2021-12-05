import React from "react";
import {
	CourseNormalPart,
	CourseProjectPart,
	CourseSpecialPart,
	CourseSubmissionPart,
} from "../types/CoursePart";

const NormalPart = ({ part }: { part: CourseNormalPart }) => {
	return (
		<div>
			<p>
				{part.name} {part.exerciseCount} {part.description}
			</p>
		</div>
	);
};

const ProjectPart = ({ part }: { part: CourseProjectPart }) => {
	return (
		<div>
			<p>
				{part.name} {part.exerciseCount} {part.groupProjectCount}
			</p>
		</div>
	);
};

const SubmissionPart = ({ part }: { part: CourseSubmissionPart }) => {
	return (
		<div>
			<p>
				{part.name} {part.exerciseCount} {part.description}{" "}
				{part.exerciseSubmissionLink}
			</p>
		</div>
	);
};

const SpecialPart = ({ part }: { part: CourseSpecialPart }) => {
	return (
		<div>
			<p>
				{part.name} {part.exerciseCount} {part.description}{" "}
				{part.requirements}
			</p>
		</div>
	);
};

export { NormalPart, ProjectPart, SubmissionPart, SpecialPart };
