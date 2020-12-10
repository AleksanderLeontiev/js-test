// 1.Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.
export function diff(a, b) {
	if (a > b) {
		return a - b;
	}
	return b - a;
}
console.log(diff(100, 20));
// 2.Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.
export function isWord(s) {
	return !(s.indexOf(" ") >= 0);
}
isWord("jfjfds fasd");

// *Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.

export function pow(a, x) {
	return a ** x;
}
pow();
