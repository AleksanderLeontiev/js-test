// .В переменных a и b хранятся числа. Вывести в
// консоль наибольшее из них.
export function maxNumber(a, b) {
	const result = a > b ? a : b;
	return console.log(result);
}

// 2.Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.)

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
// *В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат
export function areaFigures(a, b) {
	const circle = Math.floor(Math.PI * a * a);
	const square = Math.floor(a * b);
	const result = square > circle ? "да" : "нет";
	return console.log(result);
}
// console.log(checkCurrentData("100"));
// export function consolePromptSum() {
//     const a = Number (prompt("a="));
//     const b = Number (prompt("b="));
//     console.log(`${a}+${b} =${a+b}`)
// }
