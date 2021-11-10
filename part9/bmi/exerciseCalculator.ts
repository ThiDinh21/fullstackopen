interface Result {
	periodLength: number;
	trainingDays: number;
	target: number;
	avgTime: number;
	success: boolean;
	rating: 1 | 2 | 3;
	ratingDescription: "Bad" | "Ok" | "Good";
}

interface Input2 {
	data: number[];
}

const calculateExercises = (trainingData: number[]): Result => {
	const days = trainingData.length;
	const trainingDays = trainingData.filter((hour) => hour > 0).length;
	const target = 2;
	const avg = trainingData.reduce((prev, curr) => prev + curr) / days;
	let success: boolean = false;
	let rating: 1 | 2 | 3;
	let ratingDescription: "Bad" | "Ok" | "Good";
	if (avg >= target) {
		rating = 3;
		ratingDescription = "Good";
		success = true;
	} else if (avg >= target / 2) {
		rating = 2;
		ratingDescription = "Ok";
	} else {
		rating = 1;
		ratingDescription = "Bad";
	}

	const res: Result = {
		periodLength: days,
		trainingDays: trainingDays,
		target: target,
		avgTime: avg,
		success: success,
		rating: rating,
		ratingDescription: ratingDescription,
	};

	return res;
};

const parseArguments2 = (args: string[]): Input2 => {
	if (args.length < 3) throw new Error("Not enough arguments");

	let input: number[] = [];

	for (let i = 2; i < args.length; i++) {
		if (isNaN(Number(args[i])))
			throw new Error("Provided values were not numbers!");
		input.push(Number(args[i]));
	}

	return {
		data: input,
	};
};

try {
	const input = parseArguments2(process.argv);
	console.log(calculateExercises(input.data));
} catch (error: unknown) {
	let errorMessage = "Something bad happened.";
	if (error instanceof Error) {
		errorMessage += " Error: " + error.message;
	}
	console.log(errorMessage);
}
