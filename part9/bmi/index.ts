import express from "express";
import { validateInput, calculateBmi } from "./bmiCalculator";

const app = express();
const PORT = 3002;

app.get("/ping", (_req, resp) => {
	resp.send("pong");
});

app.get("/bmi", (req, resp) => {
	const h = Number(req.query.height);
	const w = Number(req.query.weight);

	if (validateInput(h, w)) {
		resp.json(calculateBmi(h, w));
	} else {
		resp.statusCode = 404;
		resp.json({
			error: "malformatted parameters",
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`);
});
