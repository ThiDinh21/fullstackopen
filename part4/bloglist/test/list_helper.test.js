const listHelper = require("../src/utils/list_helper");

test("dummy returns one", () => {
	const blogs = [];

	const result = listHelper.dummy(blogs);
	expect(result).toBe(1);
});

describe("total likes", () => {
	const listWithOneBlog = [
		{
			id: "5a422aa71b54a676234d17f8",
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
			likes: 5,
		},
	];

	test("when list has only one blog, equals the likes of that", () => {
		const result = listHelper.totalLikes(listWithOneBlog);
		expect(result).toBe(5);
	});
});

describe("most blogs", () => {
	const blogs = [
		{
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: -50,
		},
		{
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 5,
		},
		{
			title: "Go To Statement Considered Harmful",
			author: "Thi Pro VN",
			likes: 50,
		},
		{
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 5,
		},
	];

	test("4 ele", () => {
		const result = listHelper.mostBlogs(blogs);
		expect(result).toEqual({
			author: "Edsger W. Dijkstra",
			blogs: 3,
		});
	});
});

describe("most likes", () => {
	const blogs = [
		{
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 80,
		},
		{
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 5,
		},
		{
			title: "Go To Statement Considered Harmful",
			author: "Thi Pro VN",
			likes: 500,
		},
		{
			title: "Go To Statement Considered Harmful",
			author: "Edsger W. Dijkstra",
			likes: 5,
		},
	];

	test("4 ele", () => {
		const result = listHelper.mostLikes(blogs);
		expect(result).toEqual({
			author: "Thi Pro VN",
			likes: 500,
		});
	});
});
