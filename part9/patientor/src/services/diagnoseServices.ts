import diagnoseData from "../../data/diagnoses.json";
import { Diagnose } from "../models/diagnose";

const diagnoses: Diagnose[] = diagnoseData;

const getEntry = (): Diagnose[] => {
	return diagnoses;
};

// const getOne = (id: string): Diagnose | unknown => {
// 	return diagnoses.find((p) => p.id === id);
// };

const addEntry = (newEntry: Diagnose) => {
	return newEntry;
};

export default {
	getEntry,
	addEntry,
};
