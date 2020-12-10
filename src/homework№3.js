// 1.Вывести в консоль сумму всех целых чисел от 50 до
// 100.
export function counterNumber() {
	for (let i = 50; i < 101; i += 10) {
		console.log(i);
	}
	
}
counterNumber();
// // 2.Вывести в консоль таблицу умножения на 7.
// // 7 x 1 = 7
// // 7 x 2 = 14
// // …
// // 7 x 9 = 63
export function counterMilt(a) {
	for (let i = 1; i < 10; i++) {
		const s = a;
		console.log(i * s);
	}
	
}
counterMilt(7);
// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.

// const inputPrompt = prompt('Enter the number :');
export function arithmeticMean(inputPrompt) {
	const func =
		inputPrompt % 2 !== 1
			? (inputPrompt + inputPrompt) / inputPrompt
			: "это четное число";
	return func;
}
console.log(arithmeticMean(1));
