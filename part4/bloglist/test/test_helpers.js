const Blog = require("../src/models/blog");

const initialBlogs = [
	{
		title: "Lmao XD",
		author: "God",
		url: "google.com",
		likes: 1000000,
	},
	{
		title: "God is dead",
		author: "Punny",
		url: "twitter.com",
		likes: 69,
	},
];

const getBlogs = async () => {
	const blogs = await Blog.find({});
	return blogs.map((blog) => blog.toJSON());
};

module.exports = { initialBlogs, getBlogs };
