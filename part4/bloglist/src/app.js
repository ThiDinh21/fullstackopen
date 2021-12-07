const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const middleware = require("./utils/middlewares");
const logger = require("./utils/loggers");
const { MONGODB_URI } = require("./utils/config");
const blogsRouter = require("./controllers/blogs");

logger.info("Connecting to MongoDB");
mongoose
	.connect(MONGODB_URI)
	.then(() => logger.info("Connected to MongoDB"))
	.catch((error) =>
		logger.error("Error connecting to MongoDB:", error.message)
	);

const app = express();
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
