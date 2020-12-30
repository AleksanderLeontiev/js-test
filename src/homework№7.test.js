import { addForm } from "./homework7";

describe("adds a new paragraph and text", () => {
	document.body.innerHTML = `<div id="app">
			<input class ="input" type="text">
			<button class ="addButton" style="visibility: hidden">Add</button>
			<div class ="listElement"></div>
			</div>`;

	it("paragraph length does not exceed 5", () => {
		addForm();
		const input = document.querySelector("input");
		const button = document.querySelector(".addButton");

		for (let i = 0; i < 6; i++) {
			const text = `${Math.random()}`;
			input.value = text;
			input.dispatchEvent(new window.Event("keyup"));
			button.dispatchEvent(new window.Event("click"));
			if (i === 5) {
				expect(document.querySelectorAll("p").length).toBe(4);
				expect(document.querySelectorAll("p")[3].innerHTML).toBe(text);
				expect(document.querySelector("button").innerHTML).toEqual("Add");
			}
		}
	});
});
