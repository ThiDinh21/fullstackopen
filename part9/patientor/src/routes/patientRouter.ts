import express from "express";
import { PatientNewEntry } from "../models/patient";
import services from "../services/patientServices";
import { toPatientNewEntry } from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
	res.json(services.getEntry());
});

router.get("/:id", (req, res) => {
	const patient = services.getOne(req.params.id);

	if (patient) {
		res.json(patient);
	} else {
		res.sendStatus(404);
	}
});

router.post("/", (req, res) => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const newEntry: PatientNewEntry = toPatientNewEntry(req.body);
		res.json(services.addEntry(newEntry));
	} catch (error: unknown) {
		let errorMessage = "Something went wrong.";
		if (error instanceof Error) {
			errorMessage += " Error: " + error.message;
		}
		res.status(400).send(errorMessage);
	}
});

export default router;
