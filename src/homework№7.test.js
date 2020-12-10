import { addForm } from "./homework№7";

describe("addForm", () => {
	let el;
	beforeEach(() => {
		el = document.createElement("div");
	});
	it("creates basic markup", () => {
		addForm(el);
		expect(el.querySelector("input")).not.toBe(null);
		expect(el.querySelectorAll("p").length).toBe(3);
	});

	it(" shows button if value is not empty", () => {
		addForm(el);

		const input = el.querySelector("input");
		input.value = "text";
		input.dispatchEvent(new window.Event("keyup"));
		// expect(el.querySelector("button").not.toBe(null));
		expect(el.querySelector("button").innerHTML).toEqual("add");

		input.value = "";
		input.dispatchEvent(new window.Event("keyup"));
		expect(el.querySelector("button")).toBe(null);
	});

	it(" adds new p on click button", () => {
		addForm(el);
		const input = el.querySelector("input");
		const text = `${Math.random()}`;
		input.value = text;
		input.dispatchEvent(new window.Event("keyup"));
		const button = el.querySelector("button");

		button.dispatchEvent(new window.Event("click"));
		expect(input.value).toBe("");
		expect(el.querySelectorAll("p").length).toBe(4);
		expect(el.querySelectorAll("p")[3].innerHTML).toBe(text);
	});

	it(" new p on click button 5", () => {
		addForm(el);
		const input = el.querySelector("input");

		for (let i = 0; i < 5; i++) {
			const text = `${Math.random()}`;
			input.value = text;
			input.dispatchEvent(new window.Event("keyup"));
			const button = el.querySelector("button");
			button.dispatchEvent(new window.Event("click"));
			if (i > 1) {
				expect(el.querySelectorAll("p").length).toBe(4);
				expect(el.querySelectorAll("p")[3].innerHTML).toBe(text);
			}
		}
	});
});
