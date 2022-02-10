const Blog = require("../src/models/blog");
const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");
const helper = require("./test_helpers");

const api = supertest(app);

beforeEach(async () => {
	await Blog.deleteMany({});

	let blogObjects = helper.initialBlogs.map((blog) => new Blog(blog));
	const promiseArray = blogObjects.map((blog) => blog.save());

	await Promise.all(promiseArray);
});

test("stuff", async () => {
	await api
		.get("/api/blogs")
		.expect(200)
		.expect("Content-Type", /application\/json/);
});

test("blogs have an existing id instead of _id", async () => {
	const response = await api.get("/api/blogs");
	const firstBlog = response.body[0];
	expect(firstBlog.id).toBeDefined();
});

test("new blog added successfully", async () => {
	const newBlog = {
		title: "random stuffs",
		author: "random stuffs",
		url: "random stuffs",
		likes: 71,
	};

	await api.post("/api/blogs").send(newBlog).expect(201);

	const newBlogsCount = await helper.getBlogs();
	expect(newBlogsCount).toHaveLength(helper.initialBlogs.length + 1);
});

test("likes default to 0 if null", async () => {
	const zeroLikeBlog = {
		title: "test0",
		author: "test0",
		url: "test0",
	};

	await api.post("/api/blogs").send(zeroLikeBlog).expect(201);

	const newBlogs = await helper.getBlogs();
	expect(newBlogs[newBlogs.length - 1].likes).toEqual(0);
});

test("if no title/url then bad request", async () => {
	const noTitleBlog = {
		author: "testNoTitle",
		url: "testNoTitle",
		likes: 1,
	};
	const noUrlBlog = {
		title: "testNoUrl",
		author: "testNoUrl",
		likes: 1,
	};
	await api.post("/api/blogs").send(noTitleBlog).expect(400);
	await api.post("/api/blogs").send(noUrlBlog).expect(400);
});

afterAll(async () => {
	await mongoose.connection.close();
});
