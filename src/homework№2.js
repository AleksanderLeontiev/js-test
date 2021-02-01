export function maxNumber(a, b) {
	const result = a > b ? a : b;
	return console.log(result);
}

export function numberMonth() {
	const months = [
		"январь",
		"февраль",
		"март",
		"апрель",
		"май",
		"июнь",
		"июль",
		"август",
		"сентябрь",
		"октябрь",
		"ноябрь",
		"декабрь",
	];
	const input = prompt("Enter number from 1 to 12 :") - 1;
	const newMonths = input;
	if (newMonths >= 0 && newMonths <= 12) {
		return `Время года: ${months[Math.floor(newMonths)]}`;
	}
	console.log("неправильный месяц");

	return console.log(`${newMonths}`);
}

export function areaFigures(a, b) {
	const circle = Math.floor(Math.PI * a * a);
	const square = Math.floor(a * b);
	const result = square > circle ? "да" : "нет";
	return console.log(result);
}
