//Создайте массив целых чисел из 10 элементов.
//1.Выведите в консоль сумму всех элементов массива.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function newArray(arr) {
    let result = arr.reduce((sum, current) => sum + current, 0);
    console.log(result);
}

// 2.Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив).

export function arrayTwiceAsMuch(arr) {

    let newResult = arr.map(function (el) {
        return el * 2;
    });
    return newResult;
}

console.log(arrayTwiceAsMuch(arr));
// 3.*Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.

export function minMaxElement(arr) {
    let l = Math.max.apply(null, arr);
    let e = Math.min.apply(null, arr);
    console.log(l);
    console.log(e);
    return
}

// console.log(minMaxElement(arr));
// function com(arr) {
//     return arr.filter(val => Math.max(arr))
// }
// console.log(com(arr));