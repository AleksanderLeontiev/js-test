// 1.Даны длины трёх сторон треугольника. Определить,
//     является ли треугольник прямоугольным.
export function lengthThreeSides( a, b, c) {
    if (Math.sqrt(c) === (Math.sqrt(b) + Math.sqrt(a))){
        console.log("прямоугольный")
    }else {
        console.log("не прямоугольный")
    }
}
lengthThreeSides(2,2,8);
// 2.Пользователь вводит число R. Написать программу,
//     которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
export function resultRadius (radius){
    let circle = {
        square : function (){
            return Math.floor(Math.PI * Math.pow(radius, 2))
        },
        length : function (){
            return Math.floor(Math.PI * 2 * radius);
        }
    };
    return [circle.square(),circle.length()];
}

console.log (resultRadius(2));
// *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
export let quadraticEquation = (a, b, c) => {
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
};
console.log(quadraticEquation(1,1,1));
