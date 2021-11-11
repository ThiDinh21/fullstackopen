interface BmiResult {
	height: number;
	weight: number;
	bmi: string;
}

export const calculateBmi = (h: number, w: number): BmiResult => {
	const bmi = w / ((h * h) / 10000);
	let rating = "Obese (Class III)";

	if (bmi < 16) rating = "Underweight (Severe thinness)";
	if (bmi >= 16 && bmi < 17) rating = "Underweight (Moderate thinness)";
	if (bmi >= 17 && bmi < 18.5) rating = "Underweight (Mild thinness)";
	if (bmi >= 18.5 && bmi < 25) rating = "Normal range";
	if (bmi >= 25 && bmi < 30) rating = "Overweight (Pre-obese)";
	if (bmi >= 30 && bmi < 35) rating = "Obese (Class I)";
	if (bmi >= 35 && bmi < 40) rating = "Obese (Class II)";
	return {
		height: h,
		weight: w,
		bmi: rating,
	};
};

export const validateInput = (h: number, w: number): boolean => {
	return !isNaN(h) && !isNaN(w);
};
