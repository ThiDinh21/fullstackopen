const _ = require("lodash");

// eslint-disable-next-line no-unused-vars
const dummy = (_blogs) => 1;

const totalLikes = (blogs) => {
	const reducer = (sum, blog) => sum + blog.likes;
	return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
	if (blogs.length === 0) return null;
	const reducer = (fav, blog) => (fav.likes >= blog.likes ? fav : blog);
	return blogs.reduce(reducer, blogs[0]);
};

const mostBlogs = (blogs) => {
	if (blogs.length === 0) return null;

	const authors = _.countBy(blogs, "author");
	const authorList = Object.entries(authors);
	const reducer = (prev, curr) => (prev[1] >= curr[1] ? prev : curr);
	const mostBlogsInfo = authorList.reduce(reducer);

	return {
		author: mostBlogsInfo[0],
		blogs: mostBlogsInfo[1],
	};
};

const mostLikes = (blogs) => {
	if (blogs.length === 0) return null;
	const likeMap = new Map();

	blogs.forEach((blog) => {
		const author = blog.author;
		if (!likeMap.has(author)) likeMap.set(author, 0);
		const currentLikes = likeMap.get(author);
		likeMap.set(author, currentLikes + blog.likes);
	});

	const maxLikes = Math.max(...likeMap.values());

	for (let [key, value] of likeMap.entries()) {
		if (value === maxLikes)
			return {
				author: key,
				likes: value,
			};
	}
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
