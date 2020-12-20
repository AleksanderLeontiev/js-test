export function counterNumber() {
	for (let i = 50; i < 101; i += 10) {
		console.log(i);
	}
}
counterNumber();
export function counterMilt(a) {
	for (let i = 1; i < 10; i++) {
		const s = a;
		console.log(i * s);
	}
}
counterMilt(7);
// const inputPrompt = prompt('Enter the number :');
export function arithmeticMean(inputPrompt) {
	const func =
		inputPrompt % 2 !== 1
			? (inputPrompt + inputPrompt) / inputPrompt
			: "это четное число";
	return func;
}
console.log(arithmeticMean(1));
