import patientData from "../../data/patients.json";
import { v4 as uuidv4 } from "uuid";
import { Patient, PatientNewEntry, PatientPublic } from "../models/patient";
import { toPatientNewEntry } from "../utils";

const patients: Patient[] = patientData.map((data) => {
	const entry = toPatientNewEntry(data) as Patient;
	entry.id = data.id;
	return entry;
});

const getEntry = (): PatientPublic[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const getOne = (id: string): PatientPublic | unknown => {
	return patients.find((p) => p.id === id);
};

const addEntry = (newEntry: PatientNewEntry): PatientPublic => {
	const newPatient = {
		id: uuidv4(),
		...newEntry,
	};
	patients.push(newPatient);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { ssn, ...publicInfo } = newPatient;
	return publicInfo;
};

export default {
	getEntry,
	getOne,
	addEntry,
};
