// Создайте массив целых чисел из 10 элементов.
// 1.Выведите в консоль сумму всех элементов массива.

export function newArray() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const result = arr.reduce((sum, current) => sum + current, 0);
	return result;
}
newArray();
// 2.Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив).

export function arrayTwiceAsMuch() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const newResult = arr.map((el) => el * 2);
	return newResult;
}

arrayTwiceAsMuch();
// 3.*Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.

export function minMaxElement() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const l = Math.max.apply(null, arr);
	const e = Math.min.apply(null, arr);
	console.log(l);
	console.log(e);
}
minMaxElement();
// console.log(minMaxElement(arr));
// function com(arr) {
//     return arr.filter(val => Math.max(arr))
// }
// console.log(com(arr));
