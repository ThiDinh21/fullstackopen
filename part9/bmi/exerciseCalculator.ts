export interface ExerciseResult {
	periodLength: number;
	trainingDays: number;
	target: number;
	avgTime: number;
	success: boolean;
	rating: 1 | 2 | 3;
	ratingDescription: "Bad" | "Ok" | "Good";
}

export interface ExerciseInput {
	daily_exercises: number[];
	target: number;
}

export const calculateExercises = (input: ExerciseInput): ExerciseResult => {
	const trainingData = input.daily_exercises;
	const days = trainingData.length;
	const trainingDays = trainingData.filter((hour) => hour > 0).length;
	const target = input.target;
	const avg = trainingData.reduce((prev, curr) => prev + curr) / days;
	let success = false;
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

	const res: ExerciseResult = {
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
