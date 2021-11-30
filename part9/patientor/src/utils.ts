import { PatientNewEntry, Gender } from "./models/patient";

type Fields = {
	name: unknown;
	dateOfBirth: unknown;
	ssn: unknown;
	gender: unknown;
	occupation: unknown;
};

export const toPatientNewEntry = ({
	name,
	dateOfBirth,
	ssn,
	gender,
	occupation,
}: Fields): PatientNewEntry => {
	const newEntry: PatientNewEntry = {
		name: parseName(name),
		dateOfBirth: parseDateOfBirth(dateOfBirth),
		ssn: parseSSN(ssn),
		occupation: parseOccupation(occupation),
		gender: parseGender(gender),
	};
	return newEntry;
};

const parseName = (name: unknown): string => {
	if (!name || !isString(name)) {
		throw new Error("Incorrect or missing name");
	}
	return name;
};

const parseSSN = (ssn: unknown): string => {
	if (!ssn || !isString(ssn)) {
		throw new Error("Incorrect or missing ssn");
	}
	return ssn;
};

const parseDateOfBirth = (dob: unknown): string => {
	if (!dob || !isString(dob) || !isDate(dob)) {
		throw new Error("Incorrect or missing date of birth");
	}
	return dob;
};

const parseOccupation = (occupation: unknown): string => {
	if (!occupation || !isString(occupation)) {
		throw new Error("Incorrect or missing occupation");
	}
	return occupation;
};

const parseGender = (gender: unknown): Gender => {
	if (!gender || !isString(gender) || !isGender(gender)) {
		throw new Error("Incorrect or missing gender");
	}
	return gender;
};

const isString = (text: unknown): text is string => {
	return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	return Object.values(Gender).includes(gender);
};
