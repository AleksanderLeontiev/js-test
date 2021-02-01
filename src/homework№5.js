export function newArray() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const result = arr.reduce((sum, current) => sum + current, 0);
	return result;
}
newArray();

export function arrayTwiceAsMuch() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const newResult = arr.map((el) => el * 2);
	return newResult;
}

arrayTwiceAsMuch();

export function minMaxElement() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const l = Math.max.apply(null, arr);
	const e = Math.min.apply(null, arr);
	console.log(l);
	console.log(e);
}
minMaxElement();
