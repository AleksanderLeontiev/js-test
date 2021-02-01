import { maxNumber, numberMonth, areaFigures } from "./homework№2";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test 2st task", () => {
	it("show the largest of the numbers", () => {
		maxNumber(2, 1);
		expect(spyConsoleLog).toBeTruthy();
		expect(spyConsoleLog).not.toBeFalsy();
	});
	it("day corresponding to the month", () => {
		const number = ["11"];
		const prompt = jest
			.spyOn(window, "prompt")
			.mockImplementation(() => number);
		numberMonth(number);
		expect("ноябрь").toMatch(/ноябрь/);
		expect("ноябрь").not.toBeUndefined();
	});

	it("does a circle fit into a square", () => {
		areaFigures(1, 4);
		expect(spyConsoleLog).toBeTruthy();
		expect(spyConsoleLog).not.toBeFalsy();
	});
});
