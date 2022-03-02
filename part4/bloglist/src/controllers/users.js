const usersRouter = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

usersRouter.get("/", async (_req, resp) => {
	const users = await User.find({}).populate("blogs");
	resp.json(users);
});

usersRouter.post("/", async (req, resp, next) => {
	const body = req.body;

	if (body.username && body.password) {
		if (body.username.length < 4 || body.password.length < 4) {
			return resp
				.status(400)
				.send("Username or password must be at least 3 characters");
		}
	} else {
		return resp.send("Both username and password are required");
	}

	const passwordHash = await bcrypt.hash(body.password, 10);
	const newUser = new User({
		username: body.username,
		name: body.name,
		passwordHash,
	});

	newUser
		.save()
		.then((savedUser) => resp.json(savedUser))
		.catch((err) => next(err));
});

module.exports = usersRouter;
