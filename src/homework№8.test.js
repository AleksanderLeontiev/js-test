import { getMinutesToday, young, getWeekDay } from "./homework№8";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test 8st task ", () => {
	let originalDate;
	beforeEach(() => {
		const OriginalDate = window.Date;
		window.Date = function hg() {
			const date = new OriginalDate();
			date.setFullYear(2000);
			date.setMonth(11);
			date.setDate(5);
			return date;
		};
	});

	test("number of minutes from the beginning of the day", () => {
		const d = new Date();
		const f = d.getHours() * 60 + d.getMinutes();
		expect(getMinutesToday()).toEqual(f);
	});
	test("shows the day of the week", () => {
		const number = originalDate;
		const prompt = jest
			.spyOn(window, "prompt")
			.mockImplementation(() => number);
		expect(getWeekDay(prompt)).toBeTruthy();
	});
	test("shows the youngest", () => {
		young();
		expect(spyConsoleLog).toBeTruthy();
	});
});
