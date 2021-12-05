interface CoursePartBase {
	name: string;
	exerciseCount: number;
	type: string;
}

interface CoursePartBaseWithDescription extends CoursePartBase {
	description: string;
}

export interface CourseNormalPart extends CoursePartBaseWithDescription {
	type: "normal";
}

export interface CourseProjectPart extends CoursePartBase {
	type: "groupProject";
	groupProjectCount: number;
}

export interface CourseSubmissionPart extends CoursePartBaseWithDescription {
	type: "submission";
	exerciseSubmissionLink: string;
}

export interface CourseSpecialPart extends CoursePartBaseWithDescription {
	type: "special";
	requirements: string[];
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart;

export default CoursePart;
