export interface Patient {
	id: string;
	name: string;
	dateOfBirth: string;
	ssn: string;
	gender: Gender;
	occupation: string;
}

export enum Gender {
	Male = "male",
	Female = "female",
	Other = "other",
}

export type PatientPublic = Omit<Patient, "ssn">;

export type PatientNewEntry = Omit<Patient, "id">;
