const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", async (_req, resp) => {
	let blogs = await Blog.find({});
	resp.json(blogs);
});

blogRouter.post("/", async (req, resp) => {
	const blog = new Blog(req.body);

	if (blog.url === undefined || blog.title === undefined) {
		resp.status(400).send("Bad Request");
	} else {
		if (blog.likes === undefined) {
			blog.likes = 0;
		}

		let result = await blog.save();
		resp.status(201).json(result);
	}
});

module.exports = blogRouter;
