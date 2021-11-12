import express, { json } from "express";
import { validateInput, calculateBmi } from "./bmiCalculator";
import { calculateExercises, ExerciseInput } from "./exerciseCalculator";

const app = express();
const PORT = 3002;

app.use(json());

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

app.post("/exercises", (req, resp) => {
	const input = req.body as ExerciseInput;

	if (
		!isNaN(input.target) &&
		input.daily_exercises.every((x) => !isNaN(x)) &&
		input.daily_exercises.length > 1
	) {
		resp.json(calculateExercises(input));
	} else {
		resp.statusCode = 400;
		resp.json({
			error: "malformatted parameters",
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`);
});
