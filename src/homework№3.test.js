import { counterNumber, counterMilt, arithmeticMean } from "./homework№3";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test 3st task", () => {
	it("show numbers from 50 to 100", () => {
		counterNumber(60);
		expect(spyConsoleLog).toBeTruthy();
		expect(spyConsoleLog).not.toBeUndefined();
	});
	it("multiplication table of 7", () => {
		counterMilt();
		expect(spyConsoleLog).toBeTruthy();
		expect(spyConsoleLog).not.toBeUndefined();
		expect(spyConsoleLog).not.toBeNull();
	});
	it("show arithmetic mean", () => {
		const number = ["10"];
		const prompt = jest
			.spyOn(window, "prompt")
			.mockImplementation(() => number);
		arithmeticMean(prompt);
		expect(spyConsoleLog).toBeTruthy();
		expect(spyConsoleLog).not.toBeUndefined();
		expect(spyConsoleLog).not.toBeNull();
	});
});
