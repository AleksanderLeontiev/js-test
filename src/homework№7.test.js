import { addForm } from "./homework7";

describe("addForm", () => {
	const elementMock = { addEventListener: jest.fn() };
	jest.spyOn(document, "getElementById").mockImplementation(() => elementMock);
	const elementDist = { dispatchEvent: jest.fn() };
	jest.spyOn(document, "getElementById").mockImplementation(() => elementDist);
	let el;
	beforeEach(() => {
		el = document.createElement("div");
	});
	it(" shows button if value is not empty", () => {
		addForm();
		const input = document.getElementById("input");
		input.value = "text";
		input.dispatchEvent(new window.Event("keyup"));
		const button = document.getElementById("button");
		expect(input).toBe(button);
		input.value = "";
		input.dispatchEvent(new window.Event("keyup"));
		expect(el.querySelector("button")).toBe(null);
	});

	it(" adds new p on click button", () => {
		addForm();
		const input = document.getElementById("input");
		const text = `${Math.random()  }`;
		input.value = text;
		input.dispatchEvent(new window.Event("keyup"));
		const button = document.getElementById("button");
		button.dispatchEvent(new window.Event("click"));
		expect(input.value).toBe(text);
		expect(document.createElement("p").innerHTML).toHaveLength(0);
	});

	it(" new p on click button 5", () => {
		addForm();
		for (let i = 0; i < 5; i++) {
			const input = document.getElementById("input");
			const text = `${Math.random()  }`;
			input.value = text;
			input.dispatchEvent(new window.Event("keyup"));
			const button = document.getElementById("button");
			button.dispatchEvent(new window.Event("click"));
			if (i > 1) {
				expect(document.querySelectorAll("p").length).toBe(0);
			}
		}
	});
});
