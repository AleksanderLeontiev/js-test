// 1.В переменных a и b хранятся числа.
// Написать программу, которая выводит в консоль произведение
// и сумму этих чисел.

export function sumNumber(a, b) {
	console.log(a + b);
}
export function multiNumber(a, b) {
	console.log(a * b);
}

// 2.В двух переменных хранятся строки символов.
//  Написать программу, которая выведет в консоль
// суммарное количество символов в обоих строках.
//
export function showLengthString(str, str2) {
	console.log(str.length + str2.length);
}
// 3.*Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа

export function checkCurrentData(myString) {
	if (myString.length === 3) {
		console.log(myString.length);
	} else {
		console.log("enter a three-digit number");
	}
}
