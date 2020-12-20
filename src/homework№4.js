const user = {
	name: "John",
};

export function agePrompt() {
	const age = prompt("Enter your age :");
	console.log(`${age}`);
}

export function roleName() {
	const inputFirstName = prompt("Enter your name :");
	user.role = inputFirstName;
	console.log(`${user.role}`);
}

export function createNewUser() {
	const admin = { ...user, role: "admin", age: 124 };
	// user.name = "ALex";
	// console.log(user, admin);
	const { role, age, years = null } = admin;
	console.log(role, age, years);
}
