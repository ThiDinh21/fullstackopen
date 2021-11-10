interface Input {
	height: number;
	weight: number;
}

const calculateBmi = (h: number, w: number): string => {
	const bmi = w / ((h * h) / 10000);

	if (bmi < 16) return "Underweight (Severe thinness)";
	if (bmi >= 16 && bmi < 17) return "Underweight (Moderate thinness)";
	if (bmi >= 17 && bmi < 18.5) return "Underweight (Mild thinness)";
	if (bmi >= 18.5 && bmi < 25) return "Normal range";
	if (bmi >= 25 && bmi < 30) return "Overweight (Pre-obese)";
	if (bmi >= 30 && bmi < 35) return "Obese (Class I)";
	if (bmi >= 35 && bmi < 40) return "Obese (Class II)";
	if (bmi >= 40) return "Obese (Class III)";
};

const parseArguments = (args: string[]): Input => {
	if (args.length < 4) throw new Error("Not enough arguments");
	if (args.length > 4) throw new Error("Too many arguments");

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
		return {
			height: Number(args[2]),
			weight: Number(args[3]),
		};
	} else {
		throw new Error("Provided values were not numbers!");
	}
};

try {
	const input = parseArguments(process.argv);
	console.log(calculateBmi(input.weight, input.height));
} catch (error: unknown) {
	let errorMessage = "Something bad happened.";
	if (error instanceof Error) {
		errorMessage += " Error: " + error.message;
	}
	console.log(errorMessage);
}
