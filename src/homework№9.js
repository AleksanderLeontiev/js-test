// 1.Даны длины трёх сторон треугольника. Определить,
//     является ли треугольник прямоугольным.
export function lengthThreeSides(a, b, c) {
	if (Math.sqrt(c) === Math.sqrt(b) + Math.sqrt(a)) {
		console.log("прямоугольный");
	} else {
		console.log("не прямоугольный");
	}
}
lengthThreeSides(2, 2, 8);
// 2.Пользователь вводит число R. Написать программу,
//     которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
export function resultRadius(radius) {
	const circle = {
		square() {
			return Math.floor(Math.PI ** 2);
		},
		length() {
			return Math.floor(Math.PI * 2 * radius);
		},
	};
	return [circle.square(), circle.length()];
}

resultRadius(2);
// *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
export const quadraticEquation = (a, b, c) => {
	if (a === 0) return false;
	const res = {};
	const D = b * b - 4 * a * c;
	console.log(`D = ${D}`);
	if (D < 0) return false;
	res.discriminant = D;
	if (D === 0) res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
	else if (D > 0) {
		const tmp = [];
		tmp.push((-b + Math.sqrt(D)) / (2 * a));
		tmp.push((-b - Math.sqrt(D)) / (2 * a));
		res["quadratic roots"] = tmp;
	}
	return res;
};
quadraticEquation(1, 1, 1);
