import express, { json } from "express";
import patientRouter from "./routes/patientRouter";
import diagnoseRouter from "./routes/diagnoseRouter";

import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(json());

app.get("/api/ping", (_req, resp) => {
	resp.send("pong!");
});

app.use("/api/patients", patientRouter);
app.use("/api/diagnoses", diagnoseRouter);

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
