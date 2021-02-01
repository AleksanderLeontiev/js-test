export function sumNumber(a, b) {
	console.log(a + b);
}
export function multiNumber(a, b) {
	console.log(a * b);
}

export function showLengthString(str, str2) {
	console.log(str.length + str2.length);
}

export function checkCurrentData(myString) {
	if (myString.length === 3) {
		console.log(myString.length);
	} else {
		console.log("enter a three-digit number");
	}
}
