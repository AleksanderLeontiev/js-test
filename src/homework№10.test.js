import { validateEmail, validatePhone, validateDate } from "./homework№10";

describe("test 10st task ", () => {
	it("shows matches by email", () => {
		const email = ["email.ry@dfks"];
		const prompt = jest.spyOn(window, "prompt").mockImplementation(() => email);
		validateEmail(prompt);
		expect(true).toBeTruthy();
	});
	it("shows matches by phone", () => {
		const phone = ["8927861263"];
		const prompt = jest.spyOn(window, "prompt").mockImplementation(() => phone);
		validatePhone(prompt);
		expect(true).toBeTruthy();
	});
	it("shows matches by date", () => {
		const date = ["'07/12/2020"];
		const prompt = jest.spyOn(window, "prompt").mockImplementation(() => date);
		validateDate(prompt);
		expect(true).toBeTruthy();
	});
});
