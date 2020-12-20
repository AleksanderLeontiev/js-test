export function validateEmail() {
	const promptEmail = prompt("Enter your email");
	const reg = /\S+@\S+\.\S+/;
	return reg.test(`${promptEmail}`);
}

export function validatePhone() {
	const promptPhone = prompt("Enter your phone number");
	const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	return reg.test(`${promptPhone}`);
}

export function validateDate() {
	const promptDate = prompt("Enter the date: DD / MM / YYYY");
	const reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	return reg.test(`${promptDate}`);
}
