// 1.Вывести в консоль сумму всех целых чисел от 50 до
// 100.
export function counterNumber() {
    for (let i = 50; i < 101; i = i+10 ){
        console.log(i)
    }
}
// // 2.Вывести в консоль таблицу умножения на 7.
// // 7 x 1 = 7
// // 7 x 2 = 14
// // …
// // 7 x 9 = 63
export function counterMilt() {
    for (let i = 1; i < 10; i ++){
        let s = 7;
        console.log(i * s)
    }
}

// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.

//const input = prompt('Введите число');

 export function arithmeticMean(n){
  let f = (n % 2 !== 0) ? (n + n)/n : "это четное число";
  return f
}
console.log(arithmeticMean(7));