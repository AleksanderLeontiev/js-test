export function diff(a, b) {
	if (a > b) {
		return a - b;
	}
	return b - a;
}
console.log(diff(100, 20));

export function isWord(s) {
	return !(s.indexOf(" ") >= 0);
}
isWord("jfjfds fasd");

export function pow(a, x) {
	return a ** x;
}
pow();
