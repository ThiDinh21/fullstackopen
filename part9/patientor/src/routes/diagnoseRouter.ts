import express from "express";
import services from "../services/diagnoseServices";
import { Diagnose } from "../models/diagnose";

const router = express.Router();

router.get("/", (_req, res) => {
	res.json(services.getEntry());
});

router.post("/", (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const newEntry: Diagnose = req.body;
	res.send(services.addEntry(newEntry));
});

export default router;
