const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", async (_request, response) => {
	let blogs = await Blog.find({});
	response.json(blogs);
});

blogRouter.post("/", async (request, response) => {
	const blog = new Blog(request.body);

	if (blog.url === undefined || blog.title === undefined) {
		response.status(400).send("Bad Request");
	} else {
		if (blog.likes === undefined) {
			blog.likes = 0;
		}

		let result = await blog.save();
		response.status(201).json(result);
	}
});

module.exports = blogRouter;
